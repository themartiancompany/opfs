let
  _file_name,
  _output,
  _output_dir,
  _path;
_path =
  require(
    'path');
_output_dir =
  _path.resolve(
    __dirname);
_input_file_name =
  "fs-worker.js";
_output = {
  path:
    _output_dir,
  filename:
    _input_file_name
}

module.exports = {
  entry:
    `./node_modules/crash-js/crash-js/${_input_file_name}`,
  output:
    _output,
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
