// db is an argument to this function so
// that we can make db queries inside
export default function initFeaturesController(db) {
  const index = async (request, response) => {
    console.log('this is req.body', request.body);
    const feature = await db.Feature.findAll({
      attributes: ['name', 'id'],
    });
    response.send({ feature });
    console.log('🚀 ~ file: features.mjs ~ line 10 ~ index ~ feature', feature);
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
