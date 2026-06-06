import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>🎨</Text>

      <Text style={styles.title}>StickerSmash</Text>

      <Text style={styles.subtitle}>
        Create. Decorate. Share.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          ✨ About StickerSmash
        </Text>

        <Text style={styles.description}>
          StickerSmash is a fun and creative photo editing application that
          allows users to personalize their favorite images using emojis and
          stickers. With an intuitive interface, users can upload photos,
          place stickers anywhere on the image, resize them with gestures,
          and save their customized creations directly to their device.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🚀 Features
        </Text>

        <Text style={styles.feature}>
          • Upload photos from your gallery
        </Text>

        <Text style={styles.feature}>
          • Add fun emoji stickers
        </Text>

        <Text style={styles.feature}>
          • Resize stickers using gestures
        </Text>

        <Text style={styles.feature}>
          • Save edited images instantly
        </Text>

        <Text style={styles.feature}>
          • Modern and beginner-friendly interface
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          💙 Why StickerSmash?
        </Text>

        <Text style={styles.description}>
          Whether you're creating aesthetic social media posts, funny edits,
          digital scrapbooks, or simply expressing your creativity,
          StickerSmash provides a simple yet powerful way to make every photo
          unique.
        </Text>
      </View>

      <Text style={styles.footer}>
        Made by Jericho Alcala 💙 
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F172A',
    padding: 24,
    alignItems: 'center',
  },

  logo: {
    fontSize: 70,
    marginTop: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
    marginBottom: 25,
  },

  card: {
    width: '100%',
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#38BDF8',
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#E2E8F0',
  },

  feature: {
    fontSize: 15,
    color: '#E2E8F0',
    marginBottom: 8,
  },

  footer: {
    marginTop: 10,
    marginBottom: 20,
    color: '#64748B',
    fontSize: 14,
  },
});