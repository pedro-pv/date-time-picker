/**
 * calendar-month-view.component
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { SelectMode } from './date-time.class';
import * as i0 from "@angular/core";
export declare class OwlMonthViewComponent<T> implements OnInit, AfterContentInit, OnDestroy {
    private cdRef;
    private dateTimeAdapter;
    private dateTimeFormats;
    /**
     * Whether to hide dates in other months at the start or end of the current month.
     * */
    hideOtherMonths: boolean;
    private isDefaultFirstDayOfWeek;
    /**
     * Define the first day of a week
     * Sunday: 0 - Saturday: 6
     * */
    private _firstDayOfWeek;
    get firstDayOfWeek(): number;
    set firstDayOfWeek(val: number);
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
    private _weekdays;
    get weekdays(): {
        long: string;
        short: string;
        narrow: string;
    }[];
    private _days;
    get days(): CalendarCell[][];
    get activeCell(): number;
    get isInSingleMode(): boolean;
    get isInRangeMode(): boolean;
    private firstDateOfMonth;
    private localeSub;
    private initiated;
    private dateNames;
    /**
     * The date of the month that today falls on.
     * */
    todayDate: number | null;
    /**
     * An array to hold all selectedDates' value
     * the value is the day number in current month
     * */
    selectedDates: number[];
    firstRowOffset: number;
    /**
     * Callback to invoke when a new date is selected
     * */
    readonly selectedChange: EventEmitter<T>;
    /**
     * Callback to invoke when any date is selected.
     * */
    readonly userSelection: EventEmitter<void>;
    /** Emits when any date is activated. */
    readonly pickerMomentChange: EventEmitter<T>;
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
     * Handle a new date selected
     */
    private selectDate;
    /**
     * Handle keydown event on calendar body
     */
    handleCalendarKeydown(event: KeyboardEvent): void;
    /**
     * Generate the calendar weekdays array
     * */
    private generateWeekDays;
    /**
     * Generate the calendar days array
     * */
    private generateCalendar;
    private updateFirstDayOfWeek;
    /**
     * Creates CalendarCell for days.
     */
    private createDateCell;
    /**
     * Check if the date is valid
     */
    private isDateEnabled;
    /**
     * Get a valid date object
     */
    private getValidDate;
    /**
     * Check if the give dates are none-null and in the same month
     */
    isSameMonth(dateLeft: T, dateRight: T): boolean;
    /**
     * Set the selectedDates value.
     * In single mode, it has only one value which represent the selected date
     * In range mode, it would has two values, one for the fromValue and the other for the toValue
     * */
    private setSelectedDates;
    private focusActiveCell;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlMonthViewComponent<any>, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlMonthViewComponent<any>, "owl-date-time-month-view", ["owlYearView"], { "hideOtherMonths": "hideOtherMonths"; "firstDayOfWeek": "firstDayOfWeek"; "selectMode": "selectMode"; "selected": "selected"; "selecteds": "selecteds"; "pickerMoment": "pickerMoment"; "dateFilter": "dateFilter"; "minDate": "minDate"; "maxDate": "maxDate"; }, { "selectedChange": "selectedChange"; "userSelection": "userSelection"; "pickerMomentChange": "pickerMomentChange"; }, never, never>;
}
