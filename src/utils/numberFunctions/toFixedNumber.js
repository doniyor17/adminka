import { isInt } from "@/utils/numberFunctions/digitChecker.js";

export default function (num = 0, { toFix = 2, base = 10 } = {}) {
  const pow = Math.pow(base, toFix);
  const val = +(Math.round((+num || 0) * pow) / pow);
  const computedVal = isInt(val) ? `${val}.00` : val;

  return computedVal;
}
