import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question5: { name: string; score: number };
  Question4: { name: string; score: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Question4">;

const Question4: React.FC<Props> = ({ navigation, route }) => {
  const { name, score } = route.params;

  const handleAnswer = (points: number) => {
    navigation.navigate("Question5", { name, score: score + points });
  };

  return (
    <View style={styles.question6}>
      <View style={[styles.question6Child, styles.rectangleViewLayout]} />
      <Image
        style={[styles.question6Item, styles.question6Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question6Inner, styles.question6Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question6Child1, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.text}>{`크리스마스 영화를\n고른다면\n어떤 스타일?`}</Text>
      <Text style={styles.text1}>6</Text>

      {/* 각 선택지를 클릭하면 점수를 계산하고 Question5로 이동 */}
      <TouchableOpacity onPress={() => handleAnswer(5)}>
        <Text style={[styles.a, styles.aTypo]}>A) 로맨스 코미디 영화</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(10)}>
        <Text style={[styles.b, styles.aTypo]}>B) 따뜻한 가족 영화</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(20)}>
        <Text style={[styles.d, styles.aTypo]}>D) 고전적인 명작</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(15)}>
        <Text style={[styles.c, styles.aTypo]}>C) 신비로운 판타지 영화</Text>
      </TouchableOpacity>

      <View style={[styles.rectangleView, styles.rectanglePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 10,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 764,
  },
  question6Layout: {
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
  question6Child: {
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  question6Item: {
    top: 413,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  question6Inner: {
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
  question6Child1: {
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
    height: 10,
    width: 328,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 764,
  },
  question6: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question4;
