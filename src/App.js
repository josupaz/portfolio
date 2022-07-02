
import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

function App() {

  const [scrollHeigth, setScrollHeight] = useState (0);

  const hundleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(()=>{
    window.addEventListener("scroll", hundleScroll);
  }, [scrollHeigth])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeigth}/>
      <Cover/>
      <About/>
    </div>
  );
}

export default App;
