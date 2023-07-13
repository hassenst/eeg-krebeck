/**
 * @param {int} timestamp
 * @returns DateString
 */

export default function timestampToDatestring(timestamp) {
  return new Date(timestamp * 1000).toLocaleDateString();
}
