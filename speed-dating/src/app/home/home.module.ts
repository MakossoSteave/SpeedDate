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
import { SearchUserComponent } from './search-user/search-user.component';
import { ChatComponent } from './chat/chat.component';
import { EventManagementComponent } from './event-management/event-management.component';



const routes: Routes = [
    {
        path: 'home/:id',
        component: HomeComponent,
    },

    {
        path: 'profil',
        component: ProfilComponent
    },
    {
        path: 'chat',
        component: ChatComponent
    },
    {
        path: 'edit',
        component: EditProfilComponent
    },
    {
        path: 'match',
        component: MatchComponent
    },
    {
        path: 'search',
        component: SearchUserComponent
    },
    {
        path: 'event',
        component: EventManagementComponent
    },
    

];

@NgModule({
    declarations: [HomeComponent , ProfilComponent ,EditProfilComponent,MatchComponent,SearchUserComponent,ChatComponent,EventManagementComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RouterModule.forChild(routes)
    ],
})
export class HomeModule { }

