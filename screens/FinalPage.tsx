import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  FinalPage: { name: string; score: number; message: string };
};

type Props = NativeStackScreenProps<RootStackParamList, "FinalPage">;

const FinalPage: React.FC<Props> = ({ route }) => {
  const { name, score, message } = route.params;

  const getGift = (score: number) => {
    if (score >= 30 && score <= 40) return "포근한 담요";
    if (score >= 41 && score <= 50) return "귀여운 양말 세트";
    if (score >= 51 && score <= 60) return "핫초코 세트";
    if (score >= 61 && score <= 70) return "작은 인형";
    if (score >= 71 && score <= 80) return "아로마 테라피 키트";
    if (score >= 81 && score <= 90) return "휴대용 스피커";
    if (score >= 91 && score <= 100) return "DIY 키트";
    if (score >= 101 && score <= 110) return "고급 다이어리 세트";
    if (score >= 111 && score <= 120) return "미니 여행용 가방";
    return "특별한 선물";
  };

  const gift = getGift(score);

  return (
    <View style={styles.finalPage}>
      <Image
        style={styles.finalPageChild}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <Text style={styles.text}>{`짠!\n산타의 편지가 도착했어요`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>{`호호호 ${name}\n메리크리스마스~~`}</Text>
      <Text
        style={[styles.text2, styles.textTypo]}
      >내가 준비한 <Text style={styles.underline}>{gift}</Text> 어때?</Text>
      <Text style={[styles.text5, styles.textTypo]}>마음에 들면 좋겠다.</Text>
      <Text style={[styles.text3, styles.textTypo]}>{message}</Text>
      <View style={[styles.finalPageItem, styles.text4Position]} />
      <Text style={[styles.text4, styles.text4Position]}>공유하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {
    textDecorationLine: 'underline',
  },
  textTypo: {
    width: 288,
    lineHeight: 35,
    fontSize: FontSize.size_xl,
    left: 50,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text4Position: {
    top: 735,
    position: "absolute",
  },
  finalPageChild: {
    top: 235,
    left: 26,
    width: 342,
    height: 492,
    position: "absolute",
  },
  text: {
    top: 113,
    left: -47,
    fontSize: FontSize.size_14xl,
    lineHeight: 45,
    color: Color.colorBlack,
    textAlign: "center",
    width: 484,
    height: 122,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text1: {
    top: 250,
    height: 79,
  },
  text2: {
    top: 315,
    height: 35,
  },
  text3: {
    top: 385,
    height: 288,
  },
  text5: {
    top: 350,
    height: 288,
  },
  finalPageItem: {
    left: 83,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorBlack,
    width: 224,
    height: 58,
  },
  text4: {
    left: 164,
    fontSize: FontSize.size_2xl,
    lineHeight: 64,
    width: 83,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    top: 738,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  finalPage: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default FinalPage;
