import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{
		path: '',
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'about',
				component: AboutComponent
			},
			
			{
				path: '**',
				redirectTo: '404'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
