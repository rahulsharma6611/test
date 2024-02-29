import type { NextPage } from "next";
import ActivityArea from "./activity-area";
import styles from "./late-night-party.module.css";

const LateNightParty: NextPage = () => {
  return (
    <div className={styles.lateNightParty}>
      <div className={styles.wrapperVectorIndicator}>
        <img
          className={styles.vectorIndicatorIcon}
          alt=""
          src="/vector-indicator.svg"
        />
      </div>
      <ActivityArea eventFrame="/frame-1321314913@2x.png" />
      <ActivityArea eventFrame="/frame-1321314913-1@2x.png" />
      <ActivityArea eventFrame="/frame-1321314913-2@2x.png" />
      <ActivityArea eventFrame="/frame-1321314913-3@2x.png" />
    </div>
  );
};

export default LateNightParty;
