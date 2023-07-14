import { useRef } from 'react';
import Button from '../../../components/UI/Button';

export default function SkillRoad({
  title,
  refTitle,
}) {
  const scrollHandler = () => {
    const offsetTop =
      window.scrollY +
      refTitle.current.getBoundingClientRect()
        .top;
    window.scrollTo({
      top: offsetTop - 120,
    });
  };

  return (
    <Button
      className="bg-[#576BF0] p-6 h-12 text-xs font-light leading-4 text-white rounded-3xl"
      onClick={scrollHandler}
    >
      {title}
    </Button>
  );
}
