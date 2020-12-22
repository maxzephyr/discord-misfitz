const https = require('https');
const config = require('../config.json');

module.exports = {
  name: 'online',
  description: 'List online avatars.',
  execute(message, args) {
    https.get(config.onlineURL, (res) => {
      res.on('data', function (body) {
        const splitLines = body.toString().split('<br>');
        const data = [];
        data.push('**List of online avatars:**');
        if (splitLines.length == 0) {
          data.push('No avatars online');
        } else {
          var hidden = 0;
          for (i = 0; i < splitLines.length - 1; i++) {
            const line = splitLines[i].toString().split(',');
            if (line[5] != 'hidden') {
              data.push('  - **' + line[0] + ' ' + line[1] + '** in ' + line[2]);
            } else {
              hidden++;
            }
          }
          data.push('**Total:** ' + (splitLines.length - 1) + ' avatars (' + hidden + ' hidden) online');
        }
        return message.channel.send(data, { split: true });
      });
    }).on('error', (e) => {
      message.channel.send('Unable to fetch online list of avatars.');
    });
  },
};