import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Ofte stilte spørsmål</title>
      </Helmet>
      <article className="pageCard">
        <h1>Ofte stilte spørsmål</h1>
        <h2>Hva er Lesesel?</h2>
        <p>
          Lesesel er en herårlig lesekampanje som skal hjelpe barn og unge med å
          skape, styrke og opprettholde motivsjonen for lesing.{" "}
        </p>

        <h2>Er Lesesel gratis?</h2>
        <p>Jepp, Lesesel er gratis! </p>

        <h2>Hvem er Lesesel laget for?</h2>
        <p>Lesesel er rette mot barn og unge som går i 1-7. klasse. </p>

        <h2>Hvem står bak Lesesel?</h2>
        <p>
          Lesesel ble utviklet av en gruppe studenter ved Høgskolen i Østfold.
        </p>

        <h2>Hva er avatarer? </h2>
        <p>
          Avatarer er bilder som kan brukes som profilbilde for å representere
          hvem du er.
        </p>

        <h2>Hva er trofeer? </h2>
        <p>
          Trofeer er belønninger som man tjener etter man har fullført visse
          milepæler.
        </p>

        <h2>Informasjon om personvern hos Lesesel:</h2>
        <p>Vi i Lesesel tar ditt personvern på alvor. Når vi ber om opplysninger fra deg, brukes de kun for at du skal kunne lage deg en profil, og gjøre aktiviteter med denne profilen, som å lagre bøker eller tjene poeng og troféer.</p>
        <p>Vi sporer ikke trafikken din. Informasjonskapslene som lages ved din interaksjon med Lesesel lagres lokalt på din enhet. </p>
        <p>Ingen identifiserende personopplysninger er synlige for andre på din profil, og vi anbefaler ikke å bruke fulle navn i brukernavnet man lager.</p>
        <p>Hvis du har spørsmål om informasjonskapsler generelt, eller lurer på hvordan du kan justere informasjonskapsler i din nettleser anbefaler vi <a href="https://nettvett.no/slik-administrer-du-informasjonskapsler/ ">Nettvett</a> sine nettsider.</p>

        <section>
          <h3>Har du andre spørsmål? </h3>
          <p>
            Kontakt oss: <a href="epost@eksempel.no">kontakt@lesesel.no</a>
          </p>
        </section>
      </article>
    </>
  );
};
export default Faq;
