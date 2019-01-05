import React from 'react';
import Header from './components/containers/header';
import Jokes from './components/containers/jokes';
import { Row, Col, Grid, ProgressBar } from 'react-bootstrap/lib';

import { requestJokesList } from './api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAction = this.onAction.bind(this);

    this.state = {
      jokesContent: [],
      favorites: [],
      loading: true,
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
    console.log(id, type);
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
        <Header />
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
