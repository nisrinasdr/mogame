import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLayout = () => {
return(
    <Layout style={{}}>
      <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}
export default FooterLayout