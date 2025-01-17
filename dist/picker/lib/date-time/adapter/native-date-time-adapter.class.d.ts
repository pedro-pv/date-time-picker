import { Platform } from '@angular/cdk/platform';
import { DateTimeAdapter } from './date-time-adapter.class';
import * as i0 from "@angular/core";
export declare class NativeDateTimeAdapter extends DateTimeAdapter<Date> {
    private owlDateTimeLocale;
    /** Whether to clamp the date between 1 and 9999 to avoid IE and Edge errors. */
    private readonly _clampDate;
    /**
     * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
     * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
     * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
     * will produce `'8/13/1800'`.
     */
    useUtcForDisplay: boolean;
    constructor(owlDateTimeLocale: string, platform: Platform);
    getYear(date: Date): number;
    getMonth(date: Date): number;
    getDay(date: Date): number;
    getDate(date: Date): number;
    getHours(date: Date): number;
    getMinutes(date: Date): number;
    getSeconds(date: Date): number;
    getTime(date: Date): number;
    getNumDaysInMonth(date: Date): number;
    differenceInCalendarDays(dateLeft: Date, dateRight: Date): number;
    getYearName(date: Date): string;
    getMonthNames(style: 'long' | 'short' | 'narrow'): string[];
    getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[];
    getDateNames(): string[];
    toIso8601(date: Date): string;
    isEqual(dateLeft: Date, dateRight: Date): boolean;
    isSameDay(dateLeft: Date, dateRight: Date): boolean;
    isValid(date: Date): boolean;
    invalid(): Date;
    isDateInstance(obj: any): boolean;
    addCalendarYears(date: Date, amount: number): Date;
    addCalendarMonths(date: Date, amount: number): Date;
    addCalendarDays(date: Date, amount: number): Date;
    setHours(date: Date, amount: number): Date;
    setMinutes(date: Date, amount: number): Date;
    setSeconds(date: Date, amount: number): Date;
    createDate(year: number, month: number, date: number, hours?: number, minutes?: number, seconds?: number): Date;
    clone(date: Date): Date;
    now(): Date;
    format(date: Date, displayFormat: any): string;
    parse(value: any, parseFormat: any): Date | null;
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    deserialize(value: any): Date | null;
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     */
    private stripDirectionalityCharacters;
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     */
    private _format;
    static ɵfac: i0.ɵɵFactoryDeclaration<NativeDateTimeAdapter, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NativeDateTimeAdapter>;
}
