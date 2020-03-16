const defaultPlugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    // IE 11 support
    '@babel/plugin-transform-object-assign'
];

module.exports = {
    plugins: defaultPlugins,
    presets: [
        [
            "@babel/preset-env",
            {
                modules: "commonjs",
                targets: { node: "current" }
            },
        ],
        "@babel/preset-react",
    ]
};