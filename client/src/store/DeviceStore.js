import { makeAutoObservable } from 'mobx';
import iPhonePhoto from '../assets/Apple_iPhone_12_mini.jpg';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Смартфоны" },
      { id: 2, name: "Телевизоры" },
      { id: 3, name: "Холодильники" },
      { id: 4, name: "Приставки" },
      { id: 5, name: "Компы" },
      { id: 6, name: "Утюги" },
    ]
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
      { id: 3, name: "Lenovo" },
    ]
    this._devices = [
      { id: 1, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 2, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 3, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 4, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 5, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 6, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 7, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 8, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 9, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
      { id: 10, name: "12 mini", price: 50000, rating: 5, img: iPhonePhoto },
    ]
    this._selectedType = {};
    this._selectedBrand = {};
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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
