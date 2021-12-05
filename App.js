import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";

export default function App() {
  const innerFunction = () => {
    Alert.alert("팝업 알람입니다!!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
        <Button
          style={styles.buttonStyle}
          title="버튼입니다 "
          color="#f194ff"
          onPress={innerFunction}
        />
        {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
        <Button
          style={styles.buttonStyle}
          title="버튼입니다 "
          color="#F19400"
          onPress={() => {
            innerFunction();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textContainer: {
    height: 100,
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
  },
});
