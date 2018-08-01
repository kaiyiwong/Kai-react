import React, { Component } from 'react';
import styles from './index.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.text}>This is homepage</p>
      </div>
    );
  }
}

export default Home;
