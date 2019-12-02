import React,{Component} from "react";


export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            tab:[],
            
            userInput:"",
        }
        
    }
    addOnclick=(e)=>{
        e.preventDefault()
       this.setState({
        tab:[...this.state.tab,{userInput:this.state.userInput,completed:false}     ],
        userInput:""
       
       })  
        
       

    }
    handleChnage=(e)=>{
      this.setState({
        userInput:e.target.value
      });
     
    }
    
     deleteItem=(index)=>{
         this.setState({
             tab:this.state.tab.filter((el,i)=> index !== i)
         })
     }
    completedItem=(itemCompleted)=>{
        this.setState({
            tab:this.state.tab.map((el,i)=>
            (itemCompleted === i)?{...el ,completed : !el.completed}:el
            
        )
            
        })

    }


 render(){
    //  console.log(this.state.userInput)
    //  console.log(this.state.tab)
  return (
    <div>
      <div className="form">
          <span className="title">To-Do APP!</span>
          <span className="smalltitle">ADD New TO-Do</span>


          <input  value={this.state.userInput}  className="new-Task" placeholder="Enter new task" onChange={event=>this.handleChnage(event)}></input>
          <input type="button" value="Add" className="btn-add" onClick={this.addOnclick}></input>
      </div>

     <div className='titleworkspace'>
            <h3> Let's get some work done!</h3>
            <hr className="ligne"></hr>
            {this.state.tab.map((el,i)=> 
            <div key={i} className="stylebtn">
                
             <input type="button" value={el.completed ? 'Undo' : 'Complete'} onClick={()=>this.completedItem(i)}/>
             
             
              <input type="button" value='deleted' onClick={()=>this.deleteItem(i)}/>
              <span className="styletext">
             <span className={el.completed ? 'completed' : ''}>{el.userInput}</span>
             </span>
             </div>
                )}   

            
      </div>
      
    </div>
  
    )
}
}


