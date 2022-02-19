import React,{Component} from 'react';

class Home extends Component {
    constructor(){
        super()
        // console.log(">>> inside constructor")
        this.state={
            textVal:'',
            showName: false
        }
    }

    handleChange = (event) => {
        this.setState({showName:false});
        this.setState({textVal:event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({showName:true})
    }

    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>   
            <div><input type='textbox' onChange={this.handleChange}></input></div>
            <div><input type='submit' onSubmit={this.handleSubmit}></input></div>
            {this.state.showName && <p>"Todo Task: " {this.state.textVal}</p>}
            </form>
            </div>
        )
        }
}
export default Home;