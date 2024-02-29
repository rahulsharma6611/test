import type { NextPage } from "next";
import Surveys from "../components/surveys";
import Component1 from "../components/component1";
import MainFrameContainer from "../components/main-frame-container";
import Component from "../components/component";
import LateNightParty from "../components/late-night-party";
import styles from "./index.module.css";

const OurTeam: NextPage = () => {
  return (
    <div className={styles.ourTeam}>
      <Surveys />
      <Component1 />
      <MainFrameContainer />
      <section className={styles.starclinchSquads}>
        <div className={styles.componentInst}>
          <Component />
          <LateNightParty />
        </div>
      </section>
      <section className={styles.missionvisionAnimation}>
        <div className={styles.frameParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <img
            className={styles.anotherFrameIcon}
            alt=""
            src="/another-frame@2x.png"
          />
          <img
            className={styles.anotherFrameIcon1}
            loading="lazy"
            alt=""
            src="/frame-1321314984@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
