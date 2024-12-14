import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question3: { name: string; score: number };
  Question2: { name: string; score: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Question3">;

const Question3: React.FC<Props> = ({ navigation, route }) => {
  const { name, score } = route.params; // 이전 점수와 이름 받기

  const handleAnswer = (points: number) => {
    // 선택한 점수를 누적하고 Question2로 이동
    navigation.navigate("Question2", { name, score: score + points });
  };

  return (
    <View style={styles.question3}>
      <View style={[styles.question3Child, styles.rectangleViewBorder]} />
      <Image
        style={[styles.question3Item, styles.question3Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question3Inner, styles.question3Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question3Child1, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.text}>{`이번 겨울\n가장 해 보고 싶은\n일은 무엇인가요?`}</Text>
      <Text style={styles.text1}>3</Text>

      {/* 각 선택지를 클릭하면 점수를 계산하고 Question2로 이동 */}
      <TouchableOpacity onPress={() => handleAnswer(5)}>
        <Text style={[styles.a, styles.aTypo]}>A) 새로운 친구들 사귀기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(10)}>
        <Text style={[styles.b, styles.aTypo]}>B) 관심 분야 공부하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(20)}>
        <Text style={[styles.d, styles.aTypo]}>D) 해외 여행가기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(15)}>
        <Text style={[styles.c, styles.aTypo]}>C) 밀린 드라마 정주행하기</Text>
      </TouchableOpacity>

      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBorder: {
    height: 10,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  question3Layout: {
    height: 60,
    width: 314,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  rectangleIconLayout: {
    left: 34,
    height: 60,
    width: 314,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  aTypo: {
    height: 43,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    width: 288,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    lineHeight: 35,
    position: "absolute",
  },
  question3Child: {
    top: 764,
    width: 328,
    backgroundColor: Color.colorWhite,
  },
  question3Item: {
    top: 413,
  },
  question3Inner: {
    top: 493,
  },
  rectangleIcon: {
    top: 573,
  },
  question3Child1: {
    top: 653,
  },
  groupIcon: {
    top: 83,
    left: 127,
    width: 135,
    height: 133,
    position: "absolute",
  },
  text: {
    top: 260,
    height: 176,
    width: 288,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    lineHeight: 35,
    fontSize: FontSize.size_9xl,
    left: 51,
    position: "absolute",
  },
  text1: {
    top: 133,
    left: 176,
    width: 37,
    height: 38,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    lineHeight: 35,
    fontSize: FontSize.size_9xl,
    position: "absolute",
  },
  a: {
    top: 424,
    left: 51,
    height: 43,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  b: {
    top: 504,
    left: 51,
    height: 43,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  d: {
    top: 665,
    left: 54,
  },
  c: {
    top: 585,
    left: 51,
    height: 43,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
  },
  rectangleView: {
    top: 765,
    backgroundColor: Color.colorBlack,
    width: 164,
  },
  question3: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question3;
