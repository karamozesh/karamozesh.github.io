import {
  Link,
  useLocation,
} from 'react-router-dom';

export default function NotFoundPage() {
  const needLoginLinksArray = [
    'resume',
    'talent-survey',
    'moshavere-request',
    'resume-bank',
  ];

  const { pathname } = useLocation();
  const route = pathname.split('/')[1];

  const isneedLogin =
    needLoginLinksArray.includes(route);

  return (
    <div className="root-page flex flex-col justify-center items-center text-center text-lg">
      {isneedLogin ? (
        <>
          <div>
            برای دسترسی به این صفحه نیازمند این
            هستید که لاگین کنید
          </div>
          <Link
            className="px-4 py-2 mt-2 bg-primaryColor text-white text-sm rounded-md"
            to="/access/login"
          >
            همین الان میرم لاگین میکنم
          </Link>
        </>
      ) : (
        <>
          <p className="text-lg">
            صفحه مورد نظر پیدا نشد.
          </p>
          <p className="text-base">
            «گشتم نبود، نگرد نیست»
          </p>
        </>
      )}
    </div>
  );
}
