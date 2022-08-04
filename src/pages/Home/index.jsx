import React, { useEffect, useMemo, useState } from 'react'

import { Header } from '../../components/Header'
import { FilterPokemon, NavFilterHeader, SectionContainer, Pokemons } from './styles'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const [pokemons, setPokemons] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [order, setOrder] = useState('Menor número primeiro');
  
  useEffect(() => {
    fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json')
    .then((r) => r.json())
    .then((json) => {
      setPokemons(json.results)
    }).catch(error => {
      console.log('error', error)
    })
  }, [])    

  function handleAddFavorites(name) {
    if (favorites.map(e=>e.name).includes(name)) return;

    let newList = [...pokemons];

    let filterNewList = newList.filter(pokemon => (pokemon.name).includes(name))

    setFavorites([...favorites, filterNewList[0]])
  }
  
  function handleRemoveFavorites(name) {  // Chamando essa função na imagem por enquanto
    const response = favorites.filter(pokemon => pokemon.name !== name)
    setFavorites(response)
  }

  const isFavorite = favorites.some(pokemon => (pokemon.name) === ('Bulbasaur'))
  console.log("🚀 ~ file: index.jsx ~ line 47 ~ Home ~ isFavorite", isFavorite)

  console.log('favorites', favorites)

  
  function lower(string) {
      return string.toLowerCase();
  }

  const uniquePokemonByNumber = new Map();

  pokemons?.forEach((pokemon) => {
    if(!uniquePokemonByNumber.has(pokemon.national_number)) {
      uniquePokemonByNumber.set(pokemon.national_number, pokemon)
    }
  })

  const filterPokemonsNotRepeat = [...uniquePokemonByNumber.values()]

  const filterPokemons = filterPokemonsNotRepeat?.filter(pokemon => lower(pokemon.name).includes(lower(searchName)) || pokemon.national_number.includes(searchName))


  function handleOrderNumberCresClick() {
    let newList = [...pokemons];

    newList.sort((a, b) => (a.national_number > b.national_number ? 1 : b.national_number > a.national_number ? -1 : 0))

    setPokemons(newList);
    setOrder('Menor número primeiro')
  }

  function handleOrderNumberDecClick() {
    let newList = [...pokemons];

    newList.sort((a, b) => (a.national_number > b.national_number ? -1 : b.national_number > a.national_number ? 1 : 0))

    setPokemons(newList);
    setOrder('Maior número primeiro')
  }

  function handleOrderCresClick() {
    let newList = [...pokemons];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

    setPokemons(newList);
    setOrder('A-Z')
  }

  function handleOrderDecClick() {
    let newList = [...pokemons];

    newList.sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0))

    setPokemons(newList);
    setOrder('Z-A')
  }

  const mapType = pokemons?.map(poke => poke.type)
  const typePosition = mapType?.map(e => e[0] || e[1])
  const filterTypes = typePosition?.filter((type, i) => typePosition?.indexOf(type) === i);
  
  function handleFilterType(type) {
    let newList = [...pokemons];

    let filterNewList = newList.filter(pokemon => (pokemon.type).includes(type))

    setPokemons(filterNewList);
  }

  function handleFavorites() {     //função temporária
    setPokemons(favorites);
  }

  function handlePokemons() {      //função temporária
    window.location.reload(true)
  }


  return (
    <>
      <Header />
      <NavFilterHeader>        
        <div className="input-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder='Pesquisar por nome ou número'
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <span className="input-group-addon">
            <button className="fa fa-search"></button>
          </span>
        </div>
        <div className="orderFilter">
          <span>Ordenar por</span>
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{order}</button>
              <div className="dropdown-menu">
                <button onClick={handleOrderNumberCresClick} type='button' className="dropdown-item">Menor número primeiro</button>
                <button onClick={handleOrderNumberDecClick} type='button' className="dropdown-item">Maior número primeiro</button>
                <button onClick={handleOrderCresClick} type='button' className="dropdown-item">A-Z</button>
                <button onClick={handleOrderDecClick} type='button' className="dropdown-item">Z-A</button>
              </div>
            </div>
          </div>
        </div>
      </NavFilterHeader>

      <SectionContainer>
        <FilterPokemon>
          <span>Filtrar por Tipo</span>
          <ul>
            {filterTypes ? (
                filterTypes.map(type => (
                  <li key={type}>
                    <button type='button' onClick={() => handleFilterType(type)}>{type}</button>
                  </li>
                )
            )) : (
                <p>Carregando...</p>
            )}
          </ul>
          <span>Filtrar Favoritos {favorites.length}</span> 
          <div className='favorites'>
            <button onClick={handleFavorites} className='favorites' type="button">Favoritos</button>
            <button onClick={handlePokemons} className='favorites' type="button">Todos</button>
          </div>         
        </FilterPokemon>

        {/* Será passado para um COMPONENTE */}        
        <Pokemons>
          {pokemons ? (
            filterPokemons
            .map(pokemon => (
              <div className="card" key={pokemon.national_number}>
                <div className="cardImage">                     
                  <img onClick={() => handleRemoveFavorites(pokemon.name)} src={pokemon.sprites.normal} alt="Pokémon" />
                </div>
                <div className="informationsPokemon">
                  <span className='numbering'>{pokemon.national_number}</span>
                  <p className='name'>{pokemon.name}</p>
                  <div className="types">
                    {pokemon.type.map((pokemonType, i) => <span className={`type ${pokemonType}`} key={i} >{pokemonType}</span>)}
                  </div>
                </div>
                <FontAwesomeIcon 
                  id="heard" 
                  onClick={() => handleAddFavorites(pokemon.name)} 
                  icon={isFavorite ? faHeartSolid : faHeart}
                />
              </div>
            ))
          ) : (<p>Carregando...</p>)}
        </Pokemons>
      </SectionContainer>
    </>
  )
}
