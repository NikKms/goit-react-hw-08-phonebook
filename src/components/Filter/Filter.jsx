import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectorsFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Box mb={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input
          type="text"
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
          value={filter}
          placeholder={`Find contact`}
          size="sm"
        />
      </InputGroup>
    </Box>
  );
};

export default Filter;
