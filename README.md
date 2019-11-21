# Params replace loader for [Webpack](http://webpack.github.io/)

用于项目环境变量批量自动替换的webpack loader。

## 安装:

```bash
$ npm install --save-dev params-replace-loader
```

## 用法说明:

待填写

### Plain replacement:

Plain string replacement, no need to escape RegEx special characters.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: {
          search: '$',
          replace: 'window.jQuery',
        }
      }
    ]
  }
}
```

### RegEx replacement:

To achieve regular expression replacement you should specify the `flags` option
(as an empty string if you do not want any flags). In this case, `search` and `flags` are being
passed to the [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) constructor
and this means that you should escape RegEx special characters in `search` if you want it to be replaced as a string.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: {
          search: '\$',
          replace: 'window.jQuery',
          flags: 'i'
        }
      }
    ]
  }
}
```

### Multiple replacement:

Also, you can pass an array of search-replace pairs this way:

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: {
          multiple: [
             { search: 'jQuery', replace: 'window.$' },
             { search: '_', replace: 'window.lodash' }
          ]
        }
      }
    ]
  }
}
```

### Callback replacement

You can specify a callback function to have dynamic replacement values.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: {
          search: '^Hello, (.*)!$',
          replace: (match, p1, offset, string) => `Bonjour, ${p1.toUpperCase()}!`,
          flags: 'g'
        }
      }
    ]
  }
}
```

### Strict mode replacement:

You can enable strict mode to ensure that the replacement was performed.
Loader will throw exception if nothing was replaced or if `search` or `replace` options were not specified.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(js|vue|css|html)$/,
        loader: 'params-replace-loader',
        options: {
          search: 'jQuery',
          replace: 'window.$',
          strict: true
        }
      }
    ]
  }
}
```

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
