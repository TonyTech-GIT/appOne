import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import appLogo from '../assets/images/web-dev-logo-removebg-preview.png';
import { menuBtn } from '../assets/icons'

export default function Header() {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <Image
                source={appLogo}
                style={styles.imageContainer}
            />

            {/* <Text>Hello World</Text> */}

            <TouchableOpacity>
                <Image
                    source={menuBtn}
                    style={styles.btnStyles}
                />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    imageContainer: {
        // flex: 1,
        width: 80,
        height: 80
    },
    btnStyles: {
        width: 30,
        height: 30,
    }

})