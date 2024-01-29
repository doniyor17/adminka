function escapeNonDigitFromString(value) {
  return value?.match?.(/\d+(\.)?(\d+)?/g)?.join?.('') || '';
}

function toNumber(e) {
  const val = e.target.value;

  const digitOnly = (val && val.toString().replace(/\D/g, '')) || '';
  e.target.value = digitOnly;
  return digitOnly;
}

function splitFloat(str) {
  const [decimal = 0, float = ''] = (str || '').toString().split('.');
  return `${decimal}.${float ? float.slice(0, 2) : ''}`;
}

function currencyFormatterListener(e) {
  const val = e.target.value?.replace(/[^\d.-]/g, '') || '';
  e.target.value = val;

  if ([undefined, null, ''].includes(val)) {
    return '';
  }

  const valString = val.toString();

  if (valString.indexOf('.') != -1) {
    const formatted = splitFloat(valString);
    e.target.value = formatted;
    return formatted;
  }

  return val;
}

export { currencyFormatterListener, escapeNonDigitFromString, toNumber };
