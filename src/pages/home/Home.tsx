import Box from '@mui/material/Box';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';

function Home(): JSX.Element {
  return (
    <>
      <Box sx={{ maxWidth: 'sm', mx: 'auto' }}>
        <SearchField />
      </Box>
      <Box mt={2}>
        <SearchResults />
      </Box>
      <Box mt={2}></Box>
    </>
  );
}

export default Home;
