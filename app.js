const STORAGE_KEY = "hyakumeizan-climbed-v1";

const mountains = [
  { id: 1, name: "利尻山", kana: "りしりざん", area: "北海道", prefectures: ["北海道"], elevation: 1721, lat: 45.1786, lng: 141.2419 },
  { id: 2, name: "羅臼岳", kana: "らうすだけ", area: "北海道", prefectures: ["北海道"], elevation: 1661, lat: 44.0758, lng: 145.1223 },
  { id: 3, name: "斜里岳", kana: "しゃりだけ", area: "北海道", prefectures: ["北海道"], elevation: 1547, lat: 43.7658, lng: 144.7178 },
  { id: 4, name: "阿寒岳", kana: "あかんだけ", area: "北海道", prefectures: ["北海道"], elevation: 1499, lat: 43.3861, lng: 144.0089 },
  { id: 5, name: "大雪山", kana: "たいせつざん", area: "北海道", prefectures: ["北海道"], elevation: 2291, lat: 43.6636, lng: 142.8542 },
  { id: 6, name: "トムラウシ山", kana: "とむらうしやま", area: "北海道", prefectures: ["北海道"], elevation: 2141, lat: 43.5272, lng: 142.8481 },
  { id: 7, name: "十勝岳", kana: "とかちだけ", area: "北海道", prefectures: ["北海道"], elevation: 2077, lat: 43.4181, lng: 142.6867 },
  { id: 8, name: "幌尻岳", kana: "ぽろしりだけ", area: "北海道", prefectures: ["北海道"], elevation: 2052, lat: 42.7192, lng: 142.6828 },
  { id: 9, name: "羊蹄山", kana: "ようていざん", area: "北海道", prefectures: ["北海道"], elevation: 1898, lat: 42.8267, lng: 140.8114 },
  { id: 10, name: "岩木山", kana: "いわきさん", area: "東北", prefectures: ["青森"], elevation: 1625, lat: 40.6559, lng: 140.3031 },
  { id: 11, name: "八甲田山", kana: "はっこうださん", area: "東北", prefectures: ["青森"], elevation: 1585, lat: 40.6592, lng: 140.8775 },
  { id: 12, name: "八幡平", kana: "はちまんたい", area: "東北", prefectures: ["岩手", "秋田"], elevation: 1613, lat: 39.9578, lng: 140.8547 },
  { id: 13, name: "岩手山", kana: "いわてさん", area: "東北", prefectures: ["岩手"], elevation: 2038, lat: 39.8528, lng: 141.0011 },
  { id: 14, name: "早池峰山", kana: "はやちねさん", area: "東北", prefectures: ["岩手"], elevation: 1917, lat: 39.5583, lng: 141.4883 },
  { id: 15, name: "鳥海山", kana: "ちょうかいさん", area: "東北", prefectures: ["山形", "秋田"], elevation: 2236, lat: 39.0992, lng: 140.0489 },
  { id: 16, name: "月山", kana: "がっさん", area: "東北", prefectures: ["山形"], elevation: 1984, lat: 38.5486, lng: 140.0269 },
  { id: 17, name: "朝日岳", kana: "あさひだけ", area: "東北", prefectures: ["山形", "新潟"], elevation: 1870, lat: 38.2608, lng: 139.9228 },
  { id: 18, name: "蔵王山", kana: "ざおうさん", area: "東北", prefectures: ["山形", "宮城"], elevation: 1841, lat: 38.1447, lng: 140.44 },
  { id: 19, name: "飯豊山", kana: "いいでさん", area: "東北", prefectures: ["山形", "福島", "新潟"], elevation: 2105, lat: 37.8542, lng: 139.7078 },
  { id: 20, name: "吾妻山", kana: "あづまやま", area: "東北", prefectures: ["山形", "福島"], elevation: 2035, lat: 37.7353, lng: 140.2442 },
  { id: 21, name: "安達太良山", kana: "あだたらやま", area: "東北", prefectures: ["福島"], elevation: 1700, lat: 37.6219, lng: 140.2872 },
  { id: 22, name: "磐梯山", kana: "ばんだいさん", area: "東北", prefectures: ["福島"], elevation: 1816, lat: 37.6003, lng: 140.0722 },
  { id: 23, name: "会津駒ヶ岳", kana: "あいづこまがたけ", area: "東北", prefectures: ["福島"], elevation: 2133, lat: 37.0475, lng: 139.3531 },
  { id: 24, name: "那須岳", kana: "なすだけ", area: "関東", prefectures: ["栃木", "福島"], elevation: 1915, lat: 37.1253, lng: 139.9633 },
  { id: 25, name: "筑波山", kana: "つくばさん", area: "関東", prefectures: ["茨城"], elevation: 877, lat: 36.2258, lng: 140.1067 },
  { id: 26, name: "燧ヶ岳", kana: "ひうちがたけ", area: "尾瀬・日光", prefectures: ["福島"], elevation: 2356, lat: 36.955, lng: 139.2858 },
  { id: 27, name: "至仏山", kana: "しぶつさん", area: "尾瀬・日光", prefectures: ["群馬"], elevation: 2228, lat: 36.9039, lng: 139.1731 },
  { id: 28, name: "武尊山", kana: "ほたかやま", area: "上信越", prefectures: ["群馬"], elevation: 2158, lat: 36.8053, lng: 139.1322 },
  { id: 29, name: "赤城山", kana: "あかぎやま", area: "関東", prefectures: ["群馬"], elevation: 1828, lat: 36.5603, lng: 139.1939 },
  { id: 30, name: "男体山", kana: "なんたいさん", area: "尾瀬・日光", prefectures: ["栃木"], elevation: 2486, lat: 36.765, lng: 139.4908 },
  { id: 31, name: "日光白根山", kana: "にっこうしらねさん", area: "尾瀬・日光", prefectures: ["栃木", "群馬"], elevation: 2578, lat: 36.7981, lng: 139.3769 },
  { id: 32, name: "皇海山", kana: "すかいさん", area: "尾瀬・日光", prefectures: ["栃木", "群馬"], elevation: 2144, lat: 36.6886, lng: 139.3372 },
  { id: 33, name: "越後駒ヶ岳", kana: "えちごこまがたけ", area: "上信越", prefectures: ["新潟"], elevation: 2003, lat: 37.1242, lng: 139.075 },
  { id: 34, name: "平ヶ岳", kana: "ひらがたけ", area: "上信越", prefectures: ["新潟", "群馬"], elevation: 2141, lat: 37.0014, lng: 139.1692 },
  { id: 35, name: "巻機山", kana: "まきはたやま", area: "上信越", prefectures: ["新潟", "群馬"], elevation: 1967, lat: 36.9792, lng: 138.9647 },
  { id: 36, name: "谷川岳", kana: "たにがわだけ", area: "上信越", prefectures: ["群馬", "新潟"], elevation: 1977, lat: 36.8372, lng: 138.9306 },
  { id: 37, name: "雨飾山", kana: "あまかざりやま", area: "北アルプス", prefectures: ["新潟", "長野"], elevation: 1963, lat: 36.9028, lng: 137.9631 },
  { id: 38, name: "苗場山", kana: "なえばさん", area: "上信越", prefectures: ["新潟", "長野"], elevation: 2145, lat: 36.845, lng: 138.6908 },
  { id: 39, name: "妙高山", kana: "みょうこうさん", area: "上信越", prefectures: ["新潟"], elevation: 2454, lat: 36.8911, lng: 138.1136 },
  { id: 40, name: "火打山", kana: "ひうちやま", area: "上信越", prefectures: ["新潟"], elevation: 2462, lat: 36.9222, lng: 138.0689 },
  { id: 41, name: "高妻山", kana: "たかつまやま", area: "上信越", prefectures: ["新潟", "長野"], elevation: 2353, lat: 36.8008, lng: 138.0525 },
  { id: 42, name: "草津白根山", kana: "くさつしらねさん", area: "上信越", prefectures: ["群馬"], elevation: 2160, lat: 36.6431, lng: 138.5272 },
  { id: 43, name: "四阿山", kana: "あずまやさん", area: "上信越", prefectures: ["群馬", "長野"], elevation: 2354, lat: 36.5411, lng: 138.4122 },
  { id: 44, name: "浅間山", kana: "あさまやま", area: "上信越", prefectures: ["群馬", "長野"], elevation: 2568, lat: 36.4064, lng: 138.5231 },
  { id: 45, name: "両神山", kana: "りょうかみさん", area: "関東", prefectures: ["埼玉"], elevation: 1723, lat: 36.0239, lng: 138.8414 },
  { id: 46, name: "雲取山", kana: "くもとりやま", area: "関東", prefectures: ["東京", "埼玉", "山梨"], elevation: 2017, lat: 35.8556, lng: 138.9431 },
  { id: 47, name: "甲武信ヶ岳", kana: "こぶしがたけ", area: "奥秩父", prefectures: ["山梨", "埼玉", "長野"], elevation: 2475, lat: 35.9086, lng: 138.7283 },
  { id: 48, name: "金峰山", kana: "きんぷさん", area: "奥秩父", prefectures: ["山梨", "長野"], elevation: 2599, lat: 35.8714, lng: 138.6258 },
  { id: 49, name: "瑞牆山", kana: "みずがきやま", area: "奥秩父", prefectures: ["山梨"], elevation: 2230, lat: 35.8936, lng: 138.5928 },
  { id: 50, name: "大菩薩嶺", kana: "だいぼさつれい", area: "奥秩父", prefectures: ["山梨"], elevation: 2057, lat: 35.7489, lng: 138.8458 },
  { id: 51, name: "丹沢山", kana: "たんざわさん", area: "関東", prefectures: ["神奈川"], elevation: 1567, lat: 35.4747, lng: 139.1631 },
  { id: 52, name: "富士山", kana: "ふじさん", area: "富士・箱根", prefectures: ["山梨", "静岡"], elevation: 3776, lat: 35.3606, lng: 138.7274 },
  { id: 53, name: "天城山", kana: "あまぎさん", area: "富士・箱根", prefectures: ["静岡"], elevation: 1406, lat: 34.8628, lng: 139.0019 },
  { id: 54, name: "白馬岳", kana: "しろうまだけ", area: "北アルプス", prefectures: ["長野", "富山"], elevation: 2932, lat: 36.7586, lng: 137.7586 },
  { id: 55, name: "五竜岳", kana: "ごりゅうだけ", area: "北アルプス", prefectures: ["長野", "富山"], elevation: 2814, lat: 36.6586, lng: 137.7522 },
  { id: 56, name: "鹿島槍ヶ岳", kana: "かしまやりがたけ", area: "北アルプス", prefectures: ["長野", "富山"], elevation: 2889, lat: 36.6244, lng: 137.7461 },
  { id: 57, name: "剱岳", kana: "つるぎだけ", area: "北アルプス", prefectures: ["富山"], elevation: 2999, lat: 36.6236, lng: 137.6169 },
  { id: 58, name: "立山", kana: "たてやま", area: "北アルプス", prefectures: ["富山"], elevation: 3015, lat: 36.5758, lng: 137.6197 },
  { id: 59, name: "薬師岳", kana: "やくしだけ", area: "北アルプス", prefectures: ["富山"], elevation: 2926, lat: 36.4681, lng: 137.5444 },
  { id: 60, name: "黒部五郎岳", kana: "くろべごろうだけ", area: "北アルプス", prefectures: ["富山", "岐阜"], elevation: 2840, lat: 36.3928, lng: 137.5406 },
  { id: 61, name: "水晶岳", kana: "すいしょうだけ", area: "北アルプス", prefectures: ["富山"], elevation: 2986, lat: 36.4269, lng: 137.6028 },
  { id: 62, name: "鷲羽岳", kana: "わしばだけ", area: "北アルプス", prefectures: ["富山", "長野"], elevation: 2924, lat: 36.4039, lng: 137.6056 },
  { id: 63, name: "槍ヶ岳", kana: "やりがたけ", area: "北アルプス", prefectures: ["長野", "岐阜"], elevation: 3180, lat: 36.3419, lng: 137.6475 },
  { id: 64, name: "穂高岳", kana: "ほたかだけ", area: "北アルプス", prefectures: ["長野", "岐阜"], elevation: 3190, lat: 36.2892, lng: 137.6481 },
  { id: 65, name: "常念岳", kana: "じょうねんだけ", area: "北アルプス", prefectures: ["長野"], elevation: 2857, lat: 36.3256, lng: 137.7275 },
  { id: 66, name: "笠ヶ岳", kana: "かさがたけ", area: "北アルプス", prefectures: ["岐阜"], elevation: 2898, lat: 36.3153, lng: 137.5578 },
  { id: 67, name: "焼岳", kana: "やけだけ", area: "北アルプス", prefectures: ["長野", "岐阜"], elevation: 2455, lat: 36.2269, lng: 137.5864 },
  { id: 68, name: "乗鞍岳", kana: "のりくらだけ", area: "北アルプス", prefectures: ["長野", "岐阜"], elevation: 3026, lat: 36.1064, lng: 137.5536 },
  { id: 69, name: "御嶽山", kana: "おんたけさん", area: "中央アルプス", prefectures: ["長野", "岐阜"], elevation: 3067, lat: 35.8933, lng: 137.4808 },
  { id: 70, name: "美ヶ原", kana: "うつくしがはら", area: "中部", prefectures: ["長野"], elevation: 2034, lat: 36.2253, lng: 138.1078 },
  { id: 71, name: "霧ヶ峰", kana: "きりがみね", area: "中部", prefectures: ["長野"], elevation: 1925, lat: 36.1033, lng: 138.1964 },
  { id: 72, name: "蓼科山", kana: "たてしなやま", area: "八ヶ岳", prefectures: ["長野"], elevation: 2531, lat: 36.1036, lng: 138.295 },
  { id: 73, name: "八ヶ岳", kana: "やつがたけ", area: "八ヶ岳", prefectures: ["長野", "山梨"], elevation: 2899, lat: 35.9708, lng: 138.3708 },
  { id: 74, name: "木曽駒ヶ岳", kana: "きそこまがたけ", area: "中央アルプス", prefectures: ["長野"], elevation: 2956, lat: 35.7894, lng: 137.8042 },
  { id: 75, name: "空木岳", kana: "うつぎだけ", area: "中央アルプス", prefectures: ["長野"], elevation: 2864, lat: 35.7181, lng: 137.8175 },
  { id: 76, name: "恵那山", kana: "えなさん", area: "中央アルプス", prefectures: ["長野", "岐阜"], elevation: 2191, lat: 35.4431, lng: 137.5975 },
  { id: 77, name: "甲斐駒ヶ岳", kana: "かいこまがたけ", area: "南アルプス", prefectures: ["山梨", "長野"], elevation: 2967, lat: 35.7578, lng: 138.2367 },
  { id: 78, name: "仙丈ヶ岳", kana: "せんじょうがたけ", area: "南アルプス", prefectures: ["山梨", "長野"], elevation: 3033, lat: 35.7203, lng: 138.1831 },
  { id: 79, name: "鳳凰山", kana: "ほうおうざん", area: "南アルプス", prefectures: ["山梨"], elevation: 2841, lat: 35.7014, lng: 138.3044 },
  { id: 80, name: "北岳", kana: "きただけ", area: "南アルプス", prefectures: ["山梨"], elevation: 3193, lat: 35.6744, lng: 138.2389 },
  { id: 81, name: "間ノ岳", kana: "あいのだけ", area: "南アルプス", prefectures: ["山梨", "静岡"], elevation: 3190, lat: 35.6461, lng: 138.2283 },
  { id: 82, name: "塩見岳", kana: "しおみだけ", area: "南アルプス", prefectures: ["長野", "静岡"], elevation: 3052, lat: 35.5733, lng: 138.1825 },
  { id: 83, name: "悪沢岳", kana: "わるさわだけ", area: "南アルプス", prefectures: ["静岡"], elevation: 3141, lat: 35.5008, lng: 138.1828 },
  { id: 84, name: "赤石岳", kana: "あかいしだけ", area: "南アルプス", prefectures: ["長野", "静岡"], elevation: 3121, lat: 35.4611, lng: 138.1575 },
  { id: 85, name: "聖岳", kana: "ひじりだけ", area: "南アルプス", prefectures: ["長野", "静岡"], elevation: 3013, lat: 35.4228, lng: 138.1392 },
  { id: 86, name: "光岳", kana: "てかりだけ", area: "南アルプス", prefectures: ["長野", "静岡"], elevation: 2592, lat: 35.3389, lng: 138.0831 },
  { id: 87, name: "白山", kana: "はくさん", area: "北陸", prefectures: ["石川", "岐阜"], elevation: 2702, lat: 36.155, lng: 136.7714 },
  { id: 88, name: "荒島岳", kana: "あらしまだけ", area: "北陸", prefectures: ["福井"], elevation: 1523, lat: 35.9344, lng: 136.6017 },
  { id: 89, name: "伊吹山", kana: "いぶきやま", area: "近畿", prefectures: ["滋賀", "岐阜"], elevation: 1377, lat: 35.4178, lng: 136.4064 },
  { id: 90, name: "大台ヶ原山", kana: "おおだいがはらやま", area: "近畿", prefectures: ["奈良", "三重"], elevation: 1695, lat: 34.1858, lng: 136.1092 },
  { id: 91, name: "大峰山", kana: "おおみねさん", area: "近畿", prefectures: ["奈良"], elevation: 1915, lat: 34.2522, lng: 135.9408 },
  { id: 92, name: "大山", kana: "だいせん", area: "中国・四国", prefectures: ["鳥取"], elevation: 1729, lat: 35.3711, lng: 133.5464 },
  { id: 93, name: "剣山", kana: "つるぎさん", area: "中国・四国", prefectures: ["徳島"], elevation: 1955, lat: 33.8536, lng: 134.0944 },
  { id: 94, name: "石鎚山", kana: "いしづちさん", area: "中国・四国", prefectures: ["愛媛"], elevation: 1982, lat: 33.7678, lng: 133.115 },
  { id: 95, name: "九重山", kana: "くじゅうさん", area: "九州", prefectures: ["大分"], elevation: 1791, lat: 33.0861, lng: 131.2492 },
  { id: 96, name: "祖母山", kana: "そぼさん", area: "九州", prefectures: ["大分", "宮崎"], elevation: 1756, lat: 32.8281, lng: 131.3472 },
  { id: 97, name: "阿蘇山", kana: "あそさん", area: "九州", prefectures: ["熊本"], elevation: 1592, lat: 32.8844, lng: 131.1044 },
  { id: 98, name: "霧島山", kana: "きりしまやま", area: "九州", prefectures: ["宮崎", "鹿児島"], elevation: 1700, lat: 31.9342, lng: 130.8628 },
  { id: 99, name: "開聞岳", kana: "かいもんだけ", area: "九州", prefectures: ["鹿児島"], elevation: 924, lat: 31.1806, lng: 130.5286 },
  { id: 100, name: "宮之浦岳", kana: "みやのうらだけ", area: "九州", prefectures: ["鹿児島"], elevation: 1936, lat: 30.3361, lng: 130.5042 }
];

const taunts = [
  [0, 0, "まだ地図は白い。ここから全部始まる。"],
  [1, 9, "百名山の扉、開きました。"],
  [10, 19, "もう立派に山に呼ばれてる。"],
  [20, 29, "週末の行き先がだいたい山。"],
  [30, 39, "百名山、だいぶ本気。"],
  [40, 49, "ここまで来たら半分は射程圏。"],
  [50, 50, "半分制覇。これはもう誇っていい。"],
  [51, 69, "だいぶ日本地図が染まってきた。"],
  [70, 79, "ここから先は猛者の領域。"],
  [80, 89, "百名山完登が現実味を帯びてきた。"],
  [90, 98, "あと少し。未踏の山が逆に目立つ。"],
  [99, 99, "ラスボス、残しましたね。"],
  [100, 100, "日本百名山、完登。"]
];

const state = {
  climbed: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")),
  query: "",
  status: "all",
  area: "all",
  selectedId: null
};

let japanGeoJson = null;

const els = {
  climbedCount: document.querySelector("#climbedCount"),
  rateValue: document.querySelector("#rateValue"),
  progressFill: document.querySelector("#progressFill"),
  tauntText: document.querySelector("#tauntText"),
  mountainList: document.querySelector("#mountainList"),
  mountainDots: document.querySelector("#mountainDots"),
  japanMapPaths: document.querySelector("#japanMapPaths"),
  searchInput: document.querySelector("#searchInput"),
  areaFilter: document.querySelector("#areaFilter"),
  visibleCount: document.querySelector("#visibleCount"),
  clearAllButton: document.querySelector("#clearAllButton"),
  demoButton: document.querySelector("#demoButton"),
  openShareButton: document.querySelector("#openShareButton"),
  closeShareButton: document.querySelector("#closeShareButton"),
  shareModal: document.querySelector("#shareModal"),
  sharePanel: document.querySelector("#sharePanel"),
  generateButton: document.querySelector("#generateButton"),
  downloadButton: document.querySelector("#downloadButton"),
  shareButton: document.querySelector("#shareButton"),
  canvas: document.querySelector("#shareCanvas")
};

const mapExtent = {
  minLng: 129.35,
  maxLng: 145.8,
  minLat: 30.0,
  maxLat: 45.65
};

function project({ lat, lng }, box = { x: 42, y: 42, w: 336, h: 430 }) {
  const { minLng, maxLng, minLat, maxLat } = mapExtent;
  return {
    x: box.x + ((lng - minLng) / (maxLng - minLng)) * box.w,
    y: box.y + ((maxLat - lat) / (maxLat - minLat)) * box.h
  };
}

function projectCoord(coord, box) {
  return project({ lng: coord[0], lat: coord[1] }, box);
}

function getTaunt(count) {
  return taunts.find(([min, max]) => count >= min && count <= max)?.[2] || taunts[0][2];
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.climbed]));
}

function populateAreas() {
  const areas = [...new Set(mountains.map((mountain) => mountain.area))];
  for (const area of areas) {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = area;
    els.areaFilter.append(option);
  }
}

function drawMapDots() {
  els.mountainDots.innerHTML = "";
  for (const mountain of mountains) {
    const point = project(mountain);
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("class", "mountain-dot");
    dot.setAttribute("cx", point.x.toFixed(1));
    dot.setAttribute("cy", point.y.toFixed(1));
    dot.setAttribute("r", "5.1");
    dot.setAttribute("tabindex", "0");
    dot.dataset.id = mountain.id;
    dot.setAttribute("aria-label", mountain.name);
    dot.addEventListener("click", () => selectMountain(mountain.id, true));
    dot.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMountain(mountain.id, true);
      }
    });
    els.mountainDots.append(dot);
  }
}

async function loadJapanMap() {
  const response = await fetch("./data/japan-simplified.geojson");
  if (!response.ok) {
    throw new Error("Japan map data could not be loaded.");
  }
  japanGeoJson = await response.json();
}

function ringToPath(ring, box) {
  return ring
    .map((coord, index) => {
      const point = projectCoord(coord, box);
      return `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    })
    .join(" ") + " Z";
}

function polygonToPath(polygon, box) {
  return polygon.map((ring) => ringToPath(ring, box)).join(" ");
}

function featureToPath(feature, box) {
  const polygons = feature.geometry.type === "Polygon" ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  return polygons.map((polygon) => polygonToPath(polygon, box)).join(" ");
}

function drawJapanSvg() {
  if (!japanGeoJson) return;
  els.japanMapPaths.innerHTML = "";

  for (const feature of japanGeoJson.features) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "land");
    path.setAttribute("d", featureToPath(feature, { x: 38, y: 36, w: 346, h: 442 }));
    els.japanMapPaths.append(path);
  }
}

function getFilteredMountains() {
  const query = state.query.trim().toLowerCase();
  return mountains.filter((mountain) => {
    const climbed = state.climbed.has(mountain.id);
    const text = `${mountain.name} ${mountain.kana} ${mountain.area} ${mountain.prefectures.join(" ")}`.toLowerCase();
    if (query && !text.includes(query)) return false;
    if (state.status === "climbed" && !climbed) return false;
    if (state.status === "unclimbed" && climbed) return false;
    if (state.area !== "all" && mountain.area !== state.area) return false;
    return true;
  });
}

function renderList() {
  const filtered = getFilteredMountains();
  els.visibleCount.textContent = `${filtered.length}座表示`;
  els.mountainList.innerHTML = "";

  for (const mountain of filtered) {
    const row = document.createElement("label");
    row.className = `mountain-row${state.selectedId === mountain.id ? " is-selected" : ""}`;
    row.dataset.id = mountain.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.climbed.has(mountain.id);
    checkbox.addEventListener("change", () => {
      toggleMountain(mountain.id, checkbox.checked);
    });

    const body = document.createElement("div");
    body.innerHTML = `
      <div class="mountain-name">
        <span>${mountain.name}</span>
        <span class="mountain-kana">${mountain.kana}</span>
      </div>
      <div class="mountain-detail">${mountain.area} / ${mountain.prefectures.join("・")}</div>
    `;

    const elevation = document.createElement("div");
    elevation.className = "elevation";
    elevation.textContent = `${mountain.elevation}m`;

    row.addEventListener("mouseenter", () => selectMountain(mountain.id, false));
    row.addEventListener("click", () => selectMountain(mountain.id, false));
    row.append(checkbox, body, elevation);
    els.mountainList.append(row);
  }
}

function updateSummary() {
  const count = state.climbed.size;
  const rate = Math.round((count / mountains.length) * 100);
  els.climbedCount.textContent = count;
  els.rateValue.textContent = rate;
  els.progressFill.style.width = `${rate}%`;
  document.documentElement.style.setProperty("--rate", rate);
  els.tauntText.textContent = getTaunt(count);
}

function updateDots() {
  document.querySelectorAll(".mountain-dot").forEach((dot) => {
    const id = Number(dot.dataset.id);
    dot.classList.toggle("is-climbed", state.climbed.has(id));
    dot.classList.toggle("is-selected", state.selectedId === id);
  });
}

function render() {
  updateSummary();
  updateDots();
  renderList();
  drawShareImage();
}

function toggleMountain(id, shouldClimb) {
  if (shouldClimb) state.climbed.add(id);
  else state.climbed.delete(id);
  state.selectedId = id;
  persist();
  render();
}

function selectMountain(id, shouldScroll) {
  state.selectedId = id;
  updateDots();
  document.querySelectorAll(".mountain-row").forEach((row) => {
    row.classList.toggle("is-selected", Number(row.dataset.id) === id);
  });

  if (shouldScroll) {
    const row = document.querySelector(`.mountain-row[data-id="${id}"]`);
    row?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function drawShareMap(ctx, box) {
  ctx.save();
  ctx.translate(box.x, box.y);
  ctx.scale(box.w / 420, box.h / 520);

  if (japanGeoJson) {
    ctx.fillStyle = "#d9ded1";
    ctx.strokeStyle = "rgba(44,85,65,0.30)";
    ctx.lineWidth = 1.6;
    for (const feature of japanGeoJson.features) {
      const featurePath = new Path2D(featureToPath(feature, { x: 38, y: 36, w: 346, h: 442 }));
      ctx.fill(featurePath);
      ctx.stroke(featurePath);
    }
  }

  for (const mountain of mountains) {
    const point = project(mountain);
    const climbed = state.climbed.has(mountain.id);
    ctx.beginPath();
    ctx.arc(point.x, point.y, climbed ? 6.2 : 4.8, 0, Math.PI * 2);
    ctx.fillStyle = climbed ? "#d94d2b" : "#999f98";
    ctx.fill();
    ctx.lineWidth = 2.2;
    ctx.strokeStyle = "#fffaf0";
    ctx.stroke();
  }

  ctx.restore();
}

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawMountainLogo(ctx, x, y, scale = 1, color = "#fffaf0") {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(4, 40);
  ctx.lineTo(20, 13);
  ctx.lineTo(28, 24);
  ctx.lineTo(37, 5);
  ctx.lineTo(60, 40);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#1f2923";
  ctx.beginPath();
  ctx.moveTo(20, 13);
  ctx.lineTo(17, 27);
  ctx.lineTo(24, 20);
  ctx.lineTo(28, 30);
  ctx.lineTo(37, 5);
  ctx.lineTo(41, 23);
  ctx.lineTo(47, 16);
  ctx.lineTo(55, 29);
  ctx.lineTo(47, 24);
  ctx.lineTo(42, 31);
  ctx.lineTo(37, 18);
  ctx.lineTo(30, 36);
  ctx.lineTo(23, 26);
  ctx.lineTo(16, 33);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPosterTexture(ctx) {
  ctx.save();
  ctx.strokeStyle = "rgba(243,236,220,0.055)";
  ctx.lineWidth = 1.5;
  for (let y = 96; y < 860; y += 36) {
    ctx.beginPath();
    ctx.moveTo(98, y);
    ctx.bezierCurveTo(280, y - 34, 450, y + 38, 642, y - 8);
    ctx.bezierCurveTo(790, y - 42, 884, y + 16, 980, y - 12);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(243,236,220,0.035)";
  for (let i = 0; i < 620; i += 1) {
    const x = 72 + ((i * 73) % 936);
    const y = 72 + ((i * 151) % 936);
    const size = 0.7 + (i % 3) * 0.35;
    ctx.fillRect(x, y, size, size);
  }
  ctx.restore();
}

function drawCompass(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = "rgba(243,236,220,0.62)";
  ctx.fillStyle = "rgba(243,236,220,0.72)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.42, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 8; i += 1) {
    const angle = (Math.PI * 2 * i) / 8;
    const outer = i % 2 === 0 ? size * 0.58 : size * 0.36;
    const inner = size * 0.08;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
    ctx.lineTo(Math.cos(angle + 0.22) * inner, Math.sin(angle + 0.22) * inner);
    ctx.lineTo(Math.cos(angle - 0.22) * inner, Math.sin(angle - 0.22) * inner);
    ctx.closePath();
    ctx.fill();
  }
  ctx.font = "900 24px system-ui, sans-serif";
  ctx.fillText("N", -8, -size * 0.62);
  ctx.restore();
}

function drawShareImage() {
  const ctx = els.canvas.getContext("2d");
  const count = state.climbed.size;
  const rate = Math.round((count / mountains.length) * 100);

  ctx.clearRect(0, 0, 1080, 1080);
  ctx.fillStyle = "#1f2923";
  ctx.fillRect(0, 0, 1080, 1080);

  ctx.fillStyle = "#f3ecdc";
  roundedRect(ctx, 44, 44, 992, 992, 20);
  ctx.fill();

  ctx.fillStyle = "#1f2923";
  roundedRect(ctx, 62, 62, 956, 956, 14);
  ctx.fill();
  drawPosterTexture(ctx);

  ctx.strokeStyle = "rgba(255,250,240,0.68)";
  ctx.lineWidth = 3;
  roundedRect(ctx, 82, 82, 916, 916, 12);
  ctx.stroke();

  drawMountainLogo(ctx, 158, 116, 2.25, "#f3ecdc");

  ctx.fillStyle = "#f3ecdc";
  ctx.font = "900 98px system-ui, sans-serif";
  ctx.fillText("日本百名山", 106, 288);

  ctx.fillStyle = "#d94d2b";
  ctx.font = "900 182px system-ui, sans-serif";
  const countText = String(count).padStart(2, "0");
  const countX = 106;
  const countWidth = ctx.measureText(countText).width;
  ctx.fillText(countText, countX, 462);

  ctx.font = "900 86px system-ui, sans-serif";
  ctx.fillStyle = "#f3ecdc";
  ctx.fillText("/ 100", countX + countWidth + 24, 445);

  ctx.fillStyle = "#d94d2b";
  roundedRect(ctx, 112, 494, 266, 62, 7);
  ctx.fill();
  ctx.fillStyle = "#fffaf0";
  ctx.font = "900 34px system-ui, sans-serif";
  ctx.fillText("登頂済み", 145, 535);

  drawShareMap(ctx, { x: 392, y: 126, w: 620, h: 730 });

  ctx.fillStyle = "#f3ecdc";
  ctx.font = "900 38px system-ui, sans-serif";
  wrapText(ctx, getTaunt(count), 112, 650, 420, 54);

  ctx.beginPath();
  ctx.moveTo(112, 588);
  ctx.lineTo(386, 588);
  ctx.strokeStyle = "rgba(255,250,240,0.58)";
  ctx.lineWidth = 3;
  ctx.stroke();

  drawMountainLogo(ctx, 112, 700, 0.8, "#f3ecdc");
  drawCompass(ctx, 926, 758, 58);

  ctx.strokeStyle = "rgba(255,250,240,0.26)";
  ctx.lineWidth = 2;
  roundedRect(ctx, 734, 772, 226, 108, 0);
  ctx.stroke();

  ctx.strokeStyle = "rgba(255,250,240,0.28)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(112, 905);
  ctx.lineTo(968, 905);
  ctx.stroke();

  ctx.fillStyle = "#f3ecdc";
  ctx.font = "800 30px system-ui, sans-serif";
  ctx.fillText("#日本百名山  #登山", 360, 950);

  drawMountainLogo(ctx, 360, 976, 0.52, "#f3ecdc");
  ctx.font = "700 26px system-ui, sans-serif";
  ctx.fillText("Hyakumeizan Badge", 402, 1002);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  const chars = [...text];
  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = char;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

async function canvasToFile() {
  return new Promise((resolve) => {
    els.canvas.toBlob((blob) => {
      resolve(new File([blob], "hyakumeizan-badge.png", { type: "image/png" }));
    }, "image/png");
  });
}

function downloadCanvas() {
  const link = document.createElement("a");
  link.download = "hyakumeizan-badge.png";
  link.href = els.canvas.toDataURL("image/png");
  link.click();
}

async function shareCanvas() {
  const file = await canvasToFile();
  if (navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      files: [file],
      title: "日本百名山チェック",
      text: `${state.climbed.size}/100 登頂済み #日本百名山 #登山`
    });
  } else {
    downloadCanvas();
  }
}

function openSharePanel() {
  els.shareModal.hidden = false;
  document.body.classList.add("modal-open");
  drawShareImage();
  requestAnimationFrame(() => {
    els.sharePanel.focus({ preventScroll: true });
  });
}

function closeSharePanel() {
  els.shareModal.hidden = true;
  document.body.classList.remove("modal-open");
  els.openShareButton.focus({ preventScroll: true });
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

els.areaFilter.addEventListener("change", (event) => {
  state.area = event.target.value;
  renderList();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    state.status = button.dataset.status;
    document.querySelectorAll(".segment").forEach((item) => item.classList.toggle("is-active", item === button));
    renderList();
  });
});

els.clearAllButton.addEventListener("click", () => {
  state.climbed.clear();
  state.selectedId = null;
  persist();
  render();
});

els.demoButton.addEventListener("click", () => {
  state.climbed = new Set(mountains.slice(0, 37).map((mountain) => mountain.id));
  state.selectedId = 37;
  persist();
  render();
});

els.openShareButton.addEventListener("click", openSharePanel);
els.closeShareButton.addEventListener("click", closeSharePanel);
els.shareModal.addEventListener("click", (event) => {
  if (event.target === els.shareModal) {
    closeSharePanel();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.shareModal.hidden) {
    closeSharePanel();
  }
});
els.generateButton.addEventListener("click", drawShareImage);
els.downloadButton.addEventListener("click", downloadCanvas);
els.shareButton.addEventListener("click", () => {
  shareCanvas().catch(() => downloadCanvas());
});

async function init() {
  populateAreas();
  drawMapDots();
  try {
    await loadJapanMap();
    drawJapanSvg();
  } catch (error) {
    console.error(error);
  }
  render();
}

init();
