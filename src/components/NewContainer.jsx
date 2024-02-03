import { NewArticle } from "./NewArticle";

import React from 'react'

export const NewContainer = () => {
    return (
        <aside className="bg-Prueba text-Offwhite py-[28px] px-[20px]">
            <h1 className="text-Azuloscuro text-4x1 font-bold text-center">NOTICIAS LOL</h1>
            <a href="https://www.tarreo.com/noticias/773382/Riot-Games-intento-construir-su-propio-TWITCH-de-esports-para-League-of-Legends-y-Valorant-pero-resulto-ser-un-costoso-fracaso" style={{ borderBottom: '2px solid white', display: 'flex'}}>
            <NewArticle   
               title='“Twitch De Riot Games”'
               text='Twitch de esports para League of Legends y Valorant'
            />
            </a>
            <a href="https://www.eldesmarque.com/videojuegos/20240129/song-of-nunu-la-epopeya-de-league-of-legends-de-tequila-works_300226812.html" style={{ borderBottom: '2px solid white', display: 'flex'}}>
            <NewArticle 
                title='La Epopeya De League Of Legends'                
                text='Song of Nunu: Una Historia de League of Legends'
            />
            </a>
            <a href="https://www.marca.com/videojuegos/esports/2024/01/23/65b0048346163fba2d8b45c8.html" style={{ borderBottom: '2px solid white', display: 'flex'}}>
            <NewArticle 
                title='Notas del Parche 14.2'
                text='Todo sobre los buffs y nerfs a campeones en la nueva actualización de LoL'
            />
            </a>
            <a href="https://www.3djuegos.com/juegos/league-of-legends/noticias/despidos-riot-games-revelan-cambio-decepcionante-para-futuro-league-of-legends-expandir-universo-juego-no-sera-prioridad">
            <NewArticle 
                title='Los despidos de Riot Games'
                text='El Universo ha sido el área que más bajas ha sufrido en la oleada de despidos que ha llevado a cabo la compañía'
            />
            </a>
        </aside>
    )
}




  

  



