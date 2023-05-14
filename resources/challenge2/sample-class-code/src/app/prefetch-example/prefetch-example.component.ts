import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-prefetch-example',
  templateUrl: './prefetch-example.component.html',
  styleUrls: ['./prefetch-example.component.css']
})
export class PrefetchExampleComponent implements OnInit{

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe({next : data =>
    {
      console.log(data["greeting"]);
    }
  });
  }
}
