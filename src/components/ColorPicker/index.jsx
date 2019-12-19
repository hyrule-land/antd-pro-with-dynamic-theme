import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import {
  AlphaPicker, BlockPicker, ChromePicker, CirclePicker,
  CompactPicker, GithubPicker, HuePicker, MaterialPicker,
  PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker, TwitterPicker } from 'react-color';
import styles from './index.less';
import './rewriteStyle.less';

const noop = () => { };

const pickers = {
  AlphaPicker, BlockPicker, ChromePicker, CirclePicker,
  CompactPicker, GithubPicker, HuePicker, MaterialPicker,
  PhotoshopPicker, SketchPicker, SliderPicker, SwatchesPicker, TwitterPicker
};

// eslint-disable-next-line react/prefer-stateless-function
class ColorPicker extends Component {
  static defaultProps = {
    onChangeComplete: noop,
    onChange: noop,
    type: 'PhotoshopPicker',
    color: '#fff',
  }

  state = {
    color: this.props.color,
  };

  handleChangeComplete = color => {
    const { onChangeComplete } = this.props;
    this.setState({ color: color.hex });
    onChangeComplete(color.hex, color);
  }

  handleChange = color => {
    const { onChange } = this.props;
    this.setState({ color: color.hex });
    onChange(color.hex, color);
  }

  render() {
    const { color } = this.state;
    const { type } = this.props;

    const Picker = pickers[type];

    const picker = (
      <Picker
        color={color}
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
      />
    )

    const swatch = (
      <div className={styles.swatch}>
        <div
          className={styles.color}
          style={{
            background: color,
          }}
        />
      </div>
    );

    return (
      <Popover
        overlayClassName="color-popover"
        title={false}
        trigger="click"
        content={picker}
      >
        {swatch}
      </Popover>
    );
  }
}

ColorPicker.propTypes = {
  onChangeComplete: PropTypes.func,
  onChange: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.oneOf(['AlphaPicker', 'BlockPicker', 'ChromePicker', 'CirclePicker',
    'CompactPicker', 'GithubPicker', 'HuePicker', 'MaterialPicker',
    'PhotoshopPicker', 'SketchPicker', 'SliderPicker', 'SwatchesPicker', 'TwitterPicker']),
}

export default ColorPicker;
