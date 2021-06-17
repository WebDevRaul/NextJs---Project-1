import Link from 'next/link';

import classes from './event-item.module.css';

const EventItem = ({ title, image,  date, location, id }) => (
  <li className={classes.item}>
    <img src={`/${image}`}  alt={title} />
    <div className={classes.content}>
      <div className={classes.summary}>
        <h2>{title}</h2>
      </div>
      <div className={classes.date}>
        <time>{new Date(date).toLocaleDateString('en-US', { day:'numeric', month:'long', year:'numeric' })}</time>
      </div>
      <div className={classes.address}>
        <address>{location.replace(', ', '\n')}</address>
      </div>
      <div className={classes.actions}>
        <Link href={`/events/${id}`}>Explore Event</Link>
      </div>
    </div>
  </li>
);

export default EventItem;