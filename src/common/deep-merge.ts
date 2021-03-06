export function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export function deepMerge(target = {}, ...sources: any[]): any {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift() || {};

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (source[key] instanceof Date) {
        Object.assign(target, { [key]: source[key] });
      } else if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}

export function softCopy(target: any, ...sources: any[]): any {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift() || {};
  if (isObject(target) && isObject(source)) {
    for (const key in target) {
      if (source[key]) {
        if (source[key] instanceof Date) {
          Object.assign(target, { [key]: source[key] });
        } else if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          softCopy(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  }
  return softCopy(target, ...sources);
}

export function createObject<T>(instance0f: T) {
  return instance0f;
}
