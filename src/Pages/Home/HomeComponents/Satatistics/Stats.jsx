import { statsData, titleParaInfo } from "../../../../demoData";
import TitleAndPara from "../TitleAndPara";
import StatsCard from "./StatsCard";
import CardDeck from "../CardDeck/CardDeck";

export const Stats = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <TitleAndPara prop={titleParaInfo[3]} />
      </div>
      {/* Mobile: Card Deck */}
      <div className="lg:hidden">
        <CardDeck
          cards={statsData}
          renderCard={(card, index, isTop) => (
            <StatsCard prop={card} />
          )}
        />
      </div>
      {/* Desktop: Grid Layout */}
      <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-8 mx-auto max-w-7xl px-4 lg:px-8">
        {statsData.map((stat, index) => (
          <StatsCard key={index} prop={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
