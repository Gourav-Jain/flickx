import React from 'react'
import { Divider, Segment, Grid, Header, Message } from 'semantic-ui-react';
import { FavoriteList } from './favlist'

export const Footer = (props) => {
    const { favourites, removeFavourite, watchLater, removeWatchLater } = props;
    return (
        <>
            <Divider />
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Header as="h3" dividing textAlign='center'>
                            Your Favorites Movies
                        </Header>
                        {
                            favourites && favourites.length > 0 ? <FavoriteList items={favourites} clicked={removeFavourite} /> : <Message warning>
                                <p>No videos in your favourite list</p>
                            </Message>
                        }


                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h3" dividing textAlign='center'>
                            Your Watch Later Movies
                        </Header>
                        {
                            watchLater && watchLater.length > 0 ? <FavoriteList items={watchLater} clicked={removeWatchLater} /> : <Message warning>
                                <p>No videos in your watch later list</p>
                            </Message>
                        }


                    </Grid.Column>
                </Grid>
                <Divider vertical>AND</Divider>
            </Segment>
        </>
    )
}

export default Footer

