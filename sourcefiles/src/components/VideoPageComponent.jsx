import React, { Component } from 'react';
import { Link } from 'react-router';

import { Button, Grid, Row, Col, PageHeader, Breadcrumb, Nav, NavItem } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';

class VideoEntry extends Component {
    render() {
        return (
            <Row className="some-margin">
                <Col md={8}>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={this.props.src}></iframe>
                    </div>
                </Col>
                <Col md={4}>
                    <h4>{this.props.title}</h4>
                    <b>{this.props.date}</b><br/><br />
                    {this.props.desc.split('\n').map(function(item, i) {
                        return (
                            <span key={i}>
                                {item}
                                <br />
                            </span>
                        )
                    })}
                </Col>
            </Row>
        )
    }
}
export default class VideoPageComponent extends React.Component {
    getData() {
        return [
            {
                'title': 'Anaki Rocks The City 2013',
                'date': 'March 2013',
                'src': 'https://www.youtube.com/embed/O4FoKX0lsDA',
                'desc': 'Two-day outdoor event for local Singaporean bands playing originals.\n\n' +
                        'I was given the task of filming and producing a highlight video for the event.\n\n' +
                        'Filmed on a Canon 550D/T2i with 18-55mm and 50mm f/1.8 lens.'

            },
            {
                'title': 'Service Project (Dining and Banquet Table Setup)',
                'date': 'March 2015',
                'src': 'https://drive.google.com/file/d/0B_19dIS9ylqYYmRrcmFFbjFYQkE/preview',
                'desc': 'A group project (team of 3) in our Mass Communications class, done as a service ' +
                        'project for students in a Resort Management class.\n\n' +
                        'We were tasked with shooting a video for students from the other class. We handled ' +
                        'the technical aspect of the shoots, while the script and performance was done by ' +
                        'students in the other class.\n\n' +
                        'Filmed on a Panasonic AC-AG160 and a Canon 550D/T2i with 18-55mm and 50mm f/1.8 lens.\n' +
                        'Edited in Adobe Premiere Pro and Adobe After Effects.'
            },
            {
                'title': 'Accessibility at Methodist University',
                'date': 'April 2015',
                'src': 'https://drive.google.com/file/d/0B_19dIS9ylqYbVY4LVRCdVN3NFk/preview',
                'desc': 'Group project (team of 4) - Short documentary on how Methodist University ' +
                        'accomodates students with disabilities with help from the Accessibility ' +
                        'Resources department.\n\n' +
                        'Special thanks to the people that agreed to an interview with us.\n\n' +
                        'Filmed on a Panasonic AC-AG160 and a Canon 550D/T2i with 18-55mm and 50mm f/1.8 lens.\n' +
                        'Edited in Adobe Premiere Pro and Adobe After Effects.'
            },
            {
                'title': 'Fred Water Advertisement',
                'date': 'April 2016',
                'src': 'https://drive.google.com/file/d/0B_19dIS9ylqYQ1M5eVNXNzMtd0k/preview',
                'desc': 'Group project (team of 2) to produce a short 30 second advertisement for a product.\n\n' +
                        'We chose Fred Water and came up with a short monologue to go with the footage.\n\n' +
                        'Filmed on a Canon 550D/T2i with 18-55mm and 50mm f/1.8 lens.\n' +
                        'Edited in Adobe Premiere Pro and Adobe After Effects.'
            }
        ];
    }
    render(){
        return (
            <DocumentTitle title="Ivan's site - videos">
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Videos
                        </Breadcrumb.Item>
                    </Breadcrumb>

                    <Grid>
                        <PageHeader>Videos</PageHeader><br />
                        {this.getData().map((obj,index) => {
                            return (
                                <VideoEntry
                                    key={obj.title}
                                    title={obj.title}
                                    date={obj.date}
                                    desc={obj.desc}
                                    src={obj.src}
                                />
                            );
                        })}
                    </Grid>
                </div>
            </DocumentTitle>
        );
    }
}
