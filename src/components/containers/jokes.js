import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Grid, ProgressBar } from 'react-bootstrap/lib';
import Timer from '../presentations/timer';
import JokesList from '../presentations/jokesList';
import { getJokesList } from '../../actions/jokes';

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }
  
  componentDidMount() {
    this.props.getJokesList(10);
  }

  render() {
    // if (loading) {
    //   return (
    //     <ProgressBar active now={100} />
    //   )
    // }
    const { jokesList } = this.props;

    return (
      <div>
        <Timer />
        <div className="app__content">
          <Grid>
            <Row className="show-grid">
              <Col xs={9} md={6}>
                <JokesList content={jokesList}/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJokesList }, dispatch);
}

function mapStateToProps(state) {
  console.log(state, 'state');
  return {
    jokesList: state.jokes.jokesList,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
