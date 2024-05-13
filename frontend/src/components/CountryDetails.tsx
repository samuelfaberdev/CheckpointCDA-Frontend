import { CountryType } from "./CountryCard";

type CountryDetailsProps = CountryType;

export default function CountryDetails({
  name,
  emoji,
  code,
  continent,
}: CountryDetailsProps) {
  return (
    <>
      <h2>{emoji}</h2>
      <p>
        Name: {name} ({code})
      </p>
      <p>Continent: {continent ? continent.name : "undefined"}</p>
    </>
  );
}
