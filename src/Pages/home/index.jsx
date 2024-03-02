import Banner from "./banner/banner";
import Gallery from "./gallery/gallery";

function Home() {
  return (
    <main className="home">
      <Banner>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </main>
  );
}

export default Home;
