import React, { useState, useEffect } from 'react'
import  classnames from 'classnames/bind';
import styles from './Homepage.module.scss';

const cx = classnames.bind(styles);

function Homepage() {
    return ( 
        <div className={cx('attribute')}></div>
     );
}

export default Homepage;