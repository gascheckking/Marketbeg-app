// app/(tabs)/search.tsx

import { View, FlatList } from 'react-native';
import { theme } from '../theme';

import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';
import MiniCard from '../../components/MiniCard';
import RowItem from '../../components/RowItem';

export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg,
        padding: theme.spacing.md,
      }}
    >
      {/* SEARCH */}
      <SearchBar />

      {/* POPULÄRT */}
      <Section title="Populärt just nu">
        <FlatList
          horizontal
          data={[1, 2, 3, 4]}
          keyExtractor={(i) => String(i)}
          showsHorizontalScrollIndicator={false}
          renderItem={() => (
            <MiniCard title="Objekt" price="900 kr" />
          )}
        />
      </Section>

      {/* REDO ATT SÄLJAS */}
      <Section title="Redo att säljas">
        {[1, 2, 3].map((i) => (
          <RowItem
            key={i}
            title={`Objekt ${i}`}
            price={`${i * 900} kr`}
          />
        ))}
      </Section>

      {/* REKOMMENDERAT */}
      <Section title="Rekommenderat för dig">
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <MiniCard title="Objekt A" price="1200 kr" />
          <MiniCard title="Objekt B" price="1800 kr" />
        </View>
      </Section>
    </View>
  );
}