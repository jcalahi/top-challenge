import { useRef } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAppStore from '../../../../store/useAppStore';

function SearchField(): JSX.Element {
  const { onSearch } = useAppStore();
  const inputRef = useRef<HTMLInputElement>();

  const handleBtnClick = () => {
    if (inputRef?.current?.value) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <TextField
        fullWidth
        inputRef={inputRef}
        variant="outlined"
        label="Name"
        placeholder="Type Rick and Morty characters name"
        size="small"
      />
      <Button variant="contained" onClick={handleBtnClick}>
        Search
      </Button>
    </Stack>
  );
}

export default SearchField;
