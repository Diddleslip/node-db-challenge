
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "Wake up", notes: 'Be very careful with bugs', completed: false, project_id: 1 },
        {description: "Ask TL for help", completed: true, project_id: 1 },
        {description: "Pour cereal in the bowl.", completed: true, project_id: 2 },
        {description: "Pour milk in the bowl.", notes: 'Be very careful with milk', completed: true, project_id: 2 },
        {description: "scoop out the cereal til you finish everything.", completed: true, project_id: 2 },
        {description: "Inject steroids into butt.", notes: 'Be very careful with roids', completed: false, project_id: 3 },
        {description: "See gains", completed: false, project_id: 3 },
      ]);
    });
};
