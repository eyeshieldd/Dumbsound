import React, { useEffect } from 'react';
import '../css/Transcation.css';
import { useSelector, useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getTransaction, updatePayment } from '../../redux/actions/payment';

import dayjs from 'dayjs';

const TryFunct = () => {

    const transaction = useSelector(state => state.payment.transaction);
    console.log(transaction)

}

export default TryFunct;
