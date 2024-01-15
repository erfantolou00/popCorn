import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StartRating'

function T() {
  const [movieRate, setMovieRate] = useState(0)
  return <div>
    <StarRating
      maxRating={5}
      className=''
      message={['very bad', 'bad', 'not good', 'good', 'very good']}
      color='black'
      defaultRating={3}
      onSetRating={setMovieRate}
    />
    <p>movie {movieRate} star</p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}


    <StarRating maxRating={5} defaultRating={3} />

    <T />

    <StarRating
      maxRating={5}
      className=''
      message={['very bad', 'bad', 'not good', 'good', 'very good']}
      color='red'
      defaultRating={3}
    />

  </React.StrictMode>
);


