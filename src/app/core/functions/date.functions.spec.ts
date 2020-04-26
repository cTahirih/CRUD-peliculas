import { getDateYYYYMMDDHHMMSS, TimestampString, stringToDate, date2String } from 'src/app/core/functions/date.funtions';
import * as moment from 'moment';

describe('Date functions', () => {
    it('Debe devolver la fecha en formato YYYYMMDDHHmmSS', () => {
        const fecha = new Date();
        const format = getDateYYYYMMDDHHMMSS(fecha);
        expect(format.length).toBeGreaterThan(0);
    });

    it('Debe devolver la fecha en formato DD/MM/YYYY hh:mm:SS a', () => {
        const fecha = new Date();
        const format = TimestampString(fecha);
        expect(format).toBe(moment(fecha).format('DD/MM/YYYY hh:mm:SS a'));
    });

    it('stringToDate', () => {
        const fecha = '10/10/2010';
        const formato = 'DD/MM/YYYY';
        const result = stringToDate(fecha, formato);
        expect(result).toEqual(new Date(2010, 9, 10));
    });

    it('date2String', () => {
        const fecha = new Date();
        const format = 'DD/MM/YYYY';
        const result = date2String(fecha, format);
        expect(result).toEqual(moment(fecha).format(format));
    });

});
