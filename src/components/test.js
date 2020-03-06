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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrObj: [
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/888/f85f8f5f-f06a-4b9e-9fb4-7ba889aaafdcthumb-2x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/653/77315a9f-4605-4cef-9578-3d979a179b971x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/992/ae464454-b7ef-4098-b591-0ca9bddc460cthumb-2x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/936/00ff326c-6c49-4b2a-9157-4c9775943f3cthumb-2x.jpg',
        },
      ],
    };
  }

  render() {
    const {arrObj} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'lightgrey'}}>
        <View style={{flex: 0.2, backgroundColor: 'white'}}>
          <FlatList
            horizontal
            data={arrObj}
            renderItem={({item}) => {
              return (
                <View style={styles.container}>
                  <Image source={{uri: item.image}} style={styles.img} />
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.med}>
          <View style={{flex: 0.06, backgroundColor: '#fff'}} />
          <View style={{flex: 0.06, backgroundColor: '#fff'}} />
          <View style={{flex: 0.06, backgroundColor: '#fff'}} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    // backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: 'lightgrey',
  },
  img: {
    height: 100,
    width: 200,
  },
  med: {
    flex: 0.2,
    backgroundColor: 'lightgrey',
    margin: 10,
  },
});

export default Home;
