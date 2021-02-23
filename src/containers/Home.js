import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { obtenerPreguntasAction } from '../store/actions/questionsActions';
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(obtenerPreguntasAction())
    }, [])

    return ( 
        <h1>hola gay</h1>
     );
}
 
export default Home;