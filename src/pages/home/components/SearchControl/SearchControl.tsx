import Pagination from '@mui/material/Pagination';
import useAppStore from '../../../../store/useAppStore';

function SearchControl(): JSX.Element | null {
  const { onPaginate, pageCount } = useAppStore();

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    onPaginate(value);
  };

  if (!pageCount) return null;

  return (
    <Pagination
      color="primary"
      variant="outlined"
      count={pageCount}
      onChange={handleChange}
    />
  );
}

export default SearchControl;
