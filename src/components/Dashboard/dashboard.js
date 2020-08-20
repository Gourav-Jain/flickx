import React from 'react';
import { Input, Button, Segment, Popup, Message } from 'semantic-ui-react';
import { useDashboardContainer } from './dashboard.container'
import { Movies } from '../Movies/movies'
import { Footer } from '../Footer/footer'

export const Dashboard = () => {

    const { showLoader,
        error,
        errorMessage,
        handleChange,
        handleAddToFav,
        handleRemoveAddToFave,
        handleAddToWatchLater,
        handleRemoveWatchLater,
        result,
        favourites,
        watchLater } = useDashboardContainer();

    return (
        <>
            <Segment clearing>

                <div>
                    <Popup content="Favorites" trigger={
                        <Button
                            floated='right'
                            color='yellow'
                            content=''
                            icon='favorite'
                            label={{ basic: true, color: 'black', pointing: 'left', content: favourites.length }}
                        />}
                    />
                    <Popup content="Watch Later" trigger={<Button
                        color='blue'
                        content=''
                        icon='time'
                        floated='right'
                        label={{
                            as: 'a',
                            basic: true,
                            color: 'black',
                            pointing: 'left',
                            content: watchLater.length,
                        }}
                    />}
                    />
                </div>
                <Input floated='right' loading={showLoader} size='large' icon='search' placeholder='Search...' onChange={handleChange} />
            </Segment>
            {
                error && errorMessage ? <Message error={error}>
                    <p>{errorMessage}</p>
                </Message> : <Movies result={result} addToFavo={handleAddToFav} addToWatchLater={handleAddToWatchLater} showLoader={showLoader} />
            }


            <Footer favourites={favourites} removeFavourite={handleRemoveAddToFave} watchLater={watchLater} removeWatchLater={handleRemoveWatchLater} />
        </>
    )
}

export default Dashboard;