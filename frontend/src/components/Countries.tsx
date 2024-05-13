import { getCountries } from "@/graphql/getCountries";
import { useQuery } from "@apollo/client";

export default function Countries() {
  const { loading, error, data } = useQuery(getCountries);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  console.log(data);

  return (
    <>
      <section className="flex flex-row gap-2"></section>
    </>
  );
}
