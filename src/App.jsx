
import HeaderComponent from './components/HeaderComponent.jsx';
import InfoComponent from './components/InfoComponent.jsx';
import MenuComponent from './components/MenuComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';

//RouterComponent
import RouterComponent from './RouterComponent.jsx';
import './App.css'

function App() {
  return (
    <div id="app">
      <HeaderComponent />
      <InfoComponent />
      <MenuComponent />
      <RouterComponent />
      <FooterComponent />
      <ContactComponent />
    </div>
  )
}

export default App
