module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" }
        ]
    }
};
