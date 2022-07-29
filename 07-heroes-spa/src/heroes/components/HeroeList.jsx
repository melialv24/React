import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroeList = ({ publisher }) => {
  const dataHeroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols1 row-cols-md-3 g-3">
      {dataHeroes &&
        dataHeroes.map((hero) => <HeroCard key={hero.id} {...hero} />)}
    </div>
  );
};
