import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit {

    private ui: any;
    private search: any;
    
    @ViewChild("map", {static: false})
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    private platform: any;
    private map: any;
    private router: any;
    private routeOptions: any;

    private route: any;
    private routeShape: any;
    private startPoint: any;
    private endPoint: any;
    private strip: any;
    private routee: any;

    public constructor() { }

    public ngOnInit() {
      this.platform = new H.service.Platform({
          "app_id": this.appId,
          "app_code": this.appCode
      });
      this.search = new H.places.Search(this.platform.getPlacesService());
      this.router = this.platform.getRoutingService();
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 16,
            center: { lat: this.lat, lng: this.lng }
        }
    );
    //     console.log("PLATFORM:=> ", this.map);
    // this.routee = this.hereRoute(this.map, this.platform, {
    //     'mode': 'fastest;car',
    //     'representation': 'display',
    //     'waypoint0': 'geo!-26.145314,27.936605',
    //     'waypoint1': 'geo!-26.142515,28.046407'
    // })

    console.log("ROUTEEEE!=> ", this.routee);

    // this.router.calculateRoute({
    //     // calculateRouteParams object
    //     'mode': 'fastest;car',
    //     // Start and end point
    //     'waypoint0': 'geo!-26.145314,27.936605', // HERE HQ in Berlin, Germany
    //     'waypoint1': 'geo!-26.142515,28.046407',  // Friedrichstraße Railway Station in Berlin, Germany
    //         // response formatting 
    //         'representation': 'display'
    //   },
    
    //   // onSuccess callback
    //   function(result) {
    //     console.log('Route found!', result);
    //     if (result.response.route) {
    //         console.log("Entered if statement with: ", result.response);
    //         this.route = result.response.route[0];
    //         this.routeShape = this.route.shape;

    //         this.strip = new H.geo.Strip();

    //         this.routeShape.forEach(point => {
    //             const parts = point.split(',');
    //             this.strip.pushLatLngAlt(parts[0], parts[1]);
    //         });

    //         const routeLine = new H.map.Polyline(this.strip, {
    //             style: {
    //                 strokeColor: 'blue',
    //                 lineWidth: 3
    //             }
    //         })

    //         this.map.addObject(routeLine)

    //         this.map.setViewBounds(routeLine.getBounds());
    //     }
    //     console.log('Route found!', result);
    //   },
    
    //   // onError callback
    //   function(error) {
    //     console.error('Oh no! There was some communication error!', error);
    //   }
    // );

    var routingParameters = {
        // The routing mode:
        'mode': 'fastest;car',
        // The start point of the route:
        'waypoint0': 'geo!-26.125314,27.836605',
        // The end point of the route:
        'waypoint1': 'geo!-26.162515,28.076407',
        // To retrieve the shape of the route we choose the route
        // representation mode 'display'
        'representation': 'display'
      };

    console.log("Routing Params=> ", routingParameters);

    // =======================================================


    // var onResult = function(result) {
    //     var route,
    //     routeShape,
    //     startPoint,
    //     endPoint,
    //     linestring;
    //     if(result.response.route) {
    //     // Pick the first route from the response:
    //     route = result.response.route[0];
    //     // Pick the route's shape:
    //     routeShape = route.shape;
      
    //     // Create a linestring to use as a point source for the route line
    //     linestring = new H.geo.LineString();
      
    //     // Push all the points in the shape into the linestring:
    //     routeShape.forEach(function(point) {
    //     var parts = point.split(',');
    //     linestring.pushLatLngAlt(parts[0], parts[1]);
    //     });
      
    //     // Retrieve the mapped positions of the requested waypoints:
    //     startPoint = route.waypoint[0].mappedPosition;
    //     endPoint = route.waypoint[1].mappedPosition;
      
    //     // Create a polyline to display the route:
    //     var routeLine = new H.map.Polyline(linestring, {
    //     style: { strokeColor: 'blue', lineWidth: 5 }
    //     });
      
    //     // Create a marker for the start point:
    //     var startMarker = new H.map.Marker({
    //     lat: startPoint.latitude,
    //     lng: startPoint.longitude
    //     });
      
    //     // Create a marker for the end point:
    //     var endMarker = new H.map.Marker({
    //     lat: endPoint.latitude,
    //     lng: endPoint.longitude
    //     });
      
    //     // Add the route polyline and the two markers to the map:
    //     this.map.addObjects([routeLine, startMarker, endMarker]);
      
    //     // Set the map's viewport to make the whole route visible:
    //     this.map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
    //     }
    //   };

    // Get an instance of the routing service:
    // var router = this.platform.getRoutingService();
    // let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    // router.calculateRoute(routingParameters, onResult,
    // function(error) {
    // alert(error.message);
    // });


    // =======================================================



    // const mapEvents = new H.mapevents.MapEvents(this.map);
    // let behavior = new H.mapevents.Behavior(mapEvents);
    const marker1 = new H.map.Marker({lat: -26.145314, lng:27.936605});
    const marker2 = new H.map.Marker({lat: -26.1425, lng:28.046407});
    const marker3 = new H.map.Marker({lat: -26.1, lng:28.0});
    const marker4 = new H.map.Marker({lat: -26.142515, lng:28.046407});

    // const marker3 = new H.map.Marker({lat: -26.145314, lng:27.936605});
    // const marker4 = new H.map.Marker({lat: 26.1425, lng:28.0464});
    // map.addObject(marker1);

    const lineString = new H.geo.LineString();
    lineString.pushPoint(marker1.getPosition());
    lineString.pushPoint(marker2.getPosition());
    lineString.pushPoint(marker3.getPosition());
    lineString.pushPoint(marker4.getPosition());
    const polyline = new H.map.Polyline(
        lineString,
        {
            style: {
                strokeColor: "yellow",
                lineWidth: 3
            }
        }
    );
    
    const circle = new H.map.Circle(marker1.getPosition(), 100)
    this.map.addObjects([marker1, marker2, marker3, marker4, polyline, circle]);
    const distance = marker1.getPosition().distance(marker2.getPosition());
    console.log("Distance between points: ", distance);

    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
}




public places(query: string) {
  this.map.removeObjects(this.map.getObjects());
  this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
      for(let i = 0; i < data.results.items.length; i++) {
          this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
      }
  }, error => {
      console.error(error);
  });
}

private dropMarker(coordinates: any, data: any) {
  let marker = new H.map.Marker(coordinates);
  marker.setData("<p>" + data.title + "<br>" + data.vicinity + "</p>");
  marker.addEventListener('tap', event => {
      let bubble =  new H.ui.InfoBubble(event.target.getPosition(), {
          content: event.target.getData()
      });
      this.ui.addBubble(bubble);
  }, false);
  this.map.addObject(marker);
}

    private hereRoute(map: any, platform: any, routeOptions: any) {
        this.router = platform.getRoutingService();
    
        var onSuccess = function(result) {
        console.log('Route found!', result);
        };
    
        var onError = function(error) {
        console.error('Communication error! No route found', error);
        }
    
        this.router.calculateRoute(routeOptions, onSuccess, onError);
  }

}