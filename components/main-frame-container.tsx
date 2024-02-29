import type { NextPage } from "next";
import styles from "./main-frame-container.module.css";

const MainFrameContainer: NextPage = () => {
  return (
    <section className={styles.mainFrameContainer}>
      <div className={styles.component25}>
        <div className={styles.arijitSingh1Parent}>
          <img
            className={styles.arijitSingh1}
            alt=""
            src="/arijit-singh-1@2x.png"
          />
          <div className={styles.frameChild} />
        </div>
        <div className={styles.dancers}>Dancers</div>
        <div className={styles.singers}>Singers</div>
        <div className={styles.nestedFrameGroup}>
          <div className={styles.frameParent}>
            <div className={styles.frameFrameParent}>
              <img
                className={styles.frameFrameIcon}
                alt=""
                src="/frame-frame@2x.png"
              />
              <div className={styles.emptyFrame}>
                <img
                  className={styles.frameCallToAction}
                  alt=""
                  src="/frame-call-to-action@2x.png"
                />
                <img
                  className={styles.frameCallToAction1}
                  alt=""
                  src="/frame-call-to-action@2x.png"
                />
                <img
                  className={styles.frameInstanceIcon}
                  alt=""
                  src="/frame-instance@2x.png"
                />
                <img
                  className={styles.frameInstanceIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-1321314599@2x.png"
                />
              </div>
            </div>
            <div className={styles.categoriesFrameGroup}>
              <div className={styles.frameInstance}>
                <div className={styles.clickableFrameCallToAction}>
                  <h2 className={styles.chooseFrom100Container}>
                    <span>Choose from</span>
                    <span className={styles.categories}> 100+ Categories</span>
                  </h2>
                  <div className={styles.exploreAll}>
                    <div className={styles.exploreAllCategories} />
                    <img
                      className={styles.exploreAllChild}
                      alt=""
                      src="/vector-209.svg"
                    />
                  </div>
                </div>
                <div className={styles.clickHereForPrototypeWrapper}>
                  <div className={styles.clickHereFor}>
                    Click here for prototype
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFrameContainer;
