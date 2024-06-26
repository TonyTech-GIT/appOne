import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { appLogo } from '../assets/images'

export default function Hero() {

    const websiteURL = (webLink) => {
        Linking.openURL(webLink)
    }
    return (
        <View style={styles.heroContainer}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >

                <View style={styles.tabContainer}>
                    <Text style={styles.tabText}>Web</Text>
                </View>

                <View style={styles.tabContainer}>
                    <Text style={styles.tabText}>AI</Text>
                </View>

                <View style={styles.tabContainer}>
                    <Text style={styles.tabText}>Tech</Text>
                </View>

                <View style={styles.tabContainer}>
                    <Text style={styles.tabText}>UI/UX</Text>
                </View>

                <View style={styles.tabContainer}>
                    <Text style={styles.tabText}>Web 3.0</Text>
                </View>

            </ScrollView>


            <Text style={styles.welcomeText}>Welcome to {' '}

                <Text style={{ color: '#53E0BC' }}>Company</Text> Name
            </Text>

            <Image
                source={appLogo}
                style={styles.heroImage}
            />

            <TouchableOpacity 
                onPress={() => websiteURL('https://www.google.com')} 
                style={styles.btnStyles}
            >
                <Text style={styles.btnText}>
                    Get Started
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    heroContainer: {
        paddingTop: 18,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },

    tabContainer: {
        height: 30,
        width: 100,
        backgroundColor: '#53E0BC',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginRight: 8
        // shadowRadius: 14
    },
    tabText: {
        color: '#fff',
        fontSize: 18
    },
    welcomeText: {
        paddingVertical: 30,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        textAlign: 'center'
    },
    heroImage: {
        width: 400,
        height: 400
    },
    btnStyles: {
        backgroundColor: '#53E0BC',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 14,
        elevation: 5,
        shadowRadius: 14,
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
})