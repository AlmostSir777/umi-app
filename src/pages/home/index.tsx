import { useState, useEffect } from 'react';
import Home1 from './components/homeContent';
import { add } from '../../../utils/util';
import styles from './index.less';
import { Button } from 'antd';

import * as React from 'react';
import { history } from 'umi';

interface IHomeProps {
  childCount: number;
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [count, setCount] = useState<number>(10);
  const [show, setShow] = useState<boolean>(false);
  function addCount() {
    var num = add(count, 10);
    setCount(num);
    checkCount(num);
  }

  function deleteCount() {
    var num = add(count, -10);
    setCount(num);
    checkCount(num);
    // history.goBack();
  }

  function checkCount(num: number) {
    if (num >= 100) {
      if (!show) setShow(true);
    } else {
      if (show) {
        setCount(10);
        setShow(false);
      }
    }
  }

  return show ? (
    <div className={styles.homeContainer}>
      <Button className={styles.button} onClick={deleteCount}>
        还原
      </Button>
    </div>
  ) : (
    <div className={styles.homeContainer}>
      <span className={styles.content}>home父组件的内容数字是{count}</span>
      <Button className={styles.button} onClick={addCount}>
        增加
      </Button>
      <Home1 childcount={count}></Home1>
    </div>
  );
};

export default Home;
