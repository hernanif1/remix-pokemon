import { useColor } from "color-thief-react";
import { useEffect } from "react";
import { Link, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getPokemonById } from "~/api/pokemons";
import { PokemonDetails } from "~/types";

export const loader = async ({ params }: { params: { id: string } }) => {
  invariant(params.id, "Expected params.id");
  const pokemon: PokemonDetails = await getPokemonById(params.id);
  return pokemon;
};

export default function Pokemon() {
  const pokemon = useLoaderData<PokemonDetails>();
  const imageURL = `/assets/${pokemon.name}.gif`;
  const { data: color } = useColor(imageURL, "rgbArray");

  useEffect(() => {
    if (color) {
      console.log("color", color);
      document.documentElement.style.setProperty(
        "--mystery-var",
        color.join(", ")
      );
    }
  }, [color]);

  return (
    <div className="bg-gray-200 h-full p-10 flex flex-col items-center min-w-min">
      <Link className="poke-button mb-10" to="/pokemons">
        Back
      </Link>

      <div className="rounded-xl p-3 shadow-lg shadow-[color:rgb(var(--mystery-var))]">
        <div className="rounded-xl  bg-[color:rgb(var(--mystery-var))]  text-white min-w-[250px]">
          <div className="rounded-xl flex flex-col p-10 bg-gradient-to-t from-black/10">
            <img id="avatar" src={imageURL} width={150} />
            <h1 className="font-bold mt-5 capitalize">{pokemon.name}</h1>
            <hr />

            <h3 className="font-bold mt-10">Abilities</h3>
            <ul className="list-disc ml-4">
              {pokemon.abilities.map((item) => (
                <li key={item.ability.name}>{item.ability.name}</li>
              ))}
            </ul>

            <h3 className="font-bold mt-10">Forms</h3>
            <hr />
            <ul className="list-disc ml-4">
              {pokemon.forms.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
