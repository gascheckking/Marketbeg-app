// app/(tabs)/search.tsx
import { View, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';
import MiniCard from '../../components/MiniCard';
import RowItem from '../../components/RowItem';

export default function SearchScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.searchWrap}>
        <SearchBar />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Section title="För dig">
          <ScrollView horizontal>
            <MiniCard title="Vintagejacka" price="1 200 kr" />
            <MiniCard title="Sneakers i din stil" price="900 kr" />
            <MiniCard title="Retro hoodie" price="650 kr" />
          </ScrollView>
        </Section>

        <Section title="Populärt just nu">
          <RowItem title="Barnkläder vinter" subtitle="Säljs snabbt just nu" price="Paket" />
          <RowItem title="Säkerhetskläder" subtitle="Ökad efterfrågan" price="Trend" />
          <RowItem title="Småmöbler" subtitle="Många tittar" price="Het" />
        </Section>

        <Section title="Utforska">
          <ScrollView horizontal>
            <MiniCard title="Allt för 50 kr" price="Paket" />
            <MiniCard title="Ge bort lokalt" price="Gratis" />
            <MiniCard title="Snabb försäljning" price="Likvid" />
          </ScrollView>
        </Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.bg },
  searchWrap: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.xl,
  },
});