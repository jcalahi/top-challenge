import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import PhotoCard from '../../../../components/PhotoCard';
import useAppStore from '../../../../store/useAppStore';
import { getCharacters } from '../../../../gql/queries/getCharacters';
import {
  Character,
  CharactersQueryVariables,
} from '../../../../gql/types/graphql';

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
      console.log(data.characters.results);
      setPageCount(Number(data.characters.info.count));
    }
  }, [data, setPageCount]);

  if (loading || !data)
    return (
      <Typography variant="h6" component="div">
        Loading...
      </Typography>
    );

  if (!loading && data.characters.results.length === 0) {
    return (
      <Typography variant="h6" component="div">
        {`No results for "${searchTerm}" were found.`}
      </Typography>
    );
  }

  const showResults = () => {
    return data.characters.results.map((result: Character, idx: number) => {
      return <PhotoCard key={idx} {...result} />;
    });
  };

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={2}>
      {showResults()}
    </Masonry>
  );
}

export default SearchResults;
