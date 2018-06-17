import React, { Component } from 'react';

class Extras extends Component {
  render() {

    if(this.props.data){
      var extras = this.props.data.extras.map(function(extras){
        return  <li key={extras.user}>
            <blockquote>
               <h3>{extras.header}</h3>
               <p>{extras.text}</p>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="extras">
      <div className="text-container">
         <div className="row">
            <div className="two columns header-col">
               <h1><span>Extras</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {extras}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Extras;
