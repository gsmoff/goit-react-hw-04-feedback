import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <section>
      <h3>{message}</h3>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
