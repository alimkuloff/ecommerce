import { Button, Layout, Menu, Modal } from 'antd';
const { Sider } = Layout;
import {   DropboxOutlined, ProductOutlined  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { SIGNOUT } from '../../redux/action/action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SiderComponent = ({ collapsed }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    dispatch({ type: SIGNOUT });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="70"
      onBreakpoint={() => {
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        inlineCollapsed={collapsed}
        items={[
          {
            key: '1',
            icon: <DropboxOutlined />,
            label: <NavLink end className="nav-link font-bold" to="/dashboard">Products</NavLink>,
          },
          {
            key: '2',
            icon: <ProductOutlined />,
            label: <NavLink end className="nav-link font-bold" to="/dashboard/Users">Popular</NavLink>,
          },
        ]}
      />
      <div className= 'p-[10px] flex h-[1000px] flex-1 items-end'>
        <Button
          className='w-full '
          type='primary'
          danger
          onClick={showModal}
        >
        Sign Out
        </Button>
        <Modal
          title="Confirm"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Yes"
          cancelText="No"
        >
          <p>Are you sure you want to sign out?</p>
        </Modal>
      </div>
    </Sider>
  );
};

export default SiderComponent;
