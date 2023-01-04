import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    {
      name: 'استعداد سنجی',
      href: '/talentSurvey',
    },
    {
      name: 'مهارت',
      href: '/skillHome',
    },
    {
      name: 'بانک رزومه',
      href: '/resumeBank',
    },
  ];

  return (
    <header className="h-[100px] flex items-center px-5">
      <h1>کارآموزش</h1>
      <nav>
        <ul className="flex">
          {links.map((link) => (
            <li
              key={link.name}
              className="w-[170px] py-2 ml-4 text-center rounded-3xl bg-primaryColor text-white"
            >
              <Link to={{ pathname: link.href }}>
                {link.name}
              </Link>
            </li>
          ))}
          <li className="w-[170px] py-2 ml-4 text-center rounded-3xl bg-primaryColor text-white">
            <div></div>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
}
