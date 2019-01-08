import React from 'react';
import Header from './components/containers/header';
import Jokes from './components/containers/jokes';
import { Row, Col, Grid, ProgressBar } from 'react-bootstrap/lib';

import { requestJokesList } from './api';
import { saveToStorage, getFromStorage, swapJoke } from './utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAction = this.onAction.bind(this);
    this.ToggleTimer = this.ToggleTimer.bind(this);
    this.interval = null;

    this.state = {
      jokesContent: [],
      favorites: [],
      loading: true,
    };
  }

  addToFavorites(arr, item) {
    if(arr.length < 10) {
      const newFavorites = arr.concat(item);
      saveToStorage('favorites', newFavorites);
      return newFavorites;
    } else {
      clearInterval(this.interval);
      this.interval = null;
    }

    return arr;
  }
  
  componentDidMount() {
    requestJokesList(10)
      .then((data) => {
        if (data.type === 'success') {
          this.setState(() => {
            return {
              jokesContent: data.value,
              favorites: getFromStorage('favorites') || [],
              loading: false,
            };
          });
        }
      })
      .catch(() => {
        this.setState({ loading: false })
      });
  }

  onAction(id, type) {
    this.setState((prevState) => {
      const { jokesContent, favorites } = prevState;

      if (type === 'main') {
        if(favorites.length < 10) {
          swapJoke(id, jokesContent, favorites);
        }
      } else {
        swapJoke(id, favorites, jokesContent);
      }

      saveToStorage('favorites', favorites);
      return {
        jokesContent,
        favorites,
      };
    });
  }

  ToggleTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => {
        requestJokesList(1)
        .then((data) => {
          if (data.type === 'success') {
            this.setState(prevState => {
              return {
                favorites: this.addToFavorites(prevState.favorites, data.value),
              };
            });
          }
        });
      }, 5000);
    }
  }

  render() {
    const { jokesContent, favorites, loading } = this.state;
    if (loading) {
      return (
        <ProgressBar active now={100} />
      )
    }

    return (
      <div>
        <Header onAction={this.ToggleTimer} />
        <div className="app__content">
          <Grid>
            <Row className="show-grid">
              <Col xs={9} md={6}>
                <Jokes header="Jokes List" content={jokesContent} type="main" onAction={this.onAction}/>
              </Col>
              <Col xs={9} md={6}>
                <Jokes header="Favorites List" content={favorites} type="favorites" onAction={this.onAction}/>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
