import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { IMovie } from '../../types/movie';

const Details: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie | undefined>();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://webapicinema.azurewebsites.net/api/movies/${id}`);
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        } else {
          console.error(`Failed to fetch movie with id ${id}`);
        }
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <h1>{movie.title}</h1>
      <h2>{movie.year}</h2>
      <h2>{movie.description}</h2>
      {movie.genres.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
    <br></br>
        {movie.imageUrl ? (
        <img width={600} src={movie.imageUrl} alt={movie.title} />
      ) : (
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9556d16312333.5691dd2255721.jpg" alt="Default" />
      )}
    </Box>
  );
};

export default Details;
