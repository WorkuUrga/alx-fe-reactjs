export default {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
