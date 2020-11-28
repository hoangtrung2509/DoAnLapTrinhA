import React from 'react';
import {View,Text} from 'react-native';
import {Card, Icon,Image,Avatar} from 'react-native-elements';

const History = () =>{
    return(
        <View>
        <Card>
          <Card.Title>Players History</Card.Title>
          <Card.Divider/>
          <View style={{textAlign: 'center', marginTop: 50, flexDirection:'row',alignItems: 'center',justifyContent: 'center',opacity:0.5}}>
        <Icon name="info" size={30} title="Comming Soon !!!" />
            {/*Icon Component*/}
        <Text >
         Comming Soon!!!
        </Text>
        
      </View>
        </Card>
      </View>
    )
}

export default History