import React, { Component } from 'react';
// import { Popover } from 'antd';
import { ChromePicker, SketchPicker, PhotoshopPicker } from 'react-color';
import './index.less';

// eslint-disable-next-line react/prefer-stateless-function
class ColorPicker extends Component {
  render() {
    return (
      <div>
        <SketchPicker />
        <PhotoshopPicker />
        <ChromePicker />
      </div>
    );
  }
}

export default ColorPicker;
