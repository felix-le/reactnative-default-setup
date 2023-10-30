import { View, Text } from 'react-native';
import FitnessIcon from './src/components/FitnessIcon';
interface AppProps {}

export default function App(props: AppProps) {
  return (
    <View className='flex-1 bg-neutral-700 justify-center p-5'>
      <View className='flex justify-center items-center mb-10'>
        <FitnessIcon
          width={60}
          height={60}
          color='#EBC401'
        />
      </View>
      <Text className='text-white text-center'>
        hello from default
      </Text>
    </View>
  );
}
