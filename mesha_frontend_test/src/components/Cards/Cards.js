import React from 'react';
import PropTypes from 'prop-types';

import './Cards.css';

class Cards extends React.Component {
render() {
    const { music } = this.props;
    const { title, subtitle, url, images } = music.track;
    return (
        <div class="col-sm-6">
        <div class="card" >
        <img class="card-img-top" src={ images.coverart } alt={title} />
        <div class="card-body">
        <p class="card-title">{ title }</p>
        <p class="card-subtitle">{ subtitle }</p>
        <a href={ url } class="btn btn-primary btn-sm">Ouvir</a>
        </div>
        </div>
    </div>
    );
}
}


Cards.propTypes = {
music: PropTypes.objectOf(String).isRequired,
};

export default Cards;
