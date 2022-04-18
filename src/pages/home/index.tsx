import { useState, useEffect } from 'react';
import Home1 from './components/homeContent';
import { add } from '../../../utils/util';
import styles from './index.less';
import { Button } from 'antd';

import type { FC } from 'react';
import type { Dispatch } from 'umi';
import { connect } from 'umi';

import * as React from 'react';
import { history } from 'umi';

interface HomeProps {
  dispatch: Dispatch;
  home: any;
  loading: boolean;
}

const HomeView: FC<HomeProps> = ({ home, dispatch, loading }) => {
  const { count, show } = home;

  const addCount = () => {
    console.log('点击了增加');
    dispatch({
      type: 'home/addCount',
      payload: {
        count: count,
      },
    });
  };

  const deleteCount = () => {
    console.log('点击了back');
    dispatch({
      type: 'home/back',
      payload: {
        count: count,
      },
    });
  };
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

export default connect(({ home, loading }: { home: any; loading: any }) => ({
  home,
  loading: loading.models.home,
}))(HomeView);
