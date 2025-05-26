// zh-stroke-data.js
// 這是從 g0v zh-stroke-data 整理出的小型本地字典（範例）

const strokeDict = {
  '王': 4, '小': 3, '明': 8, '林': 8, '陳': 16, '張': 11,
  '李': 7, '黃': 12, '周': 8, '吳': 7, '蔡': 17, '何': 7,
  '許': 11, '謝': 17, '鄭': 19, '郭': 15, '劉': 15, '楊': 13
  // 可依需求擴充更多中文字筆劃
};

function getStroke(char) {
  return strokeDict[char] || '？';
}

export { strokeDict, getStroke };
