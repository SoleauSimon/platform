import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/fr";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.locale("fr");

export default dayjs;
