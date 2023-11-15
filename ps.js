// javascript

// persistent storage library for microstudio game servers
// License: CC0

// dirty trick, please note this can only be executed server-side!
const fs = require('fs');
const path = require('path');

var internalStorage = {};

global.ps = {
  set: function(key, value) {
    internalStorage[key] = value;
  },
  
  get: function(key, value) {
    return internalStorage[key] || value;
  },
  
  save: function() {
    const filepath = path.join(__dirname, 'storage.json');
    
    try {
      const dataStr = JSON.stringify(internalStorage);
      fs.writeFile(filepath, dataStr, { flag: 'w', mode: 0o666 }, err => {
        if (err)
          throw err;
      });
    } catch(e) {
      console.error(e);
    }
  },
  
  load: function() {
    const filepath = path.join(__dirname, 'storage.json'); 
    
    if (!fs.existsSync(filepath))
      return;
      
    try {
      let raw = fs.readFileSync(filepath);
      try {
        internalStorage = JSON.parse(raw);
      } catch (e) {
        // not valid json, just ignore
      }
    } catch (e) {
      console.error(e);
    }
  }
};
