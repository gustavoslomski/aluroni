import { useEffect, useState } from 'react';
import Item from './Item';
import menu from 'data/menu.json';
import styles from './Items.module.scss';
import { Cardapio } from 'types/Prato';

interface Props {
  search: string,
  filter: number | null,
  order: string
}

export default function Items(props: Props) {
  const [list, setList] = useState(menu);
  const { search, filter, order } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if(filter !== null) return filter === id;
    return true;
  }

  function toOrder(newList: Cardapio) {
    switch(order) {
    case 'porcao':
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(toOrder(newList));
  }, [search, filter, order]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}