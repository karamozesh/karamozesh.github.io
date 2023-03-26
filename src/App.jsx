import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import 'antd/dist/reset.css';
import './index.css';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/AccessPage/LoginPage';
import RegisterPage from './pages/AccessPage/RegisterPage';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoshavereRequestPage from './pages/MoshavereRequestPage/MoshavereRequestPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Layout from './components/Layout/Layout';

function App() {
  const { isLoggedIn } = useSelector(
    (state) => state.auth,
  );

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [isLoggedIn]);

  return (
    <Layout>
      {/* not loggin users */}
      {!isLoggedIn && (
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      )}
      {/* loggin users */}
      {isLoggedIn && (
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/moshavere-request"
            element={<MoshavereRequestPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      )}
    </Layout>
  );
  // const router = createBrowserRouter([
  //   { path: '*', element: <NotFound /> },

  //   // {
  //   //   path: '/',
  //   //   element: <Home />,
  //   //   // loader: homeLoader,
  //   //   errorElement: <RootBoundary />,
  //   // },
  //   {
  //     path: 'access',
  //     element: <Access />,
  //     // loader: accessLoader,
  //     children: [
  //       {
  //         path: 'login',
  //         element: <Login />,
  //         // loader: loginLoader,
  //       },
  //       {
  //         path: 'register',
  //         element: <Register />,
  //         // loader: registerLoader,
  //       },
  //     ],
  //   },
  //   {
  //     path: 'moshavere-request',
  //     element: <></>,
  //     loader: null,
  //   },
  //   {
  //     path: 'resume',
  //     element: <Resume />,
  //     // loader: accessLoader,
  //     children: [
  //       {
  //         path: 'create-homepage',
  //         element: <ResumeCreatingHomePage />,
  //         // loader: resumeCretingHomePageLoader,
  //       },
  //       {
  //         path: 'creating',
  //         element: <ResumeCreating />,
  //         // loader: resumeCretingLoader,
  //         children: [
  //           {
  //             path: ':stepPath',
  //             element: <ResumeStep />,
  //             // loader: resumeStepLoader,
  //           },
  //         ],
  //       },
  //       {
  //         path: 'training',
  //         element: <ResumeTraining />,
  //         // loader: resumeTrainingLoader,
  //       },
  //     ],
  //   },
  //   // {
  //   //   path: 'resume-bank',
  //   //   element: <ResumeBank />,
  //   //   // loader: resumeBankLoader,
  //   // },
  //   // {
  //   //   path: 'skill',
  //   //   element: <SkillHome />,
  //   //   // loader: skillHomeLoader,
  //   //   children: [
  //   //     {
  //   //       path: 'tutorial',
  //   //       element: <SkillTutorial />,
  //   //       // loader: skillTutorialLoader,
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   path: 'talent-survey',
  //   //   element: <TalentSurvey />,
  //   //   // loader: talentSurveyLoader,
  //   //   children: [
  //   //     {
  //   //       path: 'test',
  //   //       element: <TalentSurveyTest />,
  //   //       // loader: talentSurveyTestLoader,
  //   //     },
  //   //     {
  //   //       path: 'haland',
  //   //       element: <Haland />,
  //   //     },
  //   //     {
  //   //       path: 'result',
  //   //       element: <Result />,
  //   //     },
  //   //     {
  //   //       path: 'mbti',
  //   //       element: <MBTI />,
  //   //     },
  //   //     {
  //   //       path: 'disk',
  //   //       element: <Disk />,
  //   //     },
  //   //   ],
  //   // },
  // ]);

  // return (
  //   <Layout>
  //     <div className="root-page">
  //       <Outlet />
  //     </div>
  //   </Layout>
  // );
}

export default App;
