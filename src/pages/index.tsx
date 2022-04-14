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
    // showContent();
    gotoHome();
  }, 3000);

  function gotoHome() {
    history.push('./login');
  }

  return show ? (
    <div className={styles.container}>
      <h1 className={styles.title}>首页</h1>
      <Button className={styles.button} type="primary" onClick={gotoHome}>
        跳转详情
      </Button>
    </div>
  ) : (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>首页</h1> */}
      <PageLoading />
    </div>
  );
}
