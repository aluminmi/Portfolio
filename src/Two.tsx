import type { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { useTypewriter } from './hooks/useTypewriter';
import { useScrollAnimation } from './hooks/usescrollanimation';
import styles from './Two.module.css';
import editedImg from './assets/images/edited.png';
import talentflowApplicant from './assets/images/talentflow-applicant.png';
import talentflowAdmin from './assets/images/talentflow-admin.png';
import assignmentTracker from './assets/images/tracker-assignments.png';
import contentTracker from './assets/images/tracker-content.png';
import aboutImg from './assets/images/aboutme-icon.png';
import arrowRight from './assets/icons/CaretCircleRight.svg';
import Facebook from './assets/icons/Facebook.svg';
import Instagram from './assets/icons/Instagram.svg';
import LinkedIn from './assets/icons/Linkedin.svg';
import Github from './assets/icons/GithubLogo.svg';

const dashboards = [
  {
    title: '2025 Philippine Elections',
    url: 'https://public.tableau.com/views/2025PhilippineElectionResults/Dashboard2?:embed=yes&:showVizHome=no&:toolbar=yes',
  },
  {
    title: 'Phivolcs Earthquake Analysis',
    url: 'https://public.tableau.com/views/PHIVOLCSEarthquakeAnalysisDashboard_17695817010720/Dashboard1?:embed=yes&:showVizHome=no&:toolbar=yes',
  },
];

const TableauSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i - 1 + dashboards.length) % dashboards.length);
  const next = () => setCurrent((i) => (i + 1) % dashboards.length);

  return (
    <div className={styles.slideshowWrapper}>
      <div className={styles.slideshowHeader}>
        <button className={styles.slideBtn} onClick={prev}>←</button>
        <span className={styles.slideTitle}>{dashboards[current].title}</span>
        <button className={styles.slideBtn} onClick={next}>→</button>
      </div>
      <div className={styles.slideshowDots}>
        {dashboards.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <iframe
        key={current}
        src={dashboards[current].url}
        className={styles.tableauFrame}
        allowFullScreen
      />
    </div>
  );
};

const Two: FunctionComponent = () => {
  const role = useTypewriter({
    words: [
      'A Writer',
      'A Researcher',
      'A Problem Solver',
      'A Visual Storyteller',
      'A UI/UX Enthusiast',
    ],
    typingSpeed: 80,
    deletingSpeed: 45,
    pauseDuration: 2000,
  });

  useScrollAnimation();
  const [navScrolled, setNavScrolled] = useState(false);

useEffect(() => {
  
  const handleScroll = () => setNavScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

    

  return (
    <div className={styles.two}>

      {/* ── Nav ── */}
      <nav className={`${styles.homeParent} ${navScrolled ? styles.navScrolled : ''}`}>
        <a href="#home"    className={styles.navLink} onClick={e => scrollToSection(e, 'home')}>Home</a>
        <a href="#work"    className={styles.navLink} onClick={e => scrollToSection(e, 'work')}>Work</a>
        <a href="#about"   className={styles.navLink} onClick={e => scrollToSection(e, 'about')}>About</a>
        <a href="#contact" className={styles.navLink} onClick={e => scrollToSection(e, 'contact')}>Contact</a>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className={`${styles.heroSection} fadeUp`}>
        <div className={styles.heroLeft}>
          <div className={styles.frameGroup}>
            <div className={styles.helloAllWrapper}>
              <div className={styles.helloAll}>👋 Hello!</div>
            </div>
            <div className={styles.imShambhaviA}>
              I'm Naomi,
              <br />
              <span>{role}</span>
              <span className={styles.cursor}>|</span>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <a href="#work" className={styles.frameWrapper}>
              <div className={styles.viewMyWorkParent}>
                <span className={styles.helloAll}>View My Work</span>
                <img src={arrowRight} className={styles.chevronRightSquareIcon} alt="" />
              </div>
            </a>
            <a href="#contact" className={styles.frameDiv}>
              <div className={styles.contactMeWrapper}>
                <span className={styles.helloAll}>Contact Me</span>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src={editedImg} alt="Naomi" className={styles.heroImage} />
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className={`${styles.twoInner} fadeUp`}>
        <div className={`${styles.aLittleBitAboutMeParent} fadeUp ${styles.delay1}`}>
          <div className={styles.aLittleBit}>Driven by Data and Purpose</div>
          <div className={styles.iAmShambhaviMishraFromLucParent}>
            <div className={styles.iAmShambhavi}>
               My name is Naomi Hannah Cuerdo, a fresh graduate (graduating this July!) with 
               a Bachelor of Science in Applied Mathematics major in Data Science 
               from Far Eastern University Manila. I am someone who  who enjoys 
               combining analytics, technology, and storytelling to solve real-world problems.
            </div>
            <div className={styles.iAmShambhavi}>
              Whether I’m building dashboards or fact-checking information for media platforms,
               I enjoy creating work that is both meaningful and people-centered. 
               I’m passionate about learning, collaboration, and using data to drive smarter decisions.
            </div>
          </div>
        </div>
        <img
          src={aboutImg}
          className={`${styles.frame69} fadeUp ${styles.delay2}`}
          alt="Naomi Hannah Cuerdo"
        />
      </section>

      {/* ── Recent Work ── */}
      <section id="work" className={styles.twoInner2}>
        <div className={styles.frameParent5}>

          <div className="fadeUp">
            <div className={styles.aLittleBit}>My Recent Work</div>
          </div>

          {/* Tableau Dashboards */}
          <div className={`${styles.workCategory} fadeUp ${styles.delay1}`}>
            <div className={styles.categoryLabel}>Tableau Dashboards</div>
            <div className={styles.workCardWide}>
              <div className={styles.cardTag}>Tableau</div>
              <TableauSlideshow />
            </div>
          </div>

          {/* Websites */}
          <div className={`${styles.workCategory} fadeUp ${styles.delay2}`}>
            <div className={styles.categoryLabel}>Websites</div>
            <div className={styles.workCardsColumn}>

              <a href="https://green-prong-55128060.figma.site" target="_blank" rel="noreferrer" className={styles.workCardWideLink}>
                <div className={styles.workCardHorizontal}>
                  <div className={styles.workCardText}>
                    <div className={styles.cardTag}>Figma Design Mock-Up</div>
                    <div className={styles.helloAll}>TalentFlow Applicant Website</div>
                    <div className={styles.designedSomeEmpty}>Applicant-facing website for the TalentFlow recruitment platform.</div>
                    <div className={styles.viewCaseStudy}>View Site →</div>
                  </div>
                  <div className={styles.workCardImageWrap}>
                    <img src={talentflowApplicant} alt="TalentFlow Applicant Website" className={styles.workCardImage} />
                  </div>
                </div>
              </a>

              <a href="https://hot-violin-55258143.figma.site" target="_blank" rel="noreferrer" className={styles.workCardWideLink}>
                <div className={styles.workCardHorizontal}>
                  <div className={styles.workCardText}>
                    <div className={styles.cardTag}>Figma Design Mock-Up</div>
                    <div className={styles.helloAll}>TalentFlow Admin Portal</div>
                    <div className={styles.designedSomeEmpty}>Admin dashboard for managing applicants, jobs, and hiring pipelines.</div>
                    <div className={styles.viewCaseStudy}>View Site →</div>
                  </div>
                  <div className={styles.workCardImageWrap}>
                    <img src={talentflowAdmin} alt="TalentFlow Admin Portal" className={styles.workCardImage} />
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* Rappler Articles */}
          <div className={`${styles.workCategory} fadeUp ${styles.delay3}`}>
            <div className={styles.categoryLabel}>Articles for Rappler</div>
            <div className={styles.cardsRow}>

              <a href="https://www.rappler.com/newsbreak/fact-check/photo-bedridden-rodrigo-duterte-fake-digitally-altered/" target="_blank" rel="noreferrer" className={styles.workCardLink}>
                <div className={styles.workCardSmall}>
                  <div className={styles.cardTag}>Fact Check</div>
                  <div className={styles.helloAll}>Duterte Bedridden Photo</div>
                  <div className={styles.designedSomeEmpty}>Fact-check on a viral photo claiming to show a bedridden Rodrigo Duterte.</div>
                  <div className={styles.viewCaseStudy}>Read Article →</div>
                </div>
              </a>

              <a href="https://www.rappler.com/world/video-does-not-show-last-moments-air-india-crash/" target="_blank" rel="noreferrer" className={styles.workCardLink}>
                <div className={styles.workCardSmall}>
                  <div className={styles.cardTag}>Fact Check</div>
                  <div className={styles.helloAll}>Air India Crash Video</div>
                  <div className={styles.designedSomeEmpty}>Debunking a viral video falsely claiming to show the last moments of the Air India crash.</div>
                  <div className={styles.viewCaseStudy}>Read Article →</div>
                </div>
              </a>

              <a href="https://www.rappler.com/newsbreak/fact-check/viral-video-smoke-filled-plane-cabin-not-related-air-india-crash/" target="_blank" rel="noreferrer" className={styles.workCardLink}>
                <div className={styles.workCardSmall}>
                  <div className={styles.cardTag}>Fact Check</div>
                  <div className={styles.helloAll}>Smoke-Filled Cabin Video</div>
                  <div className={styles.designedSomeEmpty}>Viral smoke-filled plane cabin video verified as unrelated to the Air India crash.</div>
                  <div className={styles.viewCaseStudy}>Read Article →</div>
                </div>
              </a>

            </div>
          </div>

          {/* Google Sheet Trackers */}
          <div className={`${styles.workCategory} fadeUp ${styles.delay4}`}>
            <div className={styles.categoryLabel}>Google Sheet Trackers</div>
            <div className={styles.workCardsColumn}>

              <a href="https://docs.google.com/spreadsheets/d/1R_sYsOYOX770t326ovsrr2Lb6rAUHIttZmUpW5j7Iw4/edit?usp=sharing" target="_blank" rel="noreferrer" className={styles.workCardWideLink}>
                <div className={styles.workCardHorizontal}>
                  <div className={styles.workCardText}>
                    <div className={styles.cardTag}>Tracker</div>
                    <div className={styles.helloAll}>Assignment Tracker</div>
                    <div className={styles.designedSomeEmpty}>A basic tracker for all my deadlines and assignments.</div>
                    <div className={styles.viewCaseStudy}>View Tracker →</div>
                  </div>
                  <div className={styles.workCardImageWrap}>
                    <img src={assignmentTracker} alt="Assignment Tracker" className={styles.workCardImage} />
                  </div>
                </div>
              </a>

              <a href="https://docs.google.com/spreadsheets/d/1mSICzzZQlZASkNL11qkPfX4SY5h08nF8VlKejbwkuDc/edit?usp=sharing" target="_blank" rel="noreferrer" className={styles.workCardWideLink}>
                <div className={styles.workCardHorizontal}>
                  <div className={styles.workCardText}>
                    <div className={styles.cardTag}>Tracker</div>
                    <div className={styles.helloAll}>Content Tracker</div>
                    <div className={styles.designedSomeEmpty}>A tracker I made for our student council to manage content creation and operations.</div>
                    <div className={styles.viewCaseStudy}>View Tracker →</div>
                  </div>
                  <div className={styles.workCardImageWrap}>
                    <img src={contentTracker} alt="Content Tracker" className={styles.workCardImage} />
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </section>


      {/* ── CTA / Footer ── */}
      <section id="contact" className={`${styles.twoChild} fadeUp`}>
        <div className={styles.letsWorkTogetherAndMakeEParent}>
          <div className={styles.letsWorkTogether}>
            Let's work together!
          </div>
          <a href="mailto:nhacuerdo@email.com" className={styles.frameWrapper3Small}>
            Contact Me
          </a>
        </div>
        <div className={styles.dribbbleParent}>
          <a href="https://www.facebook.com/naomihac/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={Facebook} className={styles.dribbbleIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com/naomihac" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={Instagram} className={styles.dribbbleIcon} alt="Instagram" />
          </a>
          <a href="https://linkedin.com/in/nhacuerdo" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={LinkedIn} className={styles.dribbbleIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/aluminmi" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <img src={Github} className={styles.dribbbleIcon} alt="Github" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Two;