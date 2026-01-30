import * as LocalAuthentication from "expo-local-authentication";

export const hasBiometrics = async () => {
  const hardware = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  return hardware && enrolled;
};

export const authenticateBiometric = async () => {
  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Accede con biometría",
    fallbackLabel: "Usar contraseña",
  });

  return result.success;
};
