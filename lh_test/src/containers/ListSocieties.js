import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListSocietiesRequested } from '../actions/listSocieties';

class ListSocieties extends React.PureComponent {
  componentDidMount() {
    const { fetchListSocieties } = this.props;
    fetchListSocieties();
  }

  render() {
    return (<span>List Societies</span>);
  }
}

const mapStateToProps = state => ({
  listSocieties: state.listSocieties
});

const mapDispatchToProps = dispatch => ({
  fetchListSocieties: () => dispatch(fetchListSocietiesRequested())
});

ListSocieties.defaultProps = {};

ListSocieties.propTypes = {
  fetchListSocieties: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSocieties);
