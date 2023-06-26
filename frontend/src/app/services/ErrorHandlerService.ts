import { MyMonitoringService } from "./logging.service";

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

function Injectable(): (target: typeof ErrorHandlerService) => void | typeof ErrorHandlerService {
    throw new Error("Function not implemented.");
}
