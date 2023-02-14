import { Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';

import Layout from './components/Layout/Layout';
import Home from './routes/home';

import NotFound from './routes/not-found';
import Register from './routes/access/register';
import Login from './routes/access/login';

import ResumeCreatingHomePage from './routes/resume/create-homepage';
import ResumeCreating from './routes/resume/create-homepage/creating';
import ResumeStep from './routes/resume/create-homepage/creating/slug';
import ResumeTraining from './routes/resume/training';

import './index.css';

function App() {
  return (
    <Layout>
      {/* not loggin users */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/access/login"
          element={<Access />}
        />
        <Route
          path="/access"
          element={<Access />}
        >
          <Route
            path="/register"
            element="register"
          />
        </Route>
        <Route path="/resume">
          <Route
            path="create-homepage"
            element={<ResumeCreatingHomePage />}
          />
          <Route
            path="creating"
            element={<ResumeCreating />}
          >
            <Route
              path=":stepPath"
              element={<ResumeStep />}
            />
          </Route>
        </Route>
        {/* <Route
          path="*"
          element={
            <Navigate to="/" replace={true} />
          }
        /> */}
      </Routes>
      {/* loggin users */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <Navigate to="/" replace={true} />
          }
        />
      </Routes> */}
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
