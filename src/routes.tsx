import DefaultPage from 'components/DefaultPage';
import Footer from 'components/Footer';
import NavHeader from 'components/NavHeader';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import Prato from 'pages/NotFound/Prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <NavHeader />
        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route index element={<Home />} />
            <Route path='/cardapio' element={<Menu />} />
            <Route path='/sobre' element={<About />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}