const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "accountsApp": "http://localhost:4201/remoteEntry.js",
    "salesApp": "http://localhost:4202/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
