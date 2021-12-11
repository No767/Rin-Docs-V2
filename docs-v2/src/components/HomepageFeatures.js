import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'A Wide Collection and Amount of Supported Services',
    Svg: require('../../static/img/collection.svg').default,
    description: (
      <>
        Rin supports MyAnimeList, Hypixel, DeviantArt, Reddit, Instagram, and many many more.
      </>
    ),
  },
  {
    title: 'Fast and Optimized for Performance',
    Svg: require('../../static/img/fast.svg').default,
    description: (
      <>
        Rin is built with performance in mind, and returns information quickly so you don't have to waste more time.
      </>
    ),
  },
  {
    title: 'Open Source on GitHub',
    Svg: require('../../static/img/version-control.svg').default,
    description: (
      <>
        Rin is open source on GitHub, and is licensed under Apache-2.0. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
