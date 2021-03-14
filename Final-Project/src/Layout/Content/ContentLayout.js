import { Layout } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../User/UserContext';
import GameLatest from './GameLatest';
import MovieTop from './MovieTop';
import Sidebar from './Sidebar';

const { Content } = Layout;

const ContentLayout = () => {

const [user] = useContext(UserContext)
return(
    <Layout>
      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          {
            user && (<Sidebar />)
          }
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <MovieTop />
              <GameLatest />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
export default ContentLayout