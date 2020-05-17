import React from 'react';
import Icon from '@ant-design/icons';
import CheckoutCart from '../../containers/store/CheckoutCart';
import './style.less';
import { ReactComponent as SwagIcon } from '../../assets/icons/swag-icon.svg';

const StorePage = () => {
  return (
    <div className="store-page">
      <CheckoutCart />
    </div>
  );
};

export default StorePage;
