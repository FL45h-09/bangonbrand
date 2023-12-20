import { BrowserRouter } from 'react-router-dom';
import { DefineRoutes } from './rountes/DefineRoutes';

// Global Components
import { HeaderSec } from './components/global/HeaderSec';
import { FooterSec } from './components/global/FooterSec';


const App = () => {
  return (
    <BrowserRouter>
      <HeaderSec />
      <DefineRoutes />
      <FooterSec />
    </BrowserRouter>
  )
}

export default App;