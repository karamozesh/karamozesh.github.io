import { useEffect, useRef } from 'react';
import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

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
import MBTI from './components/TalentSurvey/MBTI';
import HalandResult from './components/TalentResult/Result';
import MbtiResult from './components/MbtiResult/Result';
import SkillCard from './components/Skill/SkillCard';
import JavaScript from './pages/Skill/JavaScript';
import Python from './pages/Skill/Python';
import Htmlcss from './pages/Skill/Htmlcss';
import NLP from './pages/Skill/NLP';
import UIUX from './pages/Skill/UIUX';

import UserTicketPage from './pages/UserTicketPage/UserTicketPage';

import {
  ToastContainer,
  toast,
} from 'react-toastify';
import { notificationActions } from './store/notification-slice';
import 'react-toastify/dist/ReactToastify.css';
import TicketsPage from './pages/MoshaverPages/TicketsPage/TickestPage';
import MyTicketsPage from './pages/MoshaverPages/MyTicketsPage/MyTicketsPage';

import { getUserTickets } from './store/ticket-slice';
import {
  // getCVId,
  getProfileInformation,
  getTalents,
  getUserId,
  getUserImageProfile,
} from './store/profile-slice';
import { getResume } from './store/resume-slice';
import { mbtiActions } from './store/mbti-slice';
import AboutPage from './pages/AboutusPage/AboutPage';
import { halandActions } from './store/haland-slice';
import ForgotPassword from './components/Access/ForgotPassword';
import ChangePasswordPage from './components/Access/ChangePasswordPage';

function App() {
  const { isLoggedIn, isMoshaver, user_token } =
    useSelector((state) => state.auth);
  const { user_id } = useSelector(
    (state) => state.profile,
  );
  const { talent_result } = useSelector(
    (state) => state.profile,
  );

  const { type } = useSelector(
    (state) => state.mbti,
  );

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [isLoggedIn]);

  const { error, success } = useSelector(
    (state) => state.notification,
  );

  const errorTimer = useRef(null);
  const successTimer = useRef(null);

  const dispatch = useDispatch();

  // --- notification

  useEffect(() => {
    if (success.exist) {
      toast.success(success.message);
      clearTimeout(successTimer.current);
      successTimer.current = setTimeout(() => {
        dispatch(
          notificationActions.resetSuccess(),
        );
      }, 1000);
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error.exist) {
      toast.error(error.message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      clearTimeout(errorTimer.current);
      errorTimer.current = setTimeout(() => {
        dispatch(
          notificationActions.resetError(),
        );
      }, 3000);
    }
  }, [error, dispatch]);

  // notification ---

  // --- user info fetch

  useEffect(() => {
    if (isLoggedIn) {
      if (isMoshaver) {
      } else {
        dispatch(getUserTickets({ user_token }));
        dispatch(getUserId({ user_token }));
      }
    }
  }, [isLoggedIn, isMoshaver]);

  // user info fetch ---

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        getUserImageProfile({ user_token }),
      );
      dispatch(
        getProfileInformation({ user_token }),
      );
    }
  }, [isLoggedIn, isMoshaver]);

  useEffect(() => {
    if (isLoggedIn) {
      if (!isMoshaver && user_id && user_token) {
        // dispatch(getCVId({ user_token }));
        dispatch(
          getResume({
            user_token,
            cv_id: 'cv_id',
          }),
        );
        dispatch(
          getTalents({ user_token, user_id }),
        );
      }
    }
  }, [
    isLoggedIn,
    isMoshaver,
    user_token,
    user_id,
  ]);

  useEffect(() => {
    if (talent_result.length > 0) {
      for (const talentTest of talent_result) {
        if (talentTest.name === 'mbti') {
          const type = talentTest.result
            .split('//', 2)[1]
            .split('.', 2)[0];

          dispatch(mbtiActions.setType(type));
        }
        if (talentTest.name === 'haland') {
          dispatch(halandActions.setIsDone(true));
        }
      }
    }
  }, [talent_result]);

  const userRoutes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/access/forgot"
        element={<ForgotPassword />}
      />
      <Route
        path="/access/reset-password"
        element={<ChangePasswordPage />}
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
        path="/talent-survey/haland"
        element={<TalentSurveyTestPage />}
      />
      <Route
        path="/talent-survey/mbti"
        element={<MBTI />}
      />
      <Route
        path="/talent-survey/result"
        element={<TalentSurveyResultListPage />}
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
        path="/profile"
        element={<ProfilePage />}
      />
      <Route
        path="/moshavere-request"
        element={<MoshavereRequestPage />}
      />
      <Route
        path="/moshavere-request/:ticketId"
        element={<UserTicketPage />}
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
        path="/skill/python"
        element={<Python />}
      />
      <Route
        path="/skill/html&css"
        element={<Htmlcss />}
      />
      <Route
        path="/skill/nlp"
        element={<NLP />}
      />
      <Route
        path="/skill/ui-ux"
        element={<UIUX />}
      />
      <Route
        path="/about-us"
        element={<AboutPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );

  const notLogginRoutes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route
        path="/access/forgot"
        element={<ForgotPassword />}
      />
      <Route
        path="/access/reset-password"
        element={<ChangePasswordPage />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
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
        path="/talent-survey"
        element={<TalentSurveyPage />}
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
        path="/skill/python"
        element={<Python />}
      />
      <Route
        path="/skill/html&css"
        element={<Htmlcss />}
      />
      <Route
        path="/skill/nlp"
        element={<NLP />}
      />
      <Route
        path="/skill/ui-ux"
        element={<UIUX />}
      />
      <Route
        path="/about-us"
        element={<AboutPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );

  const moshaverRoutes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/tickets"
        element={<TicketsPage />}
      />
      <Route
        path="/my-tickets"
        element={<MyTicketsPage />}
      />
      <Route
        path="/about-us"
        element={<AboutPage />}
      />
    </Routes>
  );

  const routes = isMoshaver
    ? moshaverRoutes
    : userRoutes;

  return (
    <Layout>
      {isLoggedIn ? routes : notLogginRoutes}
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={true}
        draggable
        pauseOnHover
        className="toast"
      />
    </Layout>
  );
}

export default App;
