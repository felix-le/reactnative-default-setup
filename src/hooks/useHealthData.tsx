import { useEffect, useState } from 'react';
import AppleHealthKit, {
  HealthInputOptions,
  HealthKitPermissions,
} from 'react-native-health';
import usePermission from './usePermission';

const STEPS_GOAL = 10000;

interface HealthData {
  steps: number;
  distance: number;
  STEPS_GOAL: number;
}

const useHealthData = (): HealthData => {
  const { hasPermissions } = usePermission();
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (!hasPermissions) return;
    const options: HealthInputOptions = {
      date: new Date(2023, 9, 25).toISOString(),
      includeManuallyAdded: true,
      // unit: HealthUnit.meter,
    };

    AppleHealthKit.getStepCount(
      options,
      (err: string, results: any) => {
        if (err) {
          console.log(
            'error reading steps: ',
            err
          );
          return;
        }
        setSteps(results.value);
      }
    );

    AppleHealthKit.getDistanceWalkingRunning(
      options,
      (err: string, results: any) => {
        if (err) {
          console.log(
            'error reading distance: ',
            err
          );
          return;
        }
        setDistance(results.value);
      }
    );
  }, [hasPermissions]);

  return {
    steps,
    distance,
    STEPS_GOAL,
  };
};

export default useHealthData;
