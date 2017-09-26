import {Injectable} from '@angular/core';
import {CameraOptions, Camera} from "@ionic-native/camera";

@Injectable()
export class CameraService {

    private options: CameraOptions

    constructor(private camera: Camera) {
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
    }

    public takePicture(): Promise<any> {
        return this.camera.getPicture(this.options).then((imageData) => {
            //return 'data:image/jpeg;base64,' + imageData;
            return imageData
        }, (err) => {
            console.error('Something went wrong')
        });
    }
}