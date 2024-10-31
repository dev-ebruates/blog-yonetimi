import PropTypes from 'prop-types';
import './BlogItem.css';

const BlogItem = ({ baslik, icerik, yazar, tarih }) => {
  return (
      <div className='card'>
          <h2>{baslik}</h2>
          <p>{icerik}</p>
          <p className='author' >Yazar: {yazar}</p>
          <p className='date' >Tarih: {tarih}</p>
      </div>
  );
};

BlogItem.propTypes = {
  baslik: PropTypes.string.isRequired,
  icerik: PropTypes.string.isRequired,
  yazar: PropTypes.string.isRequired,
  tarih: PropTypes.string.isRequired
};

export default BlogItem