import { Link } from 'react-router-dom';

export default function TalentTestCard({
  title,
  name,
  image,
  description,
  doneBefore,
}) {
  return (
    <div className="border float-right p-4">
      <p className="">
        <img
          src={image}
          alt=""
          className="test-sec border"
        />
        <h1 className="p-3">تست {title}</h1>
        {description}
        {doneBefore ? (
          <div className="flex flex-col items-end justify-center">
            <p className="ml-10 mb-2">
              شما قبلا این تست را داده اید.
            </p>
            <div>
              <Link to={`/talent-survey/${name}`}>
                <button className="float-left bg-secondaryColor px-7 p-2 mr-4 rounded-3xl">
                  تست مجدد
                </button>
              </Link>
              <Link
                to={`/talent-survey/result/${name}`}
              >
                <button className="float-left bg-primaryColor px-7 p-2 rounded-3xl text-white">
                  دیدن نتایج
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <Link to={`/talent-survey/${name}`}>
            <button className="float-left bg-secondaryColor px-7 p-2 rounded-3xl m-3">
              شروع
            </button>
          </Link>
        )}
      </p>
    </div>
  );
}
