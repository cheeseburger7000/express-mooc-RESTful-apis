# express-mooc

这个项目的目的的为了学习 express 和 MongoDB 的。

## Task

- [x] 构建 express 项目并开发第一个 HelloWorld 程序 
- [x] 使用 [nodemon](https://www.npmjs.com/package/nodemon) 实现热部署
- [x] 设置通过环境变量设置端口号(port)
- [x] 理解 `req.params`，`req.query`，`req.body`
- [x] 通过中间层解析 `req.body` 的方式：`app.use(express.json())`
- [x] 使用 [mongoose](https://www.npmjs.com/package/mongoose) 连接 MongoDB
- [x] 使用 [DaaSMongoDB Hosting ](https://mlab.com/) 在线 MongoDB
- [ ] 使用 [cors](https://www.npmjs.com/package/cors) 处理跨域请求
- [ ] 使用 fetch API 测试 RESTful APIs
- [x] 使用 [joi](https://www.npmjs.com/package/@hapi/joi) JS 数据校验库

## 初始化 express 项目

```
npm init --yes
cd express-mooc
npm i express nodemon mongoose dotenv -S // npm i
npm start // 记得配置 "scripts": { "start": "nodemon app.js" }
```

## 参考资料
- [Express 官方文档](https://expressjs.com/)

## Images

TODO ...