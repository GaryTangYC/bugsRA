import db from './models/index.mjs';

// import your controllers here
import initBugsController from './controllers/bugs.mjs';

export default function bindRoutes(app) {
  const bugsController = initBugsController(db);

  app.get('/', bugsController.index);
  // initialize the controller functions here
  // pass in the db for all callbacks
  app.post('/create-bug', bugsController.newBug);
  // define your route matchers here using app
}
