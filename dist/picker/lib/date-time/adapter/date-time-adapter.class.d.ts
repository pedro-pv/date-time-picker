/**
 * date-time-adapter.class
 */
import { Observable, Subject } from 'rxjs';
import { InjectionToken } from '@angular/core';
/** InjectionToken for date time picker that can be used to override default locale code. */
export declare const OWL_DATE_TIME_LOCALE: InjectionToken<string>;
/** @docs-private */
export declare function OWL_DATE_TIME_LOCALE_FACTORY(): string;
/** Provider for OWL_DATE_TIME_LOCALE injection token. */
export declare const OWL_DATE_TIME_LOCALE_PROVIDER: {
    provide: InjectionToken<string>;
    useExisting: InjectionToken<string>;
};
export declare abstract class DateTimeAdapter<T> {
    /** The locale to use for all dates. */
    protected locale: any;
    /** A stream that emits when the locale changes. */
    protected _localeChanges: Subject<string>;
    get localeChanges(): Observable<string>;
    /** total milliseconds in a day. */
    protected readonly millisecondsInDay = 86400000;
    /** total milliseconds in a minute. */
    protected readonly milliseondsInMinute = 60000;
    /**
     * Get the year of the given date
     */
    abstract getYear(date: T): number;
    /**
     * Get the month of the given date
     * 0 -- January
     * 11 -- December
     * */
    abstract getMonth(date: T): number;
    /**
     * Get the day of the week of the given date
     * 0 -- Sunday
     * 6 -- Saturday
     * */
    abstract getDay(date: T): number;
    /**
     * Get the day num of the given date
     */
    abstract getDate(date: T): number;
    /**
     * Get the hours of the given date
     */
    abstract getHours(date: T): number;
    /**
     * Get the minutes of the given date
     */
    abstract getMinutes(date: T): number;
    /**
     * Get the seconds of the given date
     */
    abstract getSeconds(date: T): number;
    /**
     * Get the milliseconds timestamp of the given date
     */
    abstract getTime(date: T): number;
    /**
     * Gets the number of days in the month of the given date.
     */
    abstract getNumDaysInMonth(date: T): number;
    /**
     * Get the number of calendar days between the given dates.
     * If dateLeft is before dateRight, it would return positive value
     * If dateLeft is after dateRight, it would return negative value
     */
    abstract differenceInCalendarDays(dateLeft: T, dateRight: T): number;
    /**
     * Gets the name for the year of the given date.
     */
    abstract getYearName(date: T): string;
    /**
     * Get a list of month names
     */
    abstract getMonthNames(style: 'long' | 'short' | 'narrow'): string[];
    /**
     * Get a list of week names
     */
    abstract getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];
    /**
     * Gets a list of names for the dates of the month.
     */
    abstract getDateNames(): string[];
    /**
     * Return a Date object as a string, using the ISO standard
     */
    abstract toIso8601(date: T): string;
    /**
     * Check if the give dates are equal
     */
    abstract isEqual(dateLeft: T, dateRight: T): boolean;
    /**
     * Check if the give dates are the same day
     */
    abstract isSameDay(dateLeft: T, dateRight: T): boolean;
    /**
     * Checks whether the given date is valid.
     */
    abstract isValid(date: T): boolean;
    /**
     * Gets date instance that is not valid.
     */
    abstract invalid(): T;
    /**
     * Checks whether the given object is considered a date instance by this DateTimeAdapter.
     */
    abstract isDateInstance(obj: any): boolean;
    /**
     * Add the specified number of years to the given date
     */
    abstract addCalendarYears(date: T, amount: number): T;
    /**
     * Add the specified number of months to the given date
     */
    abstract addCalendarMonths(date: T, amount: number): T;
    /**
     * Add the specified number of days to the given date
     */
    abstract addCalendarDays(date: T, amount: number): T;
    /**
     * Set the hours to the given date.
     */
    abstract setHours(date: T, amount: number): T;
    /**
     * Set the minutes to the given date.
     */
    abstract setMinutes(date: T, amount: number): T;
    /**
     * Set the seconds to the given date.
     */
    abstract setSeconds(date: T, amount: number): T;
    /**
     * Creates a date with the given year, month, date, hour, minute and second. Does not allow over/under-flow of the
     * month and date.
     */
    abstract createDate(year: number, month: number, date: number): T;
    abstract createDate(year: number, month: number, date: number, hours: number, minutes: number, seconds: number): T;
    /**
     * Clone the given date
     */
    abstract clone(date: T): T;
    /**
     * Get a new moment
     * */
    abstract now(): T;
    /**
     * Formats a date as a string according to the given format.
     */
    abstract format(date: T, displayFormat: any): string;
    /**
     * Parse a user-provided value to a Date Object
     */
    abstract parse(value: any, parseFormat: any): T | null;
    /**
     * Compare two given dates
     * 1 if the first date is after the second,
     * -1 if the first date is before the second
     * 0 if dates are equal.
     * */
    compare(first: T, second: T): number;
    /**
     * Check if two given dates are in the same year
     * 1 if the first date's year is after the second,
     * -1 if the first date's year is before the second
     * 0 if two given dates are in the same year
     * */
    compareYear(first: T, second: T): number;
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     */
    deserialize(value: any): T | null;
    /**
     * Sets the locale used for all dates.
     */
    setLocale(locale: string): void;
    /**
    * Get the locale used for all dates.
    * */
    getLocale(): any;
    /**
     * Clamp the given date between min and max dates.
     */
    clampDate(date: T, min?: T | null, max?: T | null): T;
}
