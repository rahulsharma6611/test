import type { NextPage } from "next";
import styles from "./surveys.module.css";

const Surveys: NextPage = () => {
  return (
    <header className={styles.surveys}>
      <div className={styles.header}>
        <div className={styles.starclinch}>StarClinch</div>
        <div className={styles.screenshotAt}>
          <div className={styles.reportingFindings}>
            <div className={styles.bookCelebrities}>Book Celebrities</div>
            <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          </div>
          <div className={styles.joinCommunity}>Join Community</div>
          <div className={styles.postYourRequirements}>
            Post Your Requirements
          </div>
        </div>
      </div>
    </header>
  );
};

export default Surveys;
