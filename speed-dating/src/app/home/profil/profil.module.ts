import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilComponent } from './profil.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilComponent
  ],
  declarations: [ProfilComponent]
})
export class ProfilModule {}
