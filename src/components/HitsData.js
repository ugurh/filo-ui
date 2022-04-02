import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class HitsData extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    
    componentDidMount(){
        axios.get(API+DEFAULT_QUERY)
        .then(data => {
            this.setState({data})
        });
    }

  render() {
    return (
      <div>vdsv</div>
    )
  }
}

export default HitsData;