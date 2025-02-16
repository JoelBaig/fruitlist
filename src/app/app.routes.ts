import { Routes } from '@angular/router';
import { FruitlistComponent } from './fruitlist/fruitlist.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

export const routes: Routes = [
    { path: '', component: FruitlistComponent },
    { path: '', component: HeaderComponent },
    { path: '', component: FooterComponent },
];
