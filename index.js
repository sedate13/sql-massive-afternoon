const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const massive = require('massive');
const app = express();
const products_controller= require ('./products_controller');



app.use(bodyParser.json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
app.set('db', dbInstance);
})
.catch(console.log);

app.get('/api/products', products_controller.getAll); 
app.get('api/product/:id', products_controller.getOne);
app.put('api/product/:id', products_controller.update);
app.post('api/product', products_controller.create);
app.delete('api/product/:id', products_controller.delete);










const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sylvanas Windrunner is listening on port ${port}`);
});