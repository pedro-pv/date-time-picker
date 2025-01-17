/**
 * date-time-inline.component
 */
import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { OwlDateTime, PickerMode, PickerType, SelectMode } from './date-time.class';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
import * as i0 from "@angular/core";
export declare const OWL_DATETIME_VALUE_ACCESSOR: any;
export declare class OwlDateTimeInlineComponent<T> extends OwlDateTime<T> implements OnInit, ControlValueAccessor {
    protected changeDetector: ChangeDetectorRef;
    protected dateTimeAdapter: DateTimeAdapter<T>;
    protected dateTimeFormats: OwlDateTimeFormats;
    container: OwlDateTimeContainerComponent<T>;
    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     */
    private _pickerType;
    get pickerType(): PickerType;
    set pickerType(val: PickerType);
    private _disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    private _selectMode;
    get selectMode(): SelectMode;
    set selectMode(mode: SelectMode);
    /** The date to open the calendar to initially. */
    private _startAt;
    get startAt(): T | null;
    set startAt(date: T | null);
    /** The date to open for range calendar. */
    private _endAt;
    get endAt(): T | null;
    set endAt(date: T | null);
    private _dateTimeFilter;
    get dateTimeFilter(): (date: T | null) => boolean;
    set dateTimeFilter(filter: (date: T | null) => boolean);
    /** The minimum valid date. */
    private _min;
    get minDateTime(): T | null;
    set minDateTime(value: T | null);
    /** The maximum valid date. */
    private _max;
    get maxDateTime(): T | null;
    set maxDateTime(value: T | null);
    private _value;
    get value(): T | null;
    set value(value: T | null);
    private _values;
    get values(): T[];
    set values(values: T[]);
    /**
     * Emits selected year in multi-year view
     * This doesn't imply a change on the selected date.
     * */
    yearSelected: EventEmitter<T>;
    /**
     * Emits selected month in year view
     * This doesn't imply a change on the selected date.
     * */
    monthSelected: EventEmitter<T>;
    /**
     * Emits selected date
     * */
    dateSelected: EventEmitter<T>;
    private _selected;
    get selected(): T | null;
    set selected(value: T | null);
    private _selecteds;
    get selecteds(): T[];
    set selecteds(values: T[]);
    get opened(): boolean;
    get pickerMode(): PickerMode;
    get isInSingleMode(): boolean;
    get isInRangeMode(): boolean;
    get owlDTInlineClass(): boolean;
    private onModelChange;
    private onModelTouched;
    constructor(changeDetector: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    select(date: T[] | T): void;
    /**
     * Emits the selected year in multi-year view
     * */
    selectYear(normalizedYear: T): void;
    /**
     * Emits selected month in year view
     * */
    selectMonth(normalizedMonth: T): void;
    /**
     * Emits the selected date
     * */
    selectDate(normalizedDate: T): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDateTimeInlineComponent<any>, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlDateTimeInlineComponent<any>, "owl-date-time-inline", never, { "pickerType": "pickerType"; "disabled": "disabled"; "selectMode": "selectMode"; "startAt": "startAt"; "endAt": "endAt"; "dateTimeFilter": "owlDateTimeFilter"; "minDateTime": "min"; "maxDateTime": "max"; "value": "value"; "values": "values"; }, { "yearSelected": "yearSelected"; "monthSelected": "monthSelected"; "dateSelected": "dateSelected"; }, never, never>;
}
