import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import { firebase_db } from "../firebaseConfig";
import * as Application from "expo-application";
const isIOS = Platform.OS === "ios";
//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({ content, navigation, reload }) {
  const removeLike = async (idx) => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }
    console.log(userUniqueId);

    firebase_db
      .ref("/like/" + userUniqueId + "/" + idx)
      .remove()
      .then(function () {
        console.log("Remove succeeded.");
        reload();
      })
      .catch(function (error) {
        console.log("Remove failed: " + error.message);
      });
  };

  return (
    //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: content.image }} />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {content.title}
          </Text>
          <Text style={styles.cardDesc} numberOfLines={3}>
            {content.desc}
          </Text>
          <Text style={styles.cardDate}>{content.date}</Text>
        </View>
      </View>
      <View style={styles.cardButtons}>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => {
            navigation.navigate("DetailPage", { idx: content.idx });
          }}
        >
          <Text style={styles.cardButtonText}>자세히 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardButton}
          onPress={() => {
            removeLike(content.idx);
          }}
        >
          <Text style={styles.cardButtonText}>찜 해제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    maxHeight: 160,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    maxHeight: 100,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  cardButtons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 20,
  },
  cardButton: {
    width: 90,
    marginLeft: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "deeppink",
    borderRadius: 7,
  },
  cardButtonText: {
    textAlign: "center",
    fontWeight: "600",
    color: "deeppink",
  },
});
