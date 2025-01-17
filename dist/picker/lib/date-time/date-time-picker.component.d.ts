/**
 * date-time-picker.component
 */
import { ChangeDetectorRef, EventEmitter, InjectionToken, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { BlockScrollStrategy, Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTimeFormats } from './adapter/date-time-format.class';
import { OwlDateTime, PickerMode, PickerType, SelectMode } from './date-time.class';
import { OwlDialogService } from '../dialog/dialog.service';
import * as i0 from "@angular/core";
/** Injection token that determines the scroll handling while the dtPicker is open. */
export declare const OWL_DTPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
/** @docs-private */
export declare function OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => BlockScrollStrategy;
/** @docs-private */
export declare const OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
export declare class OwlDateTimeComponent<T> extends OwlDateTime<T> implements OnInit, OnDestroy {
    overlay: Overlay;
    private viewContainerRef;
    private dialogService;
    private ngZone;
    protected changeDetector: ChangeDetectorRef;
    protected dateTimeAdapter: DateTimeAdapter<T>;
    protected dateTimeFormats: OwlDateTimeFormats;
    private document;
    /** Custom class for the picker backdrop. */
    backdropClass: string | string[];
    /** Custom class for the picker overlay pane. */
    panelClass: string | string[];
    /** The date to open the calendar to initially. */
    private _startAt;
    get startAt(): T | null;
    set startAt(date: T | null);
    /** The end date to set for range calendar. */
    private _endAt;
    get endAt(): T | null;
    set endAt(date: T | null);
    /**
     * Set the type of the dateTime picker
     *      'both' -- show both calendar and timer
     *      'calendar' -- show only calendar
     *      'timer' -- show only timer
     */
    private _pickerType;
    get pickerType(): PickerType;
    set pickerType(val: PickerType);
    /**
     * Whether the picker open as a dialog
     */
    _pickerMode: PickerMode;
    get pickerMode(): PickerMode;
    set pickerMode(mode: PickerMode);
    /** Whether the date time picker should be disabled. */
    private _disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Whether the calendar is open. */
    private _opened;
    get opened(): boolean;
    set opened(val: boolean);
    /**
     * The scroll strategy when the picker is open
     * Learn more this from https://material.angular.io/cdk/overlay/overview#scroll-strategies
     * */
    scrollStrategy: ScrollStrategy;
    /**
     * Callback when the picker is closed
     * */
    afterPickerClosed: EventEmitter<any>;
    /**
     * Callback when the picker is open
     * */
    afterPickerOpen: EventEmitter<any>;
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
    /**
     * Emit when the selected value has been confirmed
     * */
    confirmSelectedChange: EventEmitter<T | T[]>;
    /**
     * Emits when the date time picker is disabled.
     * */
    disabledChange: EventEmitter<boolean>;
    private pickerContainerPortal;
    private pickerContainer;
    private popupRef;
    private dialogRef;
    private dtInputSub;
    private hidePickerStreamSub;
    private confirmSelectedStreamSub;
    private pickerOpenedStreamSub;
    /** The element that was focused before the date time picker was opened. */
    private focusedElementBeforeOpen;
    private _dtInput;
    get dtInput(): OwlDateTimeInputDirective<T>;
    private _selected;
    get selected(): T | null;
    set selected(value: T | null);
    private _selecteds;
    get selecteds(): T[];
    set selecteds(values: T[]);
    /** The minimum selectable date. */
    get minDateTime(): T | null;
    /** The maximum selectable date. */
    get maxDateTime(): T | null;
    get dateTimeFilter(): (date: T | null) => boolean;
    get selectMode(): SelectMode;
    get isInSingleMode(): boolean;
    get isInRangeMode(): boolean;
    private readonly defaultScrollStrategy;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: OwlDialogService, ngZone: NgZone, changeDetector: ChangeDetectorRef, dateTimeAdapter: DateTimeAdapter<T>, defaultScrollStrategy: any, dateTimeFormats: OwlDateTimeFormats, document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerInput(input: OwlDateTimeInputDirective<T>): void;
    open(): void;
    /**
     * Selects the given date
     */
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
    /**
     * Hide the picker
     */
    close(): void;
    /**
     * Confirm the selected value
     */
    confirmSelect(event?: any): void;
    /**
     * Open the picker as a dialog
     */
    private openAsDialog;
    /**
     * Open the picker as popup
     */
    private openAsPopup;
    private createPopup;
    /**
     * Create the popup PositionStrategy.
     * */
    private createPopupPositionStrategy;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDateTimeComponent<any>, [null, null, null, null, null, { optional: true; }, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlDateTimeComponent<any>, "owl-date-time", ["owlDateTime"], { "backdropClass": "backdropClass"; "panelClass": "panelClass"; "startAt": "startAt"; "endAt": "endAt"; "pickerType": "pickerType"; "pickerMode": "pickerMode"; "disabled": "disabled"; "opened": "opened"; "scrollStrategy": "scrollStrategy"; }, { "afterPickerClosed": "afterPickerClosed"; "afterPickerOpen": "afterPickerOpen"; "yearSelected": "yearSelected"; "monthSelected": "monthSelected"; "dateSelected": "dateSelected"; }, never, never>;
}
