import type { NextPage } from "next";
import styles from "./activity-area.module.css";

export type ActivityAreaType = {
  eventFrame?: string;
};

const ActivityArea: NextPage<ActivityAreaType> = ({ eventFrame }) => {
  return (
    <div className={styles.activityArea}>
      <div className={styles.activitySlider}>
        <div className={styles.lateNightMaggie}>
          Late Night Maggie Party for the boost
        </div>
        <img
          className={styles.eventFrameIcon}
          loading="lazy"
          alt=""
          src={eventFrame}
        />
      </div>
    </div>
  );
};

export default ActivityArea;
