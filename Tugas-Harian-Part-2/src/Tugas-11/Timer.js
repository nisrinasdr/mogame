import React, {Component} from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        let today = new Date().toLocaleString('en-ID',{hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true});
        //let ini = new Date()
        //let today = ini.getHours().toLocaleString() + ':' + ini.getMinutes() + ':' + ini.getSeconds()

        this.state = {
            time: today,
            ticking: 100
        }
    }


    componentDidMount() {
        this.intervalID = setInterval(
        () => this.tick(),
        1000
        );
    }
        
    tick() {
        let newTime = new Date().toLocaleString('en-ID',{hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true});
        this.setState({
            time: newTime,
            ticking: this.state.ticking - 1
        });
    }

    componentDidUpdate(){
        if(this.state.ticking===0) {
            this.componentWillUnmount()
            
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
      
      
     

    render(){
        return(
        <>
        {
            this.state.ticking !== 0 && (
            <>
            <h1 style={{display: 'inline-block', fontSize:"2em"}}>Sekarang jam - {this.state.time}.</h1>
            <h1 style={{display: 'inline-block', position: "absolute", right: '0', fontSize:"2em"}}>Hitung mundur: {this.state.ticking}</h1>
            </>)
        }
        </>
        )
    }
}

export default Timer;