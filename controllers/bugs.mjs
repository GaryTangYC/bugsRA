// db is an argument to this function so
// that we can make db queries inside
export default function initBugsController(db) {
  const index = (request, response) => {
    // // db.Bug.create({ problem: 'request.body.problem' })
    // //   .then((bugs) => {
    response.render('bugs');
    // //   })
    //   .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
