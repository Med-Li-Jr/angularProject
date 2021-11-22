import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { CalendarView } from 'angular-calendar';
import * as dateFns from "date-fns";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  mCalendarView = CalendarView;
events: CalendarEvent[] = [
    {
      start: dateFns.startOfDay(new Date("11/26/2021")),
      title: 'An event with no end date',
    }
  ]
  
dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  console.log(date);
  console.log( (date.getMonth() + 1 )+ "/" + date.getDate() + "/" + date.getFullYear())
  events.push({
    start: new Date( date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()),
    title:"patient_name",
  });
  // https://javascript.plainenglish.io/create-calendar-using-angular-and-bootstrap-monthly-weekly-and-daily-calendar-c441f1cb8b18
//   this.events = [
//     ...this.events,
//     {
// start: new Date( date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()),
// title:"patient_name"
// }
// ]
  //this.openAppointmentList(date)
}
}
