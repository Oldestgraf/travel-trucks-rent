import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage('Camper successfully booked!');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.title}>Book your campervan now</p>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      <label className={styles.label}>
        <input className={styles.input} type="text" placeholder="Name*" required />
      </label>

      <label className={styles.label}>
        <input className={styles.input} type="email" placeholder="Email*" required />
      </label>

      <label className={styles.label}>
        <DatePicker
          className={styles.input}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Booking date*"
          dateFormat="MMMM d, yyyy"
          required
        />
      </label>

      <label className={styles.label}>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Comment"
          rows="4"
        />
      </label>

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </div>

      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </form>
  );
};

export default BookingForm;