/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-carousel';
import Icon from 'react-native-vector-icons/Ionicons';  
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
class home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        offers:[
            {
                line1:'BASIC',
                line2:'Zylo Basic Health Checkup',
                line3:'59 Tests included',
                line4:'original',
                line5:'Rs 699',
                line6:'60 % off',
                line7:'Zoyolo labs',
                line8:'Book Now',
                line9:'#efbbcc',

            },
            {
                line1:'BASIC',
                line2:'Zylo Basic Health Checkup',
                line3:'59 Tests included',
                line4:'original',
                line5:'Rs 699',
                line6:'60 % off',
                line7:'Zoyolo labs',
                line8:'Book Now',
                line9:'#b19cd9',
            },
            {
                line1:'BASIC',
                line2:'Zylo Basic Health Checkup',
                line3:'59 Tests included',
                line4:'original',
                line5:'Rs 699',
                line6:'60 % off',
                line7:'Zoyolo labs',
                line8:'Book Now',
                line9:'#efbbcc',

            },
            {
                line1:'BASIC',
                line2:'Zylo Basic Health Checkup',
                line3:'59 Tests included',
                line4:'original',
                line5:'Rs 699',
                line6:'60 % off',
                line7:'Zoyolo labs',
                line8:'Book Now',
                line9:'#b19cd9',

            },
        ],
      pictures: [
        {
          pic:
            'https://photo-cdn.icons8.com/assets/previews/843/1e2fabe5-5e08-48db-8eeb-92a876be3e5f1x.jpg',
        },
        {
          pic:
            'https://photo-cdn.icons8.com/assets/previews/304/ef12c31b-bf49-45c0-8c03-a7818d88beccthumb-2x.jpg',
        },
        {
          pic:
            'https://photo-cdn.icons8.com/assets/previews/513/12cf7bfe-adfb-4313-a2e6-6e1dc66ead0ethumb-2x.jpg',
        },
        {
          pic:
            'https://photo-cdn.icons8.com/assets/previews/939/6e6bead7-9083-4dc1-b087-12eaedccb214thumb-2x.jpg',
        },
      ],
    };
  }


  
  render() {
    const {pictures,offers} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerFooter,{flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:0.3,borderBottomWidth:0.3,
        shadowRadius:8,shadowColor:'#000',shadowOffset:{height:10,width:10},shadowOpacity:0.7,backgroundColor:'#fff'}}>
                    <TouchableOpacity>
                    <Image
                    source={require('../assets/phone.png')}
                        style={{height:50,width:30,resizeMode:'contain',marginLeft:5}}>
                    </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image
                    source={require('../assets/cart.png')}
                        style={{height:50,width:30,resizeMode:'contain',marginRight:7}}>
                    </Image>
                    </TouchableOpacity>
             </View>
<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{flex: 2, backgroundColor: 'red'}}>
          <View style={{backgroundColor: 'white', flex: 2}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
              horizontal
              data={pictures}
              renderItem={({item}) => {
                return (
                  <View style={(styles.container, styles.viewShadow)}>
                    <Image source={{uri: item.pic}} style={styles.img} />
                  </View>
                );
              }}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1.5,
            backgroundColor: '#D3D3D3',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 8,
          }}>
                    <View style={styles.shadowSmall ,{flex:1,backgroundColor:'white',marginLeft:10,marginRight:8,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/capsule.png')}
                        style={styles.imgSmall}
                        />
                        <Text style={{marginTop: 15,marginBottom:15,fontSize:12}}>Medicines</Text>
                    </View>

                    <View style={styles.shadowSmall , {flex:1,backgroundColor:'white',marginLeft:8,marginRight:8,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/micro.png')}
                        style={styles.imgSmall}
                        />
                        <Text style={{marginTop: 15,marginBottom:15,alignSelf:'center',fontSize:12}}>
                        Test
                        </Text>
                    </View>
                    <View style={styles.shadowSmall ,{flex:1,backgroundColor:'white',marginLeft:8,marginRight:10,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/computer.png')}
                        style={styles.imgSmall}
                        />
                        <Text style={{marginTop: 15,fontSize:12}}>Online</Text>
                        <Text style={{marginBottom:15,fontSize:12}}>Consultation</Text>

                    </View>
        </View>

        <View
          style={{
            flex: 1.3,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 8,
          }}>
                    <View style={styles.shadowSmall ,{flex:1,backgroundColor:'white',marginLeft:10,marginRight:8,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/stetho.png')}
                        style={styles.imageRound}
                        />
                        <Text style={{marginTop: 15,fontSize:10}}>Doctor</Text>
                        <Text style={{marginBottom:15,fontSize:10}}>Appointment</Text>

                    </View>

                    <View style={styles.shadowSmall , {flex:1,backgroundColor:'white',marginLeft:8,marginRight:8,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/micro.png')}
                        style={styles.imageRound}
                        />
                        <Text style={{marginTop: 15,alignSelf:'center',fontSize:10}}>
                        Wellness
                        </Text>
                        <Text style={{marginBottom:15,alignSelf:'center',fontSize:10}}>
                        Package
                        </Text>
                    </View>
                    <View style={styles.shadowSmall ,{flex:1,backgroundColor:'white',marginLeft:8,marginRight:10,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/ask.png')}
                        style={styles.imageRound}
                        />
                        <Text style={{marginTop: 15,fontSize:10}}>Ask</Text>
                        <Text style={{marginBottom:15,fontSize:10}}>Joy</Text>

                    </View>
                    <View style={styles.shadowSmall ,{flex:1,backgroundColor:'white',marginLeft:10,marginRight:8,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/home.png')}
                        style={styles.imageRound}
                        />
                        <Text style={{marginTop: 15,fontSize:10}}>Home</Text>
                        <Text style={{marginBottom:15,fontSize:10}}>Healthcare</Text>

                    </View>

                    <View style={styles.shadowSmall ,{flex:1,backgroundColor:'white',marginLeft:10,marginRight:8,alignItems:'center',borderRadius:5}}>
                        <Image
                        source={require('../assets/package.png')}
                        style={styles.imageRound}
                        />
                        <Text style={{marginTop: 15,fontSize:10}}>Hospital</Text>
                        <Text style={{marginBottom:15,fontSize:10}}>Packages</Text>

                    </View>

        </View>

        <View style={{flex:1.5,flexDirection:'row',backgroundColor:'#D3D3D3',justifyContent:'space-between'}}>
            <Text style={{color:'black',marginTop:20,marginBottom:15,marginLeft:5}}>Dignostic Packages by Zyolo Labs</Text>
            <TouchableOpacity>
            <Text style={{color:'orange',marginTop:20,marginBottom:15,marginRight:5}}>View All</Text>
            </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 4,
            backgroundColor: '#D3D3D3',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={offers}
          renderItem={({item})=>{
              return(
             <View style={{flex:2,width:200,height:300,marginLeft:6,marginRight:6}}>
                 <View style={{backgroundColor:item.line9,flex:1}}>
                     <View style={{paddingLeft:10,paddingRight:5,marginTop:10,marginLeft:10,backgroundColor:'#fff',borderRadius:20,height:20,width:80}}>
                    <Text style={{fontSize:15}}>
                        {item.line1}
                    </Text>
                    </View>
                 </View>
                 <View style={{backgroundColor:'#FFF',flex:1,borderBottomColor:'black',borderBottomWidth:0.4}}>
                     <Text>
                         dfsdfsrgsdhsd,mfgnskjedgfhliuwegfiuasgh
                     </Text>
                 </View>
             </View>     
              )
          }}
          

          >

          </FlatList>
        </View>



        </ScrollView>

        <View style={(styles.headerFooter,{flex:2,backgroundColor:'#0f0',alignItems:'center'})}>
            <Text> Nav bar will come here</Text>
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'center',
  },
  headerFooter: {
    //height: 100,
    width: '100%',
    flex: 1,
    backgroundColor: '#0f0',
  },
  img: {
    height: 100,
    width: 200,
    resizeMode: 'cover',
  },
  smallBox: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  viewShadow: {
    height: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 1,
    borderRadius: 5,
    elevation: 1,
    margin: 10,
  },
  imgSmall: {
    flex: 1,
    alignSelf:'center',
    resizeMode:'contain',
    height:70,
    width:50,
  },
  shadowSmall:
  {
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    shadowOpacity: 0.8,
  },
  imageRound:
  {
      height:40,
      width:40,
      padding:10,
      borderRadius:30,
      borderWidth:0.3,
      borderColor:'#000',
      resizeMode:'contain',
  }
});

export default home;
