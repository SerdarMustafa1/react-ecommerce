import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/CollectionPage';
import CollectionsOverview from 'components/CollectionsOverview/CollectionsOverviewComponent';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
