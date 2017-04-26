import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{

	constructor(props){
		super(props);
		this.state={
			listName:this.props.listName,
			tempName:'',
			rename:this.props.rename,
		};
		this.handleChange=this.handleChange.bind(this);
		this.renameCondition=this.renameCondition.bind(this);
		this.renameList = this.renameList.bind(this);
	}

	addItem() {
	this.props.addTodoItem("test",this.props.LId);
	}

	handleChange(e){
		this.setState({tempName:e.target.value});
		}

	renameList(){
	this.setState({rename:this.state.rename*-1});
//	console.log('it is working')
	this.props.renameList(this.props.LId,this.state.tempName);
	}

	doItem(id){
	this.props.doItem(this.props.LId,id);
	}

	renameCondition(){
	if(this.state.rename===-1){
		return(
		<div>
			<ul>
			<input	className="listName" type="text" onChange={ this.handleChange}/>
			<button className="reName" onClick={()=>this.renameList()}>set name</button>
			<button className="add" onClick={() => { this.addItem() }}>add</button>
			<button className="delete" onClick={()=>{this.props.deleteList(this.props.LId) }}>delete</button>
			</ul>
		</div>
		      )}
	else
		return(
		<div>
			<ul>
			<button className="reName" onClick={()=>this.renameList()}>rename</button>
			<button className="add" onClick={() => { this.addItem() }}>add</button>
			<button className="delete" onClick={()=>{this.props.deleteList(this.props.LId) }}>delete</button>
			</ul>
		</div>
		)	
	}


	render(props){
	
		console.log(this.props.items[0]);
		return(
		<div>
		{this.renameCondition()}
			<div>
			{this.props.name}
			</div>
			<ol>
			{this.props.items.map(item=>
					<TodoItem
					key={item.id}
					name={item.newItem}
					id={item.id}
					isDone={item.isDone}
					reName={item.reName}
					doItem={this.doItem}
					/>)}
			</ol>
		</div>
				);
	}

	
}


export default TodoList
