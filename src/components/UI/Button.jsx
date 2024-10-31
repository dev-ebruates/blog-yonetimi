import PropTypes from 'prop-types';
import './Button.css'; 

const Button = ({ 
    label, 
    onClick, 
    type = 'button', 
    disabled = false, 
    color = 'primary', // Varsayılan renk
    size = 'medium' // Varsayılan boyut
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`custom-button ${color} ${size}`} // Renk ve boyut sınıflarını ekle
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']), // Renk seçenekleri
    size: PropTypes.oneOf(['small', 'medium', 'large']), // Boyut seçenekleri
};

export default Button;
