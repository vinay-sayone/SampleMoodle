import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../../../api/constants';

export const performLogout = async navigation => {
  await AsyncStorage.removeItem(Constants.MOODLE_USER_TOKEN);
  navigation.replace('contextmanager');
};

export default {performLogout};
