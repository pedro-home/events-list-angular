
import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable()
export class UtilsService {

    public parseDate(date: string, format?: string): Date {
        return moment(date, format || 'DD-MM-YYYY HH:mm:ss').toDate();
    }

    public inSameDay(date1: Date, date2: Date): boolean {
        return this.inSameMonth(date1, date2) &&
        date1.getDate() === date2.getDate();
    }

    public inSameMonth(date1: Date, date2: Date): boolean {
        return this.inSameYear(date1, date2) &&
        date1.getMonth() === date2.getMonth();
    }

    public inSameYear(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear();
    }

    public inSameWeek(date1: Date, date2: Date): boolean {
        let dayWeek = date1.getDay();
        let dayMonth1 = date1.getDate();
        let dayMonth2 = date2.getDate();
        
        return this.inSameMonth(date1, date2) &&
        dayMonth2 >= dayMonth1 - dayWeek &&
        dayMonth2 <= dayMonth1 + dayWeek;

    }
}