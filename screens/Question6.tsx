import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question: { score: number };
  Question6: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Question6">;

const Question6: React.FC<Props> = ({ navigation }) => {
  const handleAnswer = (points: number) => {
    // Navigate to the Question page and pass the updated score
    navigation.navigate("Question", { score: points });
  };

  return (
    <View style={styles.question1}>
      <View style={[styles.question1Child, styles.question1Border]} />
      <View style={[styles.question1Item, styles.question1Border]} />
      <Image
        style={[styles.question1Inner, styles.question1ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.question1ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question1Child1, styles.question1ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question1Child2, styles.question1ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.text}>
        산타가 당신에게 선물을 주러 올 때 당신은 무엇을 하고 있을까요?
      </Text>
      <Text style={styles.text1}>1</Text>

      <TouchableOpacity onPress={() => handleAnswer(5)}>
        <Text style={[styles.a, styles.aTypo]}>A) 침대에서 꿀잠</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(10)}>
        <Text style={[styles.b, styles.aTypo]}>B) 친구들과 파티</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(20)}>
        <Text style={[styles.d, styles.aTypo]}>D) 코딩 하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(15)}>
        <Text style={[styles.c, styles.aTypo]}>C) 핫초코 마시며 책 읽기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  question1Border: {
    height: 10,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 764,
    position: "absolute",
  },
  question1ChildLayout: {
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
  question1Child: {
    width: 328,
    left: 33,
    backgroundColor: Color.colorWhite,
  },
  question1Item: {
    backgroundColor: Color.colorBlack,
    width: 55,
    left: 34,
  },
  question1Inner: {
    top: 413,
    left: 33,
  },
  rectangleIcon: {
    top: 493,
    left: 33,
  },
  question1Child1: {
    top: 573,
    left: 34,
  },
  question1Child2: {
    top: 653,
    left: 34,
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
  question1: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question6;
