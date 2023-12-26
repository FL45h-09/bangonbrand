import { Routes, Route } from "react-router-dom";

// Pages for routing
import HomePage from './HomePage';
import NewProducts from './NewProducts';
import GetItfast from './GetItFast';
import AllCategories from './AllCategories';
import Products from './Products';
import { ProductSinglePage } from "./ProductSinglePage";
import { CatListing } from "./CatListing";
import { NotFound } from "./NotFound";

export const DefineRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/new-products/' element={<NewProducts />} />
      <Route path='/get-it-fast/' element={<GetItfast />} />
      <Route path='/categories/' element={<AllCategories />} />
      <Route path='/products/' element={<Products />} />
      <Route path="/products/:productId/" element={ <ProductSinglePage /> } />
      <Route path="/categories/:catId/" element={ <CatListing /> } />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}