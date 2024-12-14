import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LoadingPage = () => {
  return (
    <View style={styles.loadingPage}>
      <Text style={styles.text}>{`산타할아버지가
편지와 선물을 
준비하고 있어요`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 122,
    left: -47,
    fontSize: FontSize.size_14xl,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.notoSansBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 484,
    height: 122,
  },
  loadingPage: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LoadingPage;
