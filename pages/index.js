import styles from "./index.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.homeParent}>
        <b className={styles.home}>Home</b>
        <b className={styles.about}>About</b>
        <b className={styles.contact}>Contact</b>
        <div className={styles.frameChild} />
        <b className={styles.selfMade}>Self Made</b>
        <img className={styles.frameItem} alt="" src="/ellipse-1.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameInner} />
        <div className={styles.heyThisIs}>Hey, This is just for Test</div>
        <div className={styles.letsLookUp}>Let’s Look Up</div>
        <img className={styles.starIcon} alt="" src="/star-1.svg" />
        <img className={styles.frameChild1} alt="" src="/star-2.svg" />
        <img className={styles.frameChild2} alt="" src="/star-3.svg" />
        <img
          className={styles.studentGc572bd76919201Icon}
          alt=""
          src="/studentgc572bd769-1920-1@2x.png"
        />
        <img
          className={styles.studentGc572bd76919202Icon}
          alt=""
          src="/studentgc572bd769-1920-2@2x.png"
        />
      </div>
      <div className={styles.logo1} />

      <div className={styles.addressContactContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Address :</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Contact No. 111-222-333</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>H-1 , Gali no. 4.</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>Test Nagar, Noida</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`Uttar Pradesh, `}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>1111111</p>
        <p className={styles.blankLine11}>&nbsp;</p>
      </div>
    </div>
  );
};

export default Desktop1;
