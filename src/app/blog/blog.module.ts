import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BlogComponent],
    imports: [CommonModule, BlogRoutingModule, ScullyLibModule, FlexModule],
})
export class BlogModule {}
