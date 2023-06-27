import { MyMonitoringService } from "./logging.service";
import { ErrorHandler, Injectable } from '@angular/core'; 

@Injectable()
export class ErrorHandlerService extends ErrorHandler {

    constructor(private myMonitoringService: MyMonitoringService) {
        super();
    }

     handleError(error: Error) {
        this.myMonitoringService.logException(error); // Manually log exception
    }
}