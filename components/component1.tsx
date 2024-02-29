import type { NextPage } from "next";
import styles from "./component1.module.css";

const Component1: NextPage = () => {
  return (
    <section className={styles.component1}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.arijitSingh1Parent}>
            <img
              className={styles.arijitSingh1}
              alt=""
              src="/arijit-singh-1@2x.png"
            />
            <div className={styles.vectorLine} />
          </div>
          <div className={styles.frameWithChoices}>
            <div className={styles.categoryFrame} />
            <h1 className={styles.dancers}>Dancers</h1>
            <h1 className={styles.singers}>Singers</h1>
          </div>
        </div>
        <div className={styles.clickToViewMore}>
          <div className={styles.clickHereTo}>Click here to view more</div>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/vector-210.svg"
        />
      </div>
      <div className={styles.nestedFrames}>
        <div className={styles.chooseAndCategories}>
          <div className={styles.chooseFrom100Container}>
            <span>Choose from</span>
            <span className={styles.categories}> 100+ Categories</span>
          </div>
          <div className={styles.allCategoriesButton}>
            <div className={styles.exploreAllCategories}>
              Explore all categories
            </div>
            <img
              className={styles.vectorArrowIcon}
              loading="lazy"
              alt=""
              src="/vector-209.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component1;
