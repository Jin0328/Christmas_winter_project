import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Start">;


const Start = () => {
  const navigation = useNavigation(); // Navigation 객체 가져오기

  return (
    <View style={styles.start}>
      <Text style={[styles.text, styles.textTypo]}>{`산타할아버지가
편지를 준비했어요!`}</Text>
      <Image
        style={styles.startChild}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.startItem, styles.startLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.startInner, styles.startLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <TouchableOpacity
        style={[styles.rectangleView, styles.text1Position]}
        onPress={() => navigation.navigate("NameInput")}
      >
        <Text style={[styles.text1]}>편지 받으러 가기</Text>
      </TouchableOpacity>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    lineHeight: 55,
  },
  startLayout: {
    height: 49,
    width: 49,
    position: "absolute",
  },
  text1Position: {
    top: 750,
    position: "absolute",
  },
  text: {
    top: 81,
    left: 18,
    fontSize: 37,
    color: "#1e1e1e",
    width: 380,
    height: 122,
    position: "absolute",
  },
  startChild: {
    top: -8,
    left: 307,
    width: 69,
    height: 131,
    position: "absolute",
  },
  startItem: {
    top: 83,
    left: 284,
  },
  startInner: {
    top: 111,
    left: 348,
  },
  rectangleView: {
    left: 86,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorBlack,
    width: 224,
    height: 58,
    justifyContent: "center", // 버튼 텍스트 중앙 정렬
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.size_2xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    lineHeight: 55,
  },
  groupIcon: {
    top: 179,
    left: -6,
    width: 474,
    height: 552,
    position: "absolute",
  },
  start: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Start;

