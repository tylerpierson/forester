require('dotenv').config()

require('./config/database')

const app = require('./app-server')

const PORT = 8002

app.listen(PORT, () => {
	console.log(`I am listening on ${PORT}. We in the Building`)
})


/*
const myOtherFunction = () => ''
function(){
 const app = myOtherFunction()
}
*/