export default function (val) {
  return (typeof +val === 'number' && Math.round(parseFloat(val) * 100) / 100) || val || '';
}
