import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';

declare var device: any;


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    public phoneData: any = {};

    constructor(private platform: Platform) {
        this.platform.ready().then(() => {
            this.loadData();
        });
    }


    loadData() {
        if (typeof device === 'undefined') {
            this.phoneData = {error: 'SHOULD BE ON DEVICE'};
            return;
        }
        this.phoneData = {
            pt: this.platform.is('ios') ? 'ios' : 'android',
            device_type: ((screen.width >= 480) && (screen.height >= 800)) || ((screen.width >= 800) && (screen.height >= 480)) || navigator.userAgent.match(/ipad/gi) ? 'tablette' : 'smartphone',
            id: device.uuid,
            mhn: device.serial,
            model: device.model
        };
    }
}
