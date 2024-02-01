export default function splitFloat(n) {
  let res = {
    integer: 0,
    decimal: 0,
    tiyin: 0,
  };

  if (!n) {
    return res;
  }

  const regex = /(\d*)[.,]{1}(\d*)/;
  let m;

  if ((m = regex.exec(n.toString())) !== null) {
    let tiyin = Math.round((n % 1) * 100);
    tiyin = tiyin > 9 ? tiyin : `0${tiyin}`;
    res = {
      integer: parseInt(m[1]),
      decimal: parseFloat(`0.${m[2]}`),
      tiyin,
    };

    return res;
  }

  res = {
    integer: n,
    decimal: 0,
    tiyin: 0,
  };

  return res;
}
