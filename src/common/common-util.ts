export class CommonUtil {
  /**
   * ref:https://stackoverflow.com/questions/40774697/how-to-group-an-array-of-objects-by-key
   * @param arr array to group
   * @param func function to group by
   * @returns group
   */
  public static groupBy<T>(arr: T[], func) {
    return arr.reduce((result, value, idx, array, key = func(value)) => ((result[key] || (result[key] = [])).push(value), result), {});
  }

  /**
   * NgRedux only eccept plain object when you want to dispatch an action with the action.
   * @param object is the object you want to parse to plain object
   * return plain object
   */
  public static toPlainObject(object): any {
    return Object.assign({}, object);
  }

  public static isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array && Array.isArray(value);
  }

  public static isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object && !Array.isArray(value);
  }

  /**
   * Truncate long string to ...
   */
  public static truncate(text: string, config: { maxLength: number; suffix: string; backward: boolean } = { maxLength: 30, suffix: '...', backward: false }) {
    const len = config.maxLength;
    return text && text.length > len ? (!config.backward ? text.substr(0, len - 1) + config.suffix : config.suffix + text.substr(text.length - len, text.length)) : text;
  }

  public static formatBytes(bytes, decimals) {
    if (bytes == 0) {
      return '0 Bytes';
    }
    const k = 1024,
      dm = decimals <= 0 ? 0 : decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /**
   * Compares two Date objects and returns e number value that represents
   * the result:
   * 0 if the two dates are equal.
   * 1 if the first date is greater than second.
   * -1 if the first date is less than second.
   * @param date1 First date object to compare.
   * @param date2 Second date object to compare.
   */
  public static compareDate(date1: Date, date2: Date): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Check if the dates are equal
    const same = d1.getTime() === d2.getTime();
    if (same) {
      return 0;
    }

    // Check if the first is greater than second
    if (d1 > d2) {
      return 1;
    }

    // Check if the first is less than second
    if (d1 < d2) {
      return -1;
    }
  }

  /**
   * Convert string to boolean
   * the result:
   * true or false boolean.
   * @param value string value to compare
   */
  public static stringToBoolean(value = '') {
    switch (value.toLowerCase().trim()) {
      case 'true':
      case 'yes':
      case '1':
        return true;
      case 'false':
      case 'no':
      case '0':
      case null:
        return false;
      default:
        return Boolean(value);
    }
  }

  /**
   * Sanitize object and remove empty attribute
   * Filter all falsy values ( "", 0, false, null, undefined )
   * the result: sanitized attribute object
   * @param value any object to clean
   * https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
   */
  public static sanitizeObject(object: any): any {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (!object[key]) {
          delete object[key];
        }
      }
    }
    return { ...object };
    return Object.entries(object).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
  }
}

export function isEmpty(obj: any): boolean {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}
