import React, { Component } from 'react'
class MoviesShow extends Component {
  render(){
    return(
      <div>
        Movies Show {this.props.params.id}
      </div>
    )
  }
}

export default MoviesShow
