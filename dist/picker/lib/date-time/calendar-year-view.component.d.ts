/**
 * calendar-year-view.component
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { SelectMode } from './date-time.class';
import * as i0 from "@angular/core";
export declare class OwlYearViewComponent<T> implements OnInit, AfterContentInit, OnDestroy {
    private cdRef;
    private dateTimeAdapter;
    private dateTimeFormats;
    /**
     * The select mode of the picker;
     * */
    private _selectMode;
    get selectMode(): SelectMode;
    set selectMode(val: SelectMode);
    /** The currently selected date. */
    private _selected;
    get selected(): T | null;
    set selected(value: T | null);
    private _selecteds;
    get selecteds(): T[];
    set selecteds(values: T[]);
    private _pickerMoment;
    get pickerMoment(): T;
    set pickerMoment(value: T);
    /**
     * A function used to filter which dates are selectable
     * */
    private _dateFilter;
    get dateFilter(): (date: T) => boolean;
    set dateFilter(filter: (date: T) => boolean);
    /** The minimum selectable date. */
    private _minDate;
    get minDate(): T | null;
    set minDate(value: T | null);
    /** The maximum selectable date. */
    private _maxDate;
    get maxDate(): T | null;
    set maxDate(value: T | null);
    private readonly monthNames;
    private _months;
    get months(): CalendarCell[][];
    get activeCell(): number;
    get isInSingleMode(): boolean;
    get isInRangeMode(): boolean;
    private localeSub;
    private initiated;
    todayMonth: number | null;
    /**
     * An array to hold all selectedDates' month value
     * the value is the month number in current year
     * */
    selectedMonths: number[];
    /**
     * Callback to invoke when a new month is selected
     * */
    readonly change: EventEmitter<T>;
    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     * */
    readonly monthSelected: EventEmitter<T>;
    /** Emits when any date is activated. */
    readonly pickerMomentChange: EventEmitter<T>;
    /** Emits when use keyboard enter to select a calendar cell */
    readonly keyboardEnter: EventEmitter<any>;
    /** The body of calendar table */
    calendarBodyElm: OwlCalendarBodyComponent;
    get owlDTCalendarView(): boolean;
    constructor(cdRef: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void;
    /**
     * Handle a new month selected
     */
    private selectMonth;
    /**
     * Handle keydown event on calendar body
     */
    handleCalendarKeydown(event: KeyboardEvent): void;
    /**
     * Generate the calendar month list
     * */
    private generateMonthList;
    /**
     * Creates an CalendarCell for the given month.
     */
    private createMonthCell;
    /**
     * Check if the given month is enable
     */
    private isMonthEnabled;
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    private getMonthInCurrentYear;
    /**
     * Set the selectedMonths value
     * In single mode, it has only one value which represent the month the selected date in
     * In range mode, it would has two values, one for the month the fromValue in and the other for the month the toValue in
     * */
    private setSelectedMonths;
    /**
     * Check the given dates are in the same year
     */
    private hasSameYear;
    /**
     * Get a valid date object
     */
    private getValidDate;
    private focusActiveCell;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlYearViewComponent<any>, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlYearViewComponent<any>, "owl-date-time-year-view", ["owlMonthView"], { "selectMode": "selectMode"; "selected": "selected"; "selecteds": "selecteds"; "pickerMoment": "pickerMoment"; "dateFilter": "dateFilter"; "minDate": "minDate"; "maxDate": "maxDate"; }, { "change": "change"; "monthSelected": "monthSelected"; "pickerMomentChange": "pickerMomentChange"; "keyboardEnter": "keyboardEnter"; }, never, never>;
}
