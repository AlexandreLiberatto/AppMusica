import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Text style={styles.titulo}>App Música | Liberato Sistemas</Text>
      </View>   
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
  }
});
