import Registera from '../../../components/UI/Register';

export default function Login() {
  return (
    <>
      <div>This is login Page</div>
      <Registera />
    </>
  );
}

const registerLoader = () => {
  return null;
};

export { registerLoader };
