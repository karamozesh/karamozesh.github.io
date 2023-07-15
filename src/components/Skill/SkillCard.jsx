import javascript from '../../asset/images/Javascript_Logo 1.png';
import css from '../../asset/images/150-1506020_file-html-logo-html5-css3-logo-png-transparent 1.png';
import html from '../../asset/images/5847f5bdcef1014c0b5e489c 1.png';
import python from '../../asset/images/kisspng-europython-logo-programming-language-portable-netw-join-our-team-job-opportunities-sample-solutions-5c9d90c3c63625 2.png';
import react from '../../asset/images/React-icon 1.png';
import ip from '../../asset/images/image 24.png';
import nlp from '../../asset/images/artigo-nlp-27 1.png';
import ml from '../../asset/images/Blog-Images-Forget-Machine-Learning-Humans-Still-Have-a-Lot-to-Learn-Part-II 1.png';
import uiux from '../../asset/images/ux-ui-design-icon-outline-vector-33243310 1.png';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';

const details = {
  width: '190px',
};

const SkillCard = ({
  style,
  image,
  link,
  label,
  isBgMode,
  isDevMode,
}) => {
  const content = (
    <div
      style={style}
      className="rounded-md inline h-30 border border-black-300"
    >
      <Link
        to={link}
        className={
          isDevMode && 'cursor-not-allowed'
        }
      >
        <img
          style={style}
          src={image}
          className={`${
            isBgMode ? '' : 'p-2'
          } h-32"`}
          alt=""
        />
        <p className="font-extralight text-center border-t border-black-300 leading-10 ">
          {label}
        </p>
      </Link>
    </div>
  );

  return isDevMode ? (
    <Tooltip title="مقاله در حال نوشته شدن است">
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export default function SkillCards() {
  const skillArray = [
    {
      id: 1,
      label: 'Python',
      image: python,
      style: details,
      link: 'python',
    },
    {
      id: 2,
      label: 'UI UX Design',
      image: uiux,
      style: details,
      link: 'ui-ux',
    },
    {
      id: 3,
      label: 'HTML & CSS',
      image: html,
      style: details,
      link: 'html&css',
    },

    {
      id: 4,
      label: 'JavaScript',
      image: javascript,
      style: details,
      link: 'javaScript',
      isBgMode: true,
    },
    {
      id: 5,
      label: 'NLP',
      image: nlp,
      style: details,
      link: 'nlp',
    },
    {
      id: 6,
      label: 'Machine Learning',
      image: ml,
      style: details,
      link: '',
      isBgMode: true,
      isDevMode: true,
    },

    {
      id: 7,
      label: 'Image Processing',
      image: ip,
      style: details,
      link: '',
      isBgMode: true,
      isDevMode: true,
    },
    {
      id: 8,
      label: 'React',
      image: react,
      style: details,
      link: '',
      isDevMode: true,
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-20 grid grid-cols-2 gap-10 items-center justify-center md:grid-cols-3 lg:grid-cols-4">
      {skillArray.map(
        ({
          id,
          image,
          label,
          style,
          link,
          isBgMode,
          isDevMode,
        }) => (
          <SkillCard
            key={id}
            image={image}
            label={label}
            style={style}
            link={link}
            isBgMode={isBgMode}
            isDevMode={isDevMode}
          />
        ),
      )}
    </div>
  );
}
