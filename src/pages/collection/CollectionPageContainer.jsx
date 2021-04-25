import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  LoadingSpinner
)(CollectionPage);

export default CollectionPageContainer;
