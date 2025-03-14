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
// src/utils/database.js
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

const adapter = new SQLiteAdapter({
  dbName: 'LabData',
  schema: /* 数据表结构 */
});
const database = new Database({ adapter });
