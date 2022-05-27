import { StyleSheet, View, Image, Pressable, Switch } from 'react-native'
import React from 'react'

export default function Prayer({ IMGname, enabled, toggleSwitch }) {
    return (
        <View style={[styles.prayerCon, styles.shadowProp]}>
            <View style={styles.prayerName}>
                <Image
                    source={IMGname}
                    style={styles.prayerImg}
                />
            </View>
            <Pressable style={
                [styles.selectButton,
                enabled ? styles.pink : styles.white
                ]}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={enabled}
                />
                <Image
                    source={require('../assets/akela_banda.png')}
                    style={{
                        width: 50,
                        height: 50
                    }}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    prayerCon: {
        flex: 1,
        margin: 13,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#e00034"
    },
    prayerImg: {
        width: 40,
        height: 40
    },

    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    selectButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1.5,
        flexDirection: "row",
        padding: 2,
        borderRadius: 8,
    },
    prayerName: {
        flex: 1
    },
    pink: {
        backgroundColor: "#d6bae6",
        borderWidth: 2,
        borderColor: "#8f00e0"
    },
    white: {
        backgroundColor: "white",
    },
})