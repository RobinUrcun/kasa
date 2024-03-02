function Banner({ backgroundImg, children }) {
  return (
    <div className="banner">
      <div className="banner_background">
        <img src={backgroundImg} alt="Bannière" />
      </div>
      {children}
    </div>
  );
}

export default Banner;
