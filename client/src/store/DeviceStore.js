import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Смартфоны" },
      { id: 3, name: "Телевизоры" }
    ]
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" }
    ]
    this._devices = [
      { id: 1, name: "12 mini", price: 50000, rating: 0, img: "1992246e-c575-428a-ab37-1f19575959b8.jpg" },
      { id: 2, name: "12 mini", price: 50000, rating: 0, img: "1992246e-c575-428a-ab37-1f19575959b8.jpg" },
      { id: 3, name: "12 mini", price: 50000, rating: 0, img: "1992246e-c575-428a-ab37-1f19575959b8.jpg" },
      { id: 4, name: "12 mini", price: 50000, rating: 0, img: "1992246e-c575-428a-ab37-1f19575959b8.jpg" },
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types;
  } 

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
