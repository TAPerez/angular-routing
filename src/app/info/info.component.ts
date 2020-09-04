import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit {

  paramQuery = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
        this.paramQuery = data.id;
      });
   }

  ngOnInit(): void {
  }

}
