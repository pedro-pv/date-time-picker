/**
 * date.utils
 */
/**
 * Creates a date with the given year, month, date, hour, minute and second. Does not allow over/under-flow of the
 * month and date.
 */
export function createDate(year, month, date, hours = 0, minutes = 0, seconds = 0) {
    if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }
    if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }
    if (hours < 0 || hours > 23) {
        throw Error(`Invalid hours "${hours}". Hours has to be between 0 and 23.`);
    }
    if (minutes < 0 || minutes > 59) {
        throw Error(`Invalid minutes "${minutes}". Minutes has to between 0 and 59.`);
    }
    if (seconds < 0 || seconds > 59) {
        throw Error(`Invalid seconds "${seconds}". Seconds has to be between 0 and 59.`);
    }
    const result = createDateWithOverflow(year, month, date, hours, minutes, seconds);
    // Check that the date wasn't above the upper bound for the month, causing the month to overflow
    // For example, createDate(2017, 1, 31) would try to create a date 2017/02/31 which is invalid
    if (result.getMonth() !== month) {
        throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
}
/**
 * Gets the number of days in the month of the given date.
 */
export function getNumDaysInMonth(date) {
    const lastDateOfMonth = createDateWithOverflow(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDateOfMonth.getDate();
}
/**
 * Creates a date but allows the month and date to overflow.
 */
function createDateWithOverflow(year, month, date, hours = 0, minutes = 0, seconds = 0) {
    const result = new Date(year, month, date, hours, minutes, seconds);
    if (year >= 0 && year < 100) {
        result.setFullYear(result.getFullYear() - 1900);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY2tlci9zcmMvbGliL3V0aWxzL2RhdGUudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUN0QixJQUFZLEVBQ1osS0FBYSxFQUNiLElBQVksRUFDWixRQUFnQixDQUFDLEVBQ2pCLFVBQWtCLENBQUMsRUFDbkIsVUFBa0IsQ0FBQztJQUVuQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtRQUN6QixNQUFNLEtBQUssQ0FDUCx3QkFBd0IsS0FBSyw0Q0FBNEMsQ0FDNUUsQ0FBQztLQUNMO0lBRUQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsTUFBTSxLQUFLLENBQ1AsaUJBQWlCLElBQUksbUNBQW1DLENBQzNELENBQUM7S0FDTDtJQUVELElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1FBQ3pCLE1BQU0sS0FBSyxDQUNQLGtCQUFrQixLQUFLLHNDQUFzQyxDQUNoRSxDQUFDO0tBQ0w7SUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBRTtRQUM3QixNQUFNLEtBQUssQ0FDUCxvQkFBb0IsT0FBTyxxQ0FBcUMsQ0FDbkUsQ0FBQztLQUNMO0lBRUQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxFQUFFLEVBQUU7UUFDN0IsTUFBTSxLQUFLLENBQ1Asb0JBQW9CLE9BQU8sd0NBQXdDLENBQ3RFLENBQUM7S0FDTDtJQUVELE1BQU0sTUFBTSxHQUFHLHNCQUFzQixDQUNqQyxJQUFJLEVBQ0osS0FBSyxFQUNMLElBQUksRUFDSixLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sQ0FDVixDQUFDO0lBRUYsZ0dBQWdHO0lBQ2hHLDhGQUE4RjtJQUM5RixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLEVBQUU7UUFDN0IsTUFBTSxLQUFLLENBQ1AsaUJBQWlCLElBQUksMkJBQTJCLEtBQUssSUFBSSxDQUM1RCxDQUFDO0tBQ0w7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBVTtJQUN4QyxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsQ0FDMUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUNuQixDQUFDLENBQ0osQ0FBQztJQUVGLE9BQU8sZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsc0JBQXNCLENBQzNCLElBQVksRUFDWixLQUFhLEVBQ2IsSUFBWSxFQUNaLFFBQWdCLENBQUMsRUFDakIsVUFBa0IsQ0FBQyxFQUNuQixVQUFrQixDQUFDO0lBRW5CLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFcEUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7UUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDbkQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkYXRlLnV0aWxzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGF0ZSB3aXRoIHRoZSBnaXZlbiB5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlIGFuZCBzZWNvbmQuIERvZXMgbm90IGFsbG93IG92ZXIvdW5kZXItZmxvdyBvZiB0aGVcbiAqIG1vbnRoIGFuZCBkYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZShcbiAgICB5ZWFyOiBudW1iZXIsXG4gICAgbW9udGg6IG51bWJlcixcbiAgICBkYXRlOiBudW1iZXIsXG4gICAgaG91cnM6IG51bWJlciA9IDAsXG4gICAgbWludXRlczogbnVtYmVyID0gMCxcbiAgICBzZWNvbmRzOiBudW1iZXIgPSAwXG4pOiBEYXRlIHtcbiAgICBpZiAobW9udGggPCAwIHx8IG1vbnRoID4gMTEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBtb250aCBpbmRleCBcIiR7bW9udGh9XCIuIE1vbnRoIGluZGV4IGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDExLmBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZSA8IDEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiLiBEYXRlIGhhcyB0byBiZSBncmVhdGVyIHRoYW4gMC5gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGhvdXJzIDwgMCB8fCBob3VycyA+IDIzKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaG91cnMgXCIke2hvdXJzfVwiLiBIb3VycyBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAyMy5gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIG1pbnV0ZXMgXCIke21pbnV0ZXN9XCIuIE1pbnV0ZXMgaGFzIHRvIGJldHdlZW4gMCBhbmQgNTkuYFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChzZWNvbmRzIDwgMCB8fCBzZWNvbmRzID4gNTkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBzZWNvbmRzIFwiJHtzZWNvbmRzfVwiLiBTZWNvbmRzIGhhcyB0byBiZSBiZXR3ZWVuIDAgYW5kIDU5LmBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBjcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxuICAgICAgICB5ZWFyLFxuICAgICAgICBtb250aCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHNcbiAgICApO1xuXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgZGF0ZSB3YXNuJ3QgYWJvdmUgdGhlIHVwcGVyIGJvdW5kIGZvciB0aGUgbW9udGgsIGNhdXNpbmcgdGhlIG1vbnRoIHRvIG92ZXJmbG93XG4gICAgLy8gRm9yIGV4YW1wbGUsIGNyZWF0ZURhdGUoMjAxNywgMSwgMzEpIHdvdWxkIHRyeSB0byBjcmVhdGUgYSBkYXRlIDIwMTcvMDIvMzEgd2hpY2ggaXMgaW52YWxpZFxuICAgIGlmIChyZXN1bHQuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiIGZvciBtb250aCB3aXRoIGluZGV4IFwiJHttb250aH1cIi5gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCBsYXN0RGF0ZU9mTW9udGggPSBjcmVhdGVEYXRlV2l0aE92ZXJmbG93KFxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgIDBcbiAgICApO1xuXG4gICAgcmV0dXJuIGxhc3REYXRlT2ZNb250aC5nZXREYXRlKCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRhdGUgYnV0IGFsbG93cyB0aGUgbW9udGggYW5kIGRhdGUgdG8gb3ZlcmZsb3cuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXG4gICAgeWVhcjogbnVtYmVyLFxuICAgIG1vbnRoOiBudW1iZXIsXG4gICAgZGF0ZTogbnVtYmVyLFxuICAgIGhvdXJzOiBudW1iZXIgPSAwLFxuICAgIG1pbnV0ZXM6IG51bWJlciA9IDAsXG4gICAgc2Vjb25kczogbnVtYmVyID0gMFxuKTogRGF0ZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRhdGUsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblxuICAgIGlmICh5ZWFyID49IDAgJiYgeWVhciA8IDEwMCkge1xuICAgICAgICByZXN1bHQuc2V0RnVsbFllYXIocmVzdWx0LmdldEZ1bGxZZWFyKCkgLSAxOTAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==