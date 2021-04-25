import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  LoadingSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
