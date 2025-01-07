import { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleButtonPress = () => {
    setDisplayText(inputValue);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>TO-DO LIST</Text>

      <TextInput
        placeholder="Add a new todo"
        value={inputValue}
        onChangeText={setInputValue}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          width: "80%",
          marginVertical: 10,
        }}
      />
      <Button title="add" onPress={handleButtonPress} color="#f194ff" />
      <Text>asldkfjasdl</Text>
      <Text>You entered: {displayText}</Text>
    </View>
  );
}

// header
// text box --> button
// when button is clicked, add the text to the list
// list should have radio buttons that can be edited and deleted
// at the bottom show a total
// at the bottom have a delete all button
