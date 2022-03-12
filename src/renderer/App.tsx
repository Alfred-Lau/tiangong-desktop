import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import type { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Markdown from './pages/markdown';
import './App.global.css';

const { Content, Footer, Sider } = Layout;

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Sider
          theme={'light'}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UploadOutlined />}>
              <Link to={'/'}>工作台首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to={'/editor'}>天工编辑器</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to={'/markdown'}>天工Markdown</Link>
            </Menu.Item>

            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to={'/user'}>个人成就</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* 路由模块会原地渲染 */}
              <Switch>
                <Route path="/editor" component={Editor} />
                <Route path="/markdown" component={Markdown} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>TianGong Arch</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;
