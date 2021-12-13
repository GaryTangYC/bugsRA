// db is an argument to this function so
// that we can make db queries inside
export default function initBugsController(db) {
  const index = (request, response) => {
    response.render('bugs');
  };

  const newBug = async (request, response) => {
    console.log('this is req.body', request.body);
    const bug = await db.Bug.create({
      problem: request.body.problem,
      error_text: request.body.error_text,
      commit: request.body.commit,
      featureId: request.body.feature_id,
    });

    console.log('🚀 ~ file: bugs.mjs ~ line 17 ~ newBug ~ bug', bug);
    response.send({ bug });
  };
  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index, newBug,
  };
}
