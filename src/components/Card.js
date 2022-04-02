import React, { Component } from 'react'

class Card extends Component {
    constructor(props){
        super(props)
    }

  render() {
    const list = this.props.list;
    return (
        <div>
            {list.map(item => {
                return (
                <div key={item.objectID}>
                    <span>
                    <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                </div>
                );
            })}
        </div>
    )
  }
}

export default Card;