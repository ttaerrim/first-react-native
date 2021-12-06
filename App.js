import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import data from "./data.json";

export default function App() {
  let tip = data.tip;
  return (
    <ScrollView style={styles.container}>
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
      <ScrollView style={styles.containerThree} horizontal>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>생활</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>재테크</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.buttonText}>반려견</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Text style={styles.buttonText}>꿀팁</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.containerFour}>
        {tip.map((content, i) => {
          return (
            <View style={styles.card} key={i}>
              <Image
                source={{
                  uri: content.image,
                }}
                // 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
                resizeMode={"cover"}
                style={styles.imageContainer}
              />
              <View style={styles.textContainer}>
                <Text
                  numberOfLines={1}
                  style={{ fontSize: 19, fontWeight: "bold" }}
                >
                  {content.title}
                </Text>
                <Text numberOfLines={3} style={{ fontSize: 16 }}>
                  {content.desc}
                </Text>
                <Text style={{ fontSize: 11, color: "gray" }}>
                  {content.date}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  containerOne: {
    marginLeft: 15,
    marginTop: 20,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  containerTwo: {
    flexDirection: "column",
    backgroundColor: "white",
    height: 200,
    marginBottom: 20,
  },
  imageStyle: {
    width: "95%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },
  containerThree: {
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 5,
    height: 60,
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
    marginTop: 20,
  },
  card: {
    marginTop: 5,
    marginLeft: 10,
    flexDirection: "row",
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
});
