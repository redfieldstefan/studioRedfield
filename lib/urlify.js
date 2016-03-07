'use strict';

module.exports = function(string) {
  return string
    .toLowerCase()
    .replace(/\s/g, '-') // Spaces -> hyphens
    .replace(/[^A-Za-z0-9\-]/g, '') // Removes everything that's not a letter, number, or hyphen
    .replace(/-{2,}/g, '-'); // Cleans up double (or more) hyphens
};
