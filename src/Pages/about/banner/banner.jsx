import imgbanner from "../../../assets/images/bannerAbout.webp";

function Banner({ children }) {
  return (
    <div className="banner">
      <div className="banner_background">
        <img src={imgbanner} alt="Bannière" />
      </div>
      {children}
    </div>
  );
}

export default Banner;
