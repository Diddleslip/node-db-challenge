
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Computer", description: "Turn on computer." },
        {name: "Mouse", description: "Click click click." },
        {name: "Cereal" },
        {name: "Milk", description: "Gulp." },
        {name: "Bowl", description: "Very shiny." },
        {name: "Siringe", description: "Yikes." },
        {name: "Weights" },
      ]);
    });
};
