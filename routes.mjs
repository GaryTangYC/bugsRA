import db from './models/index.mjs';

// import your controllers here
import initBugsController from './controllers/bugs.mjs';
import initFeaturesController from './controllers/features.mjs';

export default function bindRoutes(app) {
  const bugsController = initBugsController(db);
  const featuresController = initFeaturesController(db);

  app.get('/', bugsController.index);
  // initialize the controller functions here
  // pass in the db for all callbacks
  app.get('/features', featuresController.index);
  app.post('/create-bug', bugsController.newBug);
  // define your route matchers here using app
}
