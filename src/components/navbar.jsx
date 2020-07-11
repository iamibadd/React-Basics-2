import React from 'react';
//this component is a stateless functional component because there is no event handler in it, to deal with these type of components
//we use a function instead of a class for rendering purpose
// class Navbar extends Component {
//     render() {
//         return (
//                 <nav className="navbar navbar-light bg-light">
//                     <a className="navbar-brand" href="#">
//                         Navbar <span className="badge badge-pill badge-secondary">{this.props.counters}</span></a>
//                 </nav>
//         );
//     }
// }
//the same can be done with a functional method
// const Navbar=props=>{ //can be any name but using props is conventional and it's value is set to this.props by default
//     return (
//                 <nav className="navbar navbar-light bg-light">
//                     <a className="navbar-brand" href="#">
//                         Navbar <span className="badge badge-pill badge-secondary">{props.total_counters}</span></a>
//                 </nav>
//         );
// }
//to get rid of the 'this.props' or 'props' we use object destructuring, so the above can be done by
const Navbar=({total_counters})=>{
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{total_counters}</span></a>
        </nav>
    );
}
export default Navbar;