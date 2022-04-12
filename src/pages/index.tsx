import styles from './index.less';
import PageLoading from '@/components/page_loading';
import { useState } from 'react';
import { Button } from 'antd';
import { history } from 'umi';

export default function IndexPage() {
  const [show, setShow] = useState<Boolean>(false);

  function showContent() {
    setShow(true);
  }

  setTimeout(() => {
    showContent();
  }, 3000);

  function gotoHome() {
    history.push('./home');
  }

  return show ? (
    <div className={styles.container}>
      <h1 className={styles.title}>Page index</h1>
      <Button className={styles.button} type="primary" onClick={gotoHome}>
        跳转
      </Button>
    </div>
  ) : (
    <div className={styles.container}>
      <h1 className={styles.title}>Page index</h1>
      <PageLoading />
    </div>
  );
}
