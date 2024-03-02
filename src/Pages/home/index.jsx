import Banner from "../../components/banner/banner";
import bannerHome from "../../assets/images/bannerHome.webp";
import Gallery from "./gallery/gallery";

function Home() {
  return (
    <main className="home">
      <Banner backgroundImg={bannerHome}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </main>
  );
}

export default Home;
