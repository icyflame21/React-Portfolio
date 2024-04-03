const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Set to 'production' for build mode
  entry: "./src/index.js", // Your main entry point
  output: {
    filename: "bundle.js", // Output filename
    path: path.resolve(__dirname, "build"), // Output directory
    publicPath: "/",
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"), // Absolute path to components folder
      data: path.resolve(__dirname, "src/data"), // Absolute path to data folder
      helpers: path.resolve(__dirname, "src/helpers"), // Absolute path to helpers folder
      config: path.resolve(__dirname, "src/config"), // Absolute path to config folder
      assets: path.resolve(__dirname, "src/assets"), // Absolute path to assets folder
    },
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Rule for JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/, // Rule for asset files
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
    }),
  ],
  devServer: {
    static: { directory: path.join(__dirname, "public"), watch: true },
    compress: true,
    port: 4500,
    hot: true,
  },
};
