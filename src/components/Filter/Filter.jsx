import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectorsFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      type="text"
      onChange={e => dispatch(setFilter(e.currentTarget.value))}
      value={filter}
      placeholder={`Find contact `}
    />
  );
};

export default Filter;
