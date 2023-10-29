import { useEffect, useState } from 'react';
import AppleHealthKit, {
  HealthKitPermissions,
} from 'react-native-health';

const permissions: HealthKitPermissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions
        .StepCount,
      AppleHealthKit.Constants.Permissions
        .DistanceWalkingRunning,
    ],
    write: [],
  },
};

interface IPermission {
  hasPermissions: boolean;
}

const usePermission = (): IPermission => {
  const [hasPermissions, setHasPermissions] =
    useState(false);

  useEffect(() => {
    AppleHealthKit.initHealthKit(
      permissions,
      (err: string) => {
        if (err) {
          console.log(
            'error initializing Healthkit: ',
            err
          );
          return;
        }
        setHasPermissions(true);
      }
    );
  }, []);

  return { hasPermissions };
};

export default usePermission;
