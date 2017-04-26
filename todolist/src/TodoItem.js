import React from 'react';

class TodoItem extends React.Component{


	namingCondition(){
		if(this.props.reName===-1){
			return(
				<input className="itemName" type="text"></input>
					)
				
		}
	
	
	}


	itemCondition(){
	if(this.props.isDone===-1){
		return (
			<li className="todoItem">
				<span className="todoItemName">{this.props.name}</span>
				<span>{}</span>
				<button className="doItem" onClick={() => this.props.doItem(this.props.id)}>
					<i >done</i>
				</button>
				<button className="deleteItem" onClick={() => this.props.removeItem(this.props.id)}> 
					<i >delete</i>
				</button>
			</li>
		       );
	}

	return (
		<li classname="doneItem">
			<span className="doneItemName">{this.props.name}</span>
			<button className="undoItem" onClick={()=> this.props.doItem(this.props.id)}>
				<i> undone </i>
			</button>
			<button className="deteleItem" onClick={()=>this.props.removeItem(this.props.id)}>
				<i> delete </i>
			</button>
		</li>
	       );
	}

	render(){
		return(
		<div>
		{this.itemCondition()}
		</div>
		)
	
	}
    }

export default TodoItem;
