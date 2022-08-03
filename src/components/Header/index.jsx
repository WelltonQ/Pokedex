import React from 'react'

import { HeaderContainer } from "./styles";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


import pokeball from "../../assets/pokeball.svg";
import synviaIcon from "../../assets/synvia-A.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <div className='logoPokedex'>
          <img src={pokeball} alt="Imagem da Pokédex" />
          <h1>Pokédex</h1>
        </div>
        <div className='navigation'>
          <button type='button'>
            <img src={synviaIcon} />
          </button>
          <button type='button'>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        </div>
      </div>
    </HeaderContainer>
  )
}
