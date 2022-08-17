// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
