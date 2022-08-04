import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font: 	  #333333;
        --dark-gray:  #828282;
        --light-gray: #F2F2F2;
        --red:		  #E2350D;
        --white:	  #FFFFFF;

        --fire:		  #EE7F33;
        --normal:	  #A9A778;
        --water:	  #6890F0;
        --grass:	  #78C84F;
        --ice:		  #98D8D7;
        --poison:	  #A040A1;
        --ground:	  #E0C069;
        --flying:	  #A790EF;
        --bug:		  #A8B821;
        --rock:		  #B6A037;
        --ghost:	  #705797;
        --dragon:	  #724EF9;
        --dark:		  #6F5848;
        --steel:	  #B8B8D0;
        --fairy:	  #F4C8E2;
        --psychic:	  #E95587;
        --electric:	  #F8CF32;
        --fighting:	  #C03228;
    }

    *:focus {
        outline: 0;
    }

    body {
        background: var(--white);
        color: var(--font);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        cursor: pointer !important;
        outline: none !important;
    }
`
