
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Finish sprint', description: "Do whatever it takes to get to the finish line.", completed: false },
        { name: 'Eat breakfast', description: "Part of a balaced meal.", completed: true },
        { name: 'Workout and get swole', description: "A roid a day keeps the weakness away.", completed: false },
      ]);
    });
};
