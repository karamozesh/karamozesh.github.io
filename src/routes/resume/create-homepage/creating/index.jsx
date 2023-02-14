import {
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

export default function ResumeCreating() {
  const { pathname } = useLocation();

  const slug = pathname.split('/')[3];

  let backLink = 'base-information';

  if (slug === 'work-experience')
    backLink = 'education';
  else if (slug === 'skills')
    backLink = 'work-experience';
  else if (slug === 'further-information')
    backLink = 'skills';

  return (
    <div className="flex flex-col main resume">
      <h1 className="mb-4">رزومه جدید</h1>
      <Outlet />
      <div className="flex self-end">
        {slug !== 'base-information' && (
          <button className="max-w-[200px] ml-4 mt-6 rounded-xl shadow-xl bg-secondaryColor">
            <Link
              to={backLink}
              className="w-full h-full px-8 py-2"
            >
              بازگشت
            </Link>
          </button>
        )}

        <button className="max-w-[200px]  px-8 py-2 mt-6 rounded-xl shadow-xl bg-secondaryColor">
          ذخیره و ادامه
        </button>
      </div>
    </div>
  );
}

const resumeCretingLoader = () => {
  return null;
};

export { resumeCretingLoader };
