import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { Card, Image,Divider } from 'react-native-elements';

const infor=[{
    address:'121, Clear Water Bay Road Clear Water Bay Road',
    Tel: '+ 852 1234 5678',
    Fax:'+852 8765 4321',
    Email: 'confusion@food.net'
}]
class ContactUs extends Component {
    render(){
        return (   
                <Card style={{fontWeight:'bold'}}>
                    <Card.Title>Contact Information</Card.Title>
                   
                    <Card.Divider/>         
                    <Text >
                    HoaSen University, Quang Trung 1, SoongSil House
                    </Text>
                    <Text>
                    Tel: (+84) 336627161
                    </Text>
                    <Text>
                    Fax: (+84) xxxxxxxxxxx
                     </Text>
                    <Text>
                    Email:anhduy.nguyen0211@gmail.com
                    </Text>
                         
                </Card>  
        )
    }
}
export default ContactUs;