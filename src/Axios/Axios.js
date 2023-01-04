
import axios from 'axios'
import {BASEURL} from '../constants/constants';
//import {BASEURL} from '../constants/constants'

const INSTANCE = axios.create({
    baseURL: BASEURL,
});

export default INSTANCE;