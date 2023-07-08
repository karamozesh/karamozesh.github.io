import { Link } from 'react-router-dom';

export default function TalentTestCard({
  title,
  name,
  image,
  description,
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
        <Link to={`/talent-survey/${name}`}>
          <button className="float-left bg-secondaryColor px-7 p-2 rounded-3xl m-3">
            شروع
          </button>
        </Link>
      </p>
    </div>
  );
}
