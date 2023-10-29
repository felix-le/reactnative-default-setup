import { View } from 'react-native';

import Value from './src/components/Value';
import FitnessIcon from './src/components/FitnessIcon';

import useHealthData from './src/hooks/useHealthData';

interface AppProps {}

export default function App(props: AppProps) {
  const { steps, distance } = useHealthData();

  return (
    <View className='flex-1 bg-neutral-700 justify-center p-5'>
      <View className='flex justify-center items-center mb-10'>
        <FitnessIcon
          width={60}
          height={60}
          color='#EBC401'
        />
      </View>

      <View className='flex flex-row flex-wrap'>
        <Value
          label='Steps'
          value={steps.toString()}
        />
        <Value
          label='Distance'
          value={`${(distance / 1000).toFixed(
            2
          )} km`}
        />
      </View>
    </View>
  );
}
