import { Box, Container } from '@mui/material';
import Stack from '@mui/material/Stack';
import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import SearchControl from './components/SearchControl';

function Home(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={2}
      >
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
    </Container>
  );
}

export default Home;
