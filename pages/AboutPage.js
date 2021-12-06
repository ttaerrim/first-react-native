import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const intro =
  "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4";
export default function AboutPage() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          HI! 스파르타코딩 앱 개발반에 오신 것을 환영합니다
        </Text>
      </View>
      <View style={styles.centerContainer}>
        <Image style={styles.mainImage} source={{ uri: intro }} />
        <Text style={styles.fstText}>
          많은 내용을 간결하게 담아내려고 노력했습니다!
        </Text>
        <Text style={styles.sndText}>
          꼭 완주하셔서 여러분 것으로 만들어가시길 바랍니다
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>여러분의 인스타 계정</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#223072",
    flex: 1,
  },
  textContainer: {
    margin: 30,
    marginBottom: 0,
    flex: 1,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  centerContainer: {
    backgroundColor: "white",
    flex: 5,
    margin: 30,
    marginBottom: 60,
    borderRadius: 30,
    alignItems: "center",
  },
  mainImage: {
    width: 150,
    height: 150,
    borderRadius: 70,
    marginTop: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  fstText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    marginTop: 5,
  },
  sndText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    marginTop: 5,
  },
  button: {
    width: 200,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderColor: "deeppink",
    borderRadius: 15,
    margin: 7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
