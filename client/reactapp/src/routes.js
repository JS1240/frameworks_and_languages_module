import React from 'react';
import { Route } from 'react-router-dom';

import ItemList from './containers/ItemListView';
import ItemDetail from './containers/ItemDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ItemList} />
        <Route exact path='/:itemID' component={ItemList} /> 
    </div>
);

export default BaseRouter;