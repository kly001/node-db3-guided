
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate() //resets primary key back to 1
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Alice'},   //id 1
        {username: 'Bob'},     //id 2
        {username: 'Carol'}    //id 3
      ]);
    });
};
