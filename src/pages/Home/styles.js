import styled from "styled-components";

export const NavFilterHeader = styled.nav`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; 
    padding: 2.5rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        background: var(--light-gray) !important;
        border: 0;
        border-bottom-left-radius: 2rem;
        border-top-left-radius: 2rem;
    }

    .input-group {
        width: 50%;
    }

    .form-control {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;        
    }

    span.input-group-addon {
        border: 0;
        border-bottom-right-radius: 2rem;
        border-top-right-radius: 2rem;
        background: var(--light-gray);
    }

    button.fa-search {
        background: transparent;
        border: none;
        color: var(--red);
        padding: 0.7rem;
    }

    .orderFilter {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
            border: 1px solid red;
            border-radius: 15px !important;
            /* padding: 0.2rem 1rem; */
            color: red;
            background: var(--white);
            outline: none;
            border-color: inherit;
            -webkit-box-shadow: none;
            box-shadow: none;  
        }

        .dropdown-menu {
            border: 0px;
            background: transparent;
            /* transform: translate3d(-100px, 37px, 0px) !important; */
        }

    }
`;


export const SectionContainer = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; 
    padding: 0 1.5rem 1rem;
    gap: 2rem;
    display: flex;
`;

export const FilterPokemon = styled.aside`
    width: 15%;

    ul {
        display: flex;
        /* justify-content: space-around; */
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;

        li {
            list-style: none;

            button {
                border: 1px solid var(--red);
                padding: 0.3rem 0.8rem;
                border-radius: 15px;
                background: var(--white);
                color: var(--red);
                font-size: 0.875rem;
                cursor: pointer;
            }
            button:hover {
                background: var(--red);
                color: var(--white);
            }
        }
    }

    div.favorites{
        display: flex;
        gap: 5px;
    }

    button.favorites {
        border: 1px solid var(--red);
        padding: 0.2rem 0.8rem;
        border-radius: 15px;
        background: var(--red);
        color: var(--white);
        font-size: 0.875rem;
        cursor: pointer;
    }
    button.favorites:hover {
        background: var(--white);
        color: var(--red);
    }
`;

export const Pokemons = styled.section`
    width: 85%;
    height: 25rem;
    overflow-y: auto;
    overflow-x: hidden;

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--red);
      border-radius: 20px;
    }

    .card {
        width: 10rem;
        border: 0;

        .cardImage {
            background: var(--light-gray);
            display: flex;
            align-items: center;
            justify-content: center;
            /* padding: 1rem; */
            border-radius: 7px;

            img {
                /* height: 100px; */
                object-fit: cover;
            }
        }

        .informationsPokemon {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;

            span.numbering {
                color: var(--dark-gray);
                font-size: 0.875rem;
            }
            p.name {
                font-weight: 700;
                font-size: 1.5rem;
                margin: 5px 0;
            }

            .types {
                display: flex;
                gap: 0.8rem;

                span.type {
                    padding: 0.3rem 0.7rem;
                    font-size: 0.875rem;
                    border-radius: 8px;
                }

                span.Grass {
                    color: var(--font);
                    background: var(--grass);
                }
                span.Poison {
                    color: var(--white);
                    background: var(--poison);
                }
                span.Fire {
                    color: var(--white);
                    background: var(--fire);
                }
                span.Normal {
                    color: var(--font);
                    background: var(--normal);
                }
                span.Water {
                    color: var(--white);
                    background: var(--water);
                }
                span.Ice {
                    color: var(--font);
                    background: var(--ice);
                }
                span.Ground {
                    color: var(--white);
                    background: var(--ground);
                }
                span.Flying {
                    color: var(--font);
                    background: var(--flying);
                }
                span.Bug {
                    color: var(--white);
                    background: var(--bug);
                }
                span.Rock {
                    color: var(--font);
                    background: var(--rock);
                }
                span.Ghost {
                    color: var(--white);
                    background: var(--ghost);
                }
                span.Dragon {
                    color: var(--white);
                    background: var(--dragon);
                }
                span.Dark {
                    color: var(--white);
                    background: var(--dark);
                }
                span.Steel {
                    color: var(--font);
                    background: var(--steel);
                }
                span.Fairy {
                    color: var(--white);
                    background: var(--fairy);
                }
                span.Psychic {
                    color: var(--font);
                    background: var(--psychic);
                }
                span.Electric {
                    color: var(--white);
                    background: var(--electric);
                }
                span.Fighting {
                    color: var(--font);
                    background: var(--fighting);
                }
                
            }
        }

        svg {
            display: none;
            color: var(--red);
        }              
        
        svg:hover {
            cursor: pointer;
        }
    }

    .card:hover svg{
        display: block;
        
        position: absolute;
        right: 5px;
        top: 5px;
    }  
`;
