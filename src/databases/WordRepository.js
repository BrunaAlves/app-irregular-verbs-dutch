import Storage from './Storage';
import words from '../irregular-verbs.json';

const storage = new Storage()

export default class WordRepository {
  async init(){
    return new Promise((resolve) => {
        this.getAll().then((data) => {
          if(!data || data.length == 0){ 
            words.forEach((item, itemIndex) => {
              if(itemIndex == words.length - 1){
                this.create(item).then(() => {
                  resolve();
                })
              }
              else{
                this.create(item)
              }
            })
          }else{
            resolve();
          }
        })
    })
  }

  async clear(){
    return storage.clear();
  }

  async create(word) {
    return storage.save(String(word.id), word)
  } 
  
  async update(word) {
    return storage.merge(String(word.id), word)             
  }


  async delete(key) {
      return storage.deleteContent(String(key))
  }

  async getAll() {
    return new Promise((resolve) => {
      storage.listContents().then((data) => {
        var words = []
        data.forEach((item) => {
          words.push(JSON.parse(item[1]))
        })
        resolve(words)
      })
    })
  }


  async get(key) {
     return storage.get(key)
  }

  
}