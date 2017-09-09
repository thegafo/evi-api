
const cheerio = require('cheerio');
const request = require('request');

/**
 * queryEvi - query evi (evi.com) via scraping
 *
 * @param  {String} searchPhrase the phrase to query
 * @return {Promise}             resolves with answer, or rejects if there's an error
 */
var queryEvi = (searchPhrase) => {
  return new Promise((resolve,reject) => {
    request(`https://www.evi.com/q/${searchPhrase}`, (err,res,body) => {
      if (err) return reject(err);
      $ = cheerio.load(body);
      var tk_text = $('.tk_text').text().trim();
      var tk_common = $('.tk_common').text().trim();
      var tk_not_understood = $('.tk_not_understood').text().trim();
      var tk_not_answered = $('.tk_not_answered').text().trim();
      var no_answer = 'No response...';
      resolve(tk_text || tk_common || tk_not_understood || tk_not_answered || no_answer);
    });
  });
}

module.exports = queryEvi;
