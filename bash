├── src/                  # 源代码目录
│   ├── components/       # 可复用UI组件（如传感器数据展示模块）
│   ├── screens/          # 页面逻辑（如实验操作界面、数据可视化页）
│   ├── utils/            # 工具函数（传感器数据处理、AI模型调用）
│   └── App.js            # 应用入口文件
├── docs/                 # 项目文档（部署指南、API说明）
├── .github/workflows/    # GitHub Actions自动化脚本（CI/CD）
└── package.json          # 依赖管理文件
# 使用React Native初始化项目
npx react-native init EduPhysicsLabApp
cd EduPhysicsLabApp
git add .                # 添加所有修改
git commit -m "feat: 添加传感器数据采集模块"
git push origin main     # 推送至GitHub仓库
git checkout -b feature/sensor-integration  # 创建新分支
git push origin feature/sensor-integration   # 推送分支
