import { Switch, Route } from 'react-router-dom';

import React from 'react';

import Home from '../Home/Home';
import InventoryMain from '../Modules/InventoryModule/inventorymain';


const Main = ()=>(
  <main>
        <Switch>
          <Route exact path='/' component={Home}/>
            <Route path='/inventory-module' component={InventoryMain}/>
        </Switch>

    </main>
);


export default Main;

