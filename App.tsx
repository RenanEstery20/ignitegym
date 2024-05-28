import { Text, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      {fontsLoad ? <Text>Hello word</Text> : <View />}
    </View>
  );
}
