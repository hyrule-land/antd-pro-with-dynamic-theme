import React, { Component } from 'react';
import { Button, message } from 'antd';
import ColorPicker from '@/components/ColorPicker/';
import styles from './index.less';

// eslint-disable-next-line react/prefer-stateless-function
class Demo extends Component {
  state = {
    color: '#fff'
  }

  test = () => {

  }

  onColorPickerChange = (colorHex, color) => {
    console.log(colorHex, color);
    this.setState({
      color: colorHex,
    })
  }

  onChangeComplete = (colorHex, color) => {
    window.less
      .modifyVars({
        '@primary-color': colorHex,
      })
      .then(() => {
        message.success('update primary color successful!!!');
      })
      .catch(() => {
        message.error('Failed to update primary color');
      });
  }

  render() {
    const { color } = this.state;

    return (
      <div
        className={styles.container}
        style={{
          background: color
        }}
      >
        <Button onClick={this.test}>测试</Button>
        <ColorPicker
          type="SketchPicker"
          color="blue"
          onChange={this.onColorPickerChange}
          onChangeComplete={this.onChangeComplete}
        />

        <ColorPicker
          type="SwatchesPicker"
          color="yellow"
          onChange={this.onColorPickerChange}
          onChangeComplete={this.onChangeComplete}
        />
      </div>
    );
  }
}

export default Demo;
