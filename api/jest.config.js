module.exports = {
    testEnvironment: "node",
    testMatch: [
        "**/__test__/**/*.test.js"
    ],
    collectCoverageFrom: [
        "lib/**/*.js"
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    }
  };