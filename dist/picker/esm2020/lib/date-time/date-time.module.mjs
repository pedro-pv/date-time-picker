/**
 * date-time.module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import { OwlDateTimeTriggerDirective } from './date-time-picker-trigger.directive';
import { OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER, OwlDateTimeComponent } from './date-time-picker.component';
import { OwlDateTimeContainerComponent } from './date-time-picker-container.component';
import { OwlDateTimeInputDirective } from './date-time-picker-input.directive';
import { OwlDateTimeIntl } from './date-time-picker-intl.service';
import { OwlMonthViewComponent } from './calendar-month-view.component';
import { OwlCalendarBodyComponent } from './calendar-body.component';
import { OwlYearViewComponent } from './calendar-year-view.component';
import { OwlMultiYearViewComponent } from './calendar-multi-year-view.component';
import { OwlTimerBoxComponent } from './timer-box.component';
import { OwlTimerComponent } from './timer.component';
import { NumberFixedLenPipe } from './numberedFixLen.pipe';
import { OwlCalendarComponent } from './calendar.component';
import { OwlDateTimeInlineComponent } from './date-time-inline.component';
import { OwlDialogModule } from '../dialog/dialog.module';
import { optionsProviders } from './options-provider';
import * as i0 from "@angular/core";
export class OwlDateTimeModule {
}
OwlDateTimeModule.ɵfac = function OwlDateTimeModule_Factory(t) { return new (t || OwlDateTimeModule)(); };
OwlDateTimeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OwlDateTimeModule });
OwlDateTimeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        OwlDateTimeIntl,
        OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
        ...optionsProviders,
    ], imports: [[CommonModule, OverlayModule, OwlDialogModule, A11yModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OwlDateTimeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule],
                exports: [
                    OwlCalendarComponent,
                    OwlTimerComponent,
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeInlineComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                ],
                declarations: [
                    OwlDateTimeTriggerDirective,
                    OwlDateTimeInputDirective,
                    OwlDateTimeComponent,
                    OwlDateTimeContainerComponent,
                    OwlMultiYearViewComponent,
                    OwlYearViewComponent,
                    OwlMonthViewComponent,
                    OwlTimerComponent,
                    OwlTimerBoxComponent,
                    OwlCalendarComponent,
                    OwlCalendarBodyComponent,
                    NumberFixedLenPipe,
                    OwlDateTimeInlineComponent,
                ],
                providers: [
                    OwlDateTimeIntl,
                    OWL_DTPICKER_SCROLL_STRATEGY_PROVIDER,
                    ...optionsProviders,
                ],
                entryComponents: [
                    OwlDateTimeContainerComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OwlDateTimeModule, { declarations: [OwlDateTimeTriggerDirective,
        OwlDateTimeInputDirective,
        OwlDateTimeComponent,
        OwlDateTimeContainerComponent,
        OwlMultiYearViewComponent,
        OwlYearViewComponent,
        OwlMonthViewComponent,
        OwlTimerComponent,
        OwlTimerBoxComponent,
        OwlCalendarComponent,
        OwlCalendarBodyComponent,
        NumberFixedLenPipe,
        OwlDateTimeInlineComponent], imports: [CommonModule, OverlayModule, OwlDialogModule, A11yModule], exports: [OwlCalendarComponent,
        OwlTimerComponent,
        OwlDateTimeTriggerDirective,
        OwlDateTimeInputDirective,
        OwlDateTimeComponent,
        OwlDateTimeInlineComponent,
        OwlMultiYearViewComponent,
        OwlYearViewComponent,
        OwlMonthViewComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY2tlci9zcmMvbGliL2RhdGUtdGltZS9kYXRlLXRpbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQXVDdEQsTUFBTSxPQUFPLGlCQUFpQjs7a0ZBQWpCLGlCQUFpQjttRUFBakIsaUJBQWlCO3dFQVRmO1FBQ1AsZUFBZTtRQUNmLHFDQUFxQztRQUNyQyxHQUFHLGdCQUFnQjtLQUN0QixZQS9CUSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQzt1RkFvQzFELGlCQUFpQjtjQXJDN0IsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQztnQkFDbkUsT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQiwwQkFBMEI7b0JBQzFCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixxQkFBcUI7aUJBQ3hCO2dCQUNELFlBQVksRUFBRTtvQkFDViwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQiw2QkFBNkI7b0JBQzdCLHlCQUF5QjtvQkFDekIsb0JBQW9CO29CQUNwQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQiwwQkFBMEI7aUJBQzdCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxlQUFlO29CQUNmLHFDQUFxQztvQkFDckMsR0FBRyxnQkFBZ0I7aUJBQ3RCO2dCQUNELGVBQWUsRUFBRTtvQkFDYiw2QkFBNkI7aUJBQ2hDO2FBQ0o7O3dGQUNZLGlCQUFpQixtQkF2QnRCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLDBCQUEwQixhQXpCcEIsWUFBWSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxhQUU5RCxvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGF0ZS10aW1lLm1vZHVsZVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBPd2xEYXRlVGltZVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXItdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUiwgT3dsRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE93bERhdGVUaW1lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3dsRGF0ZVRpbWVJbnRsIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLWludGwuc2VydmljZSc7XG5pbXBvcnQgeyBPd2xNb250aFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE93bENhbGVuZGFyQm9keUNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3dsWWVhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXllYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3dsTXVsdGlZZWFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItbXVsdGkteWVhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd2xUaW1lckJveENvbXBvbmVudCB9IGZyb20gJy4vdGltZXItYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd2xUaW1lckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckZpeGVkTGVuUGlwZSB9IGZyb20gJy4vbnVtYmVyZWRGaXhMZW4ucGlwZSc7XG5pbXBvcnQgeyBPd2xDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE93bERhdGVUaW1lSW5saW5lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRpbWUtaW5saW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd2xEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi9kaWFsb2cvZGlhbG9nLm1vZHVsZSc7XG5pbXBvcnQgeyBvcHRpb25zUHJvdmlkZXJzIH0gZnJvbSAnLi9vcHRpb25zLXByb3ZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBPd2xEaWFsb2dNb2R1bGUsIEExMXlNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgT3dsQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgICAgIE93bFRpbWVyQ29tcG9uZW50LFxuICAgICAgICBPd2xEYXRlVGltZVRyaWdnZXJEaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lQ29tcG9uZW50LFxuICAgICAgICBPd2xEYXRlVGltZUlubGluZUNvbXBvbmVudCxcbiAgICAgICAgT3dsTXVsdGlZZWFyVmlld0NvbXBvbmVudCxcbiAgICAgICAgT3dsWWVhclZpZXdDb21wb25lbnQsXG4gICAgICAgIE93bE1vbnRoVmlld0NvbXBvbmVudCxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBPd2xEYXRlVGltZVRyaWdnZXJEaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lSW5wdXREaXJlY3RpdmUsXG4gICAgICAgIE93bERhdGVUaW1lQ29tcG9uZW50LFxuICAgICAgICBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgT3dsTXVsdGlZZWFyVmlld0NvbXBvbmVudCxcbiAgICAgICAgT3dsWWVhclZpZXdDb21wb25lbnQsXG4gICAgICAgIE93bE1vbnRoVmlld0NvbXBvbmVudCxcbiAgICAgICAgT3dsVGltZXJDb21wb25lbnQsXG4gICAgICAgIE93bFRpbWVyQm94Q29tcG9uZW50LFxuICAgICAgICBPd2xDYWxlbmRhckNvbXBvbmVudCxcbiAgICAgICAgT3dsQ2FsZW5kYXJCb2R5Q29tcG9uZW50LFxuICAgICAgICBOdW1iZXJGaXhlZExlblBpcGUsXG4gICAgICAgIE93bERhdGVUaW1lSW5saW5lQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE93bERhdGVUaW1lSW50bCxcbiAgICAgICAgT1dMX0RUUElDS0VSX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbiAgICAgICAgLi4ub3B0aW9uc1Byb3ZpZGVycyxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBPd2xEYXRlVGltZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE93bERhdGVUaW1lTW9kdWxlIHtcbn1cbiJdfQ==