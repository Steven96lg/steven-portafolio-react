
import HeaderComponent from './components/HeaderComponent.jsx';
import InfoComponent from './components/InfoComponent.jsx';
import MenuComponent from './components/MenuComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import { ThemeComponent } from './components/ThemeComponent.jsx';
import { ThemeProvider, ThemeContext } from './components/ThemeContext.jsx';


//RouterComponent
import RouterComponent from './RouterComponent.jsx';
import './App.css'
import { useContext } from 'react';

function App() {
  
  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  )
}

function ThemeApp() {
 
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <div id="app">
        <div className="gradient-bg"></div>
        <div className="gradient-bg2"></div>
        <div className="gradient-bg3"></div>
        <ThemeComponent />
        <HeaderComponent />
        <InfoComponent />
        <MenuComponent />
        <RouterComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App
