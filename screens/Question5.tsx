import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Question5 = () => {
  return (
    <View style={styles.question7}>
      <Text style={styles.text}>{`나의 고민을 
산타할아버지에게 
말해봐요`}</Text>
      <View style={styles.question7Child} />
      <Text style={[styles.to, styles.toTypo]}>To. 산타할아버지</Text>
      <Text style={[styles.from, styles.toTypo]}>From.</Text>
      <View style={styles.question7Item} />
      <Text style={styles.text1}>선물 받으러 가기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toTypo: {
    height: 43,
    width: 288,
    lineHeight: 35,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    top: 98,
    left: 23,
    fontSize: 32,
    lineHeight: 37,
    textAlign: "center",
    width: 344,
    height: 176,
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  question7Child: {
    top: 233,
    left: 38,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 4,
    width: 314,
    height: 445,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  to: {
    top: 248,
    left: 53,
  },
  from: {
    top: 620,
    left: 204,
  },
  question7Item: {
    top: 716,
    left: 91,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorBlack,
    width: 224,
    height: 58,
    position: "absolute",
  },
  text1: {
    top: 718,
    left: 139,
    fontSize: FontSize.size_2xl,
    lineHeight: 55,
    color: Color.colorWhite,
    width: 210,
    height: 51,
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  question7: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question5;
