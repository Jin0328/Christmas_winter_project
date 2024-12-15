import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question4: { name: string; score: number };
  Question1: { name: string; score: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Question1">;

const Question1: React.FC<Props> = ({ navigation, route }) => {
  const { name, score } = route.params; 

  const handleAnswer = (points: number) => {
    navigation.navigate("Question4", { name, score: score + points });
  };

  return (
    <View style={styles.question5}>
      <View style={[styles.question5Child, styles.rectangleViewBorder]} />
      <Image
        style={[styles.question5Item, styles.question5Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question5Inner, styles.question5Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.question5Child1, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Text style={styles.text}>{`당신이 가장 좋아하는\n크리스마스 장식은\n무엇인가요?`}</Text>
      <Text style={styles.text1}>5</Text>

      <TouchableOpacity onPress={() => handleAnswer(5)}>
        <Text style={[styles.a, styles.aTypo]}>A) 반짝이는 전구</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(10)}>
        <Text style={[styles.b, styles.aTypo]}>B) 따뜻한 양초</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(20)}>
        <Text style={[styles.d, styles.aTypo]}>D) 심플한 리본</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(15)}>
        <Text style={[styles.c, styles.aTypo]}>C) 독특한 오너먼트</Text>
      </TouchableOpacity>

      <View style={[styles.rectangleView, styles.rectanglePosition]} />
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
  question5Layout: {
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
  question5Child: {
    width: 328,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  question5Item: {
    top: 413,
    borderRadius: Border.br_mini,
    left: 33,
    position: "absolute",
  },
  question5Inner: {
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
  question5Child1: {
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
    width: 273,
    height: 10,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 764,
  },
  question5: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question1;
