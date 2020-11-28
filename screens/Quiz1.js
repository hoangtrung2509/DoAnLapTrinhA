import React,{useState,useEffect} from 'react';
import { View,ImageBackground,Text,ActivityIndicator } from 'react-native';

import MarioCard from '../components/MarioCard';
import Header from '../components/Header';

import { globalStyles } from '../globalStyle/style';
import {easyImg, playStateImg, hardImg, normalImg} from '../shared/imageURL'
import Loading from '../components/Loading'

const Quiz1 = ({navigation}) =>{
    const [quiz, setQuiz] = useState([]) 
    const [loading, setLoading]= useState(true) 

    useEffect(() => {
        fetch('https://reactnative-server.herokuapp.com/questions')
        .then(res => res.json() )
        .then(data =>{ 
            setQuiz(data.Quiz)
        })
        .catch(e => console.log(e))
        .finally(()=> setLoading(false))
    }, []);

    // Chọn level
    function navigationToScreen2(option){
        if(option ===  "easy"){
            const easyLevel = quiz.filter(quiz => quiz.level == option)
            navigation.push("Quiz2",{quizFromScreen1:easyLevel})
        }
        else if(option ===  "medium"){
            const mediumLevel = quiz.filter(quiz => quiz.level == option)
            navigation.push("Quiz2",{quizFromScreen1:mediumLevel})
        }
        else if(option ===  "hard"){
            const hardLevel = quiz.filter(quiz => quiz.level == option)
            navigation.push("Quiz2",{quizFromScreen1:hardLevel})
        }
    }

    // Render UI
    if (!loading)
    return(
        <View style={globalStyles.container}>
            <Header title="Quiz" homeHeader={false} />
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <View style={{flex:1,marginTop:55 }}>
                    <MarioCard onPress={()=>navigationToScreen2("easy")} color={"#00981d"} title={"easy"} imgSrc={easyImg}/>
                    <MarioCard onPress={()=>navigationToScreen2("medium")} color={"#d89e33"} title={"medium"} imgSrc={normalImg}/>
                    <MarioCard onPress={()=>navigationToScreen2("hard")} color={"#f90908"} title={"hard"} imgSrc={hardImg}/>
                </View>
            </ImageBackground>
        </View>
    )
    else return(
        <View style={{flex:1,justifyContent:'center'}}>
                <ActivityIndicator size="large" color="#0000ff" />
        </View>
        
    )
}




export default Quiz1