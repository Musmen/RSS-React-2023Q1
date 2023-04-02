import { LOCAL_STORAGE_KEYS } from '../common/constants';

class LocalStorageService {
  public setToLS(value: string, key: string = LOCAL_STORAGE_KEYS.DEFAULT) {
    localStorage.setItem(key, value);
  }

  public getFromLS(key: string = LOCAL_STORAGE_KEYS.DEFAULT) {
    return localStorage.getItem(key) || '';
  }
}

export default new LocalStorageService();
