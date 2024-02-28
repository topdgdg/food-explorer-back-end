module.exports = {
    apps : [{
        name: "app",
        script: "./src/server.js",
        instances: "max",
        env: {
            NODE_ENV: "development",
        },
        env_productions: {
            NODE_ENV: "production"
        }
    }]
}