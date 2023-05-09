import { useEffect } from "react";
import { useState } from "react";

const WeeklyRecommendation = () => {
  const [rec, setRec] = useState({});

  const fetchData = () => {
    fetch(
      "https://bibliografisk.bs.no/v1/publications?query=mummitrollet%20g%C3%A5r%20i%20vannet&limit=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setRec(data.records[0]);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const audience = rec.audience?.find((item) => item.group === "Aldersgruppe");
  const audienceName = audience ? audience.name : "";

  return (
    <>
      <article>
        <h3>{rec.name}</h3>
        <p>{rec.abstract}</p>
        <p>
          <b>Aldersgruppe:</b> {audienceName}
        </p>
      </article>
      <div>
        <img src={rec.image?.url} alt={`Forsidebilde av boka ${rec.name}`} />
        <p>
          <b>ISBN:</b> {rec.isbn}
        </p>
      </div>
    </>
  );
};
export default WeeklyRecommendation;
