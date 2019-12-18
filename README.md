##[主流开元协议之间有何异同？](https://www.zhihu.com/question/19568896)



## webpack.config.js要第一时间创建



## bebel的配置文件名字     .babelrc     而不是   .babelsrc



## #下载并保存`core-js`警告消息中请求的模块版本：

```javascript
npm install --save core-js@^3
```

这将更新项目的`core-js`依赖关系，`react-native`以使用`^3.x.x`仍在积极维护的版本。



在使用babel-loader时 要下载babel-loader@7 版本  才能正常运行babel-loader



配置css和scss的rules规则时,要将 style-loader 放在  css-loader 前, 配置scss的rules规则时要将 sass-loader放在最后, 因为后边的loader要依赖前边的loader





## 在node更新之后

我是Windows 8用户，最近将节点更新为`v8.11.1`，npm更新为`v6.0.0`，并遇到类似问题。没有任何效果 - `npm install -g node-sass@latest`或删除项目`node-sass`中的`node_modules/`目录 - 没有一个对我有效。

Laravel Mix向我的浏览器控制台抛出一个错误，指出缺少节点：`win32-x64-57`。我不知道这是因为互联网连接速度较慢，还是在更新过程中节点丢失了。

因此，一些答案指示我查看Node-Sass版本，我找到了解决方案。

1. **第1步：**使用以下命令检查您的node-sass版本：`npm view node-sass version`（步骤4中的`{your version}`）
2. **第2步：**前往[Node-Sass Releases](https://github.com/sass/node-sass/releases)
3. **第3步**：获取您的版本并在每个版本下列出的资产中找到丢失的节点，然后下载该文件
4. **第4步：**访问您的PC `C:\Users\{User}\AppData\Roaming\npm-cache\node-sass\{your version}\`并将下载的`.node`文件放在版本文件夹中
5. 你已经完成了。

6. 在我的情况下，node-sass版本为`4.9.0`，缺少的节点为`win32-x64-57_binding.node`，因此我从[4.9.0 release](https://github.com/sass/node-sass/releases/tag/v4.9.0)下载了`.node`文件，然后执行了步骤4。 / p>