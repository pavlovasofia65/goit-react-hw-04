import css from './Loader.module.css'
import {useState, useEffect} from 'react'
import { BounceLoader } from 'react-spinners';

export default function Loader() {
    return <BounceLoader/>;
}