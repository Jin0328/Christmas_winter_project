import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question1: { name: string; score: number };
  Question2: { name: string; score: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Question2">;

const Question2: React.FC<Props> = ({ navigation, route }) => {
  const { name, score } = route.params; // 이전 점수와 이름 받기

  const handleAnswer = (points: number) => {
    // 선택한 점수를 누적하고 Question1로 이동
    navigation.navigate("Question1", { name, score: score + points });
  };

  return (
    <View style={styles.question4}>
      <View style={[styles.question4Child, styles.rectangleViewBorder]} />
      <Image
        style={[styles.question4Item, styles.question4Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question4Inner, styles.question4Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question4Child1, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.text}>{`내가 가장 좋아하는\n겨울 액티비티는\n무엇인가요?`}</Text>
      <Text style={styles.text1}>4</Text>

      {/* 각 선택지를 클릭하면 점수를 계산하고 Question1로 이동 */}
      <TouchableOpacity onPress={() => handleAnswer(5)}>
        <Text style={[styles.a, styles.aTypo]}>A) 스키나 스노보드</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(10)}>
        <Text style={[styles.b, styles.aTypo]}>B) 빙상 빙어 낚시</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(20)}>
        <Text style={[styles.d, styles.aTypo]}>D) 스파에서 휴식하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(15)}>
        <Text style={[styles.c, styles.aTypo]}>C) 오로라 투어</Text>
      </TouchableOpacity>

      <View style={[styles.rectangleView, styles.rectanglePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBorder: {
    height: 10,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 764,
  },
  question4Layout: {
    height: 60,
    width: 314,
  },
  rectanglePosition: {
    left: 34,
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
  question4Child: {
    width: 328,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  question4Item: {
    top: 413,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  question4Inner: {
    top: 493,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  rectangleIcon: {
    top: 573,
    height: 60,
    width: 314,
  },
  question4Child1: {
    top: 653,
    height: 60,
    width: 314,
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
    backgroundColor: Color.colorBlack,
    width: 219,
    height: 10,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 764,
  },
  question4: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question2;
