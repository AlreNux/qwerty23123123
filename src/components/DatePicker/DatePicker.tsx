import React from 'react';
import { DatePickerTextDate } from './style';
import CalendarIcon from '../../assets/dashboard/icon/calendar-icon.svg';
import { MastHeadBlock } from '../MastHeadBlock';

export const DatePicker: React.FC = () => (
    <MastHeadBlock theme="dataPicker" icon={CalendarIcon}>
        <DatePickerTextDate>17 May - 9 Jul</DatePickerTextDate>
    </MastHeadBlock>
);
