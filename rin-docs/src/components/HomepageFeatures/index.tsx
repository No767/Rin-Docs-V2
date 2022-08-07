import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'A Wide Collection and Amount of Supported Services',
    Svg: require('@site/static/img/undraw-assets/options.svg').default,
    description: (
      <>
        Rin supports MyAnimeList, Hypixel, MangaDex, Reddit, AniList, and many many more.
      </>
    ),
  },
  {
    title: 'Fast and Optimized for Performance',
    Svg: require('@site/static/img/undraw-assets/fast.svg').default,
    description: (
      <>
        Rin is built with performance in mind, and returns information quickly so you don't have to waste more time.
      </>
    ),
  },
  {
    title: 'Open Source on GitHub',
    Svg: require('@site/static/img/undraw-assets/git.svg').default,
    description: (
      <>
        Rin is open source on GitHub, and is licensed under Apache-2.0.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
