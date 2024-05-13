import { getCountries } from "@/graphql/getCountries";
import { useQuery } from "@apollo/client";
import React from "react";
import CountryCard, { CountryType } from "./CountryCard";

export default function Countries() {
  const { loading, error, data } = useQuery(getCountries);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const countries = data.countries;

  return (
    <>
      <section className="flex flex-row gap-4 content-center items-center">
        {countries.map((country: CountryType) => (
          <React.Fragment key={country.id}>
            <CountryCard
              name={country.name}
              emoji={country.emoji}
              link={`/countries/${country.code}`}
            ></CountryCard>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
