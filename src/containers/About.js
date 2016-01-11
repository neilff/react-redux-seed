import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import { fetchContent } from '../actions/content';

import Container from '../components/ui/Container';
import Column from '../components/ui/Column';

function mapStateToProps(state) {
  return {
    content: state.content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadContent: () => dispatch(fetchContent()),
  };
}

class About extends Component {
  static propTypes = {
    content: PropTypes.instanceOf(Map).isRequired,
    loadContent: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadContent();
  }

  render() {
    const { content } = this.props;
    const isLoading = content.get('isLoading');

    return (
      <Container>
        <Column className="col-12">
          <h1>{ isLoading ? 'Loading...' : content.get('title') }</h1>
          <p>{ isLoading ? '' : content.get('body') }</p>
        </Column>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
