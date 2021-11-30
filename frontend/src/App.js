/* import logo from './logo.svg'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage'
import LaboratorioPage from './pages/LaboratorioPage'
import TrabajosPage from './pages/TrabajosPage'
import ContactoPage from './pages/ContactoPage'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500&display=swap');
</style>



function App() {
  return (
    <Router>
      <Header></Header>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/laboratorio" exact component={LaboratorioPage} />
        <Route path="/trabajos" exact component={TrabajosPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
