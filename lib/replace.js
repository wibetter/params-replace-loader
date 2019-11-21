
function replace (source, options) {
  const { replace, flags } = options;
  const search = (
    flags === null
      ? options.search
      : new RegExp(options.search, flags)
  );

  const newSource = source.replace(search, replace);

  return newSource;
}

module.exports = replace;
