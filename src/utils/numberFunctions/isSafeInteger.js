const MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;

function isSafeInteger(n) {
  return (
    typeof n === "number" &&
    Math.round(n) === n &&
    MIN_SAFE_INTEGER <= n &&
    n <= MAX_SAFE_INTEGER
  );
}

export default isSafeInteger;
