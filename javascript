// src/utils/bleManager.js
import { BleManager } from 'react-native-ble-plx';
const manager = new BleManager();

// 搜索并连接设备
const connectToESP32 = async () => {
  const devices = await manager.scanForDevices();
  const targetDevice = devices.find(device => device.name === 'ESP32-Lab');
  await manager.connectToDevice(targetDevice.id);
  return targetDevice;
};
// src/utils/aiProcessor.js
import { TFLite } from 'react-native-tensorflow';

const loadModel = async () => {
  const modelPath = require('../assets/models/yolov5-tiny.tflite');
  const model = await TFLite.loadModel(modelPath);
  return model;
};
