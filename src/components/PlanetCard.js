import PropTypes from 'prop-types';
import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetSize } = this.props;
    const maxSize = 69911;
    const proportion = maxSize / planetSize;
    const defaultWidth = 200;
    const width = (defaultWidth / proportion);
    return (
      <div data-testid="planet-card">
        <a href={ `https://pt.wikipedia.org/wiki/${planetName}_(planeta)` } target="_blank" rel="noreferrer" className="planet-card">
          <p data-testid="planet-name">{planetName}</p>
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            width={ `${width}px` }
          />
          <p />
        </a>
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetSize: 69911,
};

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetSize: PropTypes.number,
};

export default PlanetCard;
