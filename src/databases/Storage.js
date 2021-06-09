import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    async listContents() {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);

        return result;
    } 
    
    async getKeys() {
        const keys = await AsyncStorage.getAllKeys();
        return keys;               
    }


    async deleteContent(index) {
        await AsyncStorage.removeItem(String(index));
    }

    async save(index, content) {
        await AsyncStorage.setItem(String(index), JSON.stringify(content));
    }

    async merge(index, content){
        await AsyncStorage.mergeItem(String(index), JSON.stringify(content));
    }


    async get(index) {
        const value = JSON.parse(await AsyncStorage.getItem(String(index)))
        return value;
    }

    async clear(){
        await AsyncStorage.clear();
    }
}