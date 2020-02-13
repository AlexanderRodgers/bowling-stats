import React from 'react';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Pinbutton from './components/PinButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Layout id="hello">
      <NavBar></NavBar>
      <Pinbutton></Pinbutton>
    </Layout>
  );
}

export default App;
