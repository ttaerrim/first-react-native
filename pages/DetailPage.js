import React from "react";

import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function AboutPage() {
  const tip = {
    idx: 9,
    category: "재테크",
    title: "렌탈 서비스 금액 비교해보기",
    image:
      "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Frental.png?alt=media&token=97a55844-f077-4aeb-8402-e0a27221570b",
    desc: "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
    date: "2020.09.09",
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.detailImage}
        source={{ uri: tip.image }}
        resizeMode={"cover"}
      />
      <Text style={styles.title}>{tip.title}</Text>
      <Text style={styles.desc}>{tip.desc}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>팁 찜하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  detailImage: {
    width: "99%",
    height: 400,
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 20,
    marginBottom: 40,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    color: "white",
    margin: 20,
  },
  button: {
    width: 100,
    height: 40,
    alignSelf: "center",
    borderColor: "pink",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonTitle: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
    alignItems: "center",
  },
});
