import React from 'react';
import { Card } from 'antd';
import styles from './style.less';

const PreviewWrapper = ({ id, title, children }) => (
  <section id={id} className={styles.componentPreview}>
    <Card className="component-preview" bordered={false} title={title}>
      {children}
    </Card>
  </section>
);

export default PreviewWrapper;
