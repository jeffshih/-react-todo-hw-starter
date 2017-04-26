import React from 'react';
import './todo.css';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  

  constructor(props){
  	super(props);
	this.state = {
		value: '',
		Lists:[],
		doneCount: 0,
		todoCount: 0,
		listCnt:0,

	};
	this.renameList = this.renameList.bind(this);
	this.deleteList = this.deleteList.bind(this);	
	this.updateCnt = this.updateCnt.bind(this);
	this.addTodoItem = this.addTodoItem.bind(this);
  }

  addTodoList(newList){
	  const tempLists = this.state.Lists;
	  const tempList = {
		  listName: newList,
		  id: this.state.listCnt,
		  doneCount: 0,
		  todoCount: 0,
		  items:[],
		  rename:-1,
	  };
	  tempLists.push(tempList);
	  this.setState({ listCnt:this.state.listCnt + 1 , 
		  	  Lists:tempLists,
			  value:''})
  //this.addTodoItem("test",this.state.listCnt);
  this.updateCnt();
  }

  updateCnt(){
//	if(this.state.Lists[listId].items.length===0)
//		return;
//	console.log(this.state.Lists[listId].items[0])
	let u = 0;
	let d = 0;
	for(let i = 0; i <this.state.Lists.length;i++){
	for(let j = 0; j <this.state.Lists[i].items.length;j++){
//		console.log(this.state.Lists[listId].items[j]);
		if (this.state.Lists[i].items[j].isDone===-1)
			u+=1;
		if (this.state.Lists[i].items[j].isDone===1)
			d+=1;
		}
	this.setState({doneCount:d,todoCount:u});
  	}	
  }

  addTodoItem(newItem,listID){
	  const tempLists = this.state.Lists;
	  const tempItem = {
		  itemName:newItem,
		  id : this.state.Lists[listID].items.length,
		  isDone : -1,
	  	  reName : -1,
	  }
	  tempLists[listID].items.push(tempItem);
	  this.setState({Lists:tempLists});
	 // console.log(listID);
	  this.updateCnt();
  	}

  renameList(id,newListName){
	  const tempList = this.state.Lists;
	  for (let i = 0; i < tempList.length; i += 1) {
		  if (tempList[i].id === id) {
			  tempList[i].listName = newListName;
		//console.log(tempList[i].listName);
		  }
	  }
	  this.setState({ Lists: tempList });
  }

  doItem(listID,id){
  	const tempList = this.state.Lists;
	tempList[listID].items[id].isDone*=-1;
	this.setState({Lists:tempList});
	this.updateCnt();
	
  }
	  

  deleteList(id){
  	const tempList = this.state.Lists.filter(tempList => tempList.id !== id);
//	const list2de = this.state.Lists.filter(list2de=>list2de.id===id); 
	this.setState({Lists:tempList,
			listCnt:this.state.listCnt-1});
	this.updateCnt();
  }



  render() {
	return( 
	<div >
		<div className="title"> <h3>TodoList</h3> </div>
		<div className="countdisplay">
		</div>
		<div className="top-area">
			<button title="New List" className="top-button" onClick={this.addTodoList.bind(this,"New List")}> New List </button>
			<button title="Clear" className="top-button"> Clear </button>
		</div>
		 	<div className="middle">
				<li>active: {this.state.todoCount}</li>
				<li>complete: {this.state.doneCount}</li>
				<li>listCnt: {this.state.listCnt}</li>
			</div >
			<ol>
			{
				this.state.Lists.map(list =>
						<TodoList
						name={list.listName}
						key={list.id}
						LId={list.id}
						todoCount={list.todoCount}
						doneCount={list.doneCount}
						items={list.items}
						renameList={this.renameList}
						deleteList={this.deleteList}
						rename={list.rename}
						addTodoItem={this.addTodoItem}
						doItem={this.doItem}
						/>,
					)
			}
			</ol>
		</div>
	);
  }
}

export default TodoApp;
