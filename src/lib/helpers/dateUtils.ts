/**
 * Calculates the number of days between the two given dates.
 * 
 * @param date1
 * @param date2
 * @returns 
 */
export function getDifferenceInDays(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    // Calculate the difference in time between the two dates
    const diffTime = secondDate.getTime() - firstDate.getTime();
    if (diffTime === 0) {
        return 0;
    }

    // Calculate the difference in days
    const diffDays = Math.round(diffTime / oneDay);

    return diffDays;
}
