import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Start: undefined;
  NameInput: undefined;
  Question6: undefined;
  Quesiton: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Question6">;

const NameInput: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = React.useState(""); 

  const handleStart = () => {
    if (name.trim() === "") {
      alert("이름을 입력해주세요!");
      return;
    }
    navigation.navigate("Question6");
  };

  return (
    <View style={[styles.nameInput, styles.wrapperBg]}>
      <Text style={[styles.text, styles.textTypo]}>{`산타할아버지가 
선물을 준비하려면 
이름이 필요해요!🎄`}</Text>
      
      <View style={[styles.nameInputInner, styles.text2Layout]}>
        <TextInput
          style={styles.textInput}
          placeholder="이름을 입력하세요"
          placeholderTextColor="#555"
          value={name}
          onChangeText={setName}
        />
      </View>
      
      <TouchableOpacity style={styles.nameInputChild} onPress={handleStart}>
        <Text style={[styles.text2, styles.textTypo]}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.notoSansBold,
    fontWeight: "700",
  },
  text2Layout: {
    height: 51,
    position: "absolute",
  },
  text: {
    top: 74,
    fontSize: FontSize.size_14xl,
    lineHeight: 45,
    color: Color.colorBlack,
    width: 484,
    height: 122,
    left: 24,
    position: "absolute",
  },
  textInput: {
    fontSize: FontSize.size_xl,
    lineHeight: 40,
    color: Color.colorBlack,
    borderBottomWidth: 1,
    borderColor: Color.colorBlack,
    width: 288,
    position: "absolute",
    padding: 8,
    height: 70,
  },
  nameInputInner: {
    top: 313,
    left: 24,
    overflow: "visible",
  },
  nameInputChild: {
    top: 738,
    left: 83,
    borderRadius: Border.br_4xl,
    backgroundColor: Color.colorBlack,
    width: 224,
    height: 58,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontSize: FontSize.size_2xl,
    lineHeight: 55,
    color: Color.colorWhite,
  },
  nameInput: {
    borderRadius: Border.br_26xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default NameInput;

