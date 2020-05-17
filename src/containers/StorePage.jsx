import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageLayout from './PageLayout';
import StorePage from '../components/StorePage';
import { addItem } from '../actions/storeActions'
import { Button } from 'antd';
const StorePageContainer = (props) => {
  return (
    <PageLayout>
      <StorePage />
    </PageLayout>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});
export default connect(mapStateToProps, { addItem })(
  StorePageContainer
);
