import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Movies from './components/Movies';
import Home from './components/Home';
import MoviesList from './components/movies/MoviesList';
import Login from './components/accounts/Login';
import Details from './components/movies/Details';
import Registration from './components/accounts/Registration';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#b388ff',
    },
    secondary: {
      main: '#b39ddb',
    },


    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="App">
      {/* <h2> App React TypeScript </h2> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesList/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Registration/>} />
          <Route path="details/:id" element={<Details />} />
        </Route>
        
      </Routes>

    </div>
  </ThemeProvider>
   
  );
}

export default App;
