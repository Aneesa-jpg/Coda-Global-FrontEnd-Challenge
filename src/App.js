import React from 'react';
import {Route} from 'react-router-dom'
import {GlobalProvider} from './context/GlobalContext'
import './App.css';

import {Cards} from './component/Cards/cards.component'
import {RecipePage} from './component/RecipePage/recipePage.component'
import { Search } from './component/Search/search.component';

function App() {

  

  return (
    <GlobalProvider>
      <div className="App">
        <Search />
        <Route exact path='/'  component={Cards}  />
        <Route path={`/:id`} component={RecipePage} />
      </div>
    </GlobalProvider>
  );
}

export default App;
