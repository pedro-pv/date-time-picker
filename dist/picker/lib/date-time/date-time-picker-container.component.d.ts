/**
 * date-time-picker-container.component
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OwlCalendarComponent } from './calendar.component';
import { OwlTimerComponent } from './timer.component';
import { DateTimeAdapter } from './adapter/date-time-adapter.class';
import { OwlDateTime, PickerType } from './date-time.class';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OwlDateTimeContainerComponent<T> implements OnInit, AfterContentInit, AfterViewInit {
    private cdRef;
    private elmRef;
    private pickerIntl;
    private dateTimeAdapter;
    calendar: OwlCalendarComponent<T>;
    timer: OwlTimerComponent<T>;
    picker: OwlDateTime<T>;
    activeSelectedIndex: number;
    private retainStartTime;
    private retainEndTime;
    /**
     * Stream emits when try to hide picker
     * */
    private hidePicker$;
    get hidePickerStream(): Observable<any>;
    /**
     * Stream emits when try to confirm the selected value
     * */
    private confirmSelected$;
    get confirmSelectedStream(): Observable<any>;
    private pickerOpened$;
    get pickerOpenedStream(): Observable<any>;
    /**
     * The current picker moment. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    private _clamPickerMoment;
    get pickerMoment(): T;
    set pickerMoment(value: T);
    get pickerType(): PickerType;
    get cancelLabel(): string;
    get setLabel(): string;
    /**
     * The range 'from' label
     * */
    get fromLabel(): string;
    /**
     * The range 'to' label
     * */
    get toLabel(): string;
    /**
     * The range 'from' formatted value
     * */
    get fromFormattedValue(): string;
    /**
     * The range 'to' formatted value
     * */
    get toFormattedValue(): string;
    /**
     * Cases in which the control buttons show in the picker
     * 1) picker mode is 'dialog'
     * 2) picker type is NOT 'calendar' and the picker mode is NOT 'inline'
     * */
    get showControlButtons(): boolean;
    get containerElm(): HTMLElement;
    get owlDTContainerClass(): boolean;
    get owlDTPopupContainerClass(): boolean;
    get owlDTDialogContainerClass(): boolean;
    get owlDTInlineContainerClass(): boolean;
    get owlDTContainerDisabledClass(): boolean;
    get owlDTContainerId(): string;
    get owlDTContainerAnimation(): any;
    constructor(cdRef: ChangeDetectorRef, elmRef: ElementRef, pickerIntl: OwlDateTimeIntl, dateTimeAdapter: DateTimeAdapter<T>);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    handleContainerAnimationDone(event: AnimationEvent): void;
    dateSelected(date: T): void;
    timeSelected(time: T): void;
    /**
     * Handle click on cancel button
     */
    onCancelClicked(event: any): void;
    /**
     * Handle click on set button
     */
    onSetClicked(event: any): void;
    /**
     * Handle click on inform radio group
     */
    handleClickOnInfoGroup(event: any, index: number): void;
    /**
     * Handle click on inform radio group
     */
    handleKeydownOnInfoGroup(event: any, next: any, index: number): void;
    /**
     * Set the value of activeSelectedIndex
     */
    private setActiveSelectedIndex;
    private initPicker;
    /**
     * Select calendar date in single mode,
     * it returns null when date is not selected.
     */
    private dateSelectedInSingleMode;
    /**
     * Select dates in range Mode
     */
    private dateSelectedInRangeMode;
    /**
     * Update the given calendar date's time and check if it is valid
     * Because the calendar date has 00:00:00 as default time, if the picker type is 'both',
     * we need to update the given calendar date's time before selecting it.
     * if it is valid, return the updated dateTime
     * if it is not valid, return null
     */
    private updateAndCheckCalendarDate;
    /**
     * Focus to the picker
     * */
    private focusPicker;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDateTimeContainerComponent<any>, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwlDateTimeContainerComponent<any>, "owl-date-time-container", ["owlDateTimeContainer"], {}, {}, never, never>;
}
