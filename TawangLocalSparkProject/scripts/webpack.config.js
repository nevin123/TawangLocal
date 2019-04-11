const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
        hot: true
    },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    mode: "production",
    watch: true,
    optimization: {
        minimize: false
    },
    module: {
        
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
    externals: {
        Animation: "commonjs Animation",
        Audio: "commonjs Audio",
        CameraInfo: "commonjs CameraInfo",
        DeviceMotion: "commonjs DeviceMotion",
        Diagnostics: "commonjs Diagnostics",
        FaceGestures: "commonjs FaceGestures",
        FaceTracking2D: "commonjs FaceTracking2D",
        FaceTracking: "commonjs FaceTracking",
        Fonts: "commonjs Fonts",
        HandTracking: "commonjs HandTracking",
        Instruction: "commonjs Instruction",
        IrisTracking: "commonjs IrisTracking",
        LightingEstimation: "commonjs LightingEstimation",
        LiveStreaming: "commonjs LiveStreaming",
        Locale: "commonjs Locale",
        Materials: "commonjs Materials",
        NativeUI: "commonjs NativeUI",
        Networking: "commonjs Networking",
        Patches: "commonjs Patches",
        Persistence: "commonjs Persistence",
        PersonSegmentation: "commonjs PersonSegmentation",
        Random: "commonjs Random",
        Reactive: "commonjs Reactive",
        Scene: "commonjs Scene",
        SceneUnderstanding: "commonjs SceneUnderstanding",
        Shaders: "commonjs Shaders",
        Svgs: "commonjs Svgs",
        Textures: "commonjs Textures",
        Time: "commonjs Time",
        TouchGestures: "commonjs TouchGestures",
        Units: "commonjs Units",
        Weather: "commonjs Weather"
      },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]
}