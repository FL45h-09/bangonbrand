import { Routes, Route } from "react-router-dom";

// Pages for routing
import HomePage from './HomePage';
import NewProducts from './NewProducts';
import GetItfast from './GetItFast';
import PopularCategories from './PopularCategories';
import Products from './Products';

export const DefineRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/new-products/' element={<NewProducts />} />
      <Route path='/get-it-fast/' element={<GetItfast />} />
      <Route path='/popular-categories/' element={<PopularCategories />} />
      <Route path='/products/' element={<Products />} />
    </Routes>
  )
}