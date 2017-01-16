import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Button, PageHeader, Grid, Col } from 'react-bootstrap';

export default class NoComponent extends React.Component {
    render(){
        return (
            <div className="react-main-wrapper">
                <Grid className="nogutter">
                    <Col className="col-centered" xs={12} sm={12} md={8} lg={5}>
                        <PageHeader className="text-center">
                            <h1>404 - Page Not found</h1>
                        </PageHeader>
                    </Col>
                    <Col className="col-centered" xs={12} sm={8} md={5} lg={3}>
                        <Link to="/"><Button bsSize="large" block>Home</Button></Link>
                    </Col>
                </Grid>
            </div>
        );
    }
}
