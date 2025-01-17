/**
 * calendar-multi-year-view.component
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { CalendarCell, OwlCalendarBodyComponent } from './calendar-body.component';
import { SelectMode } from './date-time.class';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import * as i0 from "@angular/core";
export declare class OwlMultiYearViewComponent<T> implements OnInit, AfterContentInit {
    private cdRef;
    private pickerIntl;
    private dateTimeAdapter;
    private options;
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
    private _todayYear;
    get todayYear(): number;
    private _years;
    get years(): CalendarCell[][];
    private _selectedYears;
    get selectedYears(): number[];
    private initiated;
    get isInSingleMode(): boolean;
    get isInRangeMode(): boolean;
    get activeCell(): number;
    get tableHeader(): string;
    get prevButtonLabel(): string;
    get nextButtonLabel(): string;
    /**
     * Callback to invoke when a new month is selected
     * */
    readonly change: EventEmitter<T>;
    /**
     * Emits the selected year. This doesn't imply a change on the selected date
     * */
    readonly yearSelected: EventEmitter<T>;
    /** Emits when any date is activated. */
    readonly pickerMomentChange: EventEmitter<T>;
    /** Emits when use keyboard enter to select a calendar cell */
    readonly keyboardEnter: EventEmitter<any>;
    /** The body of calendar table */
    calendarBodyElm: OwlCalendarBodyComponent;
    get owlDTCalendarView(): boolean;
    get owlDTCalendarMultiYearView(): boolean;
    constructor(cdRef: ChangeDetectorRef, pickerIntl: OwlDateTimeIntl, dateTimeAdapter: DateTimeAdapter<T>, options: any);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    /**
     * Handle a calendarCell selected
     */
    selectCalendarCell(cell: CalendarCell): void;
    private selectYear;
    /**
     * Generate the previous year list
     * */
    prevYearList(event: any): void;
    /**
     * Generate the next year list
     * */
    nextYearList(event: any): void;
    generateYearList(): void;
    /** Whether the previous period button is enabled. */
    previousEnabled(): boolean;
    /** Whether the next period button is enabled. */
    nextEnabled(): boolean;
    handleCalendarKeydown(event: KeyboardEvent): void;
    /**
     * Creates an CalendarCell for the given year.
     */
    private createYearCell;
    private setSelectedYears;
    /** Whether the given year is enabled. */
    private isYearEnabled;
    private isSameYearList;
    /**
     * Get a valid date object
     */
    private getValidDate;
    private focusActiveCell;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlMultiYearViewComponent<any>, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlMultiYearViewComponent<any>, "owl-date-time-multi-year-view", never, { "selectMode": "selectMode"; "selected": "selected"; "selecteds": "selecteds"; "pickerMoment": "pickerMoment"; "dateFilter": "dateFilter"; "minDate": "minDate"; "maxDate": "maxDate"; }, { "change": "change"; "yearSelected": "yearSelected"; "pickerMomentChange": "pickerMomentChange"; "keyboardEnter": "keyboardEnter"; }, never, never>;
}
