import React from 'react';

import CollectionsOverview from 'components/CollectionsOverview/CollectionsOverviewComponent';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
