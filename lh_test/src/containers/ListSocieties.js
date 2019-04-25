import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchListSocietiesRequested } from '../actions/listSocieties';
import Default from '../components/molecules/ListElements/Default';

class ListSocieties extends React.PureComponent {
  componentDidMount() {
    const { fetchListSocieties } = this.props;
    fetchListSocieties();
  }

  renderList = (data) => {
    if (data.fetching) {
      return (<span>Chargement ...</span>);
    } if (data.error) {
      return (<span>Error</span>);
    } if (data.fetched) {
      return data.payload.map(e => (
        <Default
          key={e.id}
          img={e.logo}
          title={e.name}
          subTitle={`${e.address} ${e.zipcode} ${e.city}}`}
          content={`Up to ${e.maxoffer} ${e.currency} offered}`}
        />
      ));
    }
    return (<span>Oups</span>);
  }

  render() {
    const { listSocieties } = this.props;
    return (
      <div>
        <span>List Societies</span>
        {this.renderList(listSocieties)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listSocieties: state.listSocieties
});

const mapDispatchToProps = dispatch => ({
  fetchListSocieties: () => dispatch(fetchListSocietiesRequested())
});

ListSocieties.defaultProps = {
  listSocieties: []
};

ListSocieties.propTypes = {
  fetchListSocieties: PropTypes.func.isRequired,
  listSocieties: PropTypes.arrayOf(
    PropTypes.shape({})
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSocieties);
