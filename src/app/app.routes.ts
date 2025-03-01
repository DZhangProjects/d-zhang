import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MusingsComponent } from './pages/musings/musings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'projects',
        component: ProjectsComponent,
    },
    {
        path: 'musings',
        component: MusingsComponent,
    }
];
