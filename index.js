var soap = require('soap');
var url = 'https://api.twingly.com/livefeed4.asmx?WSDL';
var apiKey = process.env.LIVEFEED_KEY;

module.exports = {
  getLastTenMinutesOfData: function(callback) {
    var currentDate = new Date();
    var args = {
      apiKey: apiKey,
      from: new Date(currentDate - 10 * 60 * 1000).toISOString(), // Fetch 10 min of data
      to: currentDate.toISOString(),
      maxPosts: 1000,
    };

    soap.createClient(url, function(err, client) {
      client.GetDataByPostCountAndTimespan(args, function(err, result) {
        var twinglyData = {};
        if (!err) {
          twinglyData = result.GetDataByPostCountAndTimespanResult.twinglydata;
        }

        callback(err, twinglyData);
      });
    });
  }
};
