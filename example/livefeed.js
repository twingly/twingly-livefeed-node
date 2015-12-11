var livefeed = require('../index.js');
livefeed.getLastTenMinutesOfData(function(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  // Helpful to prepare the next request
  console.log(data.attributes);

  // All posts fetched
  data.post.forEach(function(post) {
    console.log(post.title);
  });
});
