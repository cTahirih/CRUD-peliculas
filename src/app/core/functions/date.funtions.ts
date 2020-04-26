import * as moment from 'moment';

export function getDateYYYYMMDDHHMMSS(fechaIn = new Date()) {
  return moment(fechaIn).format('YYYYMMDDHHmmss');
}

export function TimestampString(fechaIn = new Date()) {
  return moment(fechaIn).format('DD/MM/YYYY hh:mm:SS a');
}

/**
 *
 * @param fecha Fecha en string
 * @param formato fomato del string
 */
export function stringToDate(fecha: string, formato: string){
  return moment(fecha, formato).toDate();
}

/**
 *
 * @param fechaIn fecha a convertir
 * @param format formato de fecha
 */
export function date2String(fechaIn = new Date(), format = 'DD/MM/YYYY') {
  return moment(fechaIn).format(format);
}

export function randomDate(start, end, format = 'DD/MM/YYYY') {
  const fechaIn = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return moment(fechaIn).format(format);
}
