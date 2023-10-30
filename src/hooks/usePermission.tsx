import { useState } from 'react';

interface IPermission {
  hasPermissions: boolean;
}

const usePermission = (): IPermission => {
  const [hasPermissions, setHasPermissions] =
    useState(false);

  return { hasPermissions };
};

export default usePermission;
