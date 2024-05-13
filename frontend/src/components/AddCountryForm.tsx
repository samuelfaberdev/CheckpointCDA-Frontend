import { getCountries } from "@/graphql/getCountries";
import { mutationAddCountry } from "@/graphql/mutationAddCountry";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { CountryType } from "./CountryCard";

export default function AddCountryForm() {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");

  const router = useRouter();

  const [doCreate] = useMutation(mutationAddCountry, {
    refetchQueries: [getCountries],
  });

  const newCountry: CountryType = {
    name,
    emoji,
    code,
  };

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
      <button type="submit">Add</button>
    </form>
  );
}
