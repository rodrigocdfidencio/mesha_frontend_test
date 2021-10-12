import React from 'react';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  render() {
    const { music } = this.props;
    const { title, subtitle, url, images } = music.track;
    return (
      <div data-testid="music-card">
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ url }</p>
        <img src={ images.coverart } alt="" />
      </div>
    );
  }
}

Cards.propTypes = {
  music: PropTypes.objectOf(String).isRequired,
};

export default Cards;
