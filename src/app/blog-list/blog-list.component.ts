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

  dummyPictures = [
    [false, 'https://source.unsplash.com/433x649/?Uruguay'],
    [false, 'https://source.unsplash.com/530x572/?Jamaica'],
    [false, 'https://source.unsplash.com/531x430/?Kuwait'],
    [false, 'https://source.unsplash.com/586x1073/?Bermuda'],
    [false, 'https://source.unsplash.com/500x571/?Ecuador'],
  ];
  masonryImages = [];
  limit = 15;


  constructor(
    private scully: ScullyRoutesService
  ) { }
  posts$: Observable<ScullyRoute[]>;

  ngOnInit(): void {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
    this.nowDate = Date.now();

    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/blog/`)
        );
      })
    );
  }

}
