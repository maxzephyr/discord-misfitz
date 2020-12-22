const os = require('os');

module.exports = {
  name: 'stats',
  description: 'Bot and Server Statistics',
  execute(message, args) {
    var botUptime = (process.uptime() + "").toHHMMSS();
    var gridUptime = (os.uptime() + "").toHHMMSS();
    const data = [];
    data.push('**Uptime:**');
    data.push('  - **Bot:** ' + botUptime)
    data.push('  - **Grid:** ' + gridUptime)
    data.push('**Memory:**');
    var total = os.totalmem();
    var used = total - os.freemem();
    data.push('  - ' + (used / 1024 / 1024 / 1024).toFixed(2) +
      ' / ' + (total / 1024 / 1024 / 1024).toFixed(2) + ' GB (' +
      ((used / total) * 100).toFixed(0) + ' %)');
    return message.channel.send(data, { split: true });
  },
};

String.prototype.toHHMMSS = function () {
  var elapsed = parseInt(this, 10);
  var days = Math.floor(elapsed / 86400);
  elapsed = elapsed % 86400;
  var hours = Math.floor(elapsed / 3600);
  elapsed = elapsed % 3600;
  var minutes = Math.floor(elapsed / 60);
  elapsed = elapsed % 60;
  var seconds = elapsed;

  if (days < 10) {days = "0"+days;}
  if (hours < 10) {hours = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  var time = days+'d:'+hours+'h:'+minutes+'m:'+seconds+'s';
  return time;
}
