import { environment } from "environments/environment";

export class ConsoleLog {
    logs(res){
        if(environment.production)
        console.log(res);
    }
}
