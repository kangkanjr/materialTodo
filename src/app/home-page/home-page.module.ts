import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTooltipModule } from '@angular/material';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HomePageRoutingModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule
    
  ]
})
export class HomePageModule { }
