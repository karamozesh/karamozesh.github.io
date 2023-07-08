import { useEffect } from 'react';
import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'antd/dist/reset.css';
import './index.css';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/AccessPage/LoginPage';
import RegisterPage from './pages/AccessPage/RegisterPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoshavereRequestPage from './pages/MoshavereRequestPage/MoshavereRequestPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Layout from './components/Layout/Layout';
import ResumeTrainingPage from './pages/ResumePage/ResumeTrainingPage/ResumeTrainingPage';
import ResumeCreatingHomePage from './pages/ResumePage/ResumeCreatingPage/ResumeCreatingHomePage';
import TalentSurveyPage from './pages/TalentSurveyPage/TalentSurveyPage';
import TalentSurveyTestPage from './pages/TalentSurveyPage/TalentSurveyTestPage/TalentSurveyTestPage';
import ResumeCreatingPage from './pages/ResumePage/ResumeCreatingPage/ResumeCreatingPage';
import TalentSurveyResultPage from './pages/TalentSurveyPage/TalentSurveyResultPage/TalentSurveyResultPage';
import TalentSurveyResultListPage from './pages/TalentSurveyPage/TalentSurveyResultPage/TalentSurveyResultListPage';
import Disk from './components/TalentSurvey/Disk';
import MBTI from './components/TalentSurvey/MBTI';
import HalandResult from './components/TalentResult/Result'
import MbtiResult from './components/MbtiResult/Result';
import SkillCard from './components/Skill/SkillCard';
import JavaScript from './pages/Skill/JavaScript';

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
            path="/resume-training"
            element={<ResumeTrainingPage />}
          />
          <Route
            path="/resume-creating"
            element={<ResumeCreatingHomePage />}
          />
          <Route
            path="/resume-creating-app/:stepPath"
            element={<ResumeCreatingPage />}
          />
          <Route
            path="/talent-survey"
            element={<TalentSurveyPage />}
          />
          <Route
            path="/talent-survey/:testName"
            element={<TalentSurveyTestPage />}
          />
            <Route
            path="/talent-survey/disk"
            element={<Disk />}
          />
             <Route
            path="/talent-survey/mbti"
            element={<MBTI />}
          />
          <Route
            path="/talent-survey/result"
            element={
              <TalentSurveyResultListPage />
            }
          />
          <Route
            path="/talent-survey/result/:testName"
            element={<TalentSurveyResultPage />}
          
          />
            <Route
            path="/talent-survey/result/haland"
            element={<HalandResult />}
          
          />
              <Route
            path="/talent-survey/result/mbti"
            element={<MbtiResult />}
          
          />
               <Route
            path="/skill"
            element={<SkillCard />}
          
          />
                <Route
            path="/skill/javaScript"
            element={<JavaScript />}
          
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
            path="/resume-training"
            element={<ResumeTrainingPage />}
          />
          <Route
            path="/resume-creating"
            element={<ResumeCreatingHomePage />}
          />
          <Route
            path="/resume-creating-app/:stepPath"
            element={<ResumeCreatingPage />}
          />
          <Route
            path="/talent-survey"
            element={<TalentSurveyPage />}
          />
          <Route
            path="/talent-survey/:testName"
            element={<TalentSurveyTestPage />}
          />
          <Route
            path="/talent-survey/result"
            element={
              <TalentSurveyResultListPage />
            }
          />
          <Route
            path="/talent-survey/result/:testName"
            element={<TalentSurveyResultPage />}
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
            element={<NotFoundPage />}
          />
        </Routes>
      )}
    </Layout>
  );
}

export default App;
