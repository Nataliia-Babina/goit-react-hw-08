import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from "../../redux/filters/slice"; 
import { selectNameFilter } from "../../redux/filters/selectors"; 
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchFilter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={searchFilter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;