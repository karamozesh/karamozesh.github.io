import {
  Link,
  useLocation,
} from 'react-router-dom';
import Modal from '../../components/UI/Modal';

export default function NotFoundPage() {
  const needLoginLinksArray = [
    'talent-survey',
    'moshavere-request',
    'resume-bank',
    'resume-creating-app',
  ];

  const { pathname } = useLocation();
  const route = pathname.split('/')[1];
  console.log(route);

  const isneedLogin =
    needLoginLinksArray.includes(route);

  return (
    <div className="root-page flex flex-col justify-center items-center text-center text-lg">
      {isneedLogin ? (
        <Modal />
      ) : (
        <div>
          <span>- 404 -</span>
          <p className="text-lg">
            صفحه مورد نظر پیدا نشد
          </p>
        </div>
      )}
    </div>
  );
}
