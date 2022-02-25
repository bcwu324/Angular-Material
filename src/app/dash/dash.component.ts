import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
          talbeRows: 4
        };
      }

      return {
        columns: 4,
        miniCardCols: 1,
        miniCardRows: 1,
        chartCols: 2,
        chartRows: 2,
        tableCols: 4,
        talbeRows: 4
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {


  }
}
