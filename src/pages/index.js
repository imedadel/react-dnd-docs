import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Works with Your Components</>,
    description: (
      <>
        React DnD wraps your components and injects props into them. If you use React Router or Flummox, you already know this pattern.
      </>
    ),
  },
  {
    title: <>Embraces Unidirectional Data Flow</>,
    description: (
      <>
        React DnD fully embraces the declarative rendering paradigm of React and doesn't mutate the DOM. It is a great complement to Redux and other architectures with the unidirectional data flow. In fact it is built on Redux.
      </>
    ),
  },
  {
    title: <>Hides the Platform Quirks</>,
    description: (
      <>
        HTML5 drag and drop has an awkward API full of pitfalls and browser inconsistencies. React DnD handles them internally for you, so you can focus on developing your application instead of working around the browser bugs.
      </>
    ),
  },
  {
    title: <>Extensible and Testable</>,
    description: (
      <>
        React DnD uses the HTML5 drag and drop under the hood, but it also lets you supply a custom “backend”. You can create a custom DnD backend based on the touch events, the mouse events, or something else entirely.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} · ${siteConfig.tagline}`}
      description="React DnD is a drag and drop library for React built on top of the HTML5 drag and drop API to help you build complex interfaces while keeping your components decoupled" >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/overview')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
