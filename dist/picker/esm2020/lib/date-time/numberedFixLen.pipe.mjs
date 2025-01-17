/**
 * numberFixedLen.pipe
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberFixedLenPipe {
    transform(num, len) {
        const number = Math.floor(num);
        const length = Math.floor(len);
        if (num === null || isNaN(number) || isNaN(length)) {
            return num;
        }
        let numString = number.toString();
        while (numString.length < length) {
            numString = '0' + numString;
        }
        return numString;
    }
}
NumberFixedLenPipe.ɵfac = function NumberFixedLenPipe_Factory(t) { return new (t || NumberFixedLenPipe)(); };
NumberFixedLenPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "numberFixedLen", type: NumberFixedLenPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberFixedLenPipe, [{
        type: Pipe,
        args: [{
                name: 'numberFixedLen'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyZWRGaXhMZW4ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY2tlci9zcmMvbGliL2RhdGUtdGltZS9udW1iZXJlZEZpeExlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxrQkFBa0I7SUFDM0IsU0FBUyxDQUFFLEdBQVcsRUFBRSxHQUFXO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoRCxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBRUQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxDLE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7WUFDOUIsU0FBUyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOztvRkFoQlEsa0JBQWtCO3lGQUFsQixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLGdCQUFnQjthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogbnVtYmVyRml4ZWRMZW4ucGlwZVxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdudW1iZXJGaXhlZExlbidcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyRml4ZWRMZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKCBudW06IG51bWJlciwgbGVuOiBudW1iZXIgKTogYW55IHtcbiAgICAgICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihudW0pO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBNYXRoLmZsb29yKGxlbik7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gbnVsbCB8fCBpc05hTihudW1iZXIpIHx8IGlzTmFOKGxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudW07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbnVtU3RyaW5nID0gbnVtYmVyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgd2hpbGUgKG51bVN0cmluZy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIG51bVN0cmluZyA9ICcwJyArIG51bVN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudW1TdHJpbmc7XG4gICAgfVxufVxuIl19