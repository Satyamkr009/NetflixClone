import React from "react";
import {FlatList, View,Image, StyleSheet,Text, TouchableOpacity} from 'react-native'
import { useSelector } from "react-redux";

import Top10 from "../top10";


const EveryoneWatching=({navigation})=>{
    const {everyoneWatching} = useSelector((store)=>store.newHotReducer)

    console.log('EveryOne watching', everyoneWatching)

    const RenderItem=({item})=>{
        // const {navigation} = useNavigation()
    
        return(
            <View style={Styles.renderItemView}>
                <View style={Styles.calenderView}>
                <Text style={Styles.monthText}>{'Months'}</Text>
                <Text style={Styles.dateText}>{'Date'}</Text>
                </View>
            <View style={Styles.contentView}
           
    >
                <View style={Styles.imageView}>
            <Image
              source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
              style={Styles.flatListImage}
            />
            </View>
            <View style={Styles.descriptionView}>
                <View style={Styles.movieHeaderView}>

            <TouchableOpacity
             onPress={()=>navigation.navigate('Video Player')}>
            <Text style={Styles.movieName}>{item.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.buttonView}>
                <Image source={require('../../../../../assets/image/bell.png')}/>
                <Text style={Styles.buttonText}>{'Remind Me'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={Styles.buttonView}>
                <Image source={require('../../../../../assets/image/info.png')} />
                <Text style={Styles.buttonText}>{'Info'}</Text>
            </TouchableOpacity>

            </View>


            <TouchableOpacity
             onPress={()=>navigation.navigate('Video Player')}>
            <Text style={Styles.overViewText}>{item.overview}</Text>
            </TouchableOpacity>

            </View>
            
          </View>
          </View>
        )
    }

  
     
    const ListHeader = ()=>{
    return (
        <View style={Styles.comingSoonHeaderView} >
          <Image source={require('../../../../../assets/image/fire.png')} style={Styles.headerImageStyle}/>
          <Text style={Styles.headerText}>{"Everyone's watching"}</Text>
        </View>
    )
}

  
    return(
        <FlatList
        data={everyoneWatching}
        renderItem={RenderItem}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={<Top10 navigation={navigation}/>}
        keyExtractor={(item,index)=>item.index}
        />

    )
}
export default EveryoneWatching

const Styles = StyleSheet.create(
    {
        comingSoonHeaderView:{
            flexDirection:'row',
            alignItems:'center',
            height:40,
            width:140,
            justifyContent:'space-between'
        },
        headerText:{
            color:'white',
            fontWeight:'700',
            fontSize:18,

        },
        headerImageStyle:{
                height:20,
                 width:20,
                 resizeMode:'contain'
        },
        contentView: {
            overflow: 'hidden',
            height: '100%',
            width: '80%',
                        
  
            
            
          },
          flatListImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'stretch',
            borderRadius:10
          },
          renderItemView:{
              flexDirection:'row',
              justifyContent:'space-between',
              height:320

          },
          monthText:{
              color:'white',
              fontSize:20,
              fontWeight:'700'
          },
          dateText:{
              color:'white',
              fontWeight:'700'
          },
          calenderView:{
              width:'20%'
          },
          movieName:{
              color:'white',
              fontSize:23,
              fontWeight:'500'

          },
          imageView:{
              height:'70%',
              width:'100%'
              
          },
          descriptionView:{

          },
          overViewText:{
              color:'white',
              fontSize:13
          },
          movieHeaderView:{
              flexDirection:'row',
              justifyContent:'space-between'
          },
          buttonText:{
              fontSize:10,
              color:'white'
          },
          buttonView:{
              justifyContent:'center',
              alignItems:'center'
          }
    }
)


