import { CountryType } from "./CountryCard";

type CountryDetailsProps = CountryType;

export default function CountryDetails({
  name,
  emoji,
  code,
  continent,
}: CountryDetailsProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-8xl">{emoji}</h2>

      <p>
        Name: {name} ({code})
      </p>
      <p>Continent: {continent ? continent.name : "undefined"}</p>
    </div>
  );
}
