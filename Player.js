import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

export default function Player(props) {

    const handleBack = async () => {
        let newIndex = props.audioIndex - 1;
        if (newIndex < 0) {
            newIndex = props.musicas.length - 1;
        }
        props.setarAudioIndex(newIndex);

        let curFile = props.musicas[newIndex].file;

        let newMusics = props.musicas.map((musica, index) => {
            return { ...musica, playing: index === newIndex };
        });

        if (props.audio != null) {
            await props.audio.stopAsync();
            await props.audio.unloadAsync();
            props.setPlaying(false);
        }

        let curAudio = new Audio.Sound();
        try {
            await curAudio.loadAsync(curFile);
            await curAudio.playAsync();
            props.setarAudio(curAudio);
            props.setarMusicas(newMusics);
            props.setPlaying(true);
        } catch (error) {
            alert(`Aconteceu o seguinte erro: ${error}`);
        }
    };

    const handleNext = async () => {
        let newIndex = props.audioIndex + 1;
        if (newIndex >= props.musicas.length) {
            newIndex = 0;
        }
        props.setarAudioIndex(newIndex);

        let curFile = props.musicas[newIndex].file;

        let newMusics = props.musicas.map((musica, index) => {
            return { ...musica, playing: index === newIndex };
        });

        if (props.audio != null) {
            await props.audio.stopAsync();
            await props.audio.unloadAsync();
            props.setPlaying(false);
        }

        let curAudio = new Audio.Sound();
        try {
            await curAudio.loadAsync(curFile);
            await curAudio.playAsync();
            props.setarAudio(curAudio);
            props.setarMusicas(newMusics);
            props.setPlaying(true);
        } catch (error) {
            alert(`Aconteceu o seguinte erro: ${error}`);
        }
    };

    const handlePlay = async () => {
        if (props.audio != null) {
            await props.audio.playAsync();
            props.setPlaying(true);
        }
    };

    const handlePause = async () => {
        if (props.audio != null) {
            await props.audio.pauseAsync();
            props.setPlaying(false);
        }
    };

    return (
        <View style={styles.player}>
            <TouchableOpacity onPress={handleBack} style={styles.touch}>
                <AntDesign name="banckward" size={35} color="white" />
            </TouchableOpacity>
            {
                (!props.playing) ?
                    <TouchableOpacity onPress={handlePlay} style={styles.touch}>
                        <AntDesign name="playcircleo" size={35} color="white" />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={handlePause} style={styles.touch}>
                        <AntDesign name="pausecircleo" size={35} color="white" />
                    </TouchableOpacity>
            }
            <TouchableOpacity onPress={handleNext} style={styles.touch}>
                <AntDesign name="forward" size={35} color="white" />
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
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    touch: {
        marginRight: 20,
        marginLeft: 20,
    }
});
