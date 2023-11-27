const axios = require('axios')

async function getAllData() {
    const response = await axios.get("https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=$%7BCATEGORY%7D");
    const res = response.data.hits
    return res;

}
module.exports = { getAllData };