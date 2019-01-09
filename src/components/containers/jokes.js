import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Grid, ProgressBar } from 'react-bootstrap/lib';
import Timer from '../presentations/timer';
import JokesList from '../presentations/jokesList';
import { getJokesList, getOneJoke } from '../../actions/jokes';

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.onStartTimer = this.onStartTimer.bind(this);
  }
  
  componentDidMount() {
    this.props.getJokesList(10);
  }

  onStartTimer() {
    const { favorites } = this.props;

    if (this.interval) {
      this.stopTimer();
    } else {
      this.interval = setInterval(() => {
        if (favorites.length < 10) {
          this.props.getOneJoke(1);
        } else {
          this.stopTimer();
        }
      }, 5000);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const { jokesList, listLoading, favorites } = this.props;
    if (listLoading) {
      return (
        <ProgressBar active now={100} />
      )
    }
    
    return (
      <div>
        <Timer startTimer={this.onStartTimer}/>
        <div className="app__content">
          <Grid>
            <Row className="show-grid">
              <Col xs={9} md={6}>
                <JokesList header="Jokes List" type="main" content={jokesList}/>
              </Col>
              <Col xs={9} md={6}>
                <JokesList header="Favorites" type="favorites" content={favorites}/>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getJokesList, getOneJoke }, dispatch);
}

function mapStateToProps(state) {
  return {
    jokesList: state.jokes.jokesList,
    favorites: state.jokes.favorites,
    listLoading: state.jokes.listLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
