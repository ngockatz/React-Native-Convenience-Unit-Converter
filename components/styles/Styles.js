import { StyleSheet } from "react-native";
export default StyleSheet.create({
  headerContainer: {
    paddingBottom: 10,
    alignSelf: "stretch"
  },
  headerText: {
    color: "white",
    fontSize: 20
  },

  contentsContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "stretch"
  },

  inputContainer: {
    flex: 2.5,
    justifyContent: "space-between"
  },

  resultText: {
    textAlign:'center',
    paddingBottom:12
  },
  textStyle: {
    //fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },

  iconStyle:{
    width:30,
    height:30
  },

  iconContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around'
  }
  /*
  pickerStyle: {
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor:'blue'
  }
  */
});
