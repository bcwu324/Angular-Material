import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCardCols: 1,
          miniCardRows: 1,
          chartCols: 1,
          chartRows: 2,
          tableCols: 1,
          tableRows: 4
        };
      }

      return {
        columns: 4,
        miniCardCols: 1,
        miniCardRows: 1,
        chartCols: 2,
        chartRows: 2,
        tableCols: 4,
        tableRows: 4
      };
    })
  );
  miniCards=['card1','card2','card3','card4']
  charts=['chart1','chart2','chart3','chart4']
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.miniCards, event.previousIndex, event.currentIndex);
  }



  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
