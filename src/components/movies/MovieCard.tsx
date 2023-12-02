import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cinema1 from '../../assetes/images/cinema1.jpg';
import { IMovie } from '../../types/movie';
import { Link, useNavigate } from 'react-router-dom';

export default function MovieCard({id,title,year,imageUrl,description}:IMovie) {
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`https://webapicinema.azurewebsites.net/api/movies/delete?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log(`Movie with id ${id} deleted successfully`);
      } else {
        console.error(`Failed to delete movie with id ${id}`);
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
    navigate('/movies');
  };
  return (
  

<Card sx={{ height:'100%', padding:'10px'}}>
      <CardMedia className='movie-card'
        sx={{ maxHeight: 640, minHeight:500}}
        // image={cinema1}
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} ({year})
        </Typography>
    
      </CardContent>
      <CardActions>
      <Button size="small"><Link to={`/details/${id}`}>Details</Link></Button>
      <Button size="small" onClick={() => handleDelete(id)}>Delete</Button>

      </CardActions>
    </Card>

    
  );
}

