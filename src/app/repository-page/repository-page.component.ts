import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot);

  }

  ngOnInit() {
  }

}
