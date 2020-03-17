import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HierarichalComponent } from './hierarichal/hierarichal.component';
import { DepartmentComponent } from './department/department.component';
import { LocationComponent } from './location/location.component';
const appRoutes: Routes = [
  {
    path: 'hierarichal',
    component: HierarichalComponent
  },
  {
    path: 'departments',
    component: DepartmentComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
  {
    path: '',
    redirectTo: '/hierarichal',
    pathMatch: 'full'
  }//,
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HierarichalComponent,
    DepartmentComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
