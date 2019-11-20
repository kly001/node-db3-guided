
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()  //resets primary key back to 1
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {contents: 'I am Alice.', user_id:1},
        {contents: 'I know Bob and Carol.', user_id:1},
        {contents: 'I love Bob.', user_id:1},
        {contents: 'I am Bob', user_id:2},
        {contents: 'I love Carol.', user_id:2},
        {contents: 'I am Carol.', user_id:3}
      ]);
    });
};
