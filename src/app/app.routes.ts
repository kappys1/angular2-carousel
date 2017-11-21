import {Routes} from "@angular/router";
import {SimpleCarouselComponent} from "./components/simple-carousel/simple-carousel.component";
import {ExamplesComponent} from "./pages/examples/examples.component";
import {GetStartedComponent} from "./pages/get-started/get-started.component";
import {ApiComponent} from "./pages/api/api.component";

export let appRoutes: Routes = [
  {
    path: 'demo',
    component: ExamplesComponent,
    data: { title: 'Simple Carousel' }
  },  {
    path: 'getStarted',
    component: GetStartedComponent,
    data: { title: 'Simple Carousel' }
  },  {
    path: 'api',
    component: ApiComponent,
    data: { title: 'Simple Carousel' }
  },
  { path: '',
    redirectTo: '/getStarted',
    pathMatch: 'full'
  },
  { path: '**', component: GetStartedComponent }
];
