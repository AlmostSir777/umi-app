import * as React from 'react';
import styles from './index.less';

interface IHome1Props {
  childcount: number;
}

const Home1: React.FunctionComponent<IHome1Props> = (props) => {
  const { childcount } = props;
  return <div className={styles.home1Container}>数量--{childcount}</div>;
};

export default Home1;
