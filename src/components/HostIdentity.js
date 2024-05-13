import rentals from "../datas/logements.json";
import PropTypes from 'prop-types';
import "../styles/HostIdentity";

function HostIdentity({ sheet }) {
    return (
      <div className="identity">
        <p className="identity__name">{rentals[sheet].host.name}</p>
        <img
          src={rentals[sheet].host.picture}
          alt={rentals[sheet].host.name}
          className="identity__picture"
        />
      </div>
    )
  }
  HostIdentity.propTypes = {
    sheet: PropTypes.number.isRequired,
  };

  export default HostIdentity