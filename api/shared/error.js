/**
 * file: shared/error.js
 * date: 12/05/2022
 * description: file responsible for sending error messages.
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

module.exports = function (status, message) {
  return {
    status: status,
    body: message,
  };
};
