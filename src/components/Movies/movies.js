import React from 'react';
import { Image, Card, Icon, Popup, Divider, Dimmer, Loader } from 'semantic-ui-react';

export const Movies = (props) => {

    const { result, addToFavo, addToWatchLater, showLoader } = props;

    return (
        <>
            <Divider />
            {
                showLoader && <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            }

            {result && <Card.Group itemsPerRow={4}>
                {result.map((val, key) => (
                    <Card key={key} raised >
                        <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${result[key].poster_path}`} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{result[key].title}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{result[key].release_date}</span>
                            </Card.Meta>
                            <Card.Description>
                                {result[key].title}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Popup
                                trigger={<a key={key} href onClick={() => addToFavo(key)} ><Icon id={`fav${key}`} name='favorite' color={result[key].fav ? "yellow" : "grey"} /></a>}
                                content='Add to favorite'
                                position='right center'
                            />
                            <Popup
                                trigger={<a key={key} href onClick={() => addToWatchLater(key)} ><Icon id={`wl${key}`} name='time' color={result[key].wl ? "blue" : "grey"} /></a>}
                                content='Watch later'
                                position='left'
                            />
                        </Card.Content>
                    </Card>

                ))}
            </Card.Group>
            }
        </>
    )
}

export default Movies
