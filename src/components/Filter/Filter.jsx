import { SectionFilter, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const filterContact = target.value.toLowerCase();
    dispatch(setFilter(filterContact))
  };

  return (
    <SectionFilter>
      <Label>Сontact search</Label>
      <Input type="text" onChange={handleChange} />
    </SectionFilter>
  );
};

export default Filter;