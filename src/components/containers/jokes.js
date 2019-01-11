import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Grid, ProgressBar, Button } from 'react-bootstrap/lib';
import Timer from '../presentations/timer';
import JokesList from '../presentations/jokesList';
import { getJokesList, getOneJoke } from '../../actions/jokes';

class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.onStartTimer = this.onStartTimer.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  componentDidMount() {
    this.props.getJokesList(10);
  }

  logout() {
    const { history } = this.props;
    localStorage.removeItem('LoggedIn');
    history.push("/login");
  }

  onStartTimer() {
    const { favorites, getOneJoke } = this.props;

    this.interval = setInterval(() => {
      (favorites.length < 10) ? getOneJoke(1) : this.stopTimer();
    }, 5000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const { jokesList, listLoading, favorites, moveFavorite } = this.props;
    if (listLoading) {
      return (
        <ProgressBar active now={100} />
      );
    }

    return (
      <div>
        <div className="app__content">
          <Grid>
            <Row className="show-grid">
              <Col xs={9} md={6}><Timer startTimer={this.onStartTimer}/></Col>
              <Col xs={9} md={6}>
                <div className="app__action">
                  <Button bsStyle="primary" onClick={this.logout}>Logout</Button>
                </div>
              </Col> 
            </Row>
          </Grid>
          <Grid>
            <Row className="show-grid">
              <Col xs={9} md={6}>
                <JokesList 
                  header="Jokes List" 
                  type="main" 
                  content={jokesList}
                  onAction={moveFavorite}
                />
              </Col>
              <Col xs={9} md={6}>
                <JokesList 
                  header="Favorites" 
                  type="favorites" 
                  content={favorites}
                  onAction={moveFavorite}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ getJokesList, getOneJoke }, dispatch),
    moveFavorite: (id, actionType) => () => {
      dispatch({
        type: "MOVE_FAVORITES",
        id,
        actionType,
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    jokesList: state.jokes.jokesList,
    favorites: state.jokes.favorites,
    listLoading: state.jokes.listLoading,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
