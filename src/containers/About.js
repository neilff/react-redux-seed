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

    return (
      <Container>
        <Column className="col-12">
          <h1>{ content.get('title') }</h1>
          <p>
            { content.get('body') }
          </p>
        </Column>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
