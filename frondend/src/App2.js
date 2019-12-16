
import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class CDC extends Component { 
    state = {
      texto:'',
      myinput:''
    };
  myinput=e =>{
    this.setState({myinput: e.target.value});
  }
  enviar = e => {
    this.setState({ texto : e.target.value });
  }

  myFunction=(event)=>{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  

  }
  render(){
  return (

    <div className="App">
       <p>Digite um texto:</p>
            <input onChange={this.myinput} name="texto" type="text"/>
            <p>Texto: {this.state.myinput}</p>
      <input type="text"  onChange={this.myFunction} placeholder="Search " value={this.state.myInput}/>

      <ul id="myUL">
        <li><a href="#">Adele</a></li>
        <li><a href="#">Agnes</a></li>

        <li><a href="#">Billy</a></li>
        <li><a href="#">Bob</a></li>

        <li><a href="#">Calvin</a></li>
        <li><a href="#">Christina</a></li>
        <li><a href="#">Cindy</a></li>
      </ul>

    <header className="App-header">
      <nav class="navbar navbar-default" >
      <a class="navbar-brand" href="#">Brand</a>
     
        <div>oi</div>
        <div>jjjj</div>
        <input/>

    
        <div className="container-fluid">
          
        <div class="doces">
			<img src="te1.png" height="20"/>
  			<button class="dropbtn"><b>Pedidos</b>
     
    </button>
    <div class="dropdown-content">
      <a >(85) 98607-0102 </a>
      <a>(85) 99981-7935</a>
    </div>
  </div> 
      </div>

    
      </nav>
     
          <nav id='menu'>
                <ul >
                <li><img src='01.jpg' alt="logo" className="App-logo"/></li>
                <li><img src='logo192.png' alt="logo" className="App-logo"/></li>
                    
                </ul>
          </nav>
          </header>
          <p>Texto: {this.state.myinput}</p>
    </div>
  );
}
}

export default CDC;