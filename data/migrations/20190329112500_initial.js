exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 255).notNullable();
      tbl.boolean("is_complete").defaultTo(false);
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("description", 255).notNullable();
      tbl.string("notes");
      tbl.boolean("is_complete").defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
