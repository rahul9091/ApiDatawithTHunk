//import liraries
import axios from 'axios';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, SafeAreaView } from 'react-native';


import { getBooks, bulkImages } from '../redux/action/books'

import { useDispatch, useSelector } from 'react-redux';

import { SliderBox } from "react-native-image-slider-box";

const { width } = Dimensions.get('screen');

// create a component
const Home = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        response()
        bulk()
    }, [])


    const { images } = useSelector(state => state.booksReducer)
    const { bulkImage } = useSelector(state => state.booksReducer)
   

    const response = async () => { dispatch(getBooks()) }
    const bulk = async () => { dispatch(bulkImages()) }


    const entries = [
        images[0],
        images[1],
        images[2],
        images[3],
        images[4]
    ]

    return (
        <SafeAreaView style={{ flex: 1 }}>
           
            <SliderBox
            images={entries}
            autoplay={true}
            circleLoop={true}
             />
            <FlatList
                data={bulkImage}
                numColumns={2}
                extraData={bulkImage}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{margin:10}}>
                            <Image style={{ height: 190,width:width/2.2 }} source={{ uri: item }} />
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainView: {
        backgroundColor: '#2D3038',
    }
});

//make this component available to the app
export default Home;
