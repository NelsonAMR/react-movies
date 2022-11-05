import { Fragment } from 'react';
import './App.css';
import MyRoutes from './routes/routes';

function App() {
  return (
    <Fragment>
      <header>
        <h1 className='title'>Peliculas</h1>
      </header>
      <MyRoutes />
    </Fragment>
  )
}

export default App
