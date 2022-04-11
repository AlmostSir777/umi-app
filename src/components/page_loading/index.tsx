import React from 'react'
import { Spin } from 'antd'
import styles from './index.less'

const PageLoading: React.FC<{
  tip?: string
}> = ({ tip }) => (
  <div className={styles.loading}>
    <Spin size="large" tip={tip} />
  </div>
)

export default PageLoading
