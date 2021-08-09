import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AppRouter from './Routs/AppRouter';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './Components/Loader';

const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
