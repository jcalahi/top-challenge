import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import SearchControl from './components/SearchControl';

function Home(): JSX.Element {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box sx={{ maxWidth: 'sm', width: '100%' }}>
          <SearchField />
        </Box>
        <Box>
          <SearchControl />
        </Box>
      </Stack>
      <Box mt={2}>
        <SearchResults />
      </Box>
      <Box sx={{ maxWidth: 'sm', mx: 'auto' }}></Box>
    </>
  );
}

export default Home;
