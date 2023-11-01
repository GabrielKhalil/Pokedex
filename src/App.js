import { Home } from "./pages/Home";
import React, { useState, useEffect } from 'react';


function App() {
  const [pageTitle, setPageTitle] = useState('POKEDEX');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return(
    <Home/>
  );
}
export default App;
