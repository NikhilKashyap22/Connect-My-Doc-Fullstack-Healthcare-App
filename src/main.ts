import { ErrorInterceptor } from './app/loggers/error.interceptor';
import { ErrorHandlerService } from './app/loggers/error-handler.service';
import { LoggerService } from './app/loggers/logger.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routerConfig   from './app/app.routes';
import { AuthInterceptor } from './app/authentications/interceptors/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    LoggerService,
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    provideHttpClient(withInterceptors([ErrorInterceptor])),
    provideRouter(routerConfig),
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
  ]
}).catch(err => console.error(err));
