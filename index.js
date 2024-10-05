const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let totalReturnValue = (marketPrice - boughtAt) * quantity;
  res.send(totalReturnValue.toString());
});

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturnValue = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnValue.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let returnPercentage = ((boughtAt - returns) / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let totalReturnValue = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnValue.toString());
});

app.get('/status', (req, res) => {
  let stockStatus;
  let returnPercentage = parseFloat(req.query.returnPercentage);
  if (returnPercentage > 0) stockStatus = 'Profit';
  else stockStatus = 'Loss';
  res.send(stockStatus);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
