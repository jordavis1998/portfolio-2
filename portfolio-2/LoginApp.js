import React, {useCallback, useState} from "react"
import {Button, StyleSheet, Text, TextInput } from "react-native"
import LogoutApp from "./LogoutApp"

let formData= [
   {placeholder: "Phone Number", label: "phone", error: "Invalid phone number"},
   {placeholder: "Email", label: "email", error: "Invalid email"},
   {placeholder: "First Name", label: "firstName", error: "Invalid first name"},
   {placeholder: "Last Name", label: "lastName", error: "Invalid last name"},
   {placeholder: "Zipcode", label: "zipcode", error: "Invalid zipcode"}
]

function FormItem({formItem, value, setValid, setValue}) {
   let [error, setError] = useState("")
   let validate = (content, setError) => {
      console.log("Validating " + formItem.label + "with text " + content)
            if (formItem.regex.test(content)) {
               setValue(content)
               setValid(true)
               setError("")
               } else {
                  setValid(false)
                  setError(formItem.error)
                  console.log("Phone invlaid")
               }}
   return(<>
      <TextInput style={styles.input} 
      onChangeText={(value) => validate(value, setError)} 
      placeholder={formItem.placeholder}>
      </TextInput>
      <Text style={{color:"red"}}>{error}</Text>
         </>)
}

export default function LoginApp() {
let [valid, setValid] = useState(false)
let [form, setForm] = useState({})
let [loggedIn, setLoggedIn] = useState(false)
let [username, setUserName] = useState("")
let [password, setPassword] = useState("")
let [error, setError] = useState(false)
let doLogin = useCallback(() => {
    if (password === "abc123"){
        setLoggedIn(true)
    }else {

        setError(true)
    }
})
let doLogout = useCallback(() => {
    localStorage.clear();
    window.location.href = '/';
    return (
        <>
        <LogoutApp/>
        </>
    )  
})
    return !loggedIn ?
    <>
    <Text>Please Log In</Text>
    <TextInput onChangeText={text => setUserName(text)}
        style={styles.input} value={username} placeholder= "User Name"></TextInput>
    <TextInput onChangeText={text => setPassword(text)}
        style={styles.input} value={password} placeholder= "Password"></TextInput> 
    <Text style = {{color: "red"}}>{error ? "Error! Wrong password." : ""}</Text>
    <Button title="Login" onPress={() => doLogin()}></Button> 
    </>
      : <>
      <Text>Welcome, {username}!</Text>
         {formData.map(formItem => {
            return <FormItem setValue={(newValue=>{
               setForm(prevForm=>{
                  prevForm[formItem.label]=newValue
                  return {...prevForm}
               })
            })}setValid={value=>setValid(value)} formItem={formItem} value={form[formItem.label]}></FormItem>
         })}
        <Button title="Submit" onPress={() => console.log("Submitting", form)} disabled={!valid}></Button>
        <br></br>
      <Button title="Logout" onPress={() => doLogout()}></Button>
      </>
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