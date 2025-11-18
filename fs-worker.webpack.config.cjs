const
  _path =
    require(
      'path');
const
  _output_dir =
    _path.resolve(
      __dirname);
const
  _input_file_name =
    "fs-worker";
const
  _output_file_name =
    `${_input_file_name}.js`;
const
  _output_file = {
    path:
      _output_dir,
    filename:
      _output_file_name
  };
const
  _input_file =
    `./node_modules/crash-js/crash-js/${_input_file_name}`;
module.exports = {
  entry:
    _input_file,
  output:
    _output_file,
  optimization: {
    moduleIds: 'deterministic',
  },
  resolve: {
    fallback: {
      "fs":
        false,
      "happy-opfs":
        _path.resolve(
          __dirname,
          'node_modules/happy-opfs/dist/main.mjs'),
      "path":
        false,
      "@std/path":
        _path.resolve(
          __dirname,
          'node_modules/@std/path/mod.js'),
    }
  }
};
