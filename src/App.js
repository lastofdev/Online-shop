import React from 'react';
import {Header} from './Components/Header'
import {Search} from './Components/Search'
import {Maingood} from './Components/Main'
import {Footersite} from './Components/Footersire'
import Formreg from './Components/Registration'

function App() {
  return (
    <div>
      <header>
          <Header />
          <Search />
      </header>
      <main>
        <Formreg />
        <Maingood />
      </main>
      <footer>
        <Footersite />
      </footer>
    </div>
     
  );
}

export default App;
