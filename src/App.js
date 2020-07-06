import React, { Component, useState } from 'react';
import './styles.css' ;




class App extends Component {

  constructor(props){
    super(props);
    this.state={
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;

    if(this.state.act === 0){   //new
      let data = {
        name
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let datas = this.state.datas;
    return (
      <div className="container">

      <div className="App">

        <h2>To-Do <span>List</span></h2>

        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="What do you need to do?" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">+ </button>

        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}
              <button onClick={()=>this.fRemove(i)} className="myListButton">
                <img src={require('./excluir.png')} className="icon-lixo"></img> </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">
                 <img src={require('./editar.png')} className="icon-edit"></img> </button>
            </li>
          )}
        </pre>
      </div>
      </div>

    );
  }
}

export default App