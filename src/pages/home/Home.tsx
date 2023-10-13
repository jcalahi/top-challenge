import { useQuery } from '@apollo/client';
import { getCharacters } from '../../queries/getCharacters';

function Home(): JSX.Element {
  const { data, loading, error } = useQuery(getCharacters, {
    variables: { name: '' },
  });

  console.log(data);
  return <div>Hello World</div>;
}

export default Home;
