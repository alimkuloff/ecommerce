
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'antd';
import { removeFromCart, clearCart } from '../../redux/slices/cartSlice';

const { Column } = Table;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <h2>Your Cart</h2>
      <Table dataSource={cartItems} rowKey="id">
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Price" dataIndex="price" key="price" render={(price) => `$${price}`} />
        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column title="Total" dataIndex="totalPrice" key="totalPrice" render={(totalPrice) => `$${totalPrice}`} />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Button type="danger" onClick={() => dispatch(removeFromCart(record.id))}>
              Remove
            </Button>
          )}
        />
      </Table>
      <div>
        <h3>Total Amount: ${totalAmount}</h3>
        <Button type="primary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
