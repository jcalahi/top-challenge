import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character, Location } from '../../gql/types/graphql';
import classes from './PhotoCard.module.css';

function PhotoCard(data: Character): JSX.Element {
  return (
    <Card
      className={classes.photoCard}
      sx={{
        ':hover': { boxShadow: 20 },
      }}
    >
      <CardMedia sx={{ minHeight: 250 }} image={data.image as string} />
      <CardContent>
        <div className={classes.overlay}>
          <Typography variant="h6" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.species}
          </Typography>
          <Typography variant="caption" component="div" mt={2}>
            Location: {(data.location as Location).name}
          </Typography>
          <Typography variant="caption" color="div">
            Origin: {(data.origin as Location).name}
          </Typography>
          <Typography variant="caption" component="div">
            Status: {data.status}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default PhotoCard;
