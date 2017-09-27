import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {PhotoEditorPage} from '../photo-viewer/photo-viewer';

@Component({
    selector: 'page-home',
    templateUrl: 'device-selection.html'
})
export class DeviceSelectionPage {

    constructor(public navCtrl: NavController, private alertCtrl: AlertController ) {

    }

    selectOneDevice() {
        this.navCtrl.push(PhotoEditorPage)
    }

    selectTwoDevices(){
        let alert = this.alertCtrl.create({
            title: 'Coming soon',
            subTitle: 'Not yet implemented',
            buttons: ['OK']
        });
        alert.present();
    }

}
