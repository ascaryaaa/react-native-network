import { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Auth() {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState()


  const getAccount = () => {
    // setLoading(true)

    // // username: 'kminchelle',
    // // password: '0lelplR',

    // fetch('https://dummyjson.com/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         username: userName,
    //         password: password,
    //       })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log("Response Get Account", data)
    //   setUser(data)
    //   setLoading(false)
    // })
    // .catch(error => {
    //   console.error("Error", error)
    //   setLoading(false)
    // })

    //////////////////////////////////////////////////////////
    ////// USING AXIOS POST  /////////////////////////////////

    setLoading(true);

    axios.post('https://dummyjson.com/auth/login', {
      username: userName,
      password: password,
    })
    .then(function (response) {
      console.log("Response Get Account", response.data);
      setUser(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      console.error("Error", error);
      setLoading(false);
    })
  }

  return (
    <View style={styles.container}>
        <TextInput 
            placeholder="Username" 
            value={userName} 
            onChangeText={setUserName}/>
        <TextInput  
            placeholder="Password"
            value={password} 
            onChangeText={setPassword}/>
      {loading ? <ActivityIndicator/> : <Button title='Klik Disini!!!' onPress={getAccount}/>}
      <Text>{user && user.token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});