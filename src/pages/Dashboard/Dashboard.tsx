import React, { useMemo } from 'react';
import { DashBoardEvent, PageInner, PageSubTitle, PageTitle } from './style';
import { Search } from '../../components/Search';
import { DatePicker } from '../../components/DatePicker';
import { getTodayDate } from '../../utils';

export const Dashboard: React.FC = () => {
    const todayDate = useMemo(() => getTodayDate(), []);

    return (
        <>
            <PageInner>
                <PageTitle>Dashboard</PageTitle>
                <DashBoardEvent>
                    <Search />
                    <DatePicker />
                </DashBoardEvent>
            </PageInner>
            <PageSubTitle>Today, {todayDate}</PageSubTitle>
        </>
    );
};
