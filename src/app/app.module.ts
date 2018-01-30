import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { tutorInfoPage } from '../pages/tutorInfo/tutorInfo';
import { tutorPage } from './../pages/tutor/tutor';
import { ActivityPage } from './../pages/activity/activity';
import { ActivityViewPage } from './../pages/activityView/activityView';
import { StudentPage } from './../pages/student/student';
import { StudentViewPage } from '../pages/student-view/student-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentProvider } from '../providers/student/student';
import { TutorProvider } from '../providers/tutor/tutor';
import { EduTechProvider } from '../providers/edu-tech/edu-tech';
import { Keyboard } from '@ionic-native/keyboard';
import { ChangeDetectorRef } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    tutorInfoPage,
    tutorPage,
    ActivityPage,
    ActivityViewPage,
    StudentPage,
    StudentViewPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    tutorInfoPage,
    tutorPage,
    ActivityPage,
    ActivityViewPage,
    StudentPage,
    StudentViewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentProvider,
    TutorProvider,
    EduTechProvider,
    Keyboard,
  ]
})
export class AppModule {}
