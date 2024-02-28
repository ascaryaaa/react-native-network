import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  function getAccount() {
    setLoading(true);
    fetch("https://private-anon-75f39ba77b-itodpbni.apiary-mock.com/account")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response was not ok!");
        } else {
          return res.json();
        }
      })
      .then((res) => {
        console.log("res", res);
        setData(res);
      })
      .catch((err) => {
        console.error("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Button disabled={loading} onPress={getAccount} title="Click" />
      {loading && <ActivityIndicator size="large" animating={loading} />}
      <Text>Name: {data?.user.name}</Text>
      <Text>Phone Number: {data?.user.phone}</Text>
      <Text>
        Balance: {data?.user.balance && data.user.balance}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});