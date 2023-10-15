import { Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import SearchControl from './components/SearchControl';

function Home(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Stack
        direction={{ sm: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ maxWidth: 'sm', width: '100%' }} mt={2}>
          <SearchField />
        </Box>
        <Box mt={2}>
          <SearchControl />
        </Box>
      </Stack>
      <Box mt={2}>
        <SearchResults />
      </Box>
    </Container>
  );
}

export default Home;
