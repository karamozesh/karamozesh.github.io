import { Tabs } from 'antd';

import ALittleAboutMe from './FurtherInformationContents/ALittleAboutMe';
import Languages from './FurtherInformationContents/Languages';
import Certifications from './FurtherInformationContents/Certifications';
import Favorites from './FurtherInformationContents/Favorites';
import ContactWays from './FurtherInformationContents/ContactWays';
import { useSelector } from 'react-redux';

const FurtherInformationContent = () => {
  const heightOfChildren = 'h-[350px]';
  const { furtherInformation } = useSelector(
    (state) => state.resume,
  );

  console.log(furtherInformation);

  const items = [
    {
      key: 1,
      label: 'مختصری از من',
      children: (
        <ALittleAboutMe
          heightOfChildren={heightOfChildren}
        />
      ),
    },
    {
      key: 2,
      label: 'زبان ها',
      children: (
        <Languages
          heightOfChildren={heightOfChildren}
        />
      ),
    },
    {
      key: 3,
      label: 'گواهینامه و دوره ها',
      children: (
        <Certifications
          heightOfChildren={heightOfChildren}
        />
      ),
    },
    {
      key: 4,
      label: 'علاقه مندی',
      children: (
        <Favorites
          heightOfChildren={heightOfChildren}
        />
      ),
    },
    {
      key: 5,
      label: 'راه های ارتباطی',
      children: (
        <ContactWays
          heightOfChildren={heightOfChildren}
        />
      ),
    },
  ];

  // console.log(FocusTrap)

  return (
    <div className="resume-step-content">
      <h3 className="my-8">
        مواردی که می‌خواهید در رزومه خودتان اضافه
        کنید.
      </h3>
      <div className="w-full">
        <Tabs
          // left is right for fa
          tabPosition="left"
          items={items}
          size="large"
        />
      </div>
    </div>
  );
};

export default FurtherInformationContent;
