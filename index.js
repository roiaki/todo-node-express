// expressのライブラリを利用する宣言
const express = require('express')
// webサーバー起動
const app = express()
const port = 3000

app.get('/', (req, res) => {
 res.json({
   message: 'Hello World!'
 })
})

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})
