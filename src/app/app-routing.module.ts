import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';
import { HomeScreen } from './screens/home/home.component';

const routes: Routes = [
  {
    title: 'Home',
    component: HomeScreen,
    path: '',
    resolve: () => {
      return null;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
