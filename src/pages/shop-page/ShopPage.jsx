import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../assets/firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
import { updateCollections } from "../../redux/shop/shop.actions";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";

const CollectionsOverviewSpinner = LoadingSpinner(CollectionsOverview);
const CollectionPageSpinner = LoadingSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop=page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
