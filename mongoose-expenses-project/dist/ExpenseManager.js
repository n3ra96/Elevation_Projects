

class ExpenseManager{

    constructor(){
        expensesArr = [] 
    }

    addExpense (data){
       return $.post('/expense', data ,function (response) {
        expensesArr.push(response)
        console.log("POST complete")
    })
    }

    getExpenses(){
        return $.get('/expenses' , function (response){
            expensesArr.push(response) 
        })
    }

    getExpensesByDates(dates){
        return $.get('/expenses/?'+dates)
    }

    getExpensesByCategory(category){
        return $.get('/expenses/'+category)
    }

    getTotalExpensesByCategory(category){
        return $.get('/expenses/'+category+'/?total=true')
    }

}