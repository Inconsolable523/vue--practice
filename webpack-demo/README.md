# 使用npm来安装webpack
1. 安装速度更快，运行`npm config set registry https://registry.npm.taobao.org/`,如果在运行npm adduser的时候出现问题，恢复原样使用`npm config delete registry`
2. 使用`npm i -g webpack`,全局安装webpack；如果报错以为权限问题，就用`sudo npm i -g webpack`
3. 验证安装成功，运行`webpack --help`,看到以下信息说明安装成功。

```
webpack 1.14.0 
Usage: https://webpack.github.io/docs/cli.html
...
...
--display-cached-assets
--display-reasons, --verbose, -v
```

###如何运行demo
1. 运行`webpack`看报错缺什么就添加什么。
2. 更方便的：`npm i babel-loader babel-core babel-preset-es2015 babel-preset-react`
3. 运行`webpack`
4. 打开page.html