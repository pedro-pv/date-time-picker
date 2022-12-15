/**
 * native-date-time.module
 */
import { NgModule } from '@angular/core';
import { PlatformModule } from '@angular/cdk/platform';
import { DateTimeAdapter } from './date-time-adapter.class';
import { NativeDateTimeAdapter } from './native-date-time-adapter.class';
import { OWL_DATE_TIME_FORMATS } from './date-time-format.class';
import { OWL_NATIVE_DATE_TIME_FORMATS } from './native-date-time-format.class';
import * as i0 from "@angular/core";
export class NativeDateTimeModule {
}
NativeDateTimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: NativeDateTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NativeDateTimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: NativeDateTimeModule, imports: [PlatformModule] });
NativeDateTimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: NativeDateTimeModule, providers: [
        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
    ], imports: [[PlatformModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: NativeDateTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PlatformModule],
                    providers: [
                        { provide: DateTimeAdapter, useClass: NativeDateTimeAdapter },
                    ],
                }]
        }] });
export class OwlNativeDateTimeModule {
}
OwlNativeDateTimeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: OwlNativeDateTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OwlNativeDateTimeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: OwlNativeDateTimeModule, imports: [NativeDateTimeModule] });
OwlNativeDateTimeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: OwlNativeDateTimeModule, providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }], imports: [[NativeDateTimeModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: OwlNativeDateTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [NativeDateTimeModule],
                    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_TIME_FORMATS }],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLWRhdGUtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNrZXIvc3JjL2xpYi9kYXRlLXRpbWUvYWRhcHRlci9uYXRpdmUtZGF0ZS10aW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFRL0UsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLFlBTG5CLGNBQWM7a0hBS2Ysb0JBQW9CLGFBSmxCO1FBQ1AsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztLQUM5RCxZQUhRLENBQUMsY0FBYyxDQUFDOzJGQUtoQixvQkFBb0I7a0JBTmhDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN6QixTQUFTLEVBQUU7d0JBQ1AsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQztxQkFDOUQ7aUJBQ0o7O0FBUUQsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1QjtxSEFBdkIsdUJBQXVCLFlBUHZCLG9CQUFvQjtxSEFPcEIsdUJBQXVCLGFBRnJCLENBQUMsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFDLENBQUMsWUFENUUsQ0FBQyxvQkFBb0IsQ0FBQzsyRkFHdEIsdUJBQXVCO2tCQUpuQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQztpQkFDeEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIG5hdGl2ZS1kYXRlLXRpbWUubW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERhdGVUaW1lQWRhcHRlciB9IGZyb20gJy4vZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xuaW1wb3J0IHsgTmF0aXZlRGF0ZVRpbWVBZGFwdGVyIH0gZnJvbSAnLi9uYXRpdmUtZGF0ZS10aW1lLWFkYXB0ZXIuY2xhc3MnO1xuaW1wb3J0IHsgT1dMX0RBVEVfVElNRV9GT1JNQVRTIH0gZnJvbSAnLi9kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcbmltcG9ydCB7IE9XTF9OQVRJVkVfREFURV9USU1FX0ZPUk1BVFMgfSBmcm9tICcuL25hdGl2ZS1kYXRlLXRpbWUtZm9ybWF0LmNsYXNzJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUGxhdGZvcm1Nb2R1bGVdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogRGF0ZVRpbWVBZGFwdGVyLCB1c2VDbGFzczogTmF0aXZlRGF0ZVRpbWVBZGFwdGVyfSxcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRlVGltZU1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZURhdGVUaW1lTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogT1dMX0RBVEVfVElNRV9GT1JNQVRTLCB1c2VWYWx1ZTogT1dMX05BVElWRV9EQVRFX1RJTUVfRk9STUFUU31dLFxufSlcbmV4cG9ydCBjbGFzcyBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB7XG59XG4iXX0=