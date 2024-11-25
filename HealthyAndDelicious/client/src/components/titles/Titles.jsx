import './Titles.scss';
import PropTypes from 'prop-types';

const Titles = ({ type, children }) => {
  let className = '';
  let Title = 'h4';

  if (type === 'main') {
    className = 'title';
    Title = 'h1';
  } else if (type === 'sub') {
    className = 'subTitle';
    Title = 'h2';
  } else if (type === 'tertiary') {
    className = 'tertiaryTitle';
    Title = 'h3';
  } else {
    className = 'fourthTitle';
    Title = 'h4';

  }

  return <Title className={className}>{children}</Title>;
};

Titles.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Titles;
