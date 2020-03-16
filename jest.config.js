module.exports = {
    projects: [
        {
            displayName: "core",
            rootDir: "packages/core/",
            testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*[.|_])+(spec|test).[jt]s?(x)"],
            testEnvironment: "jsdom"
        },
        {
            displayName: "material-ui",
            rootDir: "packages/material-ui",
            preset: 'ts-jest',
            testEnvironment: 'node',
            globals: {
                'ts-jest': {
                    babelConfig: true,
                    tsConfig: 'packages/material-ui/tsconfig.json'
                }
            },
            moduleNameMapper: {
                '@rjsf/(.+)$': '<rootDir>packages/$1',
            },
            roots: ['<rootDir>packages'],
        }
    ]
    // modulePaths: ["<rootDir>/packages/core", "<rootDir>/packages/material-ui"]
    // "moduleDirectories": ["node_modules", "packages"]
};