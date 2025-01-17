/**
 * date-time-picker-trigger.directive
 */
import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { OwlDateTimeComponent } from './date-time-picker.component';
import * as i0 from "@angular/core";
export declare class OwlDateTimeTriggerDirective<T> implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    protected changeDetector: ChangeDetectorRef;
    dtPicker: OwlDateTimeComponent<T>;
    private _disabled;
    get disabled(): boolean;
    set disabled(value: boolean);
    get owlDTTriggerDisabledClass(): boolean;
    private stateChanges;
    constructor(changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    handleClickOnHost(event: Event): void;
    private watchStateChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwlDateTimeTriggerDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OwlDateTimeTriggerDirective<any>, "[owlDateTimeTrigger]", never, { "dtPicker": "owlDateTimeTrigger"; "disabled": "disabled"; }, {}, never>;
}
