const CopyPlugin = require("copy-webpack-plugin");

const MODE = process.env.NODE_ENV || "development";
const copyRules = [
  {
    from: __dirname + "/src/index.html",
    to: __dirname + "/dist/index.html"
  },
  {
    from: __dirname + "/src/index.tsx",
    to: __dirname + "/dist/main.js"
  }
];

module.exports = {
  mode: MODE,
  devServer: {
    contentBase: "dist/",
    historyApiFallback: true,
    port: 8080
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [new CopyPlugin(copyRules)]
};
