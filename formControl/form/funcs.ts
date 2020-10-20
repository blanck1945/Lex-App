export const getEventMonth = (date: string) => {
  const day = date.slice(5, 7);
  const monthName = returnMontName(parseInt(day));
  return monthName.toString();
};

const returnMontName = (num: number) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return months.filter((el: string, index: number) =>
    index + 1 === num ? [el] : null
  );
};

export const formatHour = (hour: string) => {
  if (hour.length === 2) {
    return hour + ":00";
  }
  return hour.slice(0, 1) + ":" + hour.slice(2, 3);
};

export const getEventDay = (date: string) => {
  return getDayName(date, undefined);
};

export const getDayName = (dateStr: string, locale: string) => {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

export const formatData = (arr: any, filter: string) => {
  const formatArr: any = [];

  for (const key in arr) {
    if (key.substr(0, key.length - 1) === filter) {
      formatArr.push(arr[key]);
    }
  }
  return formatArr;
};

export const cleanData = (arr: any) => {
  for (const key in arr) {
    const lastCaracter = key.substr(-1);
    if (
      lastCaracter === "0" ||
      lastCaracter === "1" ||
      lastCaracter === "2" ||
      lastCaracter === "3" ||
      lastCaracter === "4"
    ) {
      delete arr[key];
    }
  }

  return arr;
};

export const getToday = () => {
  const today = new Date();
  return (
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  );
};

export const checkBoolValue = (value: string) => {
  if (value === "Si") {
    return true;
  }
  return false;
};

export const initialValues = {
  event_name: "",
  event_desc: "",
  event_category: "Derecho",
  event_type: "Conferencia",
  event_start: "",
  event_free: true,
  event_discount: "No",
  event_discount_per: 0,
  event_img: "",
  terms: false,
};
