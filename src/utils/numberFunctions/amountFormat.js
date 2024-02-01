import { isExponent, toExpo } from "@/utils/numberFunctions/isExponent.js";
import floatSplitter from "@/utils/numberFunctions/floatSplitter.js";

export function amountFormat(number, { dividTo = 3, replaceTo = " " } = {}) {
  let str = number?.toString?.() || "";
  if (!number || (number && isNaN(number))) {
    str = number?.replace?.(/\s/g, "") || "";
  }

  return toSeparate(str, { dividTo, replaceTo }) || "";
}

function currencyFormatter(number, { dividTo = 3, replaceTo = " " } = {}) {
  if (!number) {
    return "";
  }

  let sum = number?.toString();

  if (isNaN(sum)) {
    sum = sum.replace(/[^\d.-]+/g, "");
  }

  if (sum % 1 === 0) {
    sum = +sum;
  }

  const sumToInteger = sum.toString().replaceAll(" ", "");

  if (sumToInteger.length >= 16) {
    sum = toExpo(sum);
  }

  if (isExponent(sum)) {
    return sum;
  }

  if (sum.toString().includes(".") && sum.length <= 16) {
    sum = sum?.match?.(/\d+(\.)?(\d+)?/g)?.join?.("") || "";
    const commaList = sum.split(".") || [];
    const [decimal = "0", float = "00"] = commaList;
    sum = `${decimal}.${float.slice(0, 2)}`;
  }

  const res = toSeparate(sum, { dividTo, replaceTo });
  return res;
}

function decimalFormatter(number) {
  if (!number) {
    return "";
  }

  let sum = number?.toString() || "";

  if (isNaN(sum)) {
    sum = sum.replace(/[^\d.-]+/g, "");
  }

  if (parseFloat(sum) >= Number.MAX_SAFE_INTEGER) {
    return toExpo(sum);
  }

  if (isExponent(sum)) {
    return sum;
  }

  if (sum % 1 != 0) {
    const decimal = parseInt(sum, 10) || "";
    const [_, float] = sum.split(".");

    sum = `${decimal}.${float.slice(0, 2)}`;
  }

  return sum;
}

function toSeparate(val, { dividTo, replaceTo = " ", returnTypeTo } = {}) {
  const divid = dividTo || 3;
  const replace = replaceTo || " ";
  const returnType = returnTypeTo || "separated";
  const regex = new RegExp(`\\B(?=(\\d{${divid}})+(?!\\d))`, "g");
  let parts = val?.toString?.()?.replace?.(/( )/g, "")?.split(".");
  const partsToNumber = +parts?.join?.(".") || 0;
  const integer = parts?.[0]?.replace?.(regex, replace) || 0;
  const integerToNumber = integer || 0;
  let decimal = parts?.[1] || 0;
  const decimalToNumber = +decimal || 0;

  if (
    decimalToNumber > Number.MAX_SAFE_INTEGER ||
    integerToNumber > Number.MAX_SAFE_INTEGER
  ) {
    const expoNumber = toExpo(integerToNumber + decimalToNumber);
    return expoNumber;
  }

  const { integer: int, tiyin } = floatSplitter(partsToNumber);

  const res = `${returnType == "separated" ? int?.toString?.().replace?.(regex, replace) : int} so'm`;
  return res;
}

function separateTo4(text = "", { replaceTo = " " } = {}) {
  return text?.match?.(/.{1,4}/g)?.join?.(replaceTo);
}

export { currencyFormatter, decimalFormatter, separateTo4 };
