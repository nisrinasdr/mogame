import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
return(

          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Movie Edior">
                
                <Menu.Item key="1">
                  <Link to="/movie-list-edit">Movie List</Link></Menu.Item>
                <Menu.Item key="2">Edit Movie</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Game Editor">
                <Menu.Item key="3">Game List</Menu.Item>
                <Menu.Item key="4">Edit Game</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

  );
}
export default Sidebar