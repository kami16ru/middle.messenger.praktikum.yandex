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
