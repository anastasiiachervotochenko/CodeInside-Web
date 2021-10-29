import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomePageComponent } from './pages/welcomePage/welcomePage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/app-header.component';
import { RangeSliderControlComponent } from './components/slider/range-slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaskViewPageComponent } from './pages/taskViewPage/taskViewPage.component';
import {TaskPageComponent} from "./pages/taskPage/taskPage.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TheoryViewPageComponent } from './pages/theoryViewPage/theoryViewPage.component';
import { TopicPageComponent } from './pages/topic-page/topic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomePageComponent,
    TaskViewPageComponent,
    HeaderComponent,
    RangeSliderControlComponent,
    TaskPageComponent,
    TheoryViewPageComponent,
    HeaderComponent,
    TopicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    NgSelectModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
