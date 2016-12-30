import { Component, OnInit } from '@angular/core';

/** date-fns**/

import * as differenceInDays from 'date-fns/difference_in_days';
import * as  startOfWeek from 'date-fns/start_of_week';
import * as  addDays from 'date-fns/add_days';
import * as  endOfWeek from 'date-fns/end_of_week';
import * as  startOfMonth from 'date-fns/start_of_month';
import * as  endOfMonth from 'date-fns/end_of_month';
import * as  isSameMonth from 'date-fns/is_same_month';
import * as  startOfDay from 'date-fns/start_of_day';
import * as isSameDay from 'date-fns/is_same_day';
import * as getDay from 'date-fns/get_day';

/****/

@Component({
  selector: 'app-curso-asistencia-ver',
  templateUrl: './curso-asistencia-ver.component.html',
  styleUrls: ['./curso-asistencia-ver.component.css']
})
export class CursoAsistenciaVerComponent implements OnInit {

  viewDate: Date;
  weekStartsOn: number;
  view: any;

  inasistenciaMonth = [];
  month = [];

  constructor() { }

  ngOnInit() {
    this.viewDate = new Date();
    this.weekStartsOn = 1;
    this.view = this.getMonthView({
      viewDate: this.viewDate,
      weekStartsOn: this.weekStartsOn
    });

    this.inasistenciaMonth.push({'day': this.viewDate , 'cant':10});
  }

  //calendar rendering
  getMonthView: Function = ({viewDate, weekStartsOn}:
    {viewDate: Date, weekStartsOn: number})
    : MonthView => {

    const start: Date = startOfWeek(startOfMonth(viewDate), {weekStartsOn});
    const end: Date = endOfWeek(endOfMonth(viewDate), {weekStartsOn});

    const days: MonthViewDay[] = [];
    for (let i: number = 0; i < differenceInDays(end, start) + 1; i++) {
      const date: Date = addDays(start, i);
      const day: MonthViewDay = getWeekDay({date});

      day.inMonth = isSameMonth(date, viewDate);

      days.push(day);
    }

    const rows: number = Math.floor(days.length / 7);
    const rowOffsets: number[] = [];
    for (let i: number = 0; i < rows; i++) {
      rowOffsets.push(i * 7);
    }

    return {
      rowOffsets,
      days
    };

  };

  getDayName(dayNumber: number){
    let dayNames =[
      {'id':0,'name':'Dom'},
      {'id':1,'name':'Lun'},
      {'id':2,'name':'Mar'},
      {'id':3,'name':'Mie'},
      {'id':4,'name':'Jue'},
      {'id':5,'name':'Vie'},
      {'id':6,'name':'Sab'},
    ];

    return dayNames.find(day => day.id == dayNumber).name;
  };

  getMonthName(monthNumber: number){
    let monthNames =[
      {'id':0,'name':'Enero'},
      {'id':1,'name':'Febrero'},
      {'id':2,'name':'Marzo'},
      {'id':3,'name':'Abril'},
      {'id':4,'name':'Mayo'},
      {'id':5,'name':'Junio'},
      {'id':6,'name':'Julio'},
      {'id':7,'name':'Agosto'},
      {'id':8,'name':'Septiembre'},
      {'id':9,'name':'Octubre'},
      {'id':10,'name':'Noviembre'},
      {'id':11,'name':'Diciembre'},
    ];

    return monthNames.find(day => day.id == monthNumber).name;
  };

  getInasistenciaByDia(day: Date): number{
    let cant: number;
    if( this.inasistenciaMonth.find(res => res.day.toDateString() == day.toDateString()) ){
      cant = this.inasistenciaMonth.find(res => res.day.toDateString() == day.toDateString()).cant;
    } else {
      cant = 0;
    }
    return cant;
  }

}

export interface MonthView {
  rowOffsets: number[];
  days: MonthViewDay[];
}

export interface MonthViewDay extends WeekDay {
  inMonth: boolean;
  backgroundColor?: string;
  cssClass?: string;
  badgeTotal: number;
}

export interface WeekDay {
  date: Date;
  isPast: boolean;
  isToday: boolean;
  isFuture: boolean;
  isWeekend: boolean;
}

const WEEKEND_DAY_NUMBERS: number[] = [0, 6];

const getWeekDay: Function = ({date}: {date: Date}): WeekDay => {
  const today: Date = startOfDay(new Date());
  return {
    date,
    isPast: date < today,
    isToday: isSameDay(date, today),
    isFuture: date > today,
    isWeekend: WEEKEND_DAY_NUMBERS.indexOf(getDay(date)) > -1
  };
};
