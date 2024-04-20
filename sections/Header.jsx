import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { appLogo } from '../assets/images';
import { menuBtn } from '../assets/icons'

export default function Header() {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <Image
                source={appLogo}
                style={styles.imageContainer}
            />


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
        width: 70,
        height: 70
    },
    btnStyles: {
        width: 30,
        height: 30,
    }

})