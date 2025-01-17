/**
 * date-time-picker-intl.service
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class OwlDateTimeIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** A label for the up second button (used by screen readers).  */
        this.upSecondLabel = 'Add a second';
        /** A label for the down second button (used by screen readers).  */
        this.downSecondLabel = 'Minus a second';
        /** A label for the up minute button (used by screen readers).  */
        this.upMinuteLabel = 'Add a minute';
        /** A label for the down minute button (used by screen readers).  */
        this.downMinuteLabel = 'Minus a minute';
        /** A label for the up hour button (used by screen readers).  */
        this.upHourLabel = 'Add a hour';
        /** A label for the down hour button (used by screen readers).  */
        this.downHourLabel = 'Minus a hour';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 21 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 21 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Change to month view';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
        /** A label for the cancel button */
        this.cancelBtnLabel = 'Cancel';
        /** A label for the set button */
        this.setBtnLabel = 'Set';
        /** A label for the range 'from' in picker info */
        this.rangeFromLabel = 'From';
        /** A label for the range 'to' in picker info */
        this.rangeToLabel = 'To';
        /** A label for the hour12 button (AM) */
        this.hour12AMLabel = 'AM';
        /** A label for the hour12 button (PM) */
        this.hour12PMLabel = 'PM';
    }
}
OwlDateTimeIntl.ɵfac = function OwlDateTimeIntl_Factory(t) { return new (t || OwlDateTimeIntl)(); };
OwlDateTimeIntl.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: OwlDateTimeIntl, factory: OwlDateTimeIntl.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OwlDateTimeIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNrZXIvc3JjL2xpYi9kYXRlLXRpbWUvZGF0ZS10aW1lLXBpY2tlci1pbnRsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxlQUFlO0lBRDVCO1FBR0k7OztXQUdHO1FBQ00sWUFBTyxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBRXRELGtFQUFrRTtRQUNsRSxrQkFBYSxHQUFHLGNBQWMsQ0FBQztRQUUvQixvRUFBb0U7UUFDcEUsb0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUVuQyxrRUFBa0U7UUFDbEUsa0JBQWEsR0FBRyxjQUFjLENBQUM7UUFFL0Isb0VBQW9FO1FBQ3BFLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFFbkMsZ0VBQWdFO1FBQ2hFLGdCQUFXLEdBQUcsWUFBWSxDQUFDO1FBRTNCLGtFQUFrRTtRQUNsRSxrQkFBYSxHQUFHLGNBQWMsQ0FBQztRQUUvQixzRUFBc0U7UUFDdEUsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUVsQyxrRUFBa0U7UUFDbEUsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFFOUIscUVBQXFFO1FBQ3JFLGtCQUFhLEdBQUcsZUFBZSxDQUFDO1FBRWhDLGlFQUFpRTtRQUNqRSxrQkFBYSxHQUFHLFdBQVcsQ0FBQztRQUU1QiwyRUFBMkU7UUFDM0UsdUJBQWtCLEdBQUcsbUJBQW1CLENBQUM7UUFFekMsdUVBQXVFO1FBQ3ZFLHVCQUFrQixHQUFHLGVBQWUsQ0FBQztRQUVyQyw4RUFBOEU7UUFDOUUsMkJBQXNCLEdBQUcsc0JBQXNCLENBQUM7UUFFaEQsNkVBQTZFO1FBQzdFLCtCQUEwQixHQUFHLHVCQUF1QixDQUFDO1FBRXJELG9DQUFvQztRQUNwQyxtQkFBYyxHQUFHLFFBQVEsQ0FBQztRQUUxQixpQ0FBaUM7UUFDakMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsa0RBQWtEO1FBQ2xELG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBRXhCLGdEQUFnRDtRQUNoRCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQix5Q0FBeUM7UUFDekMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIseUNBQXlDO1FBQ3pDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0tBQ3hCOzs4RUFuRVksZUFBZTtxRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFESCxNQUFNO3VGQUNsQixlQUFlO2NBRDNCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRhdGUtdGltZS1waWNrZXItaW50bC5zZXJ2aWNlXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBPd2xEYXRlVGltZUludGwge1xuXG4gICAgLyoqXG4gICAgICogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbmV2ZXIgdGhlIGxhYmVscyBoZXJlIGFyZSBjaGFuZ2VkLiBVc2UgdGhpcyB0byBub3RpZnlcbiAgICAgKiBjb21wb25lbnRzIGlmIHRoZSBsYWJlbHMgaGF2ZSBjaGFuZ2VkIGFmdGVyIGluaXRpYWxpemF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoYW5nZXM6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSB1cCBzZWNvbmQgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgdXBTZWNvbmRMYWJlbCA9ICdBZGQgYSBzZWNvbmQnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBkb3duIHNlY29uZCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICBkb3duU2Vjb25kTGFiZWwgPSAnTWludXMgYSBzZWNvbmQnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSB1cCBtaW51dGUgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgdXBNaW51dGVMYWJlbCA9ICdBZGQgYSBtaW51dGUnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBkb3duIG1pbnV0ZSBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAgKi9cbiAgICBkb3duTWludXRlTGFiZWwgPSAnTWludXMgYSBtaW51dGUnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSB1cCBob3VyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICAqL1xuICAgIHVwSG91ckxhYmVsID0gJ0FkZCBhIGhvdXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBkb3duIGhvdXIgYnV0dG9uICh1c2VkIGJ5IHNjcmVlbiByZWFkZXJzKS4gICovXG4gICAgZG93bkhvdXJMYWJlbCA9ICdNaW51cyBhIGhvdXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyBtb250aCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIHByZXZNb250aExhYmVsID0gJ1ByZXZpb3VzIG1vbnRoJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCBtb250aCBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIG5leHRNb250aExhYmVsID0gJ05leHQgbW9udGgnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyB5ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgcHJldlllYXJMYWJlbCA9ICdQcmV2aW91cyB5ZWFyJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCB5ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgbmV4dFllYXJMYWJlbCA9ICdOZXh0IHllYXInO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBwcmV2aW91cyBtdWx0aS15ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgcHJldk11bHRpWWVhckxhYmVsID0gJ1ByZXZpb3VzIDIxIHllYXJzJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgbmV4dCBtdWx0aS15ZWFyIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgbmV4dE11bHRpWWVhckxhYmVsID0gJ05leHQgMjEgeWVhcnMnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSAnc3dpdGNoIHRvIG1vbnRoIHZpZXcnIGJ1dHRvbiAodXNlZCBieSBzY3JlZW4gcmVhZGVycykuICovXG4gICAgc3dpdGNoVG9Nb250aFZpZXdMYWJlbCA9ICdDaGFuZ2UgdG8gbW9udGggdmlldyc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlICdzd2l0Y2ggdG8geWVhciB2aWV3JyBidXR0b24gKHVzZWQgYnkgc2NyZWVuIHJlYWRlcnMpLiAqL1xuICAgIHN3aXRjaFRvTXVsdGlZZWFyVmlld0xhYmVsID0gJ0Nob29zZSBtb250aCBhbmQgeWVhcic7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIGNhbmNlbCBidXR0b24gKi9cbiAgICBjYW5jZWxCdG5MYWJlbCA9ICdDYW5jZWwnO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBzZXQgYnV0dG9uICovXG4gICAgc2V0QnRuTGFiZWwgPSAnU2V0JztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgcmFuZ2UgJ2Zyb20nIGluIHBpY2tlciBpbmZvICovXG4gICAgcmFuZ2VGcm9tTGFiZWwgPSAnRnJvbSc7XG5cbiAgICAvKiogQSBsYWJlbCBmb3IgdGhlIHJhbmdlICd0bycgaW4gcGlja2VyIGluZm8gKi9cbiAgICByYW5nZVRvTGFiZWwgPSAnVG8nO1xuXG4gICAgLyoqIEEgbGFiZWwgZm9yIHRoZSBob3VyMTIgYnV0dG9uIChBTSkgKi9cbiAgICBob3VyMTJBTUxhYmVsID0gJ0FNJztcblxuICAgIC8qKiBBIGxhYmVsIGZvciB0aGUgaG91cjEyIGJ1dHRvbiAoUE0pICovXG4gICAgaG91cjEyUE1MYWJlbCA9ICdQTSc7XG59XG4iXX0=