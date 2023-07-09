import ResumeInput from '../../ResumeInput';
import ButtonAddResume from '../../../UI/ButtonAddResume';
import ResumeLanguageCardList from '../../ResumeLanguageCardList';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useRef, useState } from 'react';
import { resumeActions } from '../../../../store/resume-slice';

const Favorites = ({ heightOfChildren }) => {
  const [favorite, setFavorite] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const favoriteRef = useRef(null);

  const { furtherInformation } = useSelector(
    (state) => state.resume,
  );
  const { favorites } = furtherInformation;

  const addFavoriteHandler = () => {
    const favorite = favoriteRef.current.value;
    if (favorite.trim().length < 3) {
      setError(
        'اسم علاقه مندی باید حداقل بیشتر از ۳ حرف باشد!',
      );
      return;
    }

    let favorite_id = 1;

    if (favorites.length > 0) {
      favorite_id =
        favorites[favorites.length - 1].id + 1;
    }
    const favorite_obj = {
      id: favorite_id,
      name: favorite,
    };
    dispatch(
      resumeActions.addFavoriteInFurtherInformation(
        favorite_obj,
      ),
    );
    resetFields();
  };

  const resetFields = () => {
    favoriteRef.current.value = '';
    setError(null);
  };

  return (
    <div
      className={`grid grid-cols-3 gap-12 ${heightOfChildren}`}
    >
      <div className="col-span-2">
        <ResumeInput
          label="علاقه مندی"
          name="favorites"
          type="text"
          placeholder="مثلا عکاسی"
          className="mb-8"
          innerRef={favoriteRef}
        />
        <ButtonAddResume
          onClick={addFavoriteHandler}
        />
        <span className="inline-block mt-4 text-sm text-red-500">
          {error ?? ''}
        </span>
      </div>
      <ResumeLanguageCardList
        languages={favorites}
        className="col-span-1"
      />
    </div>
  );
};

export default Favorites;
