import { Helmet } from 'react-helmet';


const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Ofte stilte spørsmål</title>
      </Helmet>
      <h1>Ofte stilte spørsmål</h1>

      <article className='pageCard'>
        <h2>Hva er Lesesel?</h2>
          <p>Lesesel er en herårlig lesekampanje som skal hjelpe barn og unge med å skape, styrke og opprettholde motivsjonen for lesing. </p>

        <h2>Er Lesesel gratis?</h2>
          <p>Jepp, Lesesel er gratis! </p>

        <h2>Hvem er Lesesel laget for?</h2>
          <p>Lesesel er rette mot barn og unge som går i 1-7. klasse. </p>

        <h2>Hvem står bak Lesesel?</h2>
          <p>Lesesel ble utviklet av en gruppe studenter ved Høgskolen i Østfold.</p>

        <h2>Hva er avatarer? </h2>
          <p>Avatarer er bilder som kan brukes som profilbilde for å representere hvem du er. </p>

        <h2>Hva er trofeer? </h2>
        <p>Trofeer er belønninger som man tjener etter man har fullført visse milepæler. </p>

        <section>
          <h3>Har du andre spørsmål? </h3>
          <p>Kontakt oss: <a href="epost@eksempel.no">epost@eksempel.no</a></p>
        </section>
      </article>
    </>
  );
};
export default Faq;
