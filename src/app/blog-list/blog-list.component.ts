import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgxMasonryOptions } from 'ngx-masonry/lib/ngx-masonry-options';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {
  public nowDate: any;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };


  constructor(
    private scully: ScullyRoutesService
  ) { }
  posts$: Observable<ScullyRoute[]>;

  ngOnInit(): void {
    this.nowDate = Date.now();

    debugger;
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        routeList.sort((a, b) => a.date > b.date ? -1 : 1);
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/blog/`)
        );
      })
    );
  }

}
