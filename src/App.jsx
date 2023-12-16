import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Global Components
import { HeaderSec } from './components/HeaderSec';
import { FooterSec } from './components/FooterSec';

// Components for routing
import HomePage from './rountes/HomePage';
import NewProducts from './rountes/NewProducts';
import GetItfast from './rountes/GetItFast';
import PopularCategories from './rountes/PopularCategories';
import Products from './rountes/Products';

const App = () => {
  return (
    <BrowserRouter>
    <HeaderSec />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/new-products/' element={<NewProducts />} />
      <Route path='/get-it-fast/' element={<GetItfast />} />
      <Route path='/popular-categories/' element={<PopularCategories />} />
      <Route path='/products/' element={<Products />} />
    </Routes>
    <FooterSec />
    </BrowserRouter>
  )
}

export default App;