# persistent storage library for microstudio game servers
pretty much self-explanatory. Since the microstudio developers haven't added
an actual persistent storage for game servers yet, I created my own temporary
solution.

__please note that this library won't work if you run the server from the
microstudio IDE, you need to export the server as a Node.JS application and
then run the server from the command line.__

# how to install
create a lib/ directory in your microstudio project, create a file inside it and
copy all the code in `ps.js`

# usage
You can access the library functions by calling the global object `ps`

## function list:
- `ps.set(key, value)`
- `ps.get(key, value)`
- `ps.load()` -- run this when your server starts to load storage data
- `ps.save()` -- run this to save the current storage data to `storage.json`

# license
CC0

