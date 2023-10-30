import { View, Text } from 'react-native';

interface AppProps {}

export default function App(props: AppProps) {
  return (
    <View className='flex-1 bg-neutral-700 justify-center p-5'>
      <Text className='text-white text-center'>
        hello from default
      </Text>
    </View>
  );
}
