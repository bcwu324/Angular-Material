import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DevicesModule } from './devices/devices.module';
import { DashComponent } from './dash/dash.component';
import { DeviceListComponent } from './devices/device-list/device-list.component';
const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'devices', component: DeviceListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
