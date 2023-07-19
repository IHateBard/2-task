import "./balls.css";

import PurpleBall from "./purpleBall";
import RebBallSmall from "./reBallSmall";
import RedBall from "./redBall";
import RedLight from "./redLight";

const Balls = () => {
  return (
    <>
      <RedBall />
      <PurpleBall />;
      <RedLight />
      <RebBallSmall />
    </>
  );
};

export default Balls;
