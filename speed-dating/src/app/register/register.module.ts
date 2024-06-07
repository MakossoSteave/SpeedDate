import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';



const routes: Routes = [
    {
      path: '',
      component: RegisterComponent
    },
    {
     path: 'home',
     component: HomeComponent
    }
  ];

@NgModule({
 declarations: [RegisterComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes)
  ],
})
export class RegisterModule {}
