import { MyMonitoringService } from "./logging.service";
import { ErrorHandler} from '@angular/core';
import { Injectable } from '@angular/core';
@Injectable()
export class ErrorHandlerService extends ErrorHandler {
    loggingService: any;

    constructor(private myMonitoringService: MyMonitoringService) {
        super();
    }

    handleError(error: Error) {
        this.loggingService.logException(error); // Manually log exception
    }
}

