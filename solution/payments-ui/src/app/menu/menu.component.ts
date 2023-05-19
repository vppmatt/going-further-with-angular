import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServerPingService} from "../server-ping.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  serverStatus : string = "unknown";
  serverStatusSubscription : any;

  constructor(private serverPingService: ServerPingService) {
  }
x
  ngOnInit() {
    this.serverStatusSubscription = this.serverPingService.serverOnlineEvent.subscribe(
      {next : (data : boolean) => this.serverStatus = data ? "online" : "offline"}
    );
  }

  ngOnDestroy() {
    this.serverStatusSubscription.unsubscribe();
  }

}
