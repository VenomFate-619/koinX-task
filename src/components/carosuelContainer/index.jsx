import React from "react";
import car1 from "@src/assets/car1.jpg";
import car2 from "@src/assets/car2.jpg";
import car3 from "@src/assets/car3.jpg";
import CarosuelCard from "@src/components/carosuelCard";
import Carousel from "react-elastic-carousel";
import leftArrow from "@src/assets/leftArrow.svg";
import rightArrow from "@src/assets/rightArrow.svg";

const data = [
  {
    title: "Take a quiz!",
    subTitle: "Learn and earn $CKB",
    src: car1,
    id: 1,
  },
  {
    title: "Portfolio 🔥",
    subTitle: "Track your trades in one place,not all over the place",
    src: car2,
    id: 2,
  },
  {
    title: "Portfolio",
    subTitle: "Track your trades in one place,not all over the place",
    src: car3,
    id: 3,
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 3 },
];

function myArrow({ type, onClick, isEdge }) {
  const pointer =
    type === "NEXT" ? (
      <img src={rightArrow} alt="next" />
    ) : (
      <img src={leftArrow} alt="prev" />
    );
  return (
    <button onClick={onClick} className={`${isEdge && "invisible"}`}>
      {pointer}
    </button>
  );
}

const CarosuelContainer = () => {
  return (
    <Carousel breakPoints={breakPoints} renderArrow={myArrow} >
      {data.map((x) => (
        <CarosuelCard
          title={x.title}
          key={x.id}
          subTitle={x.subTitle}
          src={x.src}
        />
      ))}
    </Carousel>
  );
};

export default CarosuelContainer;
