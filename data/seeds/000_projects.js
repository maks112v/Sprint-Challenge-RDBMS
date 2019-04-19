
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Finish MVP', description: "look at github"},
        {name: 'Look at stetch',  description: "Deside that mvp is enough and move on"},
        {name: 'Go and get food',  description: "Probably at popeyes or something."}
      ]);
    });
};
