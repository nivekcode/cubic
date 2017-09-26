import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen';

import {StatusBar} from '@ionic-native/status-bar';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {DeviceSelectionPage} from '../pages/device-selection/device-selection';
import {PhotoEditorPage} from '../pages/photo-viewer/photo-viewer';
import {MyApp} from './app.component';

@NgModule({
    declarations: [
        MyApp,
        DeviceSelectionPage,
        PhotoEditorPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        DeviceSelectionPage,
        PhotoEditorPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {
}
