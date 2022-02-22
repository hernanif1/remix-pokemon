import { PokemonApi, PokemonDetails } from "~/types";

export const getAllPokemons = async () => {
  try {
    const pokemons: PokemonApi = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=27"
    ).then((response) => response.json());

    const poke: PokemonDetails[] = await Promise.all(
      pokemons.results.map(async ({ url }) => {
        return await fetch(url).then((response) => response.json());
      })
    );

    return poke;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemonById = async (idParam: string) => {
  const id = parseInt(idParam);
  if (isNaN(id) || id > 151) {
    throw new Response("Not Found", { status: 404 });
  }
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!result.ok) {
    throw new Response("Not Found", { status: 404 });
  }

  return await result.json();
};
