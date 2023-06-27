import { Component } from '@angular/core';
import { MyMonitoringService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myMonitoringService: MyMonitoringService) {}
  title = 'shop';
  ngOnInit(){
    const myPromise = new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts/-1')
      .then((response) => response.json())
      .then((data) => {
        resolve(data)
      })
      .catch((error) => reject(error))
    });
    
    console.log('this is the start');
    
    myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('promise done'));
    
    console.log('this is the end');
  }

}
