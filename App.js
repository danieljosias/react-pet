import './App.scss';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navegacao from './components/Navegacao';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Footer from './components/Footer';
import Acessorios from './components/Acessorios';
import Trabalhe from './components/Trabalhe';
import Privacidade from './components/Privacidade';

function App() {
  return (

    <Router>
      <Navegacao />
      <Carousel />
      
      
    <div>

      <Switch>
        <Route exact path="/"> <Main /> </Route>
        <Route exact path="/acessorios"> <Acessorios /> </Route>
        <Route exact path="/trabalheconosco"> <Trabalhe /> </Route>
        <Route exact path="/privacidade"> <Privacidade /> </Route>
       
      </Switch>

    </div>
      <Footer />
    </Router>

  );
}

export default App;
