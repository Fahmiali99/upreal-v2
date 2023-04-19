import Layout from "@/components/Layout";
import HomePage from "@/modules/home";

export const Home = (): JSX.Element => {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
};

export default Home;
