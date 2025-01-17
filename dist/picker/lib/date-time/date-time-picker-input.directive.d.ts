/**
 * date-time-picker-input.directive
 */
import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, Validator } from '@angular/forms';
import { OwlDateTimeComponent } from './date-time-picker.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { SelectMode } from './date-time.class';
import * as i0 from "@angular/core";
export declare const OWL_DATETIME_VALUE_ACCESSOR: any;
export declare const OWL_DATETIME_VALIDATORS: any;
export declare class OwlDateTimeInputDirective<T> implements OnInit, AfterContentInit, OnDestroy, ControlValueAccessor, Validator {
    private elmRef;
    private renderer;
    private dateTimeAdapter;
    private dateTimeFormats;
    static ngAcceptInputType_disabled: boolean | '';
    /**
    * Required flag to be used for range of [null, null]
    * */
    private _required;
    get required(): any;
    set required(value: any);
    /**
     * The date time picker that this input is associated with.
     * */
    set owlDateTime(value: OwlDateTimeComponent<T>);
    /**
     * A function to filter date time
     */
    set owlDateTimeFilter(filter: (date: T | null) => boolean);
    private _dateTimeFilter;
    get dateTimeFilter(): (date: T) => boolean;
    /** Whether the date time picker's input is disabled. */
    private _disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    /** The minimum valid date. */
    private _min;
    get min(): T | null;
    set min(value: T | null);
    /** The maximum valid date. */
    private _max;
    get max(): T | null;
    set max(value: T | null);
    /**
     * The picker's select mode
     */
    private _selectMode;
    get selectMode(): SelectMode;
    set selectMode(mode: SelectMode);
    /**
     * The character to separate the 'from' and 'to' in input value
     */
    rangeSeparator: string;
    private _value;
    get value(): T | null;
    set value(value: T | null);
    private _values;
    get values(): T[];
    set values(values: T[]);
    /**
     * Callback to invoke when `change` event is fired on this `<input>`
     * */
    dateTimeChange: EventEmitter<any>;
    /**
     * Callback to invoke when an `input` event is fired on this `<input>`.
     * */
    dateTimeInput: EventEmitter<any>;
    get elementRef(): ElementRef;
    get isInSingleMode(): boolean;
    get isInRangeMode(): boolean;
    /** The date-time-picker that this input is associated with. */
    dtPicker: OwlDateTimeComponent<T>;
    private dtPickerSub;
    private localeSub;
    private lastValueValid;
    private onModelChange;
    private onModelTouched;
    private validatorOnChange;
    /** The form control validator for whether the input parses. */
    private parseValidator;
    /** The form control validator for the min date. */
    private minValidator;
    /** The form control validator for the max date. */
    private maxValidator;
    /** The form control validator for the date filter. */
    private filterValidator;
    /**
     * The form control validator for the range.
     * Check whether the 'before' value is before the 'to' value
     * */
    private rangeValidator;
    /**
     * The form control validator for the range when required.
     * Check whether the 'before' and 'to' values are present
     * */
    private requiredRangeValidator;
    /** The combined form control validator for this input. */
    private validator;
    /** Emits when the value changes (either due to user input or programmatic change). */
    valueChange: EventEmitter<T | T[]>;
    /** Emits when the disabled state has changed */
    disabledChange: EventEmitter<boolean>;
    get owlDateTimeInputAriaHaspopup(): boolean;
    get owlDateTimeInputAriaOwns(): string;
    get minIso8601(): string;
    get maxIso8601(): string;
    get owlDateTimeInputDisabled(): boolean;
    constructor(elmRef: ElementRef, renderer: Renderer2, dateTimeAdapter: DateTimeAdapter<T>, dateTimeFormats: OwlDateTimeFormats);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    /**
     * Open the picker when user hold alt + DOWN_ARROW
     * */
    handleKeydownOnHost(event: KeyboardEvent): void;
    handleBlurOnHost(event: Event): void;
    handleInputOnHost(event: any): void;
    handleChangeOnHost(event: any): void;
    /**
     * Set the native input property 'value'
     */
    formatNativeInputValue(): void;
    /**
     * Register the relationship between this input and its picker component
     */
    private registerDateTimePicker;
    /**
     * Convert a given obj to a valid date object
     */
    private getValidDate;
    /**
     * Convert a time string to a date-time string
     * When pickerType is 'timer', the value in the picker's input is a time string.
     * The dateTimeAdapter parse fn could not parse a time string to a Date Object.
     * Therefore we need this fn to convert a time string to a date-time string.
     */
    private convertTimeStringToDateTimeString;
    /**
     * Handle input change in single mode
     */
    private changeInputInSingleMode;
    /**
     * Handle input change in rangeFrom or rangeTo mode
     */
    private changeInputInRangeFromToMode;
    /**
     * Handle input change in range mode
     */
    private changeInputInRangeMode;
    /**
     * Check if the two value is the same
     */
    private isSameValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDateTimeInputDirective<any>, [null, null, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OwlDateTimeInputDirective<any>, "input[owlDateTime]", ["owlDateTimeInput"], { "required": "required"; "owlDateTime": "owlDateTime"; "owlDateTimeFilter": "owlDateTimeFilter"; "_disabled": "_disabled"; "min": "min"; "max": "max"; "selectMode": "selectMode"; "rangeSeparator": "rangeSeparator"; "value": "value"; "values": "values"; }, { "dateTimeChange": "dateTimeChange"; "dateTimeInput": "dateTimeInput"; }, never>;
}
