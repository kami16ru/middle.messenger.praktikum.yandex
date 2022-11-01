import { Indexed } from './types'

export const isEmpty = function (value: any) {
  for (const prop in value) {
    // eslint-disable-next-line no-prototype-builtins
    if (value.hasOwnProperty(prop)) {
      return false
    }
  }
  if ((value instanceof Map) || (value instanceof Set)) {
    if (value.size > 0) return false
  }

  return true
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rhs.hasOwnProperty(p)) {
      continue
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed)
      } else {
        lhs[p] = rhs[p]
      }
    } catch (e) {
      lhs[p] = rhs[p]
    }
  }

  return lhs
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc
  }), value as any)

  return merge(object as Indexed, result)
}

type PlainObject<T = any> = {
  [k in string]: T;
};

export function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]'
}

export function isArray(value: unknown): value is [] {
  return Array.isArray(value)
}

export function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value)
}

export function isEqual(lhs: PlainObject, rhs: PlainObject) {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key]

    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue
      }

      return false
    }

    if (value !== rightValue) {
      return false
    }
  }

  return true
}
