import React from 'react';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const Items = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={props.data}
            renderItem={item => (
            <List.Item
                key={item.title}
                extra={
                <img
                    width={272}
                    alt="logo"
                    src="https://placekitten.com/200/300"
                />
                }
            >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={`/${item.href}`}>{item.title}</a>}
                keywords={item.keywords}
                description={item.description}
                lat={item.lat}
                lon={item.lon}
                date_from={item.date_from}
                date_to={item.date_to}
                />
                {item.content}
            </List.Item>
            )}
        />
            )
}

export default Items;