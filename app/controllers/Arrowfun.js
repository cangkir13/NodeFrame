const axios = require('axios')

const Arrowfun = () => {
    
    const index = async(req, res) => {
        let data = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.json({
            msg:"this is controller with arrow function",
            data:data.data
        })
    }

    return {
        index
    }

}

module.exports = Arrowfun