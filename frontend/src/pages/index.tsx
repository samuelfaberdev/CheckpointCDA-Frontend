import AddCountryForm from "@/components/AddCountryForm";
import Countries from "@/components/Countries";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Page d'accueil"
      description="Le listing des pays de l'API GraphQL"
    >
      <AddCountryForm />
      <Countries />
    </Layout>
  );
}
