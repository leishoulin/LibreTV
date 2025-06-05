// import fs from 'fs';
// import path from 'path';

// // 配置文件路径（服务端本地）
// const configPath = path.join(__dirname, 'config.json');

// // 读取配置文件
// function readConfig() {
//   try {
//     const data = fs.readFileSync(configPath, 'utf8');
//     return JSON.parse(data);
//   } catch (err) {
//     // 文件不存在时返回默认配置
//     if (err.code === 'ENOENT') {
//       return { version: '1.0', settings: {} };
//     }
//     throw err; // 其他错误直接抛出
//   }
// }

// // 保存配置文件
// function saveConfig(config) {
//   fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf8');
// }

// // 使用示例
// const currentConfig = readConfig();
// console.log('当前配置:', currentConfig);

// // 修改并保存
// currentConfig.settings.theme = 'dark';
// saveConfig(currentConfig);