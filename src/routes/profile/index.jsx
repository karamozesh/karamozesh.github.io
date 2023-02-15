import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';

export default function Profile() {
  const dispatch = useDispatch();

  return (
    <div className="root-page flex flex-col justify-center items-center text-center text-lg">
      <h2>این بخش در حال طراحی است</h2>
      <h3 className="animation-text">
        لطفا صبور باشید...
      </h3>
      <button
        className="px-4 py-2 mt-4 bg-primaryColor text-white rounded-lg"
        onClick={() =>
          dispatch(authActions.logoutHandler())
        }
      >
        میخواهم خارج بشوم
      </button>
    </div>
  );
}
