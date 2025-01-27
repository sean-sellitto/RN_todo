import { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [toDoList, setToDoList] = useState<{ id: string; title: string }[]>([]);

  const handleButtonPress = () => {
    setDisplayText(inputValue);
    setToDoList([
      ...toDoList,
      { id: Date.now().toString(), title: inputValue },
    ]);
    setInputValue("");
  };

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => {
    return <Text>{title}</Text>;
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
      <Text>TESTING</Text>
      <FlatList
        data={toDoList}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// header
// text box --> button
// when button is clicked, add the text to the list
// list should have radio buttons that can be edited and deleted
// at the bottom show a total
// at the bottom have a delete all button
