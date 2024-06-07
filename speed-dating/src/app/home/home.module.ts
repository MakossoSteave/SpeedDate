import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { MatchComponent } from './match/match.component';



const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },

    {
        path: 'profil',
        component: ProfilComponent
    },
    {
        path: 'edit',
        component: EditProfilComponent
    },
    {
        path: 'match',
        component: MatchComponent
    },

];

@NgModule({
    declarations: [HomeComponent , ProfilComponent ,EditProfilComponent,MatchComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild(routes)
    ],
})
export class HomeModule { }

