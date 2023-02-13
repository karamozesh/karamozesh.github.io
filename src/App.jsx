import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import 'antd/dist/reset.css';

function App() {
  return (
    <Layout>
      <div className="root-page">
        <Outlet />
      </div>
    </Layout>
  );
}

export default App;
