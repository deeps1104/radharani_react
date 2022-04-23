import OfferSection from './component/OfferSection'
import Header from './component/Header';
import Menus from './component/Menus';
import ProductList1 from './component/ProductList1'
import ProductList2 from './component/ProductList2'
import Description from './component/Description';
import Footer from './component/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <OfferSection/>
        <Header/>
        <Menus/>
        <div className='bannerbg'></div>
        <ProductList1/>
        <ProductList2/>
        <ProductList2/>
        <ProductList1/>
        <Description/>
        <Footer/>
    </div>
  );
}

export default App;
