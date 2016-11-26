# Example repo showing the react loading issue

## Steps to create this repo

```sh
$ brunch new proj -s es6
$ cd proj
$ npm i auth0-lock --save
# edit app/main.js to import auth0-lock and wire it up to a button
# edit app/assets/index.html to require('main.js') to run the code in main.js
$ npm start
```

## Error

```
require — vendor.js:62:84Error: Cannot find module 'react-dom/lib/ReactPerf' from 'react/lib/ReactAddonsDOMDependencies.js'
```

See issue <https://github.com/facebook/react/issues/8314>
