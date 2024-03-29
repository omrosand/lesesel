import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerBg">
      <div className="footerWrapper">
        <img src="/src/img/Sel1.webp" alt=""/>
        <section className="footerContact">
          <h5>Kontakt oss:</h5>
          <p>Telefon: 94972998</p>
          <p>E-post: kontakt@lesesel.no</p>
          <p>Adresse: B R A Veien 4, 1757 Halden</p>
        </section>
        <section className="footerLinks">
          <h5>Nyttige lenker:</h5>
          <Link to="/oftestiltesporsmal">
            <p>Ofte stilte spørsmål</p>
          </Link>
          <Link to="innstillinger">
            <p>Innstillinger</p>
          </Link>
        </section>
        <img src="/src/img/Sel4.webp" alt="" />
      </div>
      <p className="footerApi">
        &#9889; API powered by{" "}
        <a href="https://bibliografisk.bs.no/#/">BIBBI</a>.
      </p>
      <p className="footerDesignBy">
        Design elementer hentet fra pch.vector på Freepik
      </p>
    </div>
  );
};
export default Footer;
