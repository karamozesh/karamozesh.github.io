import {
  Route,
  Routes,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom';
import 'antd/dist/reset.css';
import './index.css';

import Home from './routes/home';

import Access from './routes/access';
import Register from './routes/access/register';
import Login from './routes/access/login';
// import Resume from './routes/access/resume';
import ResumeCreatingHomePage from './routes/resume/create-homepage';
import ResumeCreating from './routes/resume/create-homepage/creating';
import ResumeStep from './routes/resume/create-homepage/creating/slug';
import ResumeTraining from './routes/resume/training';
import TalentSurvey from './routes/talent-survey';
import Haland from './components/TalentSurvey/Haland';
import MBTI from './components/TalentSurvey/MBTI';
import Disk from './components/TalentSurvey/Disk';
import Result from './components/TalentResult/Result';
import TalentSurveyTest from './routes/talent-survey/test';

// import Resume from './routes/talent-survey/resume';
import NotFound from './routes/not-found';

import Layout from './components/Layout/Layout';
import { useSelector } from 'react-redux';
import TalentSurveyTest from './routes/talent-survey/test';
import Profile from './routes/profile';
import { useEffect } from 'react';

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
          <Route path="/" element={<Home />} />
          <Route
            path="/access"
            element={<Access />}
          >
            <Route
              path="register"
              element={<Register />}
            />
            <Route
              path="login"
              element={<Login />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      )}
      {/* loggin users */}
      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/access"
            element={<Access />}
          >
            <Route
              path="register"
              element={<Register />}
            />
            <Route
              path="login"
              element={<Login />}
            />
          </Route>
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route path="/resume">
            <Route
              path="training"
              element={<ResumeTraining />}
            />
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
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      )}
      <Routes>
        <Route
          path="talent-survey"
          element={<TalentSurvey />}
        >
          <Route
            path="test"
            element={<TalentSurveyTest />}
          />
          <Route
            path="haland"
            element={<Haland />}
          />
          <Route path="mbti" element={<MBTI />} />
          <Route path="disk" element={<Disk />} />
          <Route
            path="result"
            element={<Result />}
          />
        </Route>
      </Routes>

      <Routes>
        <Route
          path="moshavere-request"
          element={<></>}
        />
      </Routes>
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
