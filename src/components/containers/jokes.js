import React from 'react';
import { Row, Col, Grid, ProgressBar } from 'react-bootstrap/lib';
import Timer from '../presentations/timer';
import JokesList from '../presentations/jokesList';

export default class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }
  
  componentDidMount() {
    
  }

  render() {
    // if (loading) {
    //   return (
    //     <ProgressBar active now={100} />
    //   )
    // }

    return (
      <div>
        <Timer />
        <div className="app__content">
          <Grid>
            <Row className="show-grid">
              <Col xs={9} md={6}>
                <JokesList content={[]}/>
              </Col>
              <Col xs={9} md={6}>
              <JokesList content={[]}/>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
