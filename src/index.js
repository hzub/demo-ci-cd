require('./style.css');
require('./modules/jsChecker');

if (ENVIRONMENT === 'production') {
  console.info('Running app in the production environment!');
} else {
  console.info('Running app in the staging environment!');
}
