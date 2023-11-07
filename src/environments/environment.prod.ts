import LASTDATEMODIFIED from '../assets/date-modified.json';

export const environment = {
  production: true,
  version: '1.0.0',
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR'],
  dateModified: LASTDATEMODIFIED.LASTDATEMODIFIED,
  baseUrl: '',

  CognitoRegion: '',
  CognitoUserPoolID: '',
  CognitoWebClientID: ''
};
