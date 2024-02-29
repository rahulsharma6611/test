import type { NextPage } from "next";
import styles from "./component.module.css";

const Component: NextPage = () => {
  return (
    <div className={styles.component47}>
      <div className={styles.chooseCats}>
        <div className={styles.ellipseShape} />
        <div className={styles.frameParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.catBrowseIcon}
            loading="lazy"
            alt=""
            src="/frame-1321315107@2x.png"
          />
        </div>
        <img
          className={styles.frameInstIcon}
          loading="lazy"
          alt=""
          src="/frame-1321315111@2x.png"
        />
        <img
          className={styles.frameInstIcon1}
          loading="lazy"
          alt=""
          src="/frame-1321315113@2x.png"
        />
        <img
          className={styles.frameInstIcon2}
          loading="lazy"
          alt=""
          src="/frame-1321315110@2x.png"
        />
        <div className={styles.membersTextParent}>
          <button className={styles.membersText}>
            <div className={styles.categoriesText}>{`<-`}</div>
          </button>
          <button className={styles.membersText1}>
            <div className={styles.div}>{`->`}</div>
          </button>
        </div>
      </div>
      <div className={styles.meetOurStarclinch}>Meet Our Starclinch Squads</div>
      <div className={styles.starclinchTeam}>
        <div className={styles.wrapperActivitySlider}>
          <img
            className={styles.activitySliderIcon}
            loading="lazy"
            alt=""
            src="/frame-1321315109@2x.png"
          />
        </div>
        <div className={styles.lateNightMaggie}>
          <div className={styles.boostParty}>
            <button className={styles.membersArea}>
              <div className={styles.members}>5 Members</div>
            </button>
            <div className={styles.starclinchTeam1}>
              <div className={styles.designDynamos}>Design Dynamos</div>
              <div className={styles.theArtistsBehind}>
                The artists behind the visuals. These design superheroes bring
                ideas to life, painting our projects with creativity and
                imagination
              </div>
            </div>
          </div>
          <div className={styles.designDynamos1}>
            <div className={styles.ourDesignTeam}>
              Our design team is growing. Apply Now
            </div>
            <img
              className={styles.designDynamosChild}
              loading="lazy"
              alt=""
              src="/group-1321314281@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
