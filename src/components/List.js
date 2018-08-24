import React from 'react';
import {transactions} from '../services/Transactions'


class List extends React.Component{
    render(){

        const filter = this.props.filter;

        const list = transactions.map((transaction)=>{
            if(
                transaction.card_last_four.indexOf(filter) !== -1 ||
                transaction.date.indexOf(filter) !== -1 ||
                transaction.amount.toString().indexOf(filter) !== -1
            )
            return (
                <ul key={transaction.card_last_four}>
                    <ol >Last four card numbers: {transaction.card_last_four}</ol>
                    <ol >Date: {transaction.date}</ol>
                    <ol >Amount: ${transaction.amount}</ol>
                </ul>
            )
        })

        return(
            <div>
                {list}
            </div>
        );
    }
}

export default List;