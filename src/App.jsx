import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import 'antd/dist/reset.css';

function App({ children }) {
  return (
    <Layout>
      {children}
      <Outlet />
    </Layout>
  );
}

export default App;
