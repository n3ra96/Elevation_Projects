const express = require('express')
const router = express.Router()
const Expense = require('../model/Expense');
const moment = require('moment/moment');


  
 

router.get('/expenses', function (req, res) {
    input = req.query
    date1 = input.d1
    date2 = input.d2
    if(date1 && date2){

        if (moment(date2).isBefore(moment(date1))){
            let temp = date2 
            date2 = date1
            date1 = temp
        }
        Expense.find({date: { $gte: date1, $lte: date2 }}).sort({date: -1}).then( function (expenses) {
            res.send(expenses)
        })

    }else if(date1){
        date2 = moment().format('YYYY-MM-DD')
        if (moment(date2).isBefore(moment(date1))){
            let temp = date2 
            date2 = date1
            date1 = temp
        }

        Expense.find({date: { $gte: date1, $lte: date2 }}).sort({date: -1}).then( function (expenses) {
            res.send(expenses)
        })

    }else{

        Expense.find({}).sort({date: -1}).then( function (expenses) {
            res.send(expenses)
        })

    }
})

router.get('/expenses/:group', function (req, res) {
    category = req.params.group
    input = req.query
    if( input.total == "true"){
        Expense.aggregate([{ $match : {group: category} },
            { $group : { _id: null, totalAmount: { $sum: "$amount" } } },
            { $project: {"_id": 0, "totalAmount": 1 }}]).then( function (expenses) {
                res.send(expenses)
            })
    }else{
        Expense.find({group: category}).sort({date: -1}).then( function (expenses) {
            res.send(expenses)
        })
    }
})

router.post('/expense', function (req, res) {
    let p1 = new Expense({ 
        "item": req.body.item , 
        "amount": req.body.amount, 
        "date": req.body.date ? moment(req.body.date).format('LLLL') : moment().format('LLLL') ,
        "group": req.body.group 
     })
    
    
     Expense.create(p1).then( function (newExpense) {
        console.log("the amount of the expense is "+newExpense.amount+" and you spent your money on: "+newExpense.group)
        res.send(newExpense)
    })
})

router.put('/update', function (req, res) {
    let p1 = req.query
    let group1 = p1.group1
    let group2 = p1.group2

    const newUpdate = Expense.findOneAndUpdate({ group: group1}, { group: group2}, { new: true })
    res.send("the group expense was changed from "+newUpdate._conditions.group+" to "+newUpdate._update.group)
    

})






module.exports = router