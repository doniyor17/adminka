import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/uz";
import "dayjs/locale/uz-latn";
import "dayjs/locale/ru";
import "dayjs/locale/en";

dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(isSameOrAfter);

const DD_MM_YYYY_DOT = "DD.MM.YYYY";

function toDDMMYYYYDot(date: number | string | null) {
  // <- 2023-02-25
  if (!date || !dayjs(date).isValid()) return "";

  return dayjs(date).format(DD_MM_YYYY_DOT); // -> 25.02.2023
}

function useDayjs() {
  return {
    dayjs,
    toDDMMYYYYDot,
  };
}

export default useDayjs;
