import { useEffect, useState } from "react";
import styled from "./detail.module.css";
import { useParams } from "react-router-dom";
import { POKEMON_BY_ID } from "../../constantes/apiUrl";
import axios from "axios";
import capitalizeFirstLetter from "../../services/capitalizeFirstLetter";
import Navbar from "../Home/Navbar/Navbar";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios(`${POKEMON_BY_ID}${id}`)
      .then((response) => response.data)
      .then((data) => setPokemon(data));
  }, [id]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      {pokemon && (
        <main className={styled.containerDetail}>
          <header>
            <img src={pokemon.image} alt={`${pokemon.name}`} />
          </header>

          <section>
            <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
            <div className={styled.info}>
              <div>
                <h4>HP: {pokemon.hp}</h4>
                <progress max="100" value={pokemon.hp}></progress>
              </div>
              <div>
                <h4>Attack: {pokemon.attack}</h4>
                <progress max="100" value={pokemon.attack}></progress>
              </div>
              <div>
                <h4>Defense: {pokemon.defense}</h4>
                <progress max="100" value={pokemon.defense}></progress>
              </div>
              <div>
                <h4>Speed: {pokemon.speed}</h4>
                <progress max="100" value={pokemon.speed}></progress>
              </div>
              <div>
                <h4>Height: {pokemon.height}</h4>
                <progress max="50" value={pokemon.height}></progress>
              </div>
              <div>
                <h4>Weight: {pokemon.weight}</h4>
                <progress max="1500" value={pokemon.weight}></progress>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Detail;
