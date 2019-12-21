import React, { Component } from 'react';
import { Switch, Radio, Form } from 'antd';

import {
  ColorPreview,
  TypographyPreview,
  ButtonPreview,
  RadioPreview,
  CheckboxPreview,
  InputPreview,
  SwitchPreview,
  SliderPreview,
  DatePickerPreview,
  RatePreview,
  TransferPreview,
  TablePreview,
  TagPreview,
  ProgressPreview,
  TreePreview,
  PaginationPreview,
  BadgePreview,
  AlertPreview,
  SpinPreview,
  MessagePreview,
  NotificationPreview,
  TabsPreview,
  MenuPreview,
  TooltipPreview,
  PopoverPreview,
  CardPreview,
  CarouselPreview,
  CollapsePreview,
  AvatarPreview,
  DropdownPreview,
  StepPreview,
  CascaderPreview,
  SelectPreview,
  TreeSelectPreview,
  TimePickerPreview,
  CalendarPreview,
  ListPreview,
  TimelinePreview,
  PopconfirmPreview,
  ModalPreview,
  FormPreview
} from '@/components/previews';

const { Item: FormItem } = Form;

// eslint-disable-next-line react/prefer-stateless-function
class Preview extends Component {
  state = {
    disabled: false,
    size: 'default',
  }

  handleToggle = prop => enable => {
    this.setState({ [prop]: enable });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { disabled, size, darkMenu, showBreadcrumb } = this.state;

    return (
      <div>
        <div>
          <Form layout="inline">
            <FormItem label="darkMenu">
              <Switch checked={darkMenu} onChange={this.handleToggle('darkMenu')} />
            </FormItem>
            <FormItem label="showBreadcrumb">
              <Switch checked={showBreadcrumb} onChange={this.handleToggle('showBreadcrumb')} />
            </FormItem>
            <FormItem label="disabled">
              <Switch checked={disabled} onChange={this.handleToggle('disabled')} />
            </FormItem>
            <FormItem label="Size">
              <Radio.Group size="default" value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="large">large</Radio.Button>
                <Radio.Button value="default">default</Radio.Button>
                <Radio.Button value="small">small</Radio.Button>
              </Radio.Group>
            </FormItem>
          </Form>
        </div>
        <div>
          <ColorPreview />
          <TypographyPreview />
          <ButtonPreview disabled={disabled} size={size} />
          <RadioPreview disabled={disabled} size={size} />
          <CheckboxPreview disabled={disabled} size={size} />
          <InputPreview disabled={disabled} size={size} />
          <SelectPreview disabled={disabled} size={size} />
          <TreeSelectPreview disabled={disabled} size={size} />
          <SwitchPreview disabled={disabled} size={size} />
          <SliderPreview disabled={disabled} size={size} />
          <DatePickerPreview disabled={disabled} size={size} />
          <TimePickerPreview disabled={disabled} size={size} />
          <RatePreview disabled={disabled} size={size} />
          <StepPreview disabled={disabled} size={size} />
          <CascaderPreview disabled={disabled} size={size} />
          <DropdownPreview disabled={disabled} size={size} />
          <TransferPreview disabled={disabled} size={size} />
          <FormPreview disabled={disabled} size={size} />
          <TablePreview disabled={disabled} size={size} />
          <PaginationPreview disabled={disabled} size={size} />
          <ProgressPreview disabled={disabled} size={size} />
          <TreePreview disabled={disabled} size={size} />
          <SpinPreview disabled={disabled} size={size} />
          <TabsPreview disabled={disabled} size={size} />
          <MenuPreview disabled={disabled} size={size} />
          <CardPreview disabled={disabled} size={size} />
          <CarouselPreview disabled={disabled} size={size} />
          <CollapsePreview disabled={disabled} size={size} />
          <AvatarPreview disabled={disabled} size={size} />
          <CalendarPreview disabled={disabled} size={size} />
          <ListPreview disabled={disabled} size={size} />
          <TimelinePreview disabled={disabled} size={size} />
          <TagPreview disabled={disabled} size={size} />
          <BadgePreview disabled={disabled} size={size} />
          <AlertPreview disabled={disabled} size={size} />
          <MessagePreview disabled={disabled} size={size} />
          <NotificationPreview disabled={disabled} size={size} />
          <TooltipPreview disabled={disabled} size={size} />
          <PopoverPreview disabled={disabled} size={size} />
          <PopconfirmPreview disabled={disabled} size={size} />
          <ModalPreview disabled={disabled} size={size} />
        </div>
      </div>
      
    );
  }
}

export default Preview;
