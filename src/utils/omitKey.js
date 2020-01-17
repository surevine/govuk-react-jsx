export default function omit(object, key) {
  // eslint-disable-next-line no-unused-vars
  const { [key]: deletedKey, ...otherKeys } = object;
  return otherKeys;
}
