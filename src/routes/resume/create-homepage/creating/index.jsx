import { Link, Outlet } from 'react-router-dom';

export default function ResumeCreating() {
  return (
    <div className="main resume">
      <h1 className="mb-4">رزومه جدید</h1>
      <Outlet />
    </div>
  );
}

const resumeCretingLoader = () => {
  return null;
};

export { resumeCretingLoader };
