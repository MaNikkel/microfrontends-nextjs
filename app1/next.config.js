const {
    withModuleFederation,
} = require("@module-federation/nextjs-mf");
module.exports = {
    webpack: (config, options) => {
        const { isServer } = options;
        const mfConf = {
            mergeRuntime: true,
            name: "app1",
            library: {
                type: config.output.libraryTarget,
                name: "app1",
            },
            filename: "static/runtime/app1re.js",
            remotes: {
            },
            exposes: {
                "./Parcel": "./src/components/Parcel",
                "./Home": "./src/pages/index"
            },
        };
        config.cache = false;
        withModuleFederation(config, options, mfConf);
        if (!isServer) {
            config.output.publicPath = "http://localhost:3001/_next/"; // muda de acordo com o ambiente
        }

        return config;
    },

    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    },
};