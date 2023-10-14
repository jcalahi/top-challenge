import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAppStore from '../../../../store/useAppStore';
import { getCharacters } from '../../../../queries/getCharacters';
import { Character, CharactersQueryVariables } from '../../../../gql/graphql';

type CharacterData = {
  characters: {
    info: Record<string, string | null>;
    results: Character[];
  };
};

function SearchResults(): JSX.Element {
  const { page, searchTerm, setPageCount } = useAppStore();
  const { data, loading } = useQuery<CharacterData, CharactersQueryVariables>(
    getCharacters,
    {
      variables: { name: searchTerm, page },
    }
  );

  useEffect(() => {
    if (data) {
      setPageCount(Number(data.characters.info.count));
    }
  }, [data, setPageCount]);

  if (loading || !data)
    return (
      <Typography variant="h6" component="div">
        Loading...
      </Typography>
    );

  const showResults = () => {
    return data.characters.results.map((result: Character, idx: number) => {
      return (
        <Card
          key={`${result.name}-${idx}`}
          sx={{
            ':hover': { boxShadow: 20 },
          }}
        >
          <CardMedia sx={{ minHeight: 250 }} image={result.image!} />
          <CardContent>
            <Typography variant="h6" component="div">
              {result.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {result.species}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
    });
  };

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 7 }} spacing={2}>
      {showResults()}
    </Masonry>
  );
}

export default SearchResults;
