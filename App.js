import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerOne}>
        <Text style={styles.titleText}>나만의 꿀팁</Text>
      </View>

      <View style={styles.containerTwo}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c",
          }}
          // 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
          resizeMode={"center"}
          style={styles.imageStyle}
        />
      </View>
      <ScrollView
        style={styles.containerThree}
        horizontal={true}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      >
        <View style={styles.button1}>
          <Text style={styles.buttonText}>생활</Text>
        </View>
        <View style={styles.button2}>
          <Text style={styles.buttonText}>재테크</Text>
        </View>
        <View style={styles.button3}>
          <Text style={styles.buttonText}>반려견</Text>
        </View>
        <View style={styles.button4}>
          <Text style={styles.buttonText}>꿀팁</Text>
        </View>
      </ScrollView>
      <View style={styles.containerFour}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3",
          }}
          // 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
          resizeMode={"cover"}
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            먹다 남은 피자를 촉촉하게!
          </Text>
          <Text numberOfLines={3} style={{ fontSize: 16 }}>
            먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수
            없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서
            2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지
            안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.
          </Text>
          <Text style={{ fontSize: 11, color: "gray" }}>2020.09.09</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  containerOne: {
    margin: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerTwo: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "40%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  containerThree: {
    backgroundColor: "white",
    flex: 1,
  },
  button1: {
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#f6cc78",
  },
  button2: {
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#ee9b86",
  },
  button3: {
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#b5dfd1",
  },
  button4: {
    width: 100,
    height: 50,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#ea97b3",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  containerFour: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 5,
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    margin: 5,
  },
  innerOne: {
    flex: 1,
    backgroundColor: "blue",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});
