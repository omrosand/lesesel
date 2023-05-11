import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <img src="/src/img/Sel1.webp" alt="sel som ligger på isen"/>
      <section className="footerContact">
        <h4>Kontakt oss:</h4>
        <p>Telefon: 94972998</p>
        <p>E-post: kontakt@lesesel.no</p>
        <p>Adresse: B R A Veien 4, 1757 Halden</p>
      </section>
      <section className="footerLinks">
        <h4>Nyttige lenker:</h4>
        <Link to="/oftestiltesporsmal">
          <p>Ofte stilte spørsmål</p>
        </Link>
        <Link to="innstillinger">
          <p>Innstillinger</p>
        </Link>
      </section>
      <img src="/src/img/Sel4.webp" alt="sel som sover på isen" />
    </div>
  );
};
export default Footer;
