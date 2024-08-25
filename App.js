import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons';

export default function App() {

  const [audio, setarAudio] = useState(null);

  const [musicas, setarMusicas] = useState([

    {
      nome: 'Alô',
      artista: 'Léo Magalhães',
      playing: 'false',
      file: require('./musicas/alo_leo_magalhaes.mp3')
    },
    {
      nome: 'Completa a Frase',
      artista: 'Henrrique e Juliano',
      playing: 'false',
      file: require('./musicas/completa_a_frase_henrrique_e_juliano.mp3')
    },
    {
      nome: 'Efeitos',
      artista: 'Édson Mel',
      playing: 'false',
      file: require('./musicas/efeitos_edson_mel.mp3')
    },
    {
      nome: 'Lembranças',
      artista: 'Hungria',
      playing: 'false',
      file: require('./musicas/hungria_hiphop_lembrancas.mp3')
    },
    {
      nome: 'Um Pedido',
      artista: 'Hungria',
      playing: 'false',
      file: require('./musicas/hungria_hiphop_um_pedido.mp3')
    },
    {
      nome: 'Dengo',
      artista: 'João Gomes',
      playing: 'false',
      file: require('./musicas/joao_gomes_dengo.mp3')
    },
    {
      nome: 'Seja Pra Mim',
      artista: 'João Gomes',
      playing: 'false',
      file: require('./musicas/joao_gomes_seja_pra_mim.mp3')
    },
    {
      nome: 'Dono do Mar',
      artista: 'Pricila Sotero',
      playing: 'false',
      file: require('./musicas/priscila_sotero_dono_do_mar.mp3')
    },
    {
      nome: 'Morada',
      artista: 'Pricila Sotero',
      playing: 'false',
      file: require('./musicas/priscila_sotero_morada.mp3')
    },
  ]);

  const changeMusic = (id) => {
    let newMusics = musicas.filter((val,k)=>{
      if(id == k){
        musicas[k].playing = true;
      } else {
        musicas[k].playing = false;
      }
      return musicas[k];
    })
    setarMusicas(newMusics);
  }

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
        musicas.map((val, k) => {

          if(val.playing){
            //renderiza algo aqui
            return(
            <View style={styles.table}>
              <TouchableOpacity onPress={()=>changeMusic(k)} style={styles.touch}>
                <Text style={styles.musicaT}><AntDesign name="play" size={18} color="#1db954" />  {val.nome}</Text>
                <Text style={styles.musicaT}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
            );
          } else {
            //renderiza outra coisa aqui
            return(
              <View style={styles.table}>
              <TouchableOpacity onPress={()=>changeMusic(k)} style={styles.touch}>
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
