import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import Home, { homeLoader } from './routes/home';

import Access, {
  accessLoader,
} from './routes/access';
import Login, {
  loginLoader,
} from './routes/access/login';
import Register, {
  registerLoader,
} from './routes/access/register';

import Resume from './routes/resume';
import ResumeCreatingHomePage, {
  resumeCretingHomePageLoader,
} from './routes/resume/create-homepage';
import ResumeCreating, {
  resumeCretingLoader,
} from './routes/resume/create-homepage/creating';
import ResumeTraining, {
  resumeTrainingLoader,
} from './routes/resume/training';

import ResumeBank, {
  resumeBankLoader,
} from './routes/resume-bank';

import SkillHome, {
  skillHomeLoader,
} from './routes/skill';
import SkillTutorial, {
  skillTutorialLoader,
} from './routes/skill/tutorial';

import TalentSurvey, {
  talentSurveyLoader,
} from './routes/talent-survey';
import TalentSurveyTest, {
  talentSurveyTestLoader,
} from './routes/talent-survey/test';

import RootBoundary from './components/RootBoundary/RootBoundary';
import ResumeStep, {
  resumeStepLoader,
} from './routes/resume/create-homepage/creating/slug';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
        loader: homeLoader,
        errorElement: <RootBoundary />,
      },
      {
        path: 'access',
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
        path: 'moshavere-request',
        element: <></>,
        loader: null,
      },
      {
        path: 'resume',
        element: <Resume />,
        loader: accessLoader,
        children: [
          {
            path: 'create-homepage',
            element: <ResumeCreatingHomePage />,
            loader: resumeCretingHomePageLoader,
          },
          {
            path: 'creating',
            element: <ResumeCreating />,
            loader: resumeCretingLoader,
            children: [
              {
                path: ':stepPath',
                element: <ResumeStep />,
                loader: resumeStepLoader,
              },
            ],
          },
          {
            path: 'training',
            element: <ResumeTraining />,
            loader: resumeTrainingLoader,
          },
        ],
      },
      {
        path: 'resume-bank',
        element: <ResumeBank />,
        loader: resumeBankLoader,
      },
      {
        path: 'skill',
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
        path: 'talent-survey',
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
