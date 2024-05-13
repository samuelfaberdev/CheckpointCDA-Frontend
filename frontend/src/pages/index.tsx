import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Page d'accueil"
      description="Le listing des pays de l'API GraphQL"
    >
      <h1 className="text-3xl bg-red-600 font-bold underline">
        Hello, wilder !
      </h1>
    </Layout>
  );
}
