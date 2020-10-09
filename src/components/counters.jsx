import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {

    render() {
        //to get rid of the 'this.props' or 'props' we use object destructuring, so the above can be done by
        const {counters, onIncrement, onDelete, onReset, onResetAll} = this.props
        return (
            <div><h1>Counters.jx file</h1>
                <button className="btn btn-warning" onClick={onResetAll}>Reset all</button>
                {/*we are using the counter.jsx file here in this file aka including in php*/}
                {counters.map(counter =>
                    // All the props or children used here must be called or assigned in the 'Counter' class or 'counter.jsx' file
                    // as they are being called in the below 'Counter' component
                    // 'key'is not a prop and in map function 'key' attribute is must
                    // <Counter key={counter.id} value={counter.value} onDelete={() => this.handleDelete(counter.id)}>
                    //     the above can be done
                    <Counter key={counter.id}
                             counter={counter}
                             onDelete={() => onDelete(counter.id)}
                        // we have used counter because we are passing an object in the function
                        //      onIncrement={() => this.handleIncrement(counter)}
                        //the alternative for passing id as an argument
                             onIncrement={() => onIncrement(counter.id)}
                             onReset={() => onReset(counter.id)}>
                        <h6>Props.children#{counter.id}</h6>
                    </Counter>)}
            </div>
        )
    }
}