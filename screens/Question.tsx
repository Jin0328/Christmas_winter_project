import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question3: { score: number };
  Question: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Question">;

const Question: React.FC<Props> = ({ navigation }) => {
  const handleAnswer = (points: number) => {
    // Navigate to Question3 with the selected points
    navigation.navigate("Question3", { score: points });
  };

  return (
    <View style={styles.question2}>
      <View style={[styles.question2Child, styles.rectangleViewBorder]} />
      <Image
        style={[styles.question2Item, styles.question2Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question2Inner, styles.question2Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question2Child1, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.text}>{`크리스마스 선물을\n받을 자격이 있다면\n이유는 무엇인가요?`}</Text>
      <Text style={styles.text1}>2</Text>
      
      {/* 각 선택지를 클릭하면 해당 점수를 전달하며 Question3로 이동 */}
      <TouchableOpacity onPress={() => handleAnswer(5)}>
        <Text style={[styles.a, styles.aTypo]}>A) 눈물 한 방울 안 흘렸으니까</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(10)}>
        <Text style={[styles.b, styles.aTypo]}>B) 산타가 좋아하니까</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(20)}>
        <Text style={[styles.d, styles.aTypo]}>D) 마음만은 어린이니까</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(15)}>
        <Text style={[styles.c, styles.aTypo]}>C) 정말 열심히 살았으니까</Text>
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
  question2Layout: {
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
  question2Child: {
    width: 328,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  question2Item: {
    top: 413,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  question2Inner: {
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
  question2Child1: {
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
    width: 109,
    height: 10,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 764,
  },
  question2: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question;
