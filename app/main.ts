import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// import ENV from './env';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
