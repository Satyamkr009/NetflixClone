import React from "react";
import {FlatList,StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import { useSelector,useDispatch } from "react-redux";


const OnlyOnNetflix=({navigation})=>{
    const {onlyOnNetflix,modalVisible}=useSelector((store)=>store.reducer)
    const dispatch= useDispatch()

    const RenderItem = ({item}) => {
      const changeModal=()=>{

        dispatch({type:'Modal Data',payload:item})
        dispatch({type:'Modal Visible', payload:!modalVisible})
      }
    
    
      
      
        
      
          return (
            <TouchableOpacity style={Styles.renderItemView}
              onPress={changeModal}
            >
              <Image
                source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={Styles.flatListImage}
              />
              {/* <Text style={{color:'white'}}>{item.name}</Text> */}
            </TouchableOpacity>
          );
        };
      

    return(
        <FlatList
        data={onlyOnNetflix}
        renderItem={RenderItem}
        horizontal
        ListEmptyComponent={()=><Text style={{color:'white'}}>{'Loading'}</Text>}
        keyExtractor={(item,index)=>item.index}
        />
    )
}
export default OnlyOnNetflix


const Styles= StyleSheet.create(
    {
        renderItemView: {
            overflow: 'hidden',
            height: 150,
            width: 110,
            
          },
          flatListImage: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            borderRadius:10
          },
    }
)

