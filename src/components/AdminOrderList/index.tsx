import React from 'react';
import { Order, OrderItem } from '../../types/merch';
import { Avatar, List } from 'antd';
import AdminOrderItem from '../AdminOrderItem';
import bongoSnu from '../../assets/graphics/bongosnu.svg';

import './style.less';

interface AdminOrderListProps {
  apiOrders: Order[];
  triggerModal: Function;
  setFulfill: Function;
  setNote: Function;
}

const AdminOrderList: React.FC<AdminOrderListProps> = (props) => {
  const { apiOrders, triggerModal, setFulfill, setNote } = props;
  const orderDateStringOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

  const refinedApiOrders: Order[] = apiOrders.map((element) => {
    if (element.items.length == 1) {
      return element;
    }
    const firstOrderItem: OrderItem[] = [
      {
        ...element.items[0],
        quantity: 1,
      },
    ];

    const orderItemsWithoutFirst = element.items.slice(1);
    const groupedOrderItems = orderItemsWithoutFirst.reduce((acc, curr) => {
      const existingItemIndex = acc.findIndex(
        (itemElement) => itemElement.item.uuid === curr.item.uuid,
      );
      if (existingItemIndex !== -1) {
        acc[existingItemIndex].quantity! += 1;
        acc[existingItemIndex].extras!.push(curr.uuid);
      } else {
        acc = [
          ...acc,
          {
            ...curr,
            extras: [],
            quantity: 1,
          },
        ];
      }
      return acc;
    }, firstOrderItem);
    element.items = groupedOrderItems;
    return element;
  });
  return (
    <div className="order-list">
      {refinedApiOrders.map((order: Order) => {
        return (
          <div key={order.uuid} className="order">
            <div className="order-list-header">
              <div className="orderer-info">
                <Avatar size={64} src={bongoSnu}>
                  Avatar
                </Avatar>
                <h3 className="name">Test Cat</h3>
              </div>
              <h4 className="order-date">
                Ordered {order.orderedAt.toLocaleDateString('en-US', orderDateStringOptions)}
              </h4>
            </div>
            <div className="order-items">
              <List
                bordered
                dataSource={order.items}
                renderItem={(item) => (
                  <List.Item>
                    <AdminOrderItem
                      orderItem={item}
                      triggerModal={triggerModal}
                      setFulfill={setFulfill}
                      setNote={setNote}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminOrderList;
