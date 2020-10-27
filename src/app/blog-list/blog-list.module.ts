import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListRoutingModule } from './blog-list-routing.module';
import { BlogListComponent } from './blog-list.component';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxMasonryModule } from 'ngx-masonry';


@NgModule({
  declarations: [BlogListComponent],
    imports: [
        CommonModule,
        BlogListRoutingModule,
        FlexModule,
        MatCardModule,
        MatButtonModule,
        NgxMasonryModule
    ]
})
export class BlogListModule { }
