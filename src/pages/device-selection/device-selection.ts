import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PhotoEditorPage} from '../photo-editor/photo-editor';

@Component({
    selector: 'page-home',
    templateUrl: 'device-selection.html'
})
export class DeviceSelectionPage {

    constructor(public navCtrl: NavController) {

    }

    selectDevice() {
        this.navCtrl.push(PhotoEditorPage)
    }

}
