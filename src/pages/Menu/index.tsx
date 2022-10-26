import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Order from './Order';
import Items from './Items';
import stylesTheme from 'styles/Theme.module.scss';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState<string>('');

  return(
    <section className={styles.cardapio}>
      <h3 className={stylesTheme.titulo}>Cardápio</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
        <Items search={search} filter={filter} order={order} />
      </div>
    </section>
  );
}