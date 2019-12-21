import React, { Component } from 'react';

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

// eslint-disable-next-line react/prefer-stateless-function
class Preview extends Component {
  state = {
    disabled: false,
    size: 'default',
  }

  render() {
    const { disabled, size } = this.state;

    return (
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
    );
  }
}

export default Preview;
