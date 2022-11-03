//import logo from './logo.svg';
//import './App.css';
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import Test from './Test';
//Synt: import "component" from "location"

function App() {
  //We can add more code on this section (outside of the return statement)

  //assigning a function to a variable
  
  
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Test/>
      <Footer/>
    </div>
  );
}

export default App; //We could use this component created by react 


/*
  We could say that jsx provides a template
  for the component layout, it renders data as text when it displays it.

  It does not render expressions 

  This is the parent component of all the other components

  Components need to be written in capital letters 


  After creating a component, we need to import i t in the App main component
*/