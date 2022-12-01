/**
 * A little helper class (Extended-Date), for allowing destructuring of a date
 * */
declare class EDate extends Date {
    get fullYear(): number;
    get month(): number;
    get date(): number;
}
export default EDate;
