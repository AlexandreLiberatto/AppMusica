import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons';

export default function App() {

  const [audio, setarAudio] = useState(null);

  const [musicas, setarMusicas] = useState([

    {
      nome: 'Sweet child of mine',
      artista: 'Guns N Roses',
      playing: 'true',
      file: ''
    },
    {
      nome: 'Welcom to the jungle',
      artista: 'Guns N Roses',
      playing: 'false',
      file: ''
    },{
      nome: 'This love',
      artista: 'Maroon 5',
      playing: 'false',
      file: ''
    }
  ])

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Text style={styles.titulo}>App Música | Liberato Sistemas</Text>
      </View>  

      <View style={styles.table}>
        <Text style={styles.musica}>Música</Text>
        <Text style={styles.musica}>Artista</Text>
      </View> 

      {
        musicas.map((val) => {

          if(val.playing === 'true'){
            //renderiza algo aqui
            return(
            <View style={styles.table}>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.musicaT}><AntDesign name="play" size={18} color="#1db954" />  {val.nome}</Text>
                <Text style={styles.musicaT}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
            );
          } else {
            //renderiza outra coisa aqui
            return(
              <View style={styles.table}>
              <TouchableOpacity style={styles.touch}>
                <Text style={styles.musica}><AntDesign name="play" size={18} color="#fff" />  {val.nome}</Text>
                <Text style={styles.musica}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
              );
          }
        })
      }

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#222',
  },

  header: {
    backgroundColor: '#1db954',
    width: '100%',
    padding:20,
  },

  titulo: {
    textAlign: 'center',
    color: '#fff',
    fontSize:25,
    fontWeight: 'bold',
  },

  table: {
    flexDirection:'row',
    padding:20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },

  musica: {
    width: '50%',
    color: '#fff',
  },

  musicaT: {
    width: '50%',
    color: '#1db954',
  },

  touch: {
    width: '100%',
    flexDirection: 'row',
  }
});
