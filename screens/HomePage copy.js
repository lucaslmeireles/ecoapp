import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.homePageView}>
            <View style={styles.component2View}>
                <View style={styles.rectangleView} />
                <View style={styles.groupView}>
                    <Text style={styles.eCOBANKText}>ECOBANK</Text>
                </View>
            </View>
            <View style={styles.listView}>
                <Pressable
                    style={styles.component1Pressable}
                    onPress={() => navigation.navigate("ListPage")}
                >
                    <View style={styles.rectangleView1} />
                    <Text style={styles.aCada1LitroDeLeoUsadoV}>
                        A cada 1 litro de óleo usado você ganha 0,25 EcoPoints
                    </Text>
                    <Text style={styles.text}>0,25</Text>
                </Pressable>
                <Pressable
                    style={[styles.component2Pressable, styles.mt51]}
                    onPress={() => navigation.navigate("ListPage")}
                >
                    <View style={styles.rectangleView2} />
                    <Text style={styles.aCada1LitroDeLeoUsadoV1}>
                        A cada 1 litro de óleo usado você ganha 0,25 EcoPoints
                    </Text>
                    <Text style={styles.text1}>0,25</Text>
                </Pressable>
                <Pressable
                    style={[styles.component3Pressable, styles.mt51]}
                    onPress={() => navigation.navigate("ListPage")}
                >
                    <View style={styles.rectangleView3} />
                    <Text style={styles.aCada1LitroDeLeoUsadoV2}>
                        A cada 1 litro de óleo usado você ganha 0,25 EcoPoints
                    </Text>
                    <Text style={styles.text2}>0,25</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mt51: {
        marginTop: 51,
    },
    rectangleView: {
        position: "absolute",
        height: "99.8%",
        width: "99.99%",
        top: "0%",
        right: "0%",
        bottom: "0.2%",
        left: "0.01%",
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        transform: [
            {
                rotate: "0.02deg",
            },
        ],
    },
    eCOBANKText: {
        position: "absolute",
        height: "79.49%",
        width: "37.54%",
        top: "12.82%",
        right: "31.23%",
        bottom: "7.69%",
        left: "31.23%",
        fontSize: 26,
        fontWeight: "700",
        fontFamily: "Jura",
        color: "#03440c",
        textAlign: "left",
    },
    ellipseIcon: {
        position: "absolute",
        height: "100%",
        width: "12.31%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "87.69%",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    alignJustifyIcon: {
        position: "absolute",
        height: "83.16%",
        width: "8.53%",
        top: "9.15%",
        right: "91.47%",
        bottom: "7.69%",
        left: "0%",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
    },
    groupView: {
        position: "absolute",
        height: "57.46%",
        width: "92.5%",
        top: "20.59%",
        right: "4.06%",
        bottom: "21.95%",
        left: "3.45%",
    },
    component2View: {
        position: "absolute",
        top: 0.02,
        left: -0.41,
        width: 360,
        height: 67.87,
    },
    rectangleView1: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
    },
    aCada1LitroDeLeoUsadoV: {
        position: "absolute",
        height: "62.24%",
        width: "52.03%",
        top: "19.39%",
        right: "39.86%",
        bottom: "18.37%",
        left: "8.11%",
        fontSize: 16,
        fontFamily: "Nunito",
        color: "#000",
        textAlign: "left",
    },
    ellipseIcon1: {
        position: "absolute",
        height: "63%",
        width: "19.7%",
        top: "18%",
        right: "6.67%",
        bottom: "19%",
        left: "73.64%",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    text: {
        position: "absolute",
        height: "15.31%",
        width: "14.19%",
        top: "38.78%",
        right: "7.43%",
        bottom: "45.92%",
        left: "78.38%",
        fontSize: 16,
        fontFamily: "Nunito",
        color: "#fff",
        textAlign: "left",
    },
    component1Pressable: {
        position: "relative",
        width: 330,
        height: 100,
        flexShrink: 0,
    },
    rectangleView2: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
    },
    aCada1LitroDeLeoUsadoV1: {
        position: "absolute",
        height: "62.24%",
        width: "52.03%",
        top: "19.39%",
        right: "39.86%",
        bottom: "18.37%",
        left: "8.11%",
        fontSize: 16,
        fontFamily: "Nunito",
        color: "#000",
        textAlign: "left",
    },
    ellipseIcon2: {
        position: "absolute",
        height: "63%",
        width: "19.7%",
        top: "18%",
        right: "6.67%",
        bottom: "19%",
        left: "73.64%",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    text1: {
        position: "absolute",
        height: "15.31%",
        width: "14.19%",
        top: "38.78%",
        right: "7.43%",
        bottom: "45.92%",
        left: "78.38%",
        fontSize: 16,
        fontFamily: "Nunito",
        color: "#fff",
        textAlign: "left",
    },
    component2Pressable: {
        position: "relative",
        width: 330,
        height: 100,
        flexShrink: 0,
    },
    rectangleView3: {
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0%",
        right: "0%",
        bottom: "0%",
        left: "0%",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
    },
    aCada1LitroDeLeoUsadoV2: {
        position: "absolute",
        height: "62.24%",
        width: "52.03%",
        top: "19.39%",
        right: "39.86%",
        bottom: "18.37%",
        left: "8.11%",
        fontSize: 16,
        fontFamily: "Nunito",
        color: "#000",
        textAlign: "left",
    },
    ellipseIcon3: {
        position: "absolute",
        height: "63%",
        width: "19.7%",
        top: "18%",
        right: "6.67%",
        bottom: "19%",
        left: "73.64%",
        maxWidth: "100%",
        maxHeight: "100%",
    },
    text2: {
        position: "absolute",
        height: "15.31%",
        width: "14.19%",
        top: "38.78%",
        right: "7.43%",
        bottom: "45.92%",
        left: "78.38%",
        fontSize: 16,
        fontFamily: "Nunito",
        color: "#fff",
        textAlign: "left",
    },
    component3Pressable: {
        position: "relative",
        width: 330,
        height: 100,
        flexShrink: 0,
    },
    listView: {
        position: "absolute",
        top: 71,
        left: 0,
        height: 662,
        flexDirection: "column",
        paddingHorizontal: 14,
        paddingVertical: 37,
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    homePageView: {
        position: "relative",
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default HomePage;
