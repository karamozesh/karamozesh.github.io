import Logina from '../../../components/UI/Login';

export default function Login() {
  return (
    <>
      <div>This is login Page</div>
      <Logina />
    </>
  );
}

const loginLoader = () => {
  return null;
};

export { loginLoader };
