import imgbanner from "../../../../assets/images/bannerHome.webp";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_background">
        <img src={imgbanner} alt="Bannière" />
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
