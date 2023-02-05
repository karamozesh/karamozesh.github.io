import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home, { homeLoader } from './routes/home';
import Access, {
  accessLoader,
} from './routes/access';
import ResumeCreating, {
  resumeCretingLoader,
} from './routes/resume/create';
import ResumeTraining, {
  resumeTrainingLoader,
} from './routes/resume/training';
import ResumeBank, {
  resumeBankLoader,
} from './routes/resumeBank';
import SkillHome, {
  skillHomeLoader,
} from './routes/skill';
import SkillTutorial, {
  skillTutorialLoader,
} from './routes/skill/skillTutorial';
import TalentSurvey, {
  talentSurveyLoader,
} from './routes/TalentSurvey';
import TalentSurveyTest, {
  talentSurveyTestLoader,
} from './routes/talentSurvey/talentSurveyTest';
import RootBoundary from './components/RootBoundary/RootBoundary';

import './index.css';
import Resume from './routes/resume';
import Login, {
  loginLoader,
} from './routes/access/login';
import Register, {
  registerLoader,
} from './routes/access/register';

// const [register, setRegister] =
//   useState(Register);
// const [login, setLogin] = useState(Login);

// useEffect(() => {
//   if (register) {
//     return (
//       <div>
//         <Register />
//       </div>
//     );
//   }
//   if (login) {
//     return (
//       <div>
//         <Login />
//       </div>
//     );
//   }
// });

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
        errorElement: <RootBoundary />,
      },
      {
        path: '/access',
        element: <Access />,
        loader: accessLoader,
        children: [
          {
            path: 'login',
            element: <Login />,
            loader: loginLoader,
          },
          {
            path: 'register',
            element: <Register />,
            loader: registerLoader,
          },
        ],
      },
      {
        path: '/resume',
        element: <Resume />,
        loader: accessLoader,
        children: [
          {
            path: 'create',
            element: <ResumeCreating />,
            loader: resumeCretingLoader,
          },
          {
            path: 'training',
            element: <ResumeTraining />,
            loader: resumeTrainingLoader,
          },
        ],
      },
      {
        path: '/resume-bank',
        element: <ResumeBank />,
        loader: resumeBankLoader,
      },
      {
        path: '/skill',
        element: <SkillHome />,
        loader: skillHomeLoader,
        children: [
          {
            path: 'tutorial',
            element: <SkillTutorial />,
            loader: skillTutorialLoader,
          },
        ],
      },
      {
        path: '/talent-survey',
        element: <TalentSurvey />,
        loader: talentSurveyLoader,
        children: [
          {
            path: 'test',
            element: <TalentSurveyTest />,
            loader: talentSurveyTestLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
