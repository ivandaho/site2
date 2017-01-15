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
                'url': 'https://www.github.com/ivandaho',
                'local': false
            },
            {'title': 'Photos',
                'imgpath': './img/photos_tn_sq.png',
                'bgpath': './img/bg_cat.jpg',
                'url': 'https://www.flickr.com/photos/99908143@N07/',
                'local': false
            },
            {'title': 'Videos',
                'imgpath': './img/videos_tn_sq.png',
                'bgpath': './img/bg_video.jpg',
                'url': '/videos',
                'local': true
            },
            {'title': 'Music',
                'imgpath': './img/music_tn_sq.png',
                'bgpath': './img/bg_musicgear.jpg',
                'url': '#',
                'local': true
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
                                        local={obj.local}
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
