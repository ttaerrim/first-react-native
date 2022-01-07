import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import LikeCard from "../components/LikeCard";

import { firebase_db } from "../firebaseConfig";
import * as Application from "expo-application";
const isIOS = Platform.OS === "ios";

export default function LikePage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "꿀팁 찜",
    });

    getLikes();
  }, []);
  const [ready, setReady] = useState(true);
  const [tip, setTip] = useState([]);

  const getLikes = async () => {
    let userUniqueId;
    if (isIOS) {
      let iosId = await Application.getIosIdForVendorAsync();
      userUniqueId = iosId;
    } else {
      userUniqueId = await Application.androidId;
    }

    firebase_db
      .ref("/like/" + userUniqueId)
      .once("value")
      .then((snapshot) => {
        let tip = snapshot.val();
        if (tip.length > 0) {
          setTip(tip);
          setReady(false);
        }
      });
  };

  const reload = () => {
    getLikes();
  };

  return (
    <View style={styles.container}>
      {/* 하나의 카드 영역을 나타내는 View */}

      {tip.map((content, i) => {
        return (
          <LikeCard
            content={content}
            key={i}
            navigation={navigation}
            reload={reload}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
