import { Avatar, Menu, Layout, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import useFetch from '../../hooks/useFetch';

const { Header } = Layout;
const { Search } = Input;


const Navbar = ({ collapsed, toggleCollapsed, setTermSearch }) => {
  const [data, loading] = useFetch("/auth/profile");

  const getUserInitial = (name) => {
    return typeof name === 'string' && name.length > 0 ? name.slice(0, 2).toUpperCase() : 'U';
  };

  const userName = loading ? 'User' : `${data?.first_name?.charAt(0).toUpperCase()}${data?.first_name?.slice(1).toLowerCase()}`;
  const avatarColor = loading ;

  const searchHandle = (value) => {
    setTermSearch(value);
    console.log(value);
  }

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className='flex items-center gap-16'>
        <div className="demo-logo">
          <div className='flex items-center'>
            <span className='text-white text-4xl font-bold w-full flex justify-center items-center h-full py-4 font-mono'>LOGO</span>
          </div>
        </div>

        <Button type="primary" onClick={toggleCollapsed} style={{ marginRight: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      <Search
        placeholder="Search..."
        onChange={(e) => searchHandle(e.target.value)}
        allowClear
        style={{
          maxWidth: 400,
        }}
      />
      <Link to='profile' className='flex items-center gap-2'>
        <Avatar size="large" style={{ backgroundColor: 'white', color:'black', cursor: 'pointer' }}>
          {loading ? <UserOutlined /> : getUserInitial(data?.first_name)}
        </Avatar>
        <span className='text-white text-[17px]'>{userName}</span>
      </Link>
    </Header>
  );
};

export default Navbar;
