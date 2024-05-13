import { getContinents } from "@/graphql/getContinents";
import { getCountries } from "@/graphql/getCountries";
import { mutationAddCountry } from "@/graphql/mutationAddCountry";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { CountryType } from "./CountryCard";

type ContinentType = {
  id: number;
  name: string;
};

export default function AddCountryForm() {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [continentId, setContinentId] = useState("");

  const { loading, error, data } = useQuery(getContinents);

  const [doCreate] = useMutation(mutationAddCountry, {
    refetchQueries: [getCountries],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const continents = data.continents;

  const router = useRouter();

  const newCountry: CountryType = {
    name,
    emoji,
    code,
    continent: { id: Number(continentId) },
  };

  console.log(newCountry);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    doCreate({ variables: { data: newCountry } });
    router.replace("/");
  }

  return (
    <form onSubmit={onSubmit} className="flex p-2 gap-4 border rounded-md">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="emoji">Emoji</label>
        <input
          type="text"
          name="emoji"
          required
          onChange={(e) => setEmoji(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="code">Code</label>
        <input
          type="text"
          name="code"
          required
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <select
        name="categoryId"
        onChange={(e) => {
          setContinentId(e.target.value);
        }}
      >
        {continents.map((continent: ContinentType) => (
          <option key={continent.id} value={continent.id}>
            {continent.name}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
