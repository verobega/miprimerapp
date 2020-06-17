import React from 'react'
import Button from './Button';

function Nav(){
  return(
      <nav>
        <Button text="Firefox" />
        <Button text="Proyectos" />
        <Button text="Desarrolladores" />
        <Button text="Acerca de" />
      </nav>

  )
}

export default Nav