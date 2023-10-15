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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBtnClick();
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <TextField
        fullWidth
        inputRef={inputRef}
        variant="outlined"
        label="Name"
        placeholder="Type Rick and Morty characters name and press Enter"
        size="small"
        onKeyDown={handleKeyDown}
      />
      <Button variant="outlined" onClick={handleBtnClick}>
        Search
      </Button>
      <Button variant="outlined" color="error" onClick={() => onSearch('')}>
        Clear
      </Button>
    </Stack>
  );
}

export default SearchField;
