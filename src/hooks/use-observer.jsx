import { useEffect } from 'react';

const useObserver = (
  navbarRef,
  observerLineRef,
) => {
  useEffect(() => {
    const observeLine = observerLineRef.current;
    const navbar = navbarRef.current;
    var observer = new IntersectionObserver(
      function (entries) {
        // no intersection
        if (entries[0].intersectionRatio === 0)
          navbar.classList.add('shadow-xl');
        // fully intersects
        else if (
          entries[0].intersectionRatio === 1
        )
          navbar.classList.remove('shadow-xl');
      },
      {
        threshold: [0, 1],
      },
    );

    observer.observe(observeLine);
  }, [observerLineRef.current]);
};

export default useObserver;
