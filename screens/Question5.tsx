import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  FinalPage: { name: string; score: number; message: string };
  Question5: { name: string; score: number };
};

type Props = NativeStackScreenProps<RootStackParamList, "Question5">;

const Question5: React.FC<Props> = ({ navigation, route }) => {
  const { name, score } = route.params; // 이전 점수와 이름 받기
  const [message, setMessage] = React.useState(""); // 고민 내용 저장

  const handleNext = () => {
    // FinalPage로 이름, 점수, 메시지 전달
    navigation.navigate("FinalPage", { name, score, message });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.question7}>
        <Text style={styles.text}>{`나의 고민을 \n산타할아버지에게 \n말해봐요`}</Text>
        <View style={styles.question7Child}>
          <Text style={[styles.to, styles.toTypo]}>To. 산타할아버지</Text>
          <TextInput
            style={styles.input}
            placeholder="여기에 고민을 적어주세요"
            placeholderTextColor="#888"
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <Text style={[styles.from, styles.toTypo]}>From. {name}</Text>
        </View>
        <TouchableOpacity style={styles.question7Item} onPress={handleNext}>
          <Text style={styles.text1}>선물 받으러 가기</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  toTypo: {
    height: 43,
    width: 288,
    lineHeight: 35,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    top: 98,
    left: 23,
    fontSize: 32,
    lineHeight: 37,
    textAlign: "center",
    width: 344,
    height: 176,
    color: Color.colorBlack,
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  question7Child: {
    top: 233,
    left: 38,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 4,
    width: 314,
    height: 445,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  to: {
    top: 15,
    left: 20,
  },
  input: {
    top: 50,
    left: 20,
    width: 270,
    height: 340,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_mini,
    padding: 10,
    textAlignVertical: "top",
    fontFamily: FontFamily.notoSansBold,
    position: "absolute",
  },
  from: {
    top: 390,
    left: 200,
  },
  question7Item: {
    top: 716,
    left: 91,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorBlack,
    width: 224,
    height: 58,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: FontSize.size_2xl,
    lineHeight: 55,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  question7: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Question5;
