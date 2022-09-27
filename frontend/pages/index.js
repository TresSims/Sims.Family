import Header from "../components/header";
import { fetchAPI } from "../lib/api.js";

const Home = ({ shows, posts }) => {
  return (
    <div>
      <div className="w-full flex flex-row bg-primary justify-between">
        <div>
          <img src="/SimsFamilyMGLogo.png" className="w-40 m-5" />
        </div>
        <div>
          <img src="/People.png" className="w-40 mx-3 mt-3" />
        </div>
      </div>
      <Header />
    </div>
  );
};

export async function getServerSideProps() {
  const shows = await fetchAPI("/shows");
  const posts = await fetchAPI("/posts");
  return {
    props: { shoes, posts },
  };
}

export default Home;
