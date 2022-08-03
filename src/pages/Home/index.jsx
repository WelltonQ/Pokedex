import React, { useEffect, useMemo, useState } from 'react'
// import axios from 'axios'

import { Header } from '../../components/Header'
import { FilterPokemon, NavFilterHeader, SectionContainer, Pokemons } from './styles'
// import api from '../../services/api';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

// import reactImage from '../../assets/react.svg'

export function Home() {
  const [pokemons, setPokemons] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState(1);
  const [columnOrder, setColumnOrder] = useState('name');

  useEffect(() => {
    fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json')
    .then((r) => r.json())
    .then((json) => {
      setPokemons(json.results)
    })
  }, [])

    

  function handleAddFavorites(numberPokemon) {
    if (favorites.includes(numberPokemon)) return;

    setFavorites([...favorites, numberPokemon])
  }
  
  function handleRemoveFavorites(numberPokemon) {
    const response = favorites.filter(pokemon => pokemon !== numberPokemon)
    setFavorites(response)
  }

  console.log(favorites)
  // const poke = pokemons.map(pok => pok.national_number)
  // const isFavorite = favorites.includes(poke)
  // const isFavorite = pokemons.filter(f => { return f === favorites})
  // console.log('poke', poke)
  // console.log('isFavorite', isFavorite)
  

  // if (search) {
  //   const exp = aval(`/${search.replace(/[^\d\w]+/,'.*')}/i`)
  //   pokemons.filter(pokemon => exp.test(pokemon.name))
  // }

  // const pokemonsFilter = useMemo(() => {
  //   return  pokemons?.filter(pokemon => pokemon.includes(search))
  // }, [])

  // const lowerSearch = search.toLowerCase();
  // const namesFiltered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(lowerSearch));

  // function handleOrder(fieldName) {
  //   setOrder(-order)
  //   setColumnOrder(fieldName)
  // }

  // pokemons.sort((a,b) => {
  //   return a[columnOrder] < b[columnOrder] ? -order : order
  // })

  const typePokemons = pokemons?.map(pokemon => pokemon.type.map(type => type))
  // const types = typePokemons.map(t => t)

  // console.log('types', types)

  const grass = typePokemons.filter(poke => poke[0] || poke[1] === 'Grass')
  const poison = typePokemons.filter(poke => poke[0] || poke[1] === 'Poison')
  const fire = typePokemons.filter(poke => poke[0] || poke[1] === 'fire')
  
 
  

  return (
    <>
      <Header />
      <NavFilterHeader>        
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder='Pesquisar por nome ou número'
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="input-group-addon">
            <button className="fa fa-search"></button>
          </span>
        </div>
        <div className="orderFilter">
          <span>Ordenar por</span>
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menor número primeiro</button>
              <div className="dropdown-menu">
                <button type='button' className="dropdown-item">Menor número primeiro</button>
                <button type='button' className="dropdown-item">Maior número primeiro</button>
                <button type='button' className="dropdown-item">A-Z</button>
                <button type='button' className="dropdown-item">Z-A</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="orderFilter">
          <span>Ordenar por</span>
          <select >
            <option value="2">Menor número primeiro</option>
            <option value="1">Maior número primeiro</option>
            <option value="3">A-Z</option>
            <option value="8">Z-A</option>
          </select>
        </div> */}
      </NavFilterHeader>

      <SectionContainer>
        <FilterPokemon>
          <span>Filtrar por Tipo</span>
          <ul>
            <li><button type='button'>Bug</button></li>
            <li><button type='button'>Dark</button></li>
            <li><button type='button'>Dragon</button></li>
            <li><button type='button'>Eletric</button></li>
            <li><button type='button'>Fairy</button></li>
            <li><button type='button'>Fighter</button></li>
          </ul>
          <span>Filtrar Favoritos {favorites.length}</span>          
        </FilterPokemon>
        <Pokemons>
          {pokemons ? (
            pokemons.map(pokemon => (
              <div className="card" >
                <div className="cardImage">                     
                  <img onClick={() => handleRemoveFavorites(pokemon.national_number)} src={pokemon.sprites.normal} alt="Pokémon" />
                </div>
                <div className="informationsPokemon">
                  <span className='numbering'>{pokemon.national_number}</span>
                  <p className='name'>{pokemon.name}</p>
                  <div className="types">
                    {pokemon.type.map(pokemonType => <span className={`type ${pokemonType}`}>{pokemonType}</span>)}
                    {/* <span className="type typeGrass">Grass</span>
                    <span className="type typePoison">Poison</span> */}
                  </div>
                </div>
                <FontAwesomeIcon 
                  id="heard" 
                  onClick={() => handleAddFavorites(pokemon.national_number)} 
                  icon={true ? faHeartSolid : faHeart}
                />
              </div>
            ))
          ) : (<p>Carregando...</p>)}
        </Pokemons>
      </SectionContainer>
    </>
  )
}
