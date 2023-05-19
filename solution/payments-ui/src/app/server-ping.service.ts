import {Injectable, Output, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {timeout} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerPingService{

  constructor(private http: HttpClient) {
    setInterval( () => this.pingServer(), 5000);
  }

  @Output()
  serverOnlineEvent = new EventEmitter<Boolean>();

  pingServer() {
    this.http.get<{ status: String }>("http://localhost:8080/api/health").subscribe({
      next : data => {
        if (data["status"] == "ok") {
          this.serverOnlineEvent.emit(true);
        } else {
          this.serverOnlineEvent.emit(false);
        }
      },
      error: error => {
        this.serverOnlineEvent.emit(false);
      }
    });
  }

}
