
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1,description: 'Add end points'},
        {project_id: 1,description: 'create seeds'},
        {project_id: 1,description: 'ignore the bugs'}
      ]);
    });
};
