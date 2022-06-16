const path = require('path')

module.exports = {
  app: (app) => {
    app.use('/chatbot', require(path.resolve(__dirname, 'chatbotRoutes')))
    app.use('/imcuser', require(path.resolve(__dirname, 'imcuserRoutes')))
  }
}
