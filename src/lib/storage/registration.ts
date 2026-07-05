/* -------------------------------------------------------------------------- */
/*                         Pending Registration Storage                        */
/* -------------------------------------------------------------------------- */

export interface PendingRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

const STORAGE_KEY = "rentz_pending_registration";

/* -------------------------------------------------------------------------- */
/*                     Save Pending Registration Data                          */
/* -------------------------------------------------------------------------- */

export const savePendingRegistration = (
  data: PendingRegistrationData
): void => {
  if (typeof window === "undefined") return;

  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

/* -------------------------------------------------------------------------- */
/*                      Get Pending Registration Data                          */
/* -------------------------------------------------------------------------- */

export const getPendingRegistration =
  (): PendingRegistrationData | null => {
    if (typeof window === "undefined") return null;

    const data = sessionStorage.getItem(STORAGE_KEY);

    if (!data) return null;

    try {
      return JSON.parse(data) as PendingRegistrationData;
    } catch {
      return null;
    }
  };

/* -------------------------------------------------------------------------- */
/*                    Clear Pending Registration Data                          */
/* -------------------------------------------------------------------------- */

export const clearPendingRegistration = (): void => {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(STORAGE_KEY);
};

/* -------------------------------------------------------------------------- */
/*                   Check Pending Registration Exists                         */
/* -------------------------------------------------------------------------- */

export const hasPendingRegistration =
  (): boolean => {
    if (typeof window === "undefined") return false;

    return sessionStorage.getItem(STORAGE_KEY) !== null;
  };