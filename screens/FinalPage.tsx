import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const FinalPage = () => {
  return (
    <View style={styles.finalPage}>
      <Image
        style={styles.finalPageChild}
        contentFit="cover"
        source={require("../assets/group-4.png")}
      />
      <Text style={styles.text}>{`짠!
산타의 편지가 도착했어요`}</Text>
      <Text style={[styles.text1, styles.textTypo]}>{`호호호 {이름} 메리크리스마스~~`}</Text>
      <Text
        style={[styles.text2, styles.textTypo]}
      >{`내가 준비한 {선물} 잘 받길 바라.`}</Text>
      <Text style={[styles.text3, styles.textTypo]}>{`{고민상담}`}</Text>
      <View style={[styles.finalPageItem, styles.text4Position]} />
      <Text style={[styles.text4, styles.text4Position]}>공유하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: 320,
    height: 35,
  },
  text3: {
    top: 354,
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
    left: 157,
    fontSize: FontSize.size_2xl,
    lineHeight: 55,
    width: 83,
    height: 51,
    textAlign: "left",
    color: Color.colorWhite,
    top: 735,
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
