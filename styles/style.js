import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { WHITE, BLUE, GREEN, GREYSHADE } from './../util/color-constants';

export default StyleSheet.create({
    //Common
    container: {
        flex: 1,
        width: width,
        alignItems: 'center',
        backgroundColor: BLUE,
    },
    roomButton: {
        backgroundColor: WHITE,
        alignSelf: 'center',
        justifyContent: 'center',
        height: 42,
        width: '100%',
        borderRadius: 5,
        marginBottom: 10,
    },
    ButtonText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: BLUE,
    },

    //Header
    HeaderView: {
        width: '85%',
        alignItems: "center"
    },
    HeaderText: {
        color: WHITE,
        fontSize: 20
    },

    //Details
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
})