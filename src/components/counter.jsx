import React, {Component} from 'react';

class Counter extends Component {
    //we can't use let var or const in while defining any variable or object or array in a class, they are used in class methods
    //state is conventional to use and state is kind of 'context' that we are passing to the screen
    //props vs state->props are public and can be used in any component, while state is private and is only accessed in it's own component
    //props are readonly and they can't be further changed or assigned. Changes can be done by assigning them into state portion.
    state = {
        // count: 0,
        //the below 'value' attribute is used in 'counter.jsx' file and we are setting its value to what is passed in that object
        //props are the attributes that we pass through a component using a single js object eg <Counter abc={} cdf={}/>, here 'abc' and 'cdf' are props.
        //children is a special kind of props which is passed through opening and closing tags of a react component.
        //props and children are called in the child class from the parent class
        //for example <Counter id={}><h1>Hellow</h2></Counter>, here 'id' is props and <h1></h1> is children.
        // value: this.props.value,
        //the above can be done by for a single source of truth
        value: this.props.counter.value,
        // imageURL: 'https://picsum.photos/200', //generates a random 200*200 image
        tags: ['tag1', 'tag2', 69]
    };

    render() {
        //to get rid of the 'this.props' or 'props' we use object destructuring, so the above can be done by
        const {onIncrement, onReset, onDelete} = this.props
        return (<React.Fragment>
                <h6>Hello React js! I am counter.jsx file.</h6>
                {/*<img className="rounded-circle" src={this.state.imageURL} alt=""/>*/}
                {/*<span>{this.state.count+1}</span>*/}
                {/*<span className="badge badge-primary m-2" style={{fontSize:50}}>{this.formatCount()}</span>*/}
                {/*Custom classes*/}
                {this.props.children}
                <span className={this.customClasses()} style={{fontSize: 50}}>{this.formatCount()}</span>
                {/*In event handler we pass function without '()'*/}
                {/*for the local state*/}
                {/*<button className='btn btn-success' onClick={this.handleIncrement}>Increment</button>*/}
                {/*for a single source of truth*/}
                <button className='btn btn-success' onClick={onIncrement}>Increment</button>
                <button className='btn btn-secondary m-2' onClick={onReset}>Reset</button>
                <button className='btn btn-danger m-2' onClick={onDelete}>Delete</button>
                {/*If we have a parametric handler then we will pass the function like*/}
                {/*<button className='btn btn-danger m-2' onClick={() => this.handleReset(parameter)}>Reset</button>*/}
                {/*Rendering lists or arrays*/}
                {/*<ul className="m-5">*/}
                {/*    {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}*/}
                {/*</ul>*/}
                {/*Conditional rendering, as there is no if else in react so we will use '&&' for the if statement without any else.
                Or the alternative is defining a function and then render it as we used above.*/}
                {/*{this.state.tags.length !== 0 && <ul className="m-5">*/}
                {/*    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}*/}
                {/*</ul>}*/}
                {/*/!*If array is empty*!/*/}
                {/*{this.state.tags.length === 0 && <h6 className="text-secondary">No item in the list!</h6>}*/}
            </React.Fragment>
        );
    }

    formatCount() {
        //object destructuring
        // const {value} = this.state;//this value is for the local state
        const {value} = this.props.counter;//this value is for a single source of truth
        //if count is 0 return Zero else return count
        return value === 0 ? 'Zero' : value;
        //the same can be done with below code
        // return this.state.count === 0 ? 'Zero' : this.state.count;
        //we can also return something like below due to jsx format
        // return count === 0 ? <h1>Zero</h1> : <h1>{count}</h1>
    };

    customClasses() {
        let classes = 'm-2 badge badge-';
        // classes = classes + (this.state.value === 0 ? 'warning' : 'primary')//this value is for the local state
        classes = classes + (this.props.counter.value === 0 ? 'warning' : 'primary')//this value is for the local state
        return classes;
    }

    //we have not used the default function style for the below method because in this case,the state of count is changed on need,
    //so we must use arrow functions for such conditions, and such conditions are known as binding.
    //and in above methods we are just checking count value for some conditions without changing its state.
    // handleIncrement = () => this.setState({value: this.state.value + 1})//this value is for the local state
    // handleReset = () => this.setState({value: 0})
}

export default Counter;