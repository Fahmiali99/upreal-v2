import Layout from "@/components/Layout";
import HomePage from "@/modules/home";
import SplashScreen from "@/components/common/SplashScreen";

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
