//import liraries
import React,{useEffect} from 'react';
import { View, Text, StyleSheet,Image,SafeAreaView,TouchableOpacity,FlatList } from 'react-native';

import {useDispatch,useSelector} from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {removeBookmark} from '../redux/action/books'

const BookMarkList = () => {

    const dispatch = useDispatch()

    
 
    // const handleRemoveBook = (book) => {
    //   removeBookmark(book)
    // }

    const {bookMarks} = useSelector((state)=>state.booksReducer)
    console.log(bookMarks,'BookMarks list screen')


    const removeBook = (book) => dispatch(removeBookmark(book))

    const handleRemoveBook = book => {
      removeBook(book)
    }







    const renderItem = ({ item }) => {
        return (
          <View style={{ marginVertical: 12 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              {/* Book Cover */}
              <Image
                source={{ uri: item.image_url }}
                resizeMode='cover'
                style={{ width: 100, height: 150, borderRadius: 10 }}
              />
              {/* Book Metadata */}
              <View style={{ flex: 1, marginLeft: 12 }}>
                {/* Book Title */}
                <View>
                  <Text style={{ fontSize: 22, paddingRight: 16, color: 'white' }}>
                    {item.title}
                  </Text>
                </View>
                {/* Meta info */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center'
                  }}
                >
                  <MaterialCommunityIcons
                    color='#64676D'
                    name='book-open-page-variant'
                    size={20}
                  />
                  <Text style={{ fontSize: 14, paddingLeft: 10, color: '#64676D' }}>
                    {item.num_pages}
                  </Text>
                  <MaterialCommunityIcons
                    color='#64676D'
                    name='star'
                    size={20}
                    style={{ paddingLeft: 16 }}
                  />
                  <Text style={{ fontSize: 14, paddingLeft: 10, color: '#64676D' }}>
                    {item.rating}
                  </Text>
                </View>
                {/* Buttons */}
                <View style={{ marginTop: 14 }}>
                  <TouchableOpacity
                    onPress={() =>handleRemoveBook(item)}
                    activeOpacity={0.7}
                    style={{
                      flexDirection: 'row',
                      padding: 2,
                      backgroundColor: '#2D3038',
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      width: 40
                    }}
                  >
                    <MaterialCommunityIcons
                      color='#64676D'
                      size={24}
                      name='bookmark-outline'
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          <Text style={{ color: 'white', fontSize: 22 }}>BookMarks</Text>
          <View style={{ flex: 1, marginTop: 8 }}>
            {/* {bookMarks.length === 0 ? <Text>Add Bookmark</Text> :  */}
            <FlatList
              data={bookMarks}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    );
};

export default BookMarkList;
