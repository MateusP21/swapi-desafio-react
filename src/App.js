import React,{useEffect,useState} from 'react';
import axios from 'axios'
import GlobalStyle from './styles/global.js'
import {Container,Button,Card,List} from './style'
function App() {

  const [planet,setPlanet] = useState({})
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    getPlanet()
  },[])
  async function getPlanet() {
    let randomPlanet = Math.floor(Math.random() * 61);
     const res = await axios
       .get(`https://swapi.co/api/planets/${randomPlanet}/`)
       .catch(err => {
         console.log(err);
       });
       const data = res.data;
       const moviesData = await axios.all(data.films.map(async(f) =>{
         return await axios.get(f).then(res.data)
       }))
     setPlanet(data);
     setMovies(moviesData)
     //console.log(planet)
   }

  return (
    <>
      <GlobalStyle/>
      <Container>
          <Card>
            <h1>{planet.name}</h1>
            <List>
              <li><span>Population</span>: {planet.population}</li>
              <li><span>Climate</span>: {planet.climate}</li>
              <li><span>Terrain</span>: {planet.terrain}</li>
              <li><span>Movies</span>:  {
              movies.map(m=>{
                return m.data.title + ' || '
              })}</li>
            </List>
         <Button onClick={getPlanet}>
          Enviar
        </Button>
          </Card>
      </Container>
    </>
  );
}

export default App;
