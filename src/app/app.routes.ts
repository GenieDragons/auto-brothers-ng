import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OurServiceComponent } from './views/our-service/our-service.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { RequestAQuoteComponent } from './views/forms/request-a-quote/request-a-quote.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { 
        path: 'service', 
        component: OurServiceComponent,
        children: [
            {path: 'request-a-quote', component: RequestAQuoteComponent}
        ]
    
    },
    { path: 'contact', component: ContactUsComponent},
    {path: 'request-a-quote', component: RequestAQuoteComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    
];

// ----------------------------------- BEGINNING: Restoring viewport to the top when navigating/routing ----------------------
const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

// ----------------------------------- END: Restoring viewport to the top when navigating/routing ----------------------

// this is the standalone router setup using bootstrapApplication call
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes, inMemoryScrollingFeature)] // take out in MemoryScrollingFeature if viewport not restoring to top
});