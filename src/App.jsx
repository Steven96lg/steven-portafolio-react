
import HeaderComponent from './components/HeaderComponent.jsx';
import InfoComponent from './components/InfoComponent.jsx';
import MenuComponent from './components/MenuComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

//RouterComponent
import RouterComponent from './RouterComponent.jsx';
import './App.css'

function App() {
  return (
    <div id="app">
      <div className="gradient-bg"></div>
      <div className="gradient-bg2"></div>
      <div className="gradient-bg3"></div>
      <HeaderComponent />
      <InfoComponent />
      <MenuComponent />
      <RouterComponent />
      <FooterComponent />
    </div>
  )
}

export default App
