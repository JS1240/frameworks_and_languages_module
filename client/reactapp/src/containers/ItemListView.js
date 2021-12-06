import React from 'react';
import axios from 'axios';
import Items from '../components/Item';



class ItemList extends React.Component {

    state = {
        items:[]
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    item: res.data
                });
            })
    }

    render() {
        return (
            <Items data={this.state.Items}/>
        )
    }
}

export default ItemList;