import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Preview from '../preview/'



// eslint-disable-next-line react/prefer-stateless-function
class ThemeEdit extends Component {
  render() {
    return (
      <Row gutter="24">
        <Col span={12}>
          主题配置
        </Col>

        <Col span={12}>
          <Preview />
        </Col>
      </Row>
    )
  }
  
}

export default ThemeEdit;
