const express = require('express')
const router = express.Router()
const Transaction = require('../model/Transaction');




router.get('/SumCategory' , async (req, res) => {
    try {
        const transactionsTotal = await Transaction.aggregate([
                {$group: {
                    _id: '$category',
                    total: { $sum: '$amount' }
                }}
        ])
        res.status(200).send(transactionsTotal)
    }
    catch (error) {
        console.error(error)
        res.status(404).send(error);
    }
})

router.get('/Balance' , async (req, res) => {
    try {
        const transactionsBalance = await Transaction.aggregate([
            { $group: { _id: null, amount: { $sum: "$amount" } } }
        ])
        res.status(200).send(transactionsBalance)
    }
    catch (error) {
        console.error(error)
        res.status(404).send(error);
    }
})

router.get('/Transactions' , function(req , res){
    try{
        Transaction.find({}).then( function (transactions) {
            res.status(200).send(transactions)
        })
    }catch(error){
        res.status(404).send({error: "not found"})
    }
})

router.post('/Transactions' , function(req , res){
    
    let savedTransactions = new Transaction({  
        "amount": req.body.amount , 
        "category": req.body.category, 
        "vendor": req.body.vendor   
     })
    
     Transaction.create(savedTransactions).then( function (transactions) {
                res.status(200).send("added")
        }).catch(() => {
            res.send("existed")
        })     
})

router.delete('/Transactions/:transactionId', function (req, res) {
    let transaction2delete = req.params.transactionId
    const Deletedtransaction = Transaction.findOneAndDelete({ _id: transaction2delete}).then()
    res.status(200).send("deleted "+Deletedtransaction)
    
})


module.exports = router