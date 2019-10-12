// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.css'],
// })
// export class AppComponent {
//   title = 'tadhack-app';
//   lat = -26.145314;
//   lng = 27.936605;
// }

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var H: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private platform: any;

    @ViewChild("map", {static: false})
    public mapElement: ElementRef;
    public query: string;

    public constructor() {
        this.platform = new H.service.Platform({
            "app_id": "DonUiun0GLnIxjH5uqTY",
            "app_code": "OYOE0IPZZmcdB5fMRZh5ig"
        });
        this.query = "starbucks";
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: -26.145314, lng: 27.936605 }
            }
        );
    }

}
