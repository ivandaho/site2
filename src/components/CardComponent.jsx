import React from 'react';

import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default class CardComponent extends React.Component {
    componentDidMount() {
        this.state = {'vid': 6};
        document.getElementById('bg-id').style.backgroundImage = 'none';
        document.getElementById('bg-id').style.opacity = 0;
    }
    componentWillMount() {
        var img0 = new Image().src = './img/bg_caps.jpg';
        var img1 = new Image().src = './img/bg_cat.jpg';
        var img2 = new Image().src = './img/bg_musicgear.jpg';
    }

    bgSet() {
        if (this.props.title === 'Videos') {
            if (this.state.vid) {
                clearTimeout(this.state.vid);

                {/* TODO: check performance??? */}
                {/* this is to make sure all previously scheduled */}
                {/* pauses are cancelled, in order for the video to play */}

                clearTimeout(this.state.vid + 1);
                clearTimeout(this.state.vid + 2);
                clearTimeout(this.state.vid + 3);
            }
            document.getElementById('vid-container').style.opacity = 1;
            document.getElementById('bg-video').play();
            return;
        } else {
            document.getElementById('bg-id').style.backgroundImage = "url(\'" + this.props.bgpath + "\')";
            document.getElementById('bg-id').style.opacity = 1;
        }
    }
    bgClear() {
        const vid = setTimeout(function() {
            document.getElementById('bg-video').pause();
        }, 200);
        this.setState({'vid': vid});
        document.getElementById('vid-container').style.opacity = 0;
        document.getElementById('bg-id').style.opacity = 0;
        {/* TODO: transition not working?? */}
        {/* document.getElementById('bg-id').style.backgroundImage = 'none'; */}
    }
    render(){
        return (
            <Col
                onMouseEnter={this.bgSet.bind(this)}
                onMouseLeave={this.bgClear.bind(this)}
                sm={6}
                md={3}
            >
                {this.props.local ? (
                    <Link to={this.props.url}><img className="icon" src={this.props.imgpath} /></Link>
                ) : (
                    <a href={this.props.url}><img className="icon" src={this.props.imgpath} /></a>
                )}
                <div className="text-center">{this.props.title}</div>
            </Col>
        )
    }
}
