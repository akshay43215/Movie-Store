
import axios from 'axios'
import {BASEURL} from '../constants/constants';
//import {BASEURL} from '../constants/constants'

const INSTANCE = axios.create({
    BASEURL:BASEURL,
});

export default INSTANCE;