import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--red);
    color: var(--white);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);

    div.logoPokedex {
        display: flex;     
        align-items: center;  
        gap: 1rem;

        h1 {
            margin: 0;
        }
    }

    div.navigation {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        button {
            background: transparent;
            border: 0;
            color: var(--white);

            svg {
                font-size: 1.5rem;
            }
        }
    }
    
`;