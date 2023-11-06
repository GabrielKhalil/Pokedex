import { Home } from "./pages/Home";
import React, { useState, useEffect } from 'react';
import { Router } from "./router"


function App() {
  const [pageTitle, setPageTitle] = useState('POKEDEX');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return(
    <Router/>
  );
}
export default App;
