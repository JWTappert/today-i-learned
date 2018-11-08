import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
import { AppModule } from './app/app.module';
import amplify from './aws-exports';
import { environment } from './environments/environment';

Amplify.configure(amplify);

Amplify.configure({
  API: {
    graphql_endpoint: 'https://zp5vonnjdza5xezllxyr23tyuy.appsync-api.us-east-1.amazonaws.com/graphql',
    graphql_endpoint_iam_region: 'us-east-1',
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
