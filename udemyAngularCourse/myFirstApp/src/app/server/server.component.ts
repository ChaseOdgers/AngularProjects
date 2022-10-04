//A component is a typescript class, angular uses it as a blueprint

import { Component } from "@angular/core";

@Component({
    selector: 'app-server', 
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline'
}

