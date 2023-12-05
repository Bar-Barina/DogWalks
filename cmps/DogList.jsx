import { FlatList } from "react-native";
import DogPreview from "./DogPreview";
import { useNavigation } from "@react-navigation/native";

export default function DogList({ dogs }) {
  
  const renderItem = ({ item }) => {
    const payload = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };
    return <DogPreview onPress={() => pressHandler(item)} payload={payload} />;
  };

  const navigation = useNavigation();

  function pressHandler(item) {
    navigation.navigate("Dog Details", { dog: item });
  }

  return (
    <FlatList
      data={dogs}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    ></FlatList>
  );
}
