import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type ValueProps = {
  label: string;
  value: string;
};

const Value = ({ label, value }: ValueProps) => (
  <View>
    <Text
      className='text-white'
      style={styles.label}
    >
      {label}
    </Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: '#AFB3BE',
    fontWeight: '500',
    marginRight: 50,
  },
});

export default Value;
