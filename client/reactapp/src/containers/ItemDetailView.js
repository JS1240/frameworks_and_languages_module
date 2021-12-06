import React from 'react';
import axios from 'axios';

import { Card } from 'antd';


class ItemDetail extends React.Component {

    state = {
        items: {}
    }

    componentDidMount() {
        const itemID = this.props.match.params.itemsID;
        axios.get(`http://127.0.0.1:8000/api/${itemID}`)
            .then(res => {
                this.setState({
                    item: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <Card title={this.state.item.title}>
                <p>
                    {this.state.item.content}
                </p>
            </Card>
        )
    }
}

export default ItemDetail;