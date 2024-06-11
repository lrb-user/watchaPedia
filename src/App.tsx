import './App.css'
import { BrowserView, MobileView} from 'react-device-detect';
import BrowserRouter from './BrowserRouter';
import MobileRouter from './MobileRouter';

function App() {

  return (
    <>
      <BrowserView>
        <BrowserRouter />
      </BrowserView>
      <MobileView>
        <MobileRouter />
      </MobileView>
    </>
  )
}

export default App

