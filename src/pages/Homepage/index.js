import React, { useState, useEffect } from 'react'
import  classnames from 'classnames/bind';
import styles from './Homepage.module.scss';

const cx = classnames.bind(styles);

function HomePage() {
    return ( 
        <div className={cx('attribute')}>Homepage</div>
     );
}

export default HomePage;    