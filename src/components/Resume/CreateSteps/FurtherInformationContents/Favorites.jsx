import ResumeInput from '../../ResumeInput';
import ButtonAddResume from '../../../UI/ButtonAddResume';
import ResumeLanguageCardList from '../../ResumeLanguageCardList';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useState } from 'react';
import { resumeActions } from '../../../../store/resume-slice';

const Favorites = ({ heightOfChildren }) => {
  const [favorite, setFavorite] = useState('');
  const dispatch = useDispatch();

  const { furtherInformation } = useSelector(
    (state) => state.resume,
  );
  const { favorites } = furtherInformation;

  console.log(favorites);

  const favoriteInputChangeHandler = (e) => {
    const favorite_value = e.target.value;
    setFavorite(favorite_value);
  };

  const addFavoriteHandler = () => {
    if (favorite.trim().length < 3) return;

    let favorite_id = 1;

    if (favorites.length > 0) {
      favorite_id =
        favorites[favorites.length - 1].id + 1;
    }
    const favorite_obj = {
      id: favorite_id,
      name: favorite,
    };
    console.log(favorite_obj);
    dispatch(
      resumeActions.addFavoriteInFurtherInformation(
        favorite_obj,
      ),
    );
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
          onChange={favoriteInputChangeHandler}
          placeholder="مثلا عکاسی"
          className="mb-8"
        />
        <ButtonAddResume
          onClick={addFavoriteHandler}
        />
      </div>
      <ResumeLanguageCardList
        languages={favorites}
        className="col-span-1"
      />
    </div>
  );
};

export default Favorites;
