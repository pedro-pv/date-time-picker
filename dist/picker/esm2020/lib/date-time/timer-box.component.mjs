/**
 * timer-box.component
 */
import { ChangeDetectionStrategy, Component, EventEmitter, ElementRef, ViewChild, Input, Output } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["valueInput"];
function OwlTimerBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 10);
} }
export class OwlTimerBoxComponent {
    constructor() {
        this.showDivider = false;
        this.step = 1;
        this.valueChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.inputStream = new Subject();
        this.inputStreamSub = Subscription.EMPTY;
        this.hasFocus = false;
        this.onValueInputMouseWheelBind = this.onValueInputMouseWheel.bind(this);
    }
    get displayValue() {
        if (this.hasFocus) {
            // Don't try to reformat the value that user is currently editing
            return this.valueInput.nativeElement.value;
        }
        const value = this.boxValue || this.value;
        if (value === null || isNaN(value)) {
            return '';
        }
        return value < 10 ? '0' + value.toString() : value.toString();
    }
    get owlDTTimerBoxClass() {
        return true;
    }
    ngOnInit() {
        this.inputStreamSub = this.inputStream.pipe(debounceTime(750)).subscribe((val) => {
            if (val) {
                const inputValue = coerceNumberProperty(val, 0);
                this.updateValueViaInput(inputValue);
            }
        });
        this.bindValueInputMouseWheel();
    }
    ngOnDestroy() {
        this.unbindValueInputMouseWheel();
        this.inputStreamSub.unsubscribe();
    }
    upBtnClicked() {
        this.updateValue(this.value + this.step);
    }
    downBtnClicked() {
        this.updateValue(this.value - this.step);
    }
    handleInputChange(val) {
        this.inputStream.next(val);
    }
    focusIn() {
        this.hasFocus = true;
    }
    focusOut(value) {
        this.hasFocus = false;
        if (value) {
            const inputValue = coerceNumberProperty(value, 0);
            this.updateValueViaInput(inputValue);
        }
    }
    updateValue(value) {
        this.valueChange.emit(value);
    }
    updateValueViaInput(value) {
        if (value > this.max || value < this.min) {
            return;
        }
        this.inputChange.emit(value);
    }
    onValueInputMouseWheel(event) {
        event = event || window.event;
        const delta = event.wheelDelta || -event.deltaY || -event.detail;
        if (delta > 0) {
            if (!this.upBtnDisabled) {
                this.upBtnClicked();
            }
        }
        else if (delta < 0) {
            if (!this.downBtnDisabled) {
                this.downBtnClicked();
            }
        }
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    }
    bindValueInputMouseWheel() {
        this.valueInput.nativeElement.addEventListener('onwheel' in document ? 'wheel' : 'mousewheel', this.onValueInputMouseWheelBind);
    }
    unbindValueInputMouseWheel() {
        this.valueInput.nativeElement.removeEventListener('onwheel' in document ? 'wheel' : 'mousewheel', this.onValueInputMouseWheelBind);
    }
}
OwlTimerBoxComponent.ɵfac = function OwlTimerBoxComponent_Factory(t) { return new (t || OwlTimerBoxComponent)(); };
OwlTimerBoxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OwlTimerBoxComponent, selectors: [["owl-date-time-timer-box"]], viewQuery: function OwlTimerBoxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.valueInput = _t.first);
    } }, hostVars: 2, hostBindings: function OwlTimerBoxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("owl-dt-timer-box", ctx.owlDTTimerBoxClass);
    } }, inputs: { showDivider: "showDivider", upBtnAriaLabel: "upBtnAriaLabel", upBtnDisabled: "upBtnDisabled", downBtnAriaLabel: "downBtnAriaLabel", downBtnDisabled: "downBtnDisabled", boxValue: "boxValue", value: "value", min: "min", max: "max", step: "step", inputLabel: "inputLabel" }, outputs: { valueChange: "valueChange", inputChange: "inputChange" }, exportAs: ["owlDateTimeTimerBox"], decls: 14, vars: 7, consts: [["class", "owl-dt-timer-divider", "aria-hidden", "true", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "owl-dt-control-button", "owl-dt-control-arrow-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "owl-dt-control-button-content"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 451.847 451.846", 0, "xml", "space", "preserve", "width", "100%", "height", "100%", 2, "enable-background", "new 0 0 451.847 451.846"], ["d", "M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"], [1, "owl-dt-timer-content"], ["maxlength", "2", 1, "owl-dt-timer-input", 3, "value", "keydown.arrowup", "keydown.arrowdown", "input", "focusin", "focusout"], ["valueInput", ""], [1, "owl-hidden-accessible"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], ["aria-hidden", "true", 1, "owl-dt-timer-divider"]], template: function OwlTimerBoxComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵtemplate(0, OwlTimerBoxComponent_div_0_Template, 1, 0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function OwlTimerBoxComponent_Template_button_click_1_listener() { return ctx.upBtnClicked(); });
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(3, "svg", 3);
        i0.ɵɵelement(4, "path", 4);
        i0.ɵɵelementEnd()()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(5, "label", 5)(6, "input", 6, 7);
        i0.ɵɵlistener("keydown.arrowup", function OwlTimerBoxComponent_Template_input_keydown_arrowup_6_listener() { return !ctx.upBtnDisabled && ctx.upBtnClicked(); })("keydown.arrowdown", function OwlTimerBoxComponent_Template_input_keydown_arrowdown_6_listener() { return !ctx.downBtnDisabled && ctx.downBtnClicked(); })("input", function OwlTimerBoxComponent_Template_input_input_6_listener() { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(7); return ctx.handleInputChange(_r1.value); })("focusin", function OwlTimerBoxComponent_Template_input_focusin_6_listener() { return ctx.focusIn(); })("focusout", function OwlTimerBoxComponent_Template_input_focusout_6_listener() { i0.ɵɵrestoreView(_r2); const _r1 = i0.ɵɵreference(7); return ctx.focusOut(_r1.value); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "span", 8);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "button", 1);
        i0.ɵɵlistener("click", function OwlTimerBoxComponent_Template_button_click_10_listener() { return ctx.downBtnClicked(); });
        i0.ɵɵelementStart(11, "span", 2);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(12, "svg", 3);
        i0.ɵɵelement(13, "path", 9);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.showDivider);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.upBtnDisabled);
        i0.ɵɵattribute("aria-label", ctx.upBtnAriaLabel);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("value", ctx.displayValue);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.inputLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.downBtnDisabled);
        i0.ɵɵattribute("aria-label", ctx.downBtnAriaLabel);
    } }, directives: [i1.NgIf], styles: [""], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OwlTimerBoxComponent, [{
        type: Component,
        args: [{ exportAs: 'owlDateTimeTimerBox', selector: 'owl-date-time-timer-box', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[class.owl-dt-timer-box]': 'owlDTTimerBoxClass'
                }, template: "<div *ngIf=\"showDivider\" class=\"owl-dt-timer-divider\" aria-hidden=\"true\"></div>\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\n        type=\"button\" tabindex=\"-1\"\n        [disabled]=\"upBtnDisabled\"\n        [attr.aria-label]=\"upBtnAriaLabel\"\n        (click)=\"upBtnClicked()\">\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\n        <!-- <editor-fold desc=\"SVG Arrow Up\"> -->\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\n                 width=\"100%\" height=\"100%\">\n                    <path d=\"M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0\n                        L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4\n                        c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z\"/>\n                </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n<label class=\"owl-dt-timer-content\">\n    <input class=\"owl-dt-timer-input\" maxlength=\"2\"\n           [value]=\"displayValue\"\n           (keydown.arrowup)=\"!upBtnDisabled && upBtnClicked()\"\n           (keydown.arrowdown)=\"!downBtnDisabled && downBtnClicked()\"\n           (input)=\"handleInputChange(valueInput.value)\"\n           (focusin)=\"focusIn()\"\n           (focusout)=\"focusOut(valueInput.value)\"\n           #valueInput>\n    <span class=\"owl-hidden-accessible\">{{inputLabel}}</span>\n</label>\n<button class=\"owl-dt-control-button owl-dt-control-arrow-button\"\n        type=\"button\" tabindex=\"-1\"\n        [disabled]=\"downBtnDisabled\"\n        [attr.aria-label]=\"downBtnAriaLabel\"\n        (click)=\"downBtnClicked()\">\n    <span class=\"owl-dt-control-button-content\" tabindex=\"-1\">\n        <!-- <editor-fold desc=\"SVG Arrow Down\"> -->\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                 version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 451.847 451.846\"\n                 style=\"enable-background:new 0 0 451.847 451.846;\" xml:space=\"preserve\"\n                 width=\"100%\" height=\"100%\">\n                    <path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n                        c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n                        c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\"/>\n                </svg>\n        <!-- </editor-fold> -->\n    </span>\n</button>\n", styles: [""] }]
    }], function () { return []; }, { showDivider: [{
            type: Input
        }], upBtnAriaLabel: [{
            type: Input
        }], upBtnDisabled: [{
            type: Input
        }], downBtnAriaLabel: [{
            type: Input
        }], downBtnDisabled: [{
            type: Input
        }], boxValue: [{
            type: Input
        }], value: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], step: [{
            type: Input
        }], inputLabel: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], inputChange: [{
            type: Output
        }], valueInput: [{
            type: ViewChild,
            args: ['valueInput', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXItYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY2tlci9zcmMvbGliL2RhdGUtdGltZS90aW1lci1ib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGlja2VyL3NyYy9saWIvZGF0ZS10aW1lL3RpbWVyLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULEtBQUssRUFHTCxNQUFNLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztJQ2pCOUMsMEJBQStFOztBRCtCL0UsTUFBTSxPQUFPLG9CQUFvQjtJQTZEN0I7UUEzRFMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFzQnBCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFJUixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTNDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUVwQyxtQkFBYyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFFcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQXVCakIsK0JBQTBCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUc1RSxDQUFDO0lBeEJELElBQUksWUFBWTtRQUNaLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZ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QUFjO1FBQUEsaUJBQU8sRUFBQTtRQUU3RCxrQ0FJbUM7UUFBM0Isa0dBQVMsb0JBQWdCLElBQUM7UUFDOUIsZ0NBQTBEO1FBRTFELG1CQUd3QztRQUh4QywrQkFHd0M7UUFDeEIsMkJBRTZHO1FBQ2pILGlCQUFNLEVBQUEsRUFBQTs7UUE1Q2hCLHNDQUFpQjtRQUdmLGVBQTBCO1FBQTFCLDRDQUEwQjtRQUMxQixnREFBa0M7UUFpQi9CLGVBQXNCO1FBQXRCLHdDQUFzQjtRQU9PLGVBQWM7UUFBZCxvQ0FBYztRQUk5QyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFDNUIsa0RBQW9DOzt1RkRGL0Isb0JBQW9CO2NBWmhDLFNBQVM7MkJBQ0kscUJBQXFCLFlBQ3JCLHlCQUF5Qix1QkFHZCxLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0sUUFDekM7b0JBQ0YsMEJBQTBCLEVBQUUsb0JBQW9CO2lCQUNuRDtzQ0FLUSxXQUFXO2tCQUFuQixLQUFLO1lBRUcsY0FBYztrQkFBdEIsS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFFRyxlQUFlO2tCQUF2QixLQUFLO1lBTUcsUUFBUTtrQkFBaEIsS0FBSztZQUVHLEtBQUs7a0JBQWIsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFSSxXQUFXO2tCQUFwQixNQUFNO1lBRUcsV0FBVztrQkFBcEIsTUFBTTtZQTRCQyxVQUFVO2tCQURqQixTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHRpbWVyLWJveC5jb21wb25lbnRcbiAqL1xuXG5pbXBvcnQge1xuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBWaWV3Q2hpbGQsXG4gICAgSW5wdXQsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgZXhwb3J0QXM6ICdvd2xEYXRlVGltZVRpbWVyQm94JyxcbiAgICBzZWxlY3RvcjogJ293bC1kYXRlLXRpbWUtdGltZXItYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXItYm94LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90aW1lci1ib3guY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgICdbY2xhc3Mub3dsLWR0LXRpbWVyLWJveF0nOiAnb3dsRFRUaW1lckJveENsYXNzJ1xuICAgIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPd2xUaW1lckJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIHNob3dEaXZpZGVyID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB1cEJ0bkFyaWFMYWJlbDogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdXBCdG5EaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIGRvd25CdG5BcmlhTGFiZWw6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIGRvd25CdG5EaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFZhbHVlIHdvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgYm94XG4gICAgICogSWYgaXQgaXMgbnVsbCwgdGhlIGJveCB3b3VsZCBkaXNwbGF5IFt2YWx1ZV1cbiAgICAgKiAqL1xuICAgIEBJbnB1dCgpIGJveFZhbHVlOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHN0ZXAgPSAxO1xuXG4gICAgQElucHV0KCkgaW5wdXRMYWJlbDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIHByaXZhdGUgaW5wdXRTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgICBwcml2YXRlIGlucHV0U3RyZWFtU3ViID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gICAgcHJpdmF0ZSBoYXNGb2N1cyA9IGZhbHNlO1xuXG4gICAgZ2V0IGRpc3BsYXlWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgICAgICAgLy8gRG9uJ3QgdHJ5IHRvIHJlZm9ybWF0IHRoZSB2YWx1ZSB0aGF0IHVzZXIgaXMgY3VycmVudGx5IGVkaXRpbmdcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5ib3hWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCBpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDEwID8gJzAnICsgdmFsdWUudG9TdHJpbmcoKSA6IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZ2V0IG93bERUVGltZXJCb3hDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgndmFsdWVJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcHJpdmF0ZSB2YWx1ZUlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgb25WYWx1ZUlucHV0TW91c2VXaGVlbEJpbmQgPSB0aGlzLm9uVmFsdWVJbnB1dE1vdXNlV2hlZWwuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1YiA9IHRoaXMuaW5wdXRTdHJlYW0ucGlwZShkZWJvdW5jZVRpbWUoNzUwKSkuc3Vic2NyaWJlKCggdmFsOiBzdHJpbmcgKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVZpYUlucHV0KGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaW5kVmFsdWVJbnB1dE1vdXNlV2hlZWwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5iaW5kVmFsdWVJbnB1dE1vdXNlV2hlZWwoKTtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cEJ0bkNsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZSArIHRoaXMuc3RlcCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRvd25CdG5DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUgLSB0aGlzLnN0ZXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVJbnB1dENoYW5nZSh2YWw6IHN0cmluZyApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFN0cmVhbS5uZXh0KHZhbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZvY3VzSW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb2N1c091dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUsIDApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVZpYUlucHV0KGlucHV0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSggdmFsdWU6IG51bWJlciApOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlVmlhSW5wdXQoIHZhbHVlOiBudW1iZXIgKTogdm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSA+IHRoaXMubWF4IHx8IHZhbHVlIDwgdGhpcy5taW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WYWx1ZUlucHV0TW91c2VXaGVlbCggZXZlbnQ6IGFueSApOiB2b2lkIHtcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gZXZlbnQud2hlZWxEZWx0YSB8fCAtZXZlbnQuZGVsdGFZIHx8IC1ldmVudC5kZXRhaWw7XG5cbiAgICAgICAgaWYgKGRlbHRhID4gMCkge1xuICAgICAgICAgIGlmICghdGhpcy51cEJ0bkRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwQnRuQ2xpY2tlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkZWx0YSA8IDApIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZG93bkJ0bkRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRvd25CdG5DbGlja2VkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPyBldmVudC5wcmV2ZW50RGVmYXVsdCgpIDogKGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYmluZFZhbHVlSW5wdXRNb3VzZVdoZWVsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlSW5wdXQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ29ud2hlZWwnIGluIGRvY3VtZW50ID8gJ3doZWVsJyA6ICdtb3VzZXdoZWVsJyxcbiAgICAgICAgICAgIHRoaXMub25WYWx1ZUlucHV0TW91c2VXaGVlbEJpbmQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5iaW5kVmFsdWVJbnB1dE1vdXNlV2hlZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWVJbnB1dC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnb253aGVlbCcgaW4gZG9jdW1lbnQgPyAnd2hlZWwnIDogJ21vdXNld2hlZWwnLFxuICAgICAgICAgICAgdGhpcy5vblZhbHVlSW5wdXRNb3VzZVdoZWVsQmluZCk7XG4gICAgfVxufVxuIiwiPGRpdiAqbmdJZj1cInNob3dEaXZpZGVyXCIgY2xhc3M9XCJvd2wtZHQtdGltZXItZGl2aWRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PlxuPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtY29udHJvbC1hcnJvdy1idXR0b25cIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJ1cEJ0bkRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJ1cEJ0bkFyaWFMYWJlbFwiXG4gICAgICAgIChjbGljayk9XCJ1cEJ0bkNsaWNrZWQoKVwiPlxuICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDwhLS0gPGVkaXRvci1mb2xkIGRlc2M9XCJTVkcgQXJyb3cgVXBcIj4gLS0+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA0NTEuODQ3IDQ1MS44NDZcIlxuICAgICAgICAgICAgICAgICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDUxLjg0NyA0NTEuODQ2O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCJcbiAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0OC4yOTIsMTA2LjQwNmwxOTQuMjgxLDE5NC4yOWMxMi4zNjUsMTIuMzU5LDEyLjM2NSwzMi4zOTEsMCw0NC43NDRjLTEyLjM1NCwxMi4zNTQtMzIuMzkxLDEyLjM1NC00NC43NDQsMFxuICAgICAgICAgICAgICAgICAgICAgICAgTDIyNS45MjMsMTczLjUyOUw1NC4wMTgsMzQ1LjQ0Yy0xMi4zNiwxMi4zNTQtMzIuMzk1LDEyLjM1NC00NC43NDgsMGMtMTIuMzU5LTEyLjM1NC0xMi4zNTktMzIuMzkxLDAtNDQuNzVMMjAzLjU1NCwxMDYuNFxuICAgICAgICAgICAgICAgICAgICAgICAgYzYuMTgtNi4xNzQsMTQuMjcxLTkuMjU5LDIyLjM2OS05LjI1OUMyMzQuMDE4LDk3LjE0MSwyNDIuMTE1LDEwMC4yMzIsMjQ4LjI5MiwxMDYuNDA2elwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPCEtLSA8L2VkaXRvci1mb2xkPiAtLT5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbjxsYWJlbCBjbGFzcz1cIm93bC1kdC10aW1lci1jb250ZW50XCI+XG4gICAgPGlucHV0IGNsYXNzPVwib3dsLWR0LXRpbWVyLWlucHV0XCIgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgIFt2YWx1ZV09XCJkaXNwbGF5VmFsdWVcIlxuICAgICAgICAgICAoa2V5ZG93bi5hcnJvd3VwKT1cIiF1cEJ0bkRpc2FibGVkICYmIHVwQnRuQ2xpY2tlZCgpXCJcbiAgICAgICAgICAgKGtleWRvd24uYXJyb3dkb3duKT1cIiFkb3duQnRuRGlzYWJsZWQgJiYgZG93bkJ0bkNsaWNrZWQoKVwiXG4gICAgICAgICAgIChpbnB1dCk9XCJoYW5kbGVJbnB1dENoYW5nZSh2YWx1ZUlucHV0LnZhbHVlKVwiXG4gICAgICAgICAgIChmb2N1c2luKT1cImZvY3VzSW4oKVwiXG4gICAgICAgICAgIChmb2N1c291dCk9XCJmb2N1c091dCh2YWx1ZUlucHV0LnZhbHVlKVwiXG4gICAgICAgICAgICN2YWx1ZUlucHV0PlxuICAgIDxzcGFuIGNsYXNzPVwib3dsLWhpZGRlbi1hY2Nlc3NpYmxlXCI+e3tpbnB1dExhYmVsfX08L3NwYW4+XG48L2xhYmVsPlxuPGJ1dHRvbiBjbGFzcz1cIm93bC1kdC1jb250cm9sLWJ1dHRvbiBvd2wtZHQtY29udHJvbC1hcnJvdy1idXR0b25cIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkb3duQnRuRGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRvd25CdG5BcmlhTGFiZWxcIlxuICAgICAgICAoY2xpY2spPVwiZG93bkJ0bkNsaWNrZWQoKVwiPlxuICAgIDxzcGFuIGNsYXNzPVwib3dsLWR0LWNvbnRyb2wtYnV0dG9uLWNvbnRlbnRcIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDwhLS0gPGVkaXRvci1mb2xkIGRlc2M9XCJTVkcgQXJyb3cgRG93blwiPiAtLT5cbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDQ1MS44NDcgNDUxLjg0NlwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ3IDQ1MS44NDY7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjI1LjkyMywzNTQuNzA2Yy04LjA5OCwwLTE2LjE5NS0zLjA5Mi0yMi4zNjktOS4yNjNMOS4yNywxNTEuMTU3Yy0xMi4zNTktMTIuMzU5LTEyLjM1OS0zMi4zOTcsMC00NC43NTFcbiAgICAgICAgICAgICAgICAgICAgICAgIGMxMi4zNTQtMTIuMzU0LDMyLjM4OC0xMi4zNTQsNDQuNzQ4LDBsMTcxLjkwNSwxNzEuOTE1bDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0LDMyLjM5MS0xMi4zNTQsNDQuNzQ0LDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGMxMi4zNjUsMTIuMzU0LDEyLjM2NSwzMi4zOTIsMCw0NC43NTFMMjQ4LjI5MiwzNDUuNDQ5QzI0Mi4xMTUsMzUxLjYyMSwyMzQuMDE4LDM1NC43MDYsMjI1LjkyMywzNTQuNzA2elwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPCEtLSA8L2VkaXRvci1mb2xkPiAtLT5cbiAgICA8L3NwYW4+XG48L2J1dHRvbj5cbiJdfQ==