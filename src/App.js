import React from 'react';
import { render } from 'react-dom';

import { Grid, Col } from 'react-bootstrap';

import CardComponent from './components/CardComponent.jsx';

class App extends React.Component {
    getData() {
        return [
            {'title': 'Programming', 'imgpath': './img/prog_tn_sq.png', 'bgpath': './img/bg_caps.jpg'},
            {'title': 'Photos', 'imgpath': './img/photos_tn_sq.png', 'bgpath': './img/bg_cat.jpg'},
            {'title': 'Videos', 'imgpath': './img/videos_tn_sq.png', 'bgpath': './img/bg_video.jpg'},
            {'title': 'Music', 'imgpath': './img/music_tn_sq.png', 'bgpath': './img/bg_musicgear.jpg'}
        ];
    }
    render() {
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
                                    />
                                );
                            })}
                        </Grid>
                    </Col>
                </Grid>
            </div>
        )
    }
}

render(<App />,document.getElementById('app'));
