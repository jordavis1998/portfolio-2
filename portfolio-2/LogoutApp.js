import React, {useCallback, useState} from "react"
import { StyleSheet, View, Text } from "react-native"

export default function LogoutApp() {
    // let [loggedOut, setLoggedOut] = useState(false)
    return (<>
    <View style={styles.container}>
      <Text>You have successfully logged out!</Text>
    </View>
    </>) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});