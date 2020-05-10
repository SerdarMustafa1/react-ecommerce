import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from 'redux/shop/shop.selectors';
import WithSpinner from '../WithSpinner/WithSpinnerComponent';
import CollectionsOverview from './CollectionsOverviewComponent';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
