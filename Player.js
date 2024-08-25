
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons';


export default function Player(props) {

    const handlePlay = async() => {
        let curFile = props.musicas[props.audioIndex].file;

        let newMusics = props.musicas.filter((val,k)=>{
            if(props.audioIndex == k){
              props.musicas[k].playing = true;
              curFile = props.musicas[k].file;
              
            } else {
              props.musicas[k].playing = false;
            }
            return props.musicas[k];
          })

          try {

            if(props.audio != null){
                props.setPlaying(true);
                props.setarMusicas(newMusics);
                await props.audio.playAsync();
            } else {
                let curAudio = new Audio.Sound();
                try {
                    await curAudio.loadAsync(curFile);
                    await curAudio.playAsync();
                } catch (error) {
                    alert(`Aconteceu o seguinte erro: ${error}`)
                }
                props.setarAudio(curAudio);
                props.setarMusicas(newMusics);
                props.setPlaying(true);
            }
            
          } catch (error) {
            alert(`Aconteceu o seguinte erro: ${error}`)
          }

    }

    const handlePause = async() => {
        if(props.audio != null){
            props.audio.pauseAsync();
        }
        props.setPlaying(false);
    }

    return (
      <View style={styles.player}>
        <TouchableOpacity style={styles.touch}>
            <AntDesign name= "banckward" size={35} color="white" />
        </TouchableOpacity>
        {
        (!props.playing) ?
        <TouchableOpacity onPress={()=> handlePlay()} style={styles.touch}>
            <AntDesign name= "playcircleo" size={35} color="white" />
        </TouchableOpacity>
         :
        <TouchableOpacity onPress={()=> handlePause()} style={styles.touch}>
            <AntDesign name= "pausecircleo" size={35} color="white" />
        </TouchableOpacity>
        }
        <TouchableOpacity style={styles.touch}>
            <AntDesign name= "forward" size={35} color="white" />
        </TouchableOpacity>

      </View>
    );
  }

  const styles = StyleSheet.create({
    player: {
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 999,
        backgroundColor: '#111',
        alignItems: 'center',   // Centraliza no eixo cruzado (vertical)
        justifyContent: 'center', // Centraliza no eixo principal (horizontal)
        flexDirection: 'row',
    },    
    touch: {
        marginRight: 20,
        marginLeft: 20,
    }
        
  })
  