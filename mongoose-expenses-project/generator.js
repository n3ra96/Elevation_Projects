const Dataset = require('./expenses');
const Expense = require('./server/model/Expense');

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/mongoose-expenses").catch((err)=> console.log(err))

for (var i = 0; i < Dataset.length; i++) {
    
    let p1 = new Expense({ 
        item: Dataset[i].item,
        amount : Dataset[i].amount, 
        date  : Dataset[i].date,
        group : Dataset[i].group })

        Expense.create(p1)

  }
  console.log("done");