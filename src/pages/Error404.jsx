import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main>
      <div className='Error404'>
    <p className='number'>404</p>
    <p className='text'>Oups! La page que vous demandez n'existe pas.</p>
    <Link to='/' className='link-error'>Retourner sur la page d'accueil</Link>
  </div>
  </main>
  )
}

export default Error404;