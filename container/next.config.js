const {
    withModuleFederation,
} = require("@module-federation/nextjs-mf");

module.exports = {
    webpack: (config, options) => {
        const mfConf = {
            name: "container",
            library: {
                type: config.output.libraryTarget,
                name: "container",
            },
            remotes: { // microfrontends
                app1: "app1",
            },
            exposes: {
            },
        };
        config.cache = false;
        withModuleFederation(config, options, mfConf);

        return config;
    },

    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    },
};