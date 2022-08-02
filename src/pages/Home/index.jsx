import React from 'react'

import { Header } from '../../components/Header'
import { FilterPokemon, NavFilterHeader, SectionContainer, Pokemons } from './styles'

import reactImage from '../../assets/react.svg'

export function Home() {
  return (
    <>
      <Header />
      <NavFilterHeader>        
        <div className="input-group">
          <input type="text" className="form-control" placeholder='Pesquisar por nome ou número' />
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
          <span>Filtrar por Tipo</span>          
        </FilterPokemon>
        <Pokemons>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={reactImage} alt="Pokémon" />
            </div>
            <div className="informationsPokemon">
              <span className='numbering'>N° 001</span>
              <p className='name'>Bulbasaur</p>
              <div className="types">
                <span className="type typeGrass">Grass</span>
                <span className="type typePoison">Poison</span>
              </div>
            </div>
          </div>
        </Pokemons>
      </SectionContainer>
    </>
  )
}
