function isExponent(number) {
  return /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)/.test(number);
}

function toExpo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

export { isExponent, toExpo };
