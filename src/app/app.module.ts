import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterService} from './shared/register.service';
import { LoginService } from './shared/login.service';




const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'task',component:TaskComponent},
  {path:'login',component:LoginComponent}
  
    
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService, RegisterService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

