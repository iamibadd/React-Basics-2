import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

//project tree goes like this
//App ->Main component, Counters and Navbar -> Children components of App, Counter -> Child component of Counters
class App extends Component {
  render() {
    return (
        <React.Fragment>
          <main className='container'>
            <Navbar total_counters={this.state.counters.filter(c=>c.value>0).length}/>
            <Counters counters={this.state.counters}
                      onIncrement={this.handleIncrement}
                      onReset={this.handleReset}
                      onDelete={this.handleDelete}
                      onResetAll={this.handleResetAll}/>
          </main>
        </React.Fragment>
    );
  }

  state = {
    //we can't assign counters as const var or let because 'counters' is a state object
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ],
  }

  handleIncrement = counter_id => {
    let updated_counters = [...this.state.counters]
    //if you want to pass argument as an object then use this approach of index
    // let index = updated_counters.indexOf(counter_id)
    // updated_counters[index].value++;
    //or if you want to pass argument as an id then use this approach
    // we are using counter_id-1 because the id attribute in counters is starting from 1 and index starts from 0
    updated_counters[counter_id - 1].value++;
    this.setState({counters: updated_counters})
  }
  handleReset = counter_id => {
    let updated_counters = [...this.state.counters]
    updated_counters[counter_id - 1].value = 0
    this.setState({updated_counters});
  }
  handleDelete = counter_id => {
    //will keep the remaining and remove the one clicked.
    const deleted = this.state.counters.filter(c => c.id !== counter_id);
    this.setState({counters: deleted});
  }

  handleResetAll = () => {
    const reset_all = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters: reset_all});
  }
}

export default App;