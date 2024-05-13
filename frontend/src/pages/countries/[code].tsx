import CountryDetails from "@/components/CountryDetails";
import Layout from "@/components/Layout";
import { getCountryByCode } from "@/graphql/getCountryByCode";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Country() {
  const router = useRouter();

  const { loading, error, data } = useQuery(getCountryByCode, {
    variables: {
      code: router.query.code,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const country = data.country;

  return (
    <Layout
      title={`Le détail du pays : ${country.name}`}
      description={`Le détail du pays : ${country.name}`}
    >
      <CountryDetails
        name={country.name}
        emoji={country.emoji}
        continent={country.continent}
        code={country.code}
      />
    </Layout>
  );
}
