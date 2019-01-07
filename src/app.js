import React from 'react';
import Header from './components/containers/header';
import Jokes from './components/containers/jokes';
import { Row, Col, Grid, ProgressBar } from 'react-bootstrap/lib';

import { requestJokesList } from './api';
import { saveToStorage, getFromStorage } from './utils';

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
      buttonText: undefined,
    };
  }
  
  componentDidMount() {
    requestJokesList(10)
      .then((response) => {
        const data = response.data;
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
      .catch((err) => {
        console.log(err.message, 'message');
        this.setState(() => {
          return {
            loading: false,
          };
        })
      });
  }

  onAction(id, type) {
    this.setState((prevState) => {
      const { jokesContent, favorites } = prevState;
      let itemIndex;

      if (type === 'main') {
        if(favorites.length < 10) {
          itemIndex = jokesContent.findIndex(c => c.id === id);
          favorites.push(jokesContent[itemIndex]);
          jokesContent.splice(itemIndex, 1);    
        }
      } else {
        itemIndex = favorites.findIndex(c => c.id === id);
        jokesContent.push(favorites[itemIndex]);
        favorites.splice(itemIndex, 1);
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
        .then((response) => {
          const data = response.data;
          if (data.type === 'success') {
            this.setState(prevState => {
              const { favorites } = prevState;
              if(favorites.length < 10) {
                const newFavorites = favorites.concat(data.value);
                saveToStorage('favorites', newFavorites);
                return {
                  favorites: newFavorites,
                }; 
              } else {
                clearInterval(this.interval);
                this.interval = null;
              }
            });
          }
        })
        .catch((err) => {
          console.log(err.message, 'message');
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
