import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain="dev-uy6kgrgn.eu.auth0.com"
  clientId="Wl0zW5zRMVHb9Dtd0Qw8IfNCthpyuGJF"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
  document.getElementById('root')
);
