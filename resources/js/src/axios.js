// axios
import axios from 'axios'

const domain = ""

export default axios.create({
    domain,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'X-Requested-With': 'XMLHttpRequest'
    }
    // You can add your headers here
})
