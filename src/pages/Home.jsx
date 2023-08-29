import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        console.log('Home se montó')
        
        return () => {
            console.log('Home se desmontó')
        }
    }, [])

  return (
    <div>
      <h1 style={{marginTop:"15px"}}>ESTA ES LA HOME DE LA TIENDA, BIENVENIDOS!</h1>
      <h3>AUN LA TIENDA ESTA EN DESARROLLO POR LO QUE TODAVIA NO TENGO INFO PARA PONER ACA!</h3>
    </div>
    
  )
}

export default Home