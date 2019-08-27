module.exports = {
  setupFilesAfterEnv: ['<rootDir>/enzymeSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/services/'],
  verbose: true,
  moduleNameMapper: { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|scss)$": "<rootDir>/assetsTransformer.js" },
};
