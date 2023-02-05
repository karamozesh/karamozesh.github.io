import Register from './routes/access/register';
import Login from './routes/access/login';
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App({ children }) {
  return (
    <Layout>
      {children}

      <Outlet />
    </Layout>
  );
}

export default App;
