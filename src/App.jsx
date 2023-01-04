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
