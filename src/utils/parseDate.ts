import dayjs from "dayjs";

export function parseDate(
  isoDate: string,
  format: string = "DD.MM.YYYY HH:mm",
  locale: string = "sk",
): string {
  return dayjs(isoDate).locale(locale).format(format);
}
