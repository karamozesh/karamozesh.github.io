import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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
} from './routes/resume/traning';
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
      },
      {
        path: '/resume',
        element: <div></div>,
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
        path: '/resumeBank',
        element: <ResumeBank />,
        loader: resumeBankLoader,
      },
      {
        path: '/skillHome',
        element: <SkillHome />,
        loader: skillHomeLoader,
        children: [
          {
            path: 'skillTutorial',
            element: <SkillTutorial />,
            loader: skillTutorialLoader,
          },
        ],
      },
      {
        path: '/talentSurvey',
        element: <TalentSurvey />,
        loader: talentSurveyLoader,
        children: [
          {
            path: 'talentSurveyTest',
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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
