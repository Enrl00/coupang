import {Routes,Route} from 'react-router-dom'
import { Cart } from './pages/Cart';
import { Category } from './pages/Category/Category';
import { CategoryDetail } from './pages/Category/CategoryDetail';
import { Homepage } from "./pages/Homepage";
import { SignUp,LogIn } from './pages/LogIn';
import { ProductDetail } from './pages/ProductDetail';
import { UserProfile } from './pages/UserProfile';

const App=()=> {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/:category_id' element={<CategoryDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/user' element={<UserProfile/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/products/:prodId' element={<ProductDetail/>}/>
      </Routes>
  );
}

export default App;
