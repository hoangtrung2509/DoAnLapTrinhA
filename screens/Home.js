import React,{useEffect,Component} from 'react';
import {View,Text,Linking,Button, TouchableHighlight,StyleSheet,ScrollView,ImageBackground,YellowBox,TouchableWithoutFeedback}from 'react-native'
import {Card, Icon,Image,Avatar} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Quiz1 from './Quiz1';
import ContactUs from './ContactUs';
import AboutUspage from './AboutUs'
import RakingScreen from './Ranking'
import History from './History'

import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();
function TabNavigatorScreen(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={QuizNavigatorScreen}
      
      options={{
        title: "Home",
        tabBarIcon:({focused})=>(
          <Icon 
          name='home'
          type='font-awesome'
          color='#f50' size={30} color={focused ? '#7cc' : '#ccc'}/>
        )
        }}/>

      <Tab.Screen name="Profile" component={History} options={{
        title: "History",
        tabBarIcon:({focused})=>(
          <Icon 
          name='users'
          type='font-awesome'
          color='#f50' size={30} color={focused ? '#7cc' : '#ccc'}/>
        )
        }} />
  <Tab.Screen name='Rank' component={RakingScreen}  options={{ title: 'Rank',
tabBarIcon:({focused})=>
(
  <Icon name='trophy' type="font-awesome" color='#f50' size={30} color={focused ? '#7cc':"#ccc"}/>
)
}}/>
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();
function QuizNavigatorScreen() {

  return (
    
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#64b5f6' },
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff' }
    }}>
      <Stack.Screen name="Quiz" component={QuizScreen} options={({ navigation }) => ({
        headerTitle: "Quiz",
        tabBarIcon:({focused})=>(
          <Icon name="home" size={30} color={focused ? '#7cc' : '#ccc'}/>
        ),
        headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
      })
   }  />

      {/* <Stack.Screen name="Quiz Details" component={Details} /> */}
      <Stack.Screen name="Question" component={Quiz1} />
    </Stack.Navigator>
  );
}
function QuizScreen({navigation,route}) {
  return (
    
    /** LEVEL*/
    <ScrollView>
 <View style={{ flex: 1,textAlign:'center' }}>
    
    <Card >
      <View style={{flexDirection:'row',marginBottom:10}}>
        {/* {route.params.data.user.givenName} */}
      <Text style={{fontWeight:'bold'}} >Hello, Duy</Text>
        
      </View>
      <Card.Divider/>
      <View style={styles.menuchoice}>

          <TouchableHighlight underlayColor="#f1f8e9" activeOpacity={0.6} onPress={()=>{navigation.navigate('Question')}} style={styles.menuchoice_details}>
            <Animatable.View animation="fadeInUp" duration={1500} delay={800}>
            <Icon name='gamepad'  type="font-awesome" />
                <Text>Quiz</Text>
            </Animatable.View>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#f1f8e9" activeOpacity={0.6} onPress={()=>{}} style={styles.menuchoice_details}>
          <Animatable.View animation="fadeInDown" duration={1500} delay={800}>
                 <Icon name='star'  type="font-awesome" />
                  <Text>LeaderBoard</Text>
            </Animatable.View>
          </TouchableHighlight>

      </View>

      <View style={styles.menuchoice}>

        <TouchableHighlight underlayColor="#f1f8e9" activeOpacity={0.6} onPress={()=>{}} style={styles.menuchoice_details}>
           <Animatable.View animation="fadeInDown" duration={1500} delay={800}>
              <Icon name='user'  type="font-awesome" />
              <Text>User Panel</Text>
            </Animatable.View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#f1f8e9" activeOpacity={0.6} onPress={()=>{}} style={styles.menuchoice_details}>
           <Animatable.View animation="fadeInUp" duration={1500} delay={800}>
                <Icon name='question'  type="font-awesome" />
                <Text>Help</Text>
            </Animatable.View>
        </TouchableHighlight>

</View>
    </Card>
    
 
  </View>
    </ScrollView>
   
  );
}

const MainNavigator = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: '#2196f3', height: 100, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Image source={require('../images/logo.png')} style={{ width: '100%', height: '100%' }} />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>English Center </Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Help '
        icon={({ focused, color, size }) => <Icon name='help' size={size} color={focused ? '#7cc' : '#ccc'} />}
        onPress={() => Linking.openURL('https://reactnavigation.org/docs/getting-started')} />
    </DrawerContentScrollView>
  );
}
function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawerContent {...props} />}>
      <MainNavigator.Screen name='Home' component={TabNavigatorScreen} options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }}/>

      {/* <MainNavigator.Screen name='Menu' component={MenuNavigatorScreen}  options={{
          title: 'Menu',
          drawerIcon: ({ focused, size }) => (<Icon name='menu' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }} /> */}

      <MainNavigator.Screen name='AboutUs' component={AmoungUsNavigator} options={{
          title: 'About Us',
          drawerIcon: ({ focused, size }) => (<Icon name='info' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }} /> 

      <MainNavigator.Screen name='ContactUs' component={ContactUsNavigator}  options={{
          title: 'Contact Us',
          drawerIcon: ({ focused, size }) => (<Icon name='contacts' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }} />
        
    </MainNavigator.Navigator>
  );
}

const HomeNavigator = createStackNavigator();
function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#512DA8' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}>
      <HomeNavigator.Screen name='Home' component={Home}
        options={({ navigation }) => ({
          headerTitle: 'Home',
          headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
        })} />
    </HomeNavigator.Navigator>
  );
}

const AboutUs = createStackNavigator();

function AmoungUsNavigator(){
  return (
    <AboutUs.Navigator initialRouteName='AboutUs' screenOptions={{ 
      headerTitleStyle:{color:'#fff'},
      headerStyle:{backgroundColor:'orange'}}} >
      <AboutUs.Screen name='AboutUs' component={AboutUspage}  options={({ navigation }) => ({
          headerTitle: 'AboutUs',
          headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
        })}/>
    </AboutUs.Navigator>
  )
}

const ContactUspage = createStackNavigator();
function ContactUsNavigator(){
  return (
    <ContactUspage.Navigator initialRouteName='ContactUs' screenOptions={{ 
      headerTitleStyle:{color:'#fff'},
      headerStyle:{backgroundColor:'orange'}}}>
      <ContactUspage.Screen name='ContactUs' component={ContactUs}  options={({ navigation }) => ({
          headerTitle: 'ContactUs',
          headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
        })}/>
    </ContactUspage.Navigator>
  )
}
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      data: this.props.route.params.data.user.name
    };
    YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
}

  render() {
    const data= this.state.data;
    if(data!=null) {
      console.log(data);
    }
    else{
      return false;
    }
    return (   
             
        <MainNavigatorScreen/>

    );
  }
}
const styles = StyleSheet.create({
  button:{  textAlign: 'center',
  justifyContent: 'center',
    height: 40,
    width:220,
    borderRadius:10,
    marginLeft :50,
    marginRight:50,
    marginTop :20},

  menuchoice:{ 
      flexDirection: 'row',
      justifyContent:'space-between',
      textAlign: 'center',
      justifyContent:'center',
      width:'100%',
      height:250,
      borderWidth:2,
      borderColor:'white'
    },
    menuchoice_details: {
      flexDirection: 'row',
      backgroundColor:'orange',
      width:'50%',
      justifyContent:'center',
      alignItems:'center'
    }
}

)
export default Home;