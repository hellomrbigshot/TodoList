const Mock = require('mockjs')

Mock.mock('/api/todolist', {
  "list|2-4": [
    "AMD",
    "CMD",
    "UMD",
    "AA"
  ]
})