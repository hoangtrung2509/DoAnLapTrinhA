import React, { useState,useEffect }  from 'react';
import {Image, Text, View,ActivityIndicator} from  'react-native';
import { set } from 'react-native-reanimated';

const Loading = () =>{
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(!load)
        },600)
        return ()=>{
            clearTimeout();
        }
    },[load])

    return(    
        <View>
            <Image source={require('../shared/images/mario1.png')}  style={{
                width:70,
                height:70,
                display:load?"none":"flex",
            }}/>
            <Image source={require('../shared/images/mario2.png')}  style={{
                width:70,
                height:70,
                display:load?"flex":"none",
            }}/>
            <Dot style={{
                fontSize:20,
                fontWeight:"bold",
                color:"red",
            }}/>
        </View>   
    ) 
}

const Dot = ({style})=>{
    const [dot, setDot] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            if(dot<3)
            setDot(dot+1)
            else(
                setDot(0)
            )
        },600)
        return ()=>{
            clearTimeout();
        }
    },[dot])

    if(dot==0)
        return <Text style={style}>Loading.</Text>
    else if(dot==1)
        return <Text style={style}>Loading..</Text>
    else
        return <Text style={style}>Loading...</Text>
}

export default Loading