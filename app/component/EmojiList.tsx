import { useState } from 'react';
import {
    FlatList, Image, ImageSourcePropType,
    Platform,
    Pressable,
    StyleSheet
} from 'react-native';

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require('@/assets/images/favicon.png'),
   
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});