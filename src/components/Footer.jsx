import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <img src="/src/img/Sel1.webp" />
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
      <img src="/src/img/Sel4.webp" />
    </div>
  );
};
export default Footer;
