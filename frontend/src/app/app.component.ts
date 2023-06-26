import { Component } from '@angular/core';
import { MyMonitoringService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  constructor(private myMonitoringService: MyMonitoringService) {
   
  }
}
