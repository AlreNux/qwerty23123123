export const getTodayDate = (): string => {
    const date = new Date();
    const day = date.toLocaleString('en-EN', { day: 'numeric' });
    const month = date.toLocaleString('en-EN', { month: 'long' });
    const year = date.toLocaleString('en-EN', { year: 'numeric' });
    return `${day} ${month} ${year}`;
};
