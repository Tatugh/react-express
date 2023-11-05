const express = require('express');
const { get } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/get_prices', async function (req, res) {
    res.set('Access-Control-Allow-Origin', '*')
    // res.send({prices: 'GET PRICES VASTAUS!!!!' });
    // let tieto = fetch("https://api.porssisahko.net/v1/latest-prices.json", 
    //                 {method: 'GET', headers: {'Content-Type': 'application/json'}})
    // .then(res => res.json())
    // .then(a => console.log(a)).catch(b => console.log(b));
    // tieto = tieto.json()
    // res.status(200).json(tieto);
    // res.status(500).json({msg: 'Internal Server Error.'});
    const url = "https://api.porssisahko.net/v1/latest-prices.json";
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
    try {
        let response = await fetch(url,options);
        response = await response.json();
        res.status(200).json(response);
      } catch (err) {
        console.log(err);
        res.status(500).json({msg: 'Internal Server Error.'});
      }
});