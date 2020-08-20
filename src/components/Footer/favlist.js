import React from 'react';
import { Icon, Popup, Message, List, Image } from 'semantic-ui-react';
import { API_IMAGE_URL } from '../../utils'

export const FavoriteList = (props) => {
    const { items, clicked } = props

    return (
        <>
            {items ? <List divided verticalAlign='middle'>
                {items.map((val, key) => (
                    <List.Item>
                        <List.Content floated='right'>
                            <Popup
                                trigger={<a key={key} href onClick={() => clicked(key)}><Icon name='close' color={items[key].wl ? "blue" : "grey"} /></a>}
                                content="Remove"
                                position='right center'
                            />
                        </List.Content>
                        <Image avatar src={`${API_IMAGE_URL}${items[key].poster_path}`} />
                        <List.Content>
                            <List.Header>{items[key].title}</List.Header>
                            {items[key].release_date}
                        </List.Content>
                    </List.Item>

                ))}
            </List> :
                <Message warning>
                    <p>No videos in your watch later list</p>
                </Message>}
        </>
    )
}
