import React from 'react';
import { render } from 'react-dom';

import { Grid, Col } from 'react-bootstrap';

import CardComponent from './CardComponent.jsx';

export default class IndexPageComponent extends React.Component {
    getData() {
        return [
            {'title': 'Programming',
                'imgpath': './img/prog_tn_sq.png',
                'bgpath': './img/bg_caps.jpg',
                'url': 'https://www.github.com/ivandaho'
            },
            {'title': 'Photos',
                'imgpath': './img/photos_tn_sq.png',
                'bgpath': './img/bg_cat.jpg',
                'url': 'https://www.flickr.com/photos/99908143@N07/'
            },
            {'title': 'Videos',
                'imgpath': './img/videos_tn_sq.png',
                'bgpath': './img/bg_video.jpg',
                'url': '/videos'
            },
            {'title': 'Music',
                'imgpath': './img/music_tn_sq.png',
                'bgpath': './img/bg_musicgear.jpg',
                'url': '#'
            }
        ];
    }
    render(){
        return (
            <div className="react-main-wrapper">
                <div id="bg-id">
                </div>
                <div id="vid-container">
                    <video id="bg-video" preload loop>
                        <source src="./img/NextQuickDeer.webm" type="video/webm"/>
                        No video support
                    </video>
                </div>
                <Grid className="nogutter">
                    <Col className="col-centered" xs={12} sm={12} md={8} lg={5}>
                        <Grid fluid={true}>
                            {this.getData().map((obj,index) => {
                                return (
                                    <CardComponent
                                        imgpath={obj.imgpath}
                                        bgpath={obj.bgpath}
                                        key={index}
                                        title={obj.title}
                                        url={obj.url}
                                    />
                                );
                            })}
                        </Grid>
                    </Col>
                </Grid>
            </div>
        );
    }
}
