let pokedex = {
   "이상해씨": {
       "num": 1,
       "name": "Bulbasaur",
       "types": ["풀", "독"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 45,
           "atk": 49,
           "def": 49,
           "spa": 65,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "심록",
           "H": "엽록소"
       },
       "heightm": 0.7,
       "weightkg": 6.9,
       "color": "Green",
       "evos": ["Ivysaur"],
       "eggGroups": ["Monster", "Grass"]
   },
   "이상해풀": {
       "num": 2,
       "name": "Ivysaur",
       "types": ["풀", "독"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 62,
           "def": 63,
           "spa": 80,
           "spd": 80,
           "spe": 60
       },
       "abilities": {
           "0": "심록",
           "H": "엽록소"
       },
       "heightm": 1,
       "weightkg": 13,
       "color": "Green",
       "prevo": "Bulbasaur",
       "evoLevel": 16,
       "evos": ["Venusaur"],
       "eggGroups": ["Monster", "Grass"]
   },
   "이상해꽃": {
       "num": 3,
       "name": "Venusaur",
       "types": ["풀", "독"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 80,
           "atk": 82,
           "def": 83,
           "spa": 100,
           "spd": 100,
           "spe": 80
       },
       "abilities": {
           "0": "심록",
           "H": "엽록소"
       },
       "heightm": 2,
       "weightkg": 100,
       "color": "Green",
       "prevo": "Ivysaur",
       "evoLevel": 32,
       "eggGroups": ["Monster", "Grass"],
       "otherFormes": ["Venusaur-Mega"],
       "formeOrder": ["Venusaur", "Venusaur-Mega"],
       "canGigantamax": "G-Max Vine Lash"
   },
   "파이리": {
       "num": 4,
       "name": "Charmander",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 39,
           "atk": 52,
           "def": 43,
           "spa": 60,
           "spd": 50,
           "spe": 65
       },
       "abilities": {
           "0": "맹화",
           "H": "선파워"
       },
       "heightm": 0.6,
       "weightkg": 8.5,
       "color": "Red",
       "evos": ["Charmeleon"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "리자드": {
       "num": 5,
       "name": "Charmeleon",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 58,
           "atk": 64,
           "def": 58,
           "spa": 80,
           "spd": 65,
           "spe": 80
       },
       "abilities": {
           "0": "맹화",
           "H": "선파워"
       },
       "heightm": 1.1,
       "weightkg": 19,
       "color": "Red",
       "prevo": "Charmander",
       "evoLevel": 16,
       "evos": ["Charizard"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "리자몽": {
       "num": 6,
       "name": "Charizard",
       "types": ["불꽃", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 78,
           "atk": 84,
           "def": 78,
           "spa": 109,
           "spd": 85,
           "spe": 100
       },
       "abilities": {
           "0": "맹화",
           "H": "선파워"
       },
       "heightm": 1.7,
       "weightkg": 90.5,
       "color": "Red",
       "prevo": "Charmeleon",
       "evoLevel": 36,
       "eggGroups": ["Monster", "Dragon"],
       "otherFormes": ["Charizard-Mega-X", "Charizard-Mega-Y"],
       "formeOrder": ["Charizard", "Charizard-Mega-X", "Charizard-Mega-Y"],
       "canGigantamax": "G-Max Wildfire"
   },
   "꼬부기": {
       "num": 7,
       "name": "Squirtle",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 44,
           "atk": 48,
           "def": 65,
           "spa": 50,
           "spd": 64,
           "spe": 43
       },
       "abilities": {
           "0": "급류",
           "H": "젖은접시"
       },
       "heightm": 0.5,
       "weightkg": 9,
       "color": "Blue",
       "evos": ["Wartortle"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "어니부기": {
       "num": 8,
       "name": "Wartortle",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 59,
           "atk": 63,
           "def": 80,
           "spa": 65,
           "spd": 80,
           "spe": 58
       },
       "abilities": {
           "0": "급류",
           "H": "젖은접시"
       },
       "heightm": 1,
       "weightkg": 22.5,
       "color": "Blue",
       "prevo": "Squirtle",
       "evoLevel": 16,
       "evos": ["Blastoise"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "거북왕": {
       "num": 9,
       "name": "Blastoise",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 79,
           "atk": 83,
           "def": 100,
           "spa": 85,
           "spd": 105,
           "spe": 78
       },
       "abilities": {
           "0": "급류",
           "H": "젖은접시"
       },
       "heightm": 1.6,
       "weightkg": 85.5,
       "color": "Blue",
       "prevo": "Wartortle",
       "evoLevel": 36,
       "eggGroups": ["Monster", "Water 1"],
       "otherFormes": ["Blastoise-Mega"],
       "formeOrder": ["Blastoise", "Blastoise-Mega"],
       "canGigantamax": "G-Max Cannonade"
   },
   "캐터피": {
       "num": 10,
       "name": "Caterpie",
       "types": ["벌레"],
       "baseStats": {
           "hp": 45,
           "atk": 30,
           "def": 35,
           "spa": 20,
           "spd": 20,
           "spe": 45
       },
       "abilities": {
           "0": "인분",
           "H": "도주"
       },
       "heightm": 0.3,
       "weightkg": 2.9,
       "color": "Green",
       "evos": ["Metapod"],
       "eggGroups": ["Bug"]
   },
   "단데기": {
       "num": 11,
       "name": "Metapod",
       "types": ["벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 20,
           "def": 55,
           "spa": 25,
           "spd": 25,
           "spe": 30
       },
       "abilities": {
           "0": "탈피"
       },
       "heightm": 0.7,
       "weightkg": 9.9,
       "color": "Green",
       "prevo": "Caterpie",
       "evoLevel": 7,
       "evos": ["Butterfree"],
       "eggGroups": ["Bug"]
   },
   "버터플": {
       "num": 12,
       "name": "Butterfree",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 45,
           "def": 50,
           "spa": 90,
           "spd": 80,
           "spe": 70
       },
       "abilities": {
           "0": "복안",
           "H": "색안경"
       },
       "heightm": 1.1,
       "weightkg": 32,
       "color": "White",
       "prevo": "Metapod",
       "evoLevel": 10,
       "eggGroups": ["Bug"],
       "canGigantamax": "G-Max Befuddle"
   },
   "뿔충이": {
       "num": 13,
       "name": "Weedle",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 40,
           "atk": 35,
           "def": 30,
           "spa": 20,
           "spd": 20,
           "spe": 50
       },
       "abilities": {
           "0": "인분",
           "H": "도주"
       },
       "heightm": 0.3,
       "weightkg": 3.2,
       "color": "Brown",
       "evos": ["Kakuna"],
       "eggGroups": ["Bug"]
   },
   "딱충이": {
       "num": 14,
       "name": "Kakuna",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 45,
           "atk": 25,
           "def": 50,
           "spa": 25,
           "spd": 25,
           "spe": 35
       },
       "abilities": {
           "0": "탈피"
       },
       "heightm": 0.6,
       "weightkg": 10,
       "color": "Yellow",
       "prevo": "Weedle",
       "evoLevel": 7,
       "evos": ["Beedrill"],
       "eggGroups": ["Bug"]
   },
   "독침붕": {
       "num": 15,
       "name": "Beedrill",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 40,
           "spa": 45,
           "spd": 80,
           "spe": 75
       },
       "abilities": {
           "0": "벌레의 알림",
           "H": "스나이퍼"
       },
       "heightm": 1,
       "weightkg": 29.5,
       "color": "Yellow",
       "prevo": "Kakuna",
       "evoLevel": 10,
       "eggGroups": ["Bug"],
       "otherFormes": ["Beedrill-Mega"],
       "formeOrder": ["Beedrill", "Beedrill-Mega"]
   },
   "구구": {
       "num": 16,
       "name": "Pidgey",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 40,
           "spa": 35,
           "spd": 35,
           "spe": 56
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "갈지자걸음",
           "H": "부풀린가슴"
       },
       "heightm": 0.3,
       "weightkg": 1.8,
       "color": "Brown",
       "evos": ["Pidgeotto"],
       "eggGroups": ["Flying"]
   },
   "피죤": {
       "num": 17,
       "name": "Pidgeotto",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 63,
           "atk": 60,
           "def": 55,
           "spa": 50,
           "spd": 50,
           "spe": 71
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "갈지자걸음",
           "H": "부풀린가슴"
       },
       "heightm": 1.1,
       "weightkg": 30,
       "color": "Brown",
       "prevo": "Pidgey",
       "evoLevel": 18,
       "evos": ["Pidgeot"],
       "eggGroups": ["Flying"]
   },
   "피죤투": {
       "num": 18,
       "name": "Pidgeot",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 83,
           "atk": 80,
           "def": 75,
           "spa": 70,
           "spd": 70,
           "spe": 101
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "갈지자걸음",
           "H": "부풀린가슴"
       },
       "heightm": 1.5,
       "weightkg": 39.5,
       "color": "Brown",
       "prevo": "Pidgeotto",
       "evoLevel": 36,
       "eggGroups": ["Flying"],
       "otherFormes": ["Pidgeot-Mega"],
       "formeOrder": ["Pidgeot", "Pidgeot-Mega"]
   },
   "꼬렛": {
       "num": 19,
       "name": "Rattata",
       "types": ["노말"],
       "baseStats": {
           "hp": 30,
           "atk": 56,
           "def": 35,
           "spa": 25,
           "spd": 35,
           "spe": 72
       },
       "abilities": {
           "0": "도주",
           "1": "근성",
           "H": "의욕"
       },
       "heightm": 0.3,
       "weightkg": 3.5,
       "color": "Purple",
       "evos": ["Raticate"],
       "eggGroups": ["Field"],
       "otherFormes": ["Rattata-Alola"],
       "formeOrder": ["Rattata", "Rattata-Alola"]
   },
   "꼬렛-알로라": {
       "num": 19,
       "name": "Rattata-Alola",
       "baseSpecies": "Rattata",
       "forme": "Alola",
       "types": ["악", "노말"],
       "baseStats": {
           "hp": 30,
           "atk": 56,
           "def": 35,
           "spa": 25,
           "spd": 35,
           "spe": 72
       },
       "abilities": {
           "0": "먹보",
           "1": "의욕",
           "H": "두꺼운 지방"
       },
       "heightm": 0.3,
       "weightkg": 3.8,
       "color": "Black",
       "evos": ["Raticate-Alola"],
       "eggGroups": ["Field"]
   },
   "레트라": {
       "num": 20,
       "name": "Raticate",
       "types": ["노말"],
       "baseStats": {
           "hp": 55,
           "atk": 81,
           "def": 60,
           "spa": 50,
           "spd": 70,
           "spe": 97
       },
       "abilities": {
           "0": "도주",
           "1": "근성",
           "H": "의욕"
       },
       "heightm": 0.7,
       "weightkg": 18.5,
       "color": "Brown",
       "prevo": "Rattata",
       "evoLevel": 20,
       "eggGroups": ["Field"],
       "otherFormes": ["Raticate-Alola", "Raticate-Alola-Totem"],
       "formeOrder": ["Raticate", "Raticate-Alola", "Raticate-Alola-Totem"]
   },
   "레트라-알로라": {
       "num": 20,
       "name": "Raticate-Alola",
       "baseSpecies": "Raticate",
       "forme": "Alola",
       "types": ["악", "노말"],
       "baseStats": {
           "hp": 75,
           "atk": 71,
           "def": 70,
           "spa": 40,
           "spd": 80,
           "spe": 77
       },
       "abilities": {
           "0": "먹보",
           "1": "의욕",
           "H": "두꺼운 지방"
       },
       "heightm": 0.7,
       "weightkg": 25.5,
       "color": "Black",
       "prevo": "Rattata-Alola",
       "evoLevel": 20,
       "eggGroups": ["Field"]
   },
   "깨비참": {
       "num": 21,
       "name": "Spearow",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 60,
           "def": 30,
           "spa": 31,
           "spd": 31,
           "spe": 70
       },
       "abilities": {
           "0": "날카로운 눈",
           "H": "스나이퍼"
       },
       "heightm": 0.3,
       "weightkg": 2,
       "color": "Brown",
       "evos": ["Fearow"],
       "eggGroups": ["Flying"]
   },
   "깨비드릴조": {
       "num": 22,
       "name": "Fearow",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 65,
           "spa": 61,
           "spd": 61,
           "spe": 100
       },
       "abilities": {
           "0": "날카로운 눈",
           "H": "스나이퍼"
       },
       "heightm": 1.2,
       "weightkg": 38,
       "color": "Brown",
       "prevo": "Spearow",
       "evoLevel": 20,
       "eggGroups": ["Flying"]
   },
   "아보": {
       "num": 23,
       "name": "Ekans",
       "types": ["독"],
       "baseStats": {
           "hp": 35,
           "atk": 60,
           "def": 44,
           "spa": 40,
           "spd": 54,
           "spe": 55
       },
       "abilities": {
           "0": "위협",
           "1": "탈피",
           "H": "긴장감"
       },
       "heightm": 2,
       "weightkg": 6.9,
       "color": "Purple",
       "evos": ["Arbok"],
       "eggGroups": ["Field", "Dragon"]
   },
   "아보크": {
       "num": 24,
       "name": "Arbok",
       "types": ["독"],
       "baseStats": {
           "hp": 60,
           "atk": 95,
           "def": 69,
           "spa": 65,
           "spd": 79,
           "spe": 80
       },
       "abilities": {
           "0": "위협",
           "1": "탈피",
           "H": "긴장감"
       },
       "heightm": 3.5,
       "weightkg": 65,
       "color": "Purple",
       "prevo": "Ekans",
       "evoLevel": 22,
       "eggGroups": ["Field", "Dragon"]
   },
   "피카츄": {
       "num": 25,
       "name": "Pikachu",
       "types": ["전기"],
       "baseStats": {
           "hp": 35,
           "atk": 55,
           "def": 40,
           "spa": 50,
           "spd": 50,
           "spe": 90
       },
       "abilities": {
           "0": "정전기",
           "H": "피뢰침"
       },
       "heightm": 0.4,
       "weightkg": 6,
       "color": "Yellow",
       "prevo": "Pichu",
       "evoType": "levelFriendship",
       "evos": ["Raichu", "Raichu-Alola"],
       "eggGroups": ["Field", "Fairy"],
       "otherFormes": ["Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
       "formeOrder": ["Pikachu", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Cosplay"],
       "canGigantamax": "G-Max Volt Crash"
   },
   "피카츄-알로라": {
       "num": 25,
       "name": "Pikachu-Alola",
       "baseSpecies": "Pikachu",
       "forme": "Alola",
       "types": ["전기"],
       "gender": "M",
       "baseStats": {
           "hp": 35,
           "atk": 55,
           "def": 40,
           "spa": 50,
           "spd": 50,
           "spe": 90
       },
       "abilities": {
           "0": "정전기",
           "H": "피뢰침"
       },
       "heightm": 0.4,
       "weightkg": 6,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"],
       "gen": 7
   },
   "라이츄": {
       "num": 26,
       "name": "Raichu",
       "types": ["전기"],
       "baseStats": {
           "hp": 60,
           "atk": 90,
           "def": 55,
           "spa": 90,
           "spd": 80,
           "spe": 110
       },
       "abilities": {
           "0": "정전기",
           "H": "피뢰침"
       },
       "heightm": 0.8,
       "weightkg": 30,
       "color": "Yellow",
       "prevo": "Pikachu",
       "evoType": "useItem",
       "evoItem": "Thunder Stone",
       "eggGroups": ["Field", "Fairy"],
       "otherFormes": ["Raichu-Alola"],
       "formeOrder": ["Raichu", "Raichu-Alola"]
   },
   "라이츄-알로라": {
       "num": 26,
       "name": "Raichu-Alola",
       "baseSpecies": "Raichu",
       "forme": "Alola",
       "types": ["전기", "에스퍼"],
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 50,
           "spa": 95,
           "spd": 85,
           "spe": 110
       },
       "abilities": {
           "0": "서핑테일"
       },
       "heightm": 0.7,
       "weightkg": 21,
       "color": "Brown",
       "prevo": "Pikachu",
       "evoType": "useItem",
       "evoItem": "Thunder Stone",
       "eggGroups": ["Field", "Fairy"]
   },
   "모래두지": {
       "num": 27,
       "name": "Sandshrew",
       "types": ["땅"],
       "baseStats": {
           "hp": 50,
           "atk": 75,
           "def": 85,
           "spa": 20,
           "spd": 30,
           "spe": 40
       },
       "abilities": {
           "0": "모래숨기",
           "H": "모래헤치기"
       },
       "heightm": 0.6,
       "weightkg": 12,
       "color": "Yellow",
       "evos": ["Sandslash"],
       "eggGroups": ["Field"],
       "otherFormes": ["Sandshrew-Alola"],
       "formeOrder": ["Sandshrew", "Sandshrew-Alola"]
   },
   "모래두지-알로라": {
       "num": 27,
       "name": "Sandshrew-Alola",
       "baseSpecies": "Sandshrew",
       "forme": "Alola",
       "types": ["얼음", "강철"],
       "baseStats": {
           "hp": 50,
           "atk": 75,
           "def": 90,
           "spa": 10,
           "spd": 35,
           "spe": 40
       },
       "abilities": {
           "0": "눈숨기",
           "H": "눈치우기"
       },
       "heightm": 0.7,
       "weightkg": 40,
       "color": "White",
       "evos": ["Sandslash-Alola"],
       "eggGroups": ["Field"]
   },
   "고지": {
       "num": 28,
       "name": "Sandslash",
       "types": ["땅"],
       "baseStats": {
           "hp": 75,
           "atk": 100,
           "def": 110,
           "spa": 45,
           "spd": 55,
           "spe": 65
       },
       "abilities": {
           "0": "모래숨기",
           "H": "모래헤치기"
       },
       "heightm": 1,
       "weightkg": 29.5,
       "color": "Yellow",
       "prevo": "Sandshrew",
       "evoLevel": 22,
       "eggGroups": ["Field"],
       "otherFormes": ["Sandslash-Alola"],
       "formeOrder": ["Sandslash", "Sandslash-Alola"]
   },
   "고지-알로라": {
       "num": 28,
       "name": "Sandslash-Alola",
       "baseSpecies": "Sandslash",
       "forme": "Alola",
       "types": ["얼음", "강철"],
       "baseStats": {
           "hp": 75,
           "atk": 100,
           "def": 120,
           "spa": 25,
           "spd": 65,
           "spe": 65
       },
       "abilities": {
           "0": "눈숨기",
           "H": "눈치우기"
       },
       "heightm": 1.2,
       "weightkg": 55,
       "color": "Blue",
       "prevo": "Sandshrew-Alola",
       "evoType": "useItem",
       "evoItem": "Ice Stone",
       "eggGroups": ["Field"]
   },
   "니드런♀": {
       "num": 29,
       "name": "Nidoran-F",
       "types": ["독"],
       "gender": "F",
       "baseStats": {
           "hp": 55,
           "atk": 47,
           "def": 52,
           "spa": 40,
           "spd": 40,
           "spe": 41
       },
       "abilities": {
           "0": "독가시",
           "1": "투쟁심",
           "H": "의욕"
       },
       "heightm": 0.4,
       "weightkg": 7,
       "color": "Blue",
       "evos": ["Nidorina"],
       "eggGroups": ["Monster", "Field"]
   },
   "니드리나": {
       "num": 30,
       "name": "Nidorina",
       "types": ["독"],
       "gender": "F",
       "baseStats": {
           "hp": 70,
           "atk": 62,
           "def": 67,
           "spa": 55,
           "spd": 55,
           "spe": 56
       },
       "abilities": {
           "0": "독가시",
           "1": "투쟁심",
           "H": "의욕"
       },
       "heightm": 0.8,
       "weightkg": 20,
       "color": "Blue",
       "prevo": "Nidoran-F",
       "evoLevel": 16,
       "evos": ["Nidoqueen"],
       "eggGroups": ["Undiscovered"]
   },
   "니드퀸": {
       "num": 31,
       "name": "Nidoqueen",
       "types": ["독", "땅"],
       "gender": "F",
       "baseStats": {
           "hp": 90,
           "atk": 92,
           "def": 87,
           "spa": 75,
           "spd": 85,
           "spe": 76
       },
       "abilities": {
           "0": "독가시",
           "1": "투쟁심",
           "H": "우격다짐"
       },
       "heightm": 1.3,
       "weightkg": 60,
       "color": "Blue",
       "prevo": "Nidorina",
       "evoType": "useItem",
       "evoItem": "Moon Stone",
       "eggGroups": ["Undiscovered"]
   },
   "니드런♂": {
       "num": 32,
       "name": "Nidoran-M",
       "types": ["독"],
       "gender": "M",
       "baseStats": {
           "hp": 46,
           "atk": 57,
           "def": 40,
           "spa": 40,
           "spd": 40,
           "spe": 50
       },
       "abilities": {
           "0": "독가시",
           "1": "투쟁심",
           "H": "의욕"
       },
       "heightm": 0.5,
       "weightkg": 9,
       "color": "Purple",
       "evos": ["Nidorino"],
       "eggGroups": ["Monster", "Field"]
   },
   "니드리노": {
       "num": 33,
       "name": "Nidorino",
       "types": ["독"],
       "gender": "M",
       "baseStats": {
           "hp": 61,
           "atk": 72,
           "def": 57,
           "spa": 55,
           "spd": 55,
           "spe": 65
       },
       "abilities": {
           "0": "독가시",
           "1": "투쟁심",
           "H": "의욕"
       },
       "heightm": 0.9,
       "weightkg": 19.5,
       "color": "Purple",
       "prevo": "Nidoran-M",
       "evoLevel": 16,
       "evos": ["Nidoking"],
       "eggGroups": ["Monster", "Field"]
   },
   "니드킹": {
       "num": 34,
       "name": "Nidoking",
       "types": ["독", "땅"],
       "gender": "M",
       "baseStats": {
           "hp": 81,
           "atk": 102,
           "def": 77,
           "spa": 85,
           "spd": 75,
           "spe": 85
       },
       "abilities": {
           "0": "독가시",
           "1": "투쟁심",
           "H": "우격다짐"
       },
       "heightm": 1.4,
       "weightkg": 62,
       "color": "Purple",
       "prevo": "Nidorino",
       "evoType": "useItem",
       "evoItem": "Moon Stone",
       "eggGroups": ["Monster", "Field"]
   },
   "삐삐": {
       "num": 35,
       "name": "Clefairy",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 70,
           "atk": 45,
           "def": 48,
           "spa": 60,
           "spd": 65,
           "spe": 35
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "매직가드",
           "H": "프렌드가드"
       },
       "heightm": 0.6,
       "weightkg": 7.5,
       "color": "Pink",
       "prevo": "Cleffa",
       "evoType": "levelFriendship",
       "evos": ["Clefable"],
       "eggGroups": ["Fairy"]
   },
   "픽시": {
       "num": 36,
       "name": "Clefable",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 95,
           "atk": 70,
           "def": 73,
           "spa": 95,
           "spd": 90,
           "spe": 60
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "매직가드",
           "H": "천진"
       },
       "heightm": 1.3,
       "weightkg": 40,
       "color": "Pink",
       "prevo": "Clefairy",
       "evoType": "useItem",
       "evoItem": "Moon Stone",
       "eggGroups": ["Fairy"]
   },
   "식스테일": {
       "num": 37,
       "name": "Vulpix",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 38,
           "atk": 41,
           "def": 40,
           "spa": 50,
           "spd": 65,
           "spe": 65
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "H": "가뭄"
       },
       "heightm": 0.6,
       "weightkg": 9.9,
       "color": "Brown",
       "evos": ["Ninetales"],
       "eggGroups": ["Field"],
       "otherFormes": ["Vulpix-Alola"],
       "formeOrder": ["Vulpix", "Vulpix-Alola"]
   },
   "식스테일-알로라": {
       "num": 37,
       "name": "Vulpix-Alola",
       "baseSpecies": "Vulpix",
       "forme": "Alola",
       "types": ["얼음"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 38,
           "atk": 41,
           "def": 40,
           "spa": 50,
           "spd": 65,
           "spe": 65
       },
       "abilities": {
           "0": "눈숨기",
           "H": "눈퍼뜨리기"
       },
       "heightm": 0.6,
       "weightkg": 9.9,
       "color": "White",
       "evos": ["Ninetales-Alola"],
       "eggGroups": ["Field"]
   },
   "나인테일": {
       "num": 38,
       "name": "Ninetales",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 73,
           "atk": 76,
           "def": 75,
           "spa": 81,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "H": "가뭄"
       },
       "heightm": 1.1,
       "weightkg": 19.9,
       "color": "Yellow",
       "prevo": "Vulpix",
       "evoType": "useItem",
       "evoItem": "Fire Stone",
       "eggGroups": ["Field"],
       "otherFormes": ["Ninetales-Alola"],
       "formeOrder": ["Ninetales", "Ninetales-Alola"]
   },
   "나인테일-알로라": {
       "num": 38,
       "name": "Ninetales-Alola",
       "baseSpecies": "Ninetales",
       "forme": "Alola",
       "types": ["얼음", "페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 73,
           "atk": 67,
           "def": 75,
           "spa": 81,
           "spd": 100,
           "spe": 109
       },
       "abilities": {
           "0": "눈숨기",
           "H": "눈퍼뜨리기"
       },
       "heightm": 1.1,
       "weightkg": 19.9,
       "color": "Blue",
       "prevo": "Vulpix-Alola",
       "evoType": "useItem",
       "evoItem": "Ice Stone",
       "eggGroups": ["Field"]
   },
   "푸린": {
       "num": 39,
       "name": "Jigglypuff",
       "types": ["노말", "페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 115,
           "atk": 45,
           "def": 20,
           "spa": 45,
           "spd": 25,
           "spe": 20
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "승기",
           "H": "프렌드가드"
       },
       "heightm": 0.5,
       "weightkg": 5.5,
       "color": "Pink",
       "prevo": "Igglybuff",
       "evoType": "levelFriendship",
       "evos": ["Wigglytuff"],
       "eggGroups": ["Fairy"]
   },
   "푸크린": {
       "num": 40,
       "name": "Wigglytuff",
       "types": ["노말", "페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 140,
           "atk": 70,
           "def": 45,
           "spa": 85,
           "spd": 50,
           "spe": 45
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "승기",
           "H": "통찰"
       },
       "heightm": 1,
       "weightkg": 12,
       "color": "Pink",
       "prevo": "Jigglypuff",
       "evoType": "useItem",
       "evoItem": "Moon Stone",
       "eggGroups": ["Fairy"]
   },
   "주뱃": {
       "num": 41,
       "name": "Zubat",
       "types": ["독", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 35,
           "spa": 30,
           "spd": 40,
           "spe": 55
       },
       "abilities": {
           "0": "정신력",
           "H": "틈새포착"
       },
       "heightm": 0.8,
       "weightkg": 7.5,
       "color": "Purple",
       "evos": ["Golbat"],
       "eggGroups": ["Flying"]
   },
   "골뱃": {
       "num": 42,
       "name": "Golbat",
       "types": ["독", "비행"],
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 70,
           "spa": 65,
           "spd": 75,
           "spe": 90
       },
       "abilities": {
           "0": "정신력",
           "H": "틈새포착"
       },
       "heightm": 1.6,
       "weightkg": 55,
       "color": "Purple",
       "prevo": "Zubat",
       "evoLevel": 22,
       "evos": ["Crobat"],
       "eggGroups": ["Flying"]
   },
   "뚜벅쵸": {
       "num": 43,
       "name": "Oddish",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 45,
           "atk": 50,
           "def": 55,
           "spa": 75,
           "spd": 65,
           "spe": 30
       },
       "abilities": {
           "0": "엽록소",
           "H": "도주"
       },
       "heightm": 0.5,
       "weightkg": 5.4,
       "color": "Blue",
       "evos": ["Gloom"],
       "eggGroups": ["Grass"]
   },
   "냄새꼬": {
       "num": 44,
       "name": "Gloom",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 60,
           "atk": 65,
           "def": 70,
           "spa": 85,
           "spd": 75,
           "spe": 40
       },
       "abilities": {
           "0": "엽록소",
           "H": "악취"
       },
       "heightm": 0.8,
       "weightkg": 8.6,
       "color": "Blue",
       "prevo": "Oddish",
       "evoLevel": 21,
       "evos": ["Vileplume", "Bellossom"],
       "eggGroups": ["Grass"]
   },
   "라플레시아": {
       "num": 45,
       "name": "Vileplume",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 85,
           "spa": 110,
           "spd": 90,
           "spe": 50
       },
       "abilities": {
           "0": "엽록소",
           "H": "포자"
       },
       "heightm": 1.2,
       "weightkg": 18.6,
       "color": "Red",
       "prevo": "Gloom",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Grass"]
   },
   "파라스": {
       "num": 46,
       "name": "Paras",
       "types": ["벌레", "풀"],
       "baseStats": {
           "hp": 35,
           "atk": 70,
           "def": 55,
           "spa": 45,
           "spd": 55,
           "spe": 25
       },
       "abilities": {
           "0": "포자",
           "1": "건조피부",
           "H": "습기"
       },
       "heightm": 0.3,
       "weightkg": 5.4,
       "color": "Red",
       "evos": ["Parasect"],
       "eggGroups": ["Bug", "Grass"]
   },
   "파라섹트": {
       "num": 47,
       "name": "Parasect",
       "types": ["벌레", "풀"],
       "baseStats": {
           "hp": 60,
           "atk": 95,
           "def": 80,
           "spa": 60,
           "spd": 80,
           "spe": 30
       },
       "abilities": {
           "0": "포자",
           "1": "건조피부",
           "H": "습기"
       },
       "heightm": 1,
       "weightkg": 29.5,
       "color": "Red",
       "prevo": "Paras",
       "evoLevel": 24,
       "eggGroups": ["Bug", "Grass"]
   },
   "콘팡": {
       "num": 48,
       "name": "Venonat",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 60,
           "atk": 55,
           "def": 50,
           "spa": 40,
           "spd": 55,
           "spe": 45
       },
       "abilities": {
           "0": "복안",
           "1": "색안경",
           "H": "도주"
       },
       "heightm": 1,
       "weightkg": 30,
       "color": "Purple",
       "evos": ["Venomoth"],
       "eggGroups": ["Bug"]
   },
   "도나리": {
       "num": 49,
       "name": "Venomoth",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 70,
           "atk": 65,
           "def": 60,
           "spa": 90,
           "spd": 75,
           "spe": 90
       },
       "abilities": {
           "0": "인분",
           "1": "색안경",
           "H": "미라클스킨"
       },
       "heightm": 1.5,
       "weightkg": 12.5,
       "color": "Purple",
       "prevo": "Venonat",
       "evoLevel": 31,
       "eggGroups": ["Bug"]
   },
   "디그다": {
       "num": 50,
       "name": "Diglett",
       "types": ["땅"],
       "baseStats": {
           "hp": 10,
           "atk": 55,
           "def": 25,
           "spa": 35,
           "spd": 45,
           "spe": 95
       },
       "abilities": {
           "0": "모래숨기",
           "1": "개미지옥",
           "H": "모래의힘"
       },
       "heightm": 0.2,
       "weightkg": 0.8,
       "color": "Brown",
       "evos": ["Dugtrio"],
       "eggGroups": ["Field"],
       "otherFormes": ["Diglett-Alola"],
       "formeOrder": ["Diglett", "Diglett-Alola"]
   },
   "디그다-알로라": {
       "num": 50,
       "name": "Diglett-Alola",
       "baseSpecies": "Diglett",
       "forme": "Alola",
       "types": ["땅", "강철"],
       "baseStats": {
           "hp": 10,
           "atk": 55,
           "def": 30,
           "spa": 35,
           "spd": 45,
           "spe": 90
       },
       "abilities": {
           "0": "모래숨기",
           "1": "컬리헤어",
           "H": "모래의힘"
       },
       "heightm": 0.2,
       "weightkg": 1,
       "color": "Brown",
       "evos": ["Dugtrio-Alola"],
       "eggGroups": ["Field"]
   },
   "닥트리오": {
       "num": 51,
       "name": "Dugtrio",
       "types": ["땅"],
       "baseStats": {
           "hp": 35,
           "atk": 100,
           "def": 50,
           "spa": 50,
           "spd": 70,
           "spe": 120
       },
       "abilities": {
           "0": "모래숨기",
           "1": "개미지옥",
           "H": "모래의힘"
       },
       "heightm": 0.7,
       "weightkg": 33.3,
       "color": "Brown",
       "prevo": "Diglett",
       "evoLevel": 26,
       "eggGroups": ["Field"],
       "otherFormes": ["Dugtrio-Alola"],
       "formeOrder": ["Dugtrio", "Dugtrio-Alola"]
   },
   "닥트리오-알로라": {
       "num": 51,
       "name": "Dugtrio-Alola",
       "baseSpecies": "Dugtrio",
       "forme": "Alola",
       "types": ["땅", "강철"],
       "baseStats": {
           "hp": 35,
           "atk": 100,
           "def": 60,
           "spa": 50,
           "spd": 70,
           "spe": 110
       },
       "abilities": {
           "0": "모래숨기",
           "1": "컬리헤어",
           "H": "모래의힘"
       },
       "heightm": 0.7,
       "weightkg": 66.6,
       "color": "Brown",
       "prevo": "Diglett-Alola",
       "evoLevel": 26,
       "eggGroups": ["Field"]
   },
   "나옹": {
       "num": 52,
       "name": "Meowth",
       "types": ["노말"],
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 35,
           "spa": 40,
           "spd": 40,
           "spe": 90
       },
       "abilities": {
           "0": "픽업",
           "1": "테크니션",
           "H": "긴장감"
       },
       "heightm": 0.4,
       "weightkg": 4.2,
       "color": "Yellow",
       "evos": ["Persian"],
       "eggGroups": ["Field"],
       "otherFormes": ["Meowth-Alola", "Meowth-Galar"],
       "formeOrder": ["Meowth", "Meowth-Alola", "Meowth-Galar"],
       "canGigantamax": "G-Max Gold Rush"
   },
   "나옹-알로라": {
       "num": 52,
       "name": "Meowth-Alola",
       "baseSpecies": "Meowth",
       "forme": "Alola",
       "types": ["악"],
       "baseStats": {
           "hp": 40,
           "atk": 35,
           "def": 35,
           "spa": 50,
           "spd": 40,
           "spe": 90
       },
       "abilities": {
           "0": "픽업",
           "1": "테크니션",
           "H": "주눅"
       },
       "heightm": 0.4,
       "weightkg": 4.2,
       "color": "Blue",
       "evos": ["Persian-Alola"],
       "eggGroups": ["Field"]
   },
   "나옹-가라르": {
       "num": 52,
       "name": "Meowth-Galar",
       "baseSpecies": "Meowth",
       "forme": "Galar",
       "types": ["강철"],
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 55,
           "spa": 40,
           "spd": 40,
           "spe": 40
       },
       "abilities": {
           "0": "픽업",
           "1": "단단한 발톱",
           "H": "긴장감"
       },
       "heightm": 0.4,
       "weightkg": 7.5,
       "color": "Brown",
       "evos": ["Perrserker"],
       "eggGroups": ["Field"]
   },
   "페르시온": {
       "num": 53,
       "name": "Persian",
       "types": ["노말"],
       "baseStats": {
           "hp": 65,
           "atk": 70,
           "def": 60,
           "spa": 65,
           "spd": 65,
           "spe": 115
       },
       "abilities": {
           "0": "유연",
           "1": "테크니션",
           "H": "긴장감"
       },
       "heightm": 1,
       "weightkg": 32,
       "color": "Yellow",
       "prevo": "Meowth",
       "evoLevel": 28,
       "eggGroups": ["Field"],
       "otherFormes": ["Persian-Alola"],
       "formeOrder": ["Persian", "Persian-Alola"]
   },
   "페르시온-알로라": {
       "num": 53,
       "name": "Persian-Alola",
       "baseSpecies": "Persian",
       "forme": "Alola",
       "types": ["악"],
       "baseStats": {
           "hp": 65,
           "atk": 60,
           "def": 60,
           "spa": 75,
           "spd": 65,
           "spe": 115
       },
       "abilities": {
           "0": "퍼코트",
           "1": "테크니션",
           "H": "주눅"
       },
       "heightm": 1.1,
       "weightkg": 33,
       "color": "Blue",
       "prevo": "Meowth-Alola",
       "evoType": "levelFriendship",
       "eggGroups": ["Field"]
   },
   "고라파덕": {
       "num": 54,
       "name": "Psyduck",
       "types": ["물"],
       "baseStats": {
           "hp": 50,
           "atk": 52,
           "def": 48,
           "spa": 65,
           "spd": 50,
           "spe": 55
       },
       "abilities": {
           "0": "습기",
           "1": "날씨 부정",
           "H": "쓱쓱"
       },
       "heightm": 0.8,
       "weightkg": 19.6,
       "color": "Yellow",
       "evos": ["Golduck"],
       "eggGroups": ["Water 1", "Field"]
   },
   "골덕": {
       "num": 55,
       "name": "Golduck",
       "types": ["물"],
       "baseStats": {
           "hp": 80,
           "atk": 82,
           "def": 78,
           "spa": 95,
           "spd": 80,
           "spe": 85
       },
       "abilities": {
           "0": "습기",
           "1": "날씨 부정",
           "H": "쓱쓱"
       },
       "heightm": 1.7,
       "weightkg": 76.6,
       "color": "Blue",
       "prevo": "Psyduck",
       "evoLevel": 33,
       "eggGroups": ["Water 1", "Field"]
   },
   "망키": {
       "num": 56,
       "name": "Mankey",
       "types": ["격투"],
       "baseStats": {
           "hp": 40,
           "atk": 80,
           "def": 35,
           "spa": 35,
           "spd": 45,
           "spe": 70
       },
       "abilities": {
           "0": "의기양양",
           "1": "분노의 경혈",
           "H": "오기"
       },
       "heightm": 0.5,
       "weightkg": 28,
       "color": "Brown",
       "evos": ["Primeape"],
       "eggGroups": ["Field"]
   },
   "성원숭": {
       "num": 57,
       "name": "Primeape",
       "types": ["격투"],
       "baseStats": {
           "hp": 65,
           "atk": 105,
           "def": 60,
           "spa": 60,
           "spd": 70,
           "spe": 95
       },
       "abilities": {
           "0": "의기양양",
           "1": "분노의 경혈",
           "H": "오기"
       },
       "heightm": 1,
       "weightkg": 32,
       "color": "Brown",
       "prevo": "Mankey",
       "evoLevel": 28,
       "eggGroups": ["Field"]
   },
   "가디": {
       "num": 58,
       "name": "Growlithe",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 55,
           "atk": 70,
           "def": 45,
           "spa": 70,
           "spd": 50,
           "spe": 60
       },
       "abilities": {
           "0": "위협",
           "1": "타오르는 불꽃",
           "H": "정의의마음"
       },
       "heightm": 0.7,
       "weightkg": 19,
       "color": "Brown",
       "evos": ["Arcanine"],
       "eggGroups": ["Field"]
   },
   "윈디": {
       "num": 59,
       "name": "Arcanine",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 90,
           "atk": 110,
           "def": 80,
           "spa": 100,
           "spd": 80,
           "spe": 95
       },
       "abilities": {
           "0": "위협",
           "1": "타오르는 불꽃",
           "H": "정의의마음"
       },
       "heightm": 1.9,
       "weightkg": 155,
       "color": "Brown",
       "prevo": "Growlithe",
       "evoType": "useItem",
       "evoItem": "Fire Stone",
       "eggGroups": ["Field"]
   },
   "발챙이": {
       "num": 60,
       "name": "Poliwag",
       "types": ["물"],
       "baseStats": {
           "hp": 40,
           "atk": 50,
           "def": 40,
           "spa": 40,
           "spd": 40,
           "spe": 90
       },
       "abilities": {
           "0": "저수",
           "1": "습기",
           "H": "쓱쓱"
       },
       "heightm": 0.6,
       "weightkg": 12.4,
       "color": "Blue",
       "evos": ["Poliwhirl"],
       "eggGroups": ["Water 1"]
   },
   "슈륙챙이": {
       "num": 61,
       "name": "Poliwhirl",
       "types": ["물"],
       "baseStats": {
           "hp": 65,
           "atk": 65,
           "def": 65,
           "spa": 50,
           "spd": 50,
           "spe": 90
       },
       "abilities": {
           "0": "저수",
           "1": "습기",
           "H": "쓱쓱"
       },
       "heightm": 1,
       "weightkg": 20,
       "color": "Blue",
       "prevo": "Poliwag",
       "evoLevel": 25,
       "evos": ["Poliwrath", "Politoed"],
       "eggGroups": ["Water 1"]
   },
   "강챙이": {
       "num": 62,
       "name": "Poliwrath",
       "types": ["물", "격투"],
       "baseStats": {
           "hp": 90,
           "atk": 95,
           "def": 95,
           "spa": 70,
           "spd": 90,
           "spe": 70
       },
       "abilities": {
           "0": "저수",
           "1": "습기",
           "H": "쓱쓱"
       },
       "heightm": 1.3,
       "weightkg": 54,
       "color": "Blue",
       "prevo": "Poliwhirl",
       "evoType": "useItem",
       "evoItem": "Water Stone",
       "eggGroups": ["Water 1"]
   },
   "캐이시": {
       "num": 63,
       "name": "Abra",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 25,
           "atk": 20,
           "def": 15,
           "spa": 105,
           "spd": 55,
           "spe": 90
       },
       "abilities": {
           "0": "싱크로",
           "1": "정신력",
           "H": "매직가드"
       },
       "heightm": 0.9,
       "weightkg": 19.5,
       "color": "Brown",
       "evos": ["Kadabra"],
       "eggGroups": ["Human-Like"]
   },
   "윤겔라": {
       "num": 64,
       "name": "Kadabra",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 40,
           "atk": 35,
           "def": 30,
           "spa": 120,
           "spd": 70,
           "spe": 105
       },
       "abilities": {
           "0": "싱크로",
           "1": "정신력",
           "H": "매직가드"
       },
       "heightm": 1.3,
       "weightkg": 56.5,
       "color": "Brown",
       "prevo": "Abra",
       "evoLevel": 16,
       "evos": ["Alakazam"],
       "eggGroups": ["Human-Like"]
   },
   "후딘": {
       "num": 65,
       "name": "Alakazam",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 55,
           "atk": 50,
           "def": 45,
           "spa": 135,
           "spd": 95,
           "spe": 120
       },
       "abilities": {
           "0": "싱크로",
           "1": "정신력",
           "H": "매직가드"
       },
       "heightm": 1.5,
       "weightkg": 48,
       "color": "Brown",
       "prevo": "Kadabra",
       "evoType": "trade",
       "eggGroups": ["Human-Like"],
       "otherFormes": ["Alakazam-Mega"],
       "formeOrder": ["Alakazam", "Alakazam-Mega"]
   },
   "알통몬": {
       "num": 66,
       "name": "Machop",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 70,
           "atk": 80,
           "def": 50,
           "spa": 35,
           "spd": 35,
           "spe": 35
       },
       "abilities": {
           "0": "근성",
           "1": "노가드",
           "H": "불굴의 마음"
       },
       "heightm": 0.8,
       "weightkg": 19.5,
       "color": "Gray",
       "evos": ["Machoke"],
       "eggGroups": ["Human-Like"]
   },
   "근육몬": {
       "num": 67,
       "name": "Machoke",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 80,
           "atk": 100,
           "def": 70,
           "spa": 50,
           "spd": 60,
           "spe": 45
       },
       "abilities": {
           "0": "근성",
           "1": "노가드",
           "H": "불굴의 마음"
       },
       "heightm": 1.5,
       "weightkg": 70.5,
       "color": "Gray",
       "prevo": "Machop",
       "evoLevel": 28,
       "evos": ["Machamp"],
       "eggGroups": ["Human-Like"]
   },
   "괴력몬": {
       "num": 68,
       "name": "Machamp",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 90,
           "atk": 130,
           "def": 80,
           "spa": 65,
           "spd": 85,
           "spe": 55
       },
       "abilities": {
           "0": "근성",
           "1": "노가드",
           "H": "불굴의 마음"
       },
       "heightm": 1.6,
       "weightkg": 130,
       "color": "Gray",
       "prevo": "Machoke",
       "evoType": "trade",
       "eggGroups": ["Human-Like"],
       "canGigantamax": "G-Max Chi Strike"
   },
   "모다피": {
       "num": 69,
       "name": "Bellsprout",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 50,
           "atk": 75,
           "def": 35,
           "spa": 70,
           "spd": 30,
           "spe": 40
       },
       "abilities": {
           "0": "엽록소",
           "H": "먹보"
       },
       "heightm": 0.7,
       "weightkg": 4,
       "color": "Green",
       "evos": ["Weepinbell"],
       "eggGroups": ["Grass"]
   },
   "우츠동": {
       "num": 70,
       "name": "Weepinbell",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 50,
           "spa": 85,
           "spd": 45,
           "spe": 55
       },
       "abilities": {
           "0": "엽록소",
           "H": "먹보"
       },
       "heightm": 1,
       "weightkg": 6.4,
       "color": "Green",
       "prevo": "Bellsprout",
       "evoLevel": 21,
       "evos": ["Victreebel"],
       "eggGroups": ["Grass"]
   },
   "우츠보트": {
       "num": 71,
       "name": "Victreebel",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 80,
           "atk": 105,
           "def": 65,
           "spa": 100,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "엽록소",
           "H": "먹보"
       },
       "heightm": 1.7,
       "weightkg": 15.5,
       "color": "Green",
       "prevo": "Weepinbell",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Grass"]
   },
   "왕눈해": {
       "num": 72,
       "name": "Tentacool",
       "types": ["물", "독"],
       "baseStats": {
           "hp": 40,
           "atk": 40,
           "def": 35,
           "spa": 50,
           "spd": 100,
           "spe": 70
       },
       "abilities": {
           "0": "클리어 바디",
           "1": "해감액",
           "H": "젖은접시"
       },
       "heightm": 0.9,
       "weightkg": 45.5,
       "color": "Blue",
       "evos": ["Tentacruel"],
       "eggGroups": ["Water 3"]
   },
   "독파리": {
       "num": 73,
       "name": "Tentacruel",
       "types": ["물", "독"],
       "baseStats": {
           "hp": 80,
           "atk": 70,
           "def": 65,
           "spa": 80,
           "spd": 120,
           "spe": 100
       },
       "abilities": {
           "0": "클리어 바디",
           "1": "해감액",
           "H": "젖은접시"
       },
       "heightm": 1.6,
       "weightkg": 55,
       "color": "Blue",
       "prevo": "Tentacool",
       "evoLevel": 30,
       "eggGroups": ["Water 3"]
   },
   "꼬마돌": {
       "num": 74,
       "name": "Geodude",
       "types": ["바위", "땅"],
       "baseStats": {
           "hp": 40,
           "atk": 80,
           "def": 100,
           "spa": 30,
           "spd": 30,
           "spe": 20
       },
       "abilities": {
           "0": "돌머리",
           "1": "옹골참",
           "H": "모래숨기"
       },
       "heightm": 0.4,
       "weightkg": 20,
       "color": "Brown",
       "evos": ["Graveler"],
       "eggGroups": ["Mineral"],
       "otherFormes": ["Geodude-Alola"],
       "formeOrder": ["Geodude", "Geodude-Alola"]
   },
   "꼬마돌-알로라": {
       "num": 74,
       "name": "Geodude-Alola",
       "baseSpecies": "Geodude",
       "forme": "Alola",
       "types": ["바위", "전기"],
       "baseStats": {
           "hp": 40,
           "atk": 80,
           "def": 100,
           "spa": 30,
           "spd": 30,
           "spe": 20
       },
       "abilities": {
           "0": "자력",
           "1": "옹골참",
           "H": "일렉트릭스킨"
       },
       "heightm": 0.4,
       "weightkg": 20.3,
       "color": "Gray",
       "evos": ["Graveler-Alola"],
       "eggGroups": ["Mineral"]
   },
   "데구리": {
       "num": 75,
       "name": "Graveler",
       "types": ["바위", "땅"],
       "baseStats": {
           "hp": 55,
           "atk": 95,
           "def": 115,
           "spa": 45,
           "spd": 45,
           "spe": 35
       },
       "abilities": {
           "0": "돌머리",
           "1": "옹골참",
           "H": "모래숨기"
       },
       "heightm": 1,
       "weightkg": 105,
       "color": "Brown",
       "prevo": "Geodude",
       "evoLevel": 25,
       "evos": ["Golem"],
       "eggGroups": ["Mineral"],
       "otherFormes": ["Graveler-Alola"],
       "formeOrder": ["Graveler", "Graveler-Alola"]
   },
   "데구리-알로라": {
       "num": 75,
       "name": "Graveler-Alola",
       "baseSpecies": "Graveler",
       "forme": "Alola",
       "types": ["바위", "전기"],
       "baseStats": {
           "hp": 55,
           "atk": 95,
           "def": 115,
           "spa": 45,
           "spd": 45,
           "spe": 35
       },
       "abilities": {
           "0": "자력",
           "1": "옹골참",
           "H": "일렉트릭스킨"
       },
       "heightm": 1,
       "weightkg": 110,
       "color": "Gray",
       "prevo": "Geodude-Alola",
       "evoLevel": 25,
       "evos": ["Golem-Alola"],
       "eggGroups": ["Mineral"]
   },
   "딱구리": {
       "num": 76,
       "name": "Golem",
       "types": ["바위", "땅"],
       "baseStats": {
           "hp": 80,
           "atk": 120,
           "def": 130,
           "spa": 55,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "돌머리",
           "1": "옹골참",
           "H": "모래숨기"
       },
       "heightm": 1.4,
       "weightkg": 300,
       "color": "Brown",
       "prevo": "Graveler",
       "evoType": "trade",
       "eggGroups": ["Mineral"],
       "otherFormes": ["Golem-Alola"],
       "formeOrder": ["Golem", "Golem-Alola"]
   },
   "딱구리-알로라": {
       "num": 76,
       "name": "Golem-Alola",
       "baseSpecies": "Golem",
       "forme": "Alola",
       "types": ["바위", "전기"],
       "baseStats": {
           "hp": 80,
           "atk": 120,
           "def": 130,
           "spa": 55,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "자력",
           "1": "옹골참",
           "H": "일렉트릭스킨"
       },
       "heightm": 1.7,
       "weightkg": 316,
       "color": "Gray",
       "prevo": "Graveler-Alola",
       "evoType": "trade",
       "eggGroups": ["Mineral"]
   },
   "포니타": {
       "num": 77,
       "name": "Ponyta",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 50,
           "atk": 85,
           "def": 55,
           "spa": 65,
           "spd": 65,
           "spe": 90
       },
       "abilities": {
           "0": "도주",
           "1": "타오르는 불꽃",
           "H": "불꽃몸"
       },
       "heightm": 1,
       "weightkg": 30,
       "color": "Yellow",
       "evos": ["Rapidash"],
       "eggGroups": ["Field"],
       "otherFormes": ["Ponyta-Galar"],
       "formeOrder": ["Ponyta", "Ponyta-Galar"]
   },
   "포니타-가라르": {
       "num": 77,
       "name": "Ponyta-Galar",
       "baseSpecies": "Ponyta",
       "forme": "Galar",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 50,
           "atk": 85,
           "def": 55,
           "spa": 65,
           "spd": 65,
           "spe": 90
       },
       "abilities": {
           "0": "도주",
           "1": "파스텔베일",
           "H": "위험예지"
       },
       "heightm": 0.8,
       "weightkg": 24,
       "color": "White",
       "evos": ["Rapidash-Galar"],
       "eggGroups": ["Field"]
   },
   "날쌩마": {
       "num": 78,
       "name": "Rapidash",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 65,
           "atk": 100,
           "def": 70,
           "spa": 80,
           "spd": 80,
           "spe": 105
       },
       "abilities": {
           "0": "도주",
           "1": "타오르는 불꽃",
           "H": "불꽃몸"
       },
       "heightm": 1.7,
       "weightkg": 95,
       "color": "Yellow",
       "prevo": "Ponyta",
       "evoLevel": 40,
       "eggGroups": ["Field"],
       "otherFormes": ["Rapidash-Galar"],
       "formeOrder": ["Rapidash", "Rapidash-Galar"]
   },
   "날쌩마-가라르": {
       "num": 78,
       "name": "Rapidash-Galar",
       "baseSpecies": "Rapidash",
       "forme": "Galar",
       "types": ["에스퍼", "페어리"],
       "baseStats": {
           "hp": 65,
           "atk": 100,
           "def": 70,
           "spa": 80,
           "spd": 80,
           "spe": 105
       },
       "abilities": {
           "0": "도주",
           "1": "파스텔베일",
           "H": "위험예지"
       },
       "heightm": 1.7,
       "weightkg": 80,
       "color": "White",
       "prevo": "Ponyta-Galar",
       "evoLevel": 40,
       "eggGroups": ["Field"]
   },
   "야돈": {
       "num": 79,
       "name": "Slowpoke",
       "types": ["물", "에스퍼"],
       "baseStats": {
           "hp": 90,
           "atk": 65,
           "def": 65,
           "spa": 40,
           "spd": 40,
           "spe": 15
       },
       "abilities": {
           "0": "둔감",
           "1": "마이페이스",
           "H": "재생력"
       },
       "heightm": 1.2,
       "weightkg": 36,
       "color": "Pink",
       "evos": ["Slowbro", "Slowking"],
       "eggGroups": ["Monster", "Water 1"],
       "otherFormes": ["Slowpoke-Galar"],
       "formeOrder": ["Slowpoke", "Slowpoke-Galar"]
   },
   "야돈-가라르": {
       "num": 79,
       "name": "Slowpoke-Galar",
       "baseSpecies": "Slowpoke",
       "forme": "Galar",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 90,
           "atk": 65,
           "def": 65,
           "spa": 40,
           "spd": 40,
           "spe": 15
       },
       "abilities": {
           "0": "먹보",
           "1": "마이페이스",
           "H": "재생력"
       },
       "heightm": 1.2,
       "weightkg": 36,
       "color": "Pink",
       "evos": ["Slowbro-Galar", "Slowking-Galar"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "야도란": {
       "num": 80,
       "name": "Slowbro",
       "types": ["물", "에스퍼"],
       "baseStats": {
           "hp": 95,
           "atk": 75,
           "def": 110,
           "spa": 100,
           "spd": 80,
           "spe": 30
       },
       "abilities": {
           "0": "둔감",
           "1": "마이페이스",
           "H": "재생력"
       },
       "heightm": 1.6,
       "weightkg": 78.5,
       "color": "Pink",
       "prevo": "Slowpoke",
       "evoLevel": 37,
       "eggGroups": ["Monster", "Water 1"],
       "otherFormes": ["Slowbro-Mega", "Slowbro-Galar"],
       "formeOrder": ["Slowbro", "Slowbro-Mega", "Slowbro-Galar"]
   },
   "야도란-가라르": {
       "num": 80,
       "name": "Slowbro-Galar",
       "baseSpecies": "Slowbro",
       "forme": "Galar",
       "types": ["독", "에스퍼"],
       "baseStats": {
           "hp": 95,
           "atk": 100,
           "def": 95,
           "spa": 100,
           "spd": 70,
           "spe": 30
       },
       "abilities": {
           "0": "퀵드로",
           "1": "마이페이스",
           "H": "재생력"
       },
       "heightm": 1.6,
       "weightkg": 70.5,
       "color": "Pink",
       "prevo": "Slowpoke-Galar",
       "evoType": "useItem",
       "evoItem": "Galarica Cuff",
       "eggGroups": ["Monster", "Water 1"]
   },
   "코일": {
       "num": 81,
       "name": "Magnemite",
       "types": ["전기", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 25,
           "atk": 35,
           "def": 70,
           "spa": 95,
           "spd": 55,
           "spe": 45
       },
       "abilities": {
           "0": "자력",
           "1": "옹골참",
           "H": "애널라이즈"
       },
       "heightm": 0.3,
       "weightkg": 6,
       "color": "Gray",
       "evos": ["Magneton"],
       "eggGroups": ["Mineral"]
   },
   "레어코일": {
       "num": 82,
       "name": "Magneton",
       "types": ["전기", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 60,
           "def": 95,
           "spa": 120,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "자력",
           "1": "옹골참",
           "H": "애널라이즈"
       },
       "heightm": 1,
       "weightkg": 60,
       "color": "Gray",
       "prevo": "Magnemite",
       "evoLevel": 30,
       "evos": ["Magnezone"],
       "eggGroups": ["Mineral"]
   },
   "파오리": {
       "num": 83,
       "name": "Farfetch’d",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 52,
           "atk": 90,
           "def": 55,
           "spa": 58,
           "spd": 62,
           "spe": 60
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "정신력",
           "H": "오기"
       },
       "heightm": 0.8,
       "weightkg": 15,
       "color": "Brown",
       "eggGroups": ["Flying", "Field"],
       "otherFormes": ["Farfetch’d-Galar"],
       "formeOrder": ["Farfetch’d", "Farfetch’d-Galar"]
   },
   "파오리-가라르": {
       "num": 83,
       "name": "Farfetch’d-Galar",
       "baseSpecies": "Farfetch’d",
       "forme": "Galar",
       "types": ["격투"],
       "baseStats": {
           "hp": 52,
           "atk": 95,
           "def": 55,
           "spa": 58,
           "spd": 62,
           "spe": 55
       },
       "abilities": {
           "0": "불굴의 마음",
           "H": "배짱"
       },
       "heightm": 0.8,
       "weightkg": 15,
       "color": "Brown",
       "evos": ["Sirfetch’d"],
       "eggGroups": ["Flying", "Field"]
   },
   "두두": {
       "num": 84,
       "name": "Doduo",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 35,
           "atk": 85,
           "def": 45,
           "spa": 35,
           "spd": 35,
           "spe": 75
       },
       "abilities": {
           "0": "도주",
           "1": "일찍 기상",
           "H": "갈지자걸음"
       },
       "heightm": 1.4,
       "weightkg": 39.2,
       "color": "Brown",
       "evos": ["Dodrio"],
       "eggGroups": ["Flying"]
   },
   "두트리오": {
       "num": 85,
       "name": "Dodrio",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 110,
           "def": 70,
           "spa": 60,
           "spd": 60,
           "spe": 110
       },
       "abilities": {
           "0": "도주",
           "1": "일찍 기상",
           "H": "갈지자걸음"
       },
       "heightm": 1.8,
       "weightkg": 85.2,
       "color": "Brown",
       "prevo": "Doduo",
       "evoLevel": 31,
       "eggGroups": ["Flying"]
   },
   "쥬쥬": {
       "num": 86,
       "name": "Seel",
       "types": ["물"],
       "baseStats": {
           "hp": 65,
           "atk": 45,
           "def": 55,
           "spa": 45,
           "spd": 70,
           "spe": 45
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "촉촉바디",
           "H": "아이스바디"
       },
       "heightm": 1.1,
       "weightkg": 90,
       "color": "White",
       "evos": ["Dewgong"],
       "eggGroups": ["Water 1", "Field"]
   },
   "쥬레곤": {
       "num": 87,
       "name": "Dewgong",
       "types": ["물", "얼음"],
       "baseStats": {
           "hp": 90,
           "atk": 70,
           "def": 80,
           "spa": 70,
           "spd": 95,
           "spe": 70
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "촉촉바디",
           "H": "아이스바디"
       },
       "heightm": 1.7,
       "weightkg": 120,
       "color": "White",
       "prevo": "Seel",
       "evoLevel": 34,
       "eggGroups": ["Water 1", "Field"]
   },
   "질퍽이": {
       "num": 88,
       "name": "Grimer",
       "types": ["독"],
       "baseStats": {
           "hp": 80,
           "atk": 80,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 25
       },
       "abilities": {
           "0": "악취",
           "1": "점착",
           "H": "독수"
       },
       "heightm": 0.9,
       "weightkg": 30,
       "color": "Purple",
       "evos": ["Muk"],
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Grimer-Alola"],
       "formeOrder": ["Grimer", "Grimer-Alola"]
   },
   "질퍽이-알로라": {
       "num": 88,
       "name": "Grimer-Alola",
       "baseSpecies": "Grimer",
       "forme": "Alola",
       "types": ["독", "악"],
       "baseStats": {
           "hp": 80,
           "atk": 80,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 25
       },
       "abilities": {
           "0": "독수",
           "1": "먹보",
           "H": "과학의힘"
       },
       "heightm": 0.7,
       "weightkg": 42,
       "color": "Green",
       "evos": ["Muk-Alola"],
       "eggGroups": ["Amorphous"]
   },
   "질뻐기": {
       "num": 89,
       "name": "Muk",
       "types": ["독"],
       "baseStats": {
           "hp": 105,
           "atk": 105,
           "def": 75,
           "spa": 65,
           "spd": 100,
           "spe": 50
       },
       "abilities": {
           "0": "악취",
           "1": "점착",
           "H": "독수"
       },
       "heightm": 1.2,
       "weightkg": 30,
       "color": "Purple",
       "prevo": "Grimer",
       "evoLevel": 38,
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Muk-Alola"],
       "formeOrder": ["Muk", "Muk-Alola"]
   },
   "질뻐기-알로라": {
       "num": 89,
       "name": "Muk-Alola",
       "baseSpecies": "Muk",
       "forme": "Alola",
       "types": ["독", "악"],
       "baseStats": {
           "hp": 105,
           "atk": 105,
           "def": 75,
           "spa": 65,
           "spd": 100,
           "spe": 50
       },
       "abilities": {
           "0": "독수",
           "1": "먹보",
           "H": "과학의힘"
       },
       "heightm": 1,
       "weightkg": 52,
       "color": "Green",
       "prevo": "Grimer-Alola",
       "evoLevel": 38,
       "eggGroups": ["Amorphous"]
   },
   "셀러": {
       "num": 90,
       "name": "Shellder",
       "types": ["물"],
       "baseStats": {
           "hp": 30,
           "atk": 65,
           "def": 100,
           "spa": 45,
           "spd": 25,
           "spe": 40
       },
       "abilities": {
           "0": "조가비 갑옷",
           "1": "스킬링크",
           "H": "방진"
       },
       "heightm": 0.3,
       "weightkg": 4,
       "color": "Purple",
       "evos": ["Cloyster"],
       "eggGroups": ["Water 3"]
   },
   "파르셀": {
       "num": 91,
       "name": "Cloyster",
       "types": ["물", "얼음"],
       "baseStats": {
           "hp": 50,
           "atk": 95,
           "def": 180,
           "spa": 85,
           "spd": 45,
           "spe": 70
       },
       "abilities": {
           "0": "조가비 갑옷",
           "1": "스킬링크",
           "H": "방진"
       },
       "heightm": 1.5,
       "weightkg": 132.5,
       "color": "Purple",
       "prevo": "Shellder",
       "evoType": "useItem",
       "evoItem": "Water Stone",
       "eggGroups": ["Water 3"]
   },
   "고오스": {
       "num": 92,
       "name": "Gastly",
       "types": ["고스트", "독"],
       "baseStats": {
           "hp": 30,
           "atk": 35,
           "def": 30,
           "spa": 100,
           "spd": 35,
           "spe": 80
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.3,
       "weightkg": 0.1,
       "color": "Purple",
       "evos": ["Haunter"],
       "eggGroups": ["Amorphous"]
   },
   "고우스트": {
       "num": 93,
       "name": "Haunter",
       "types": ["고스트", "독"],
       "baseStats": {
           "hp": 45,
           "atk": 50,
           "def": 45,
           "spa": 115,
           "spd": 55,
           "spe": 95
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.6,
       "weightkg": 0.1,
       "color": "Purple",
       "prevo": "Gastly",
       "evoLevel": 25,
       "evos": ["Gengar"],
       "eggGroups": ["Amorphous"]
   },
   "팬텀": {
       "num": 94,
       "name": "Gengar",
       "types": ["고스트", "독"],
       "baseStats": {
           "hp": 60,
           "atk": 65,
           "def": 60,
           "spa": 130,
           "spd": 75,
           "spe": 110
       },
       "abilities": {
           "0": "저주받은바디"
       },
       "heightm": 1.5,
       "weightkg": 40.5,
       "color": "Purple",
       "prevo": "Haunter",
       "evoType": "trade",
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Gengar-Mega"],
       "formeOrder": ["Gengar", "Gengar-Mega"],
       "canGigantamax": "G-Max Terror"
   },
   "롱스톤": {
       "num": 95,
       "name": "Onix",
       "types": ["바위", "땅"],
       "baseStats": {
           "hp": 35,
           "atk": 45,
           "def": 160,
           "spa": 30,
           "spd": 45,
           "spe": 70
       },
       "abilities": {
           "0": "돌머리",
           "1": "옹골참",
           "H": "깨어진갑옷"
       },
       "heightm": 8.8,
       "weightkg": 210,
       "color": "Gray",
       "evos": ["Steelix"],
       "eggGroups": ["Mineral"]
   },
   "슬리프": {
       "num": 96,
       "name": "Drowzee",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 60,
           "atk": 48,
           "def": 45,
           "spa": 43,
           "spd": 90,
           "spe": 42
       },
       "abilities": {
           "0": "불면",
           "1": "예지몽",
           "H": "정신력"
       },
       "heightm": 1,
       "weightkg": 32.4,
       "color": "Yellow",
       "evos": ["Hypno"],
       "eggGroups": ["Human-Like"]
   },
   "슬리퍼": {
       "num": 97,
       "name": "Hypno",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 85,
           "atk": 73,
           "def": 70,
           "spa": 73,
           "spd": 115,
           "spe": 67
       },
       "abilities": {
           "0": "불면",
           "1": "예지몽",
           "H": "정신력"
       },
       "heightm": 1.6,
       "weightkg": 75.6,
       "color": "Yellow",
       "prevo": "Drowzee",
       "evoLevel": 26,
       "eggGroups": ["Human-Like"]
   },
   "크랩": {
       "num": 98,
       "name": "Krabby",
       "types": ["물"],
       "baseStats": {
           "hp": 30,
           "atk": 105,
           "def": 90,
           "spa": 25,
           "spd": 25,
           "spe": 50
       },
       "abilities": {
           "0": "괴력집게",
           "1": "조가비 갑옷",
           "H": "우격다짐"
       },
       "heightm": 0.4,
       "weightkg": 6.5,
       "color": "Red",
       "evos": ["Kingler"],
       "eggGroups": ["Water 3"]
   },
   "킹크랩": {
       "num": 99,
       "name": "Kingler",
       "types": ["물"],
       "baseStats": {
           "hp": 55,
           "atk": 130,
           "def": 115,
           "spa": 50,
           "spd": 50,
           "spe": 75
       },
       "abilities": {
           "0": "괴력집게",
           "1": "조가비 갑옷",
           "H": "우격다짐"
       },
       "heightm": 1.3,
       "weightkg": 60,
       "color": "Red",
       "prevo": "Krabby",
       "evoLevel": 28,
       "eggGroups": ["Water 3"],
       "canGigantamax": "G-Max Foam Burst"
   },
   "찌리리공": {
       "num": 100,
       "name": "Voltorb",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 40,
           "atk": 30,
           "def": 50,
           "spa": 55,
           "spd": 55,
           "spe": 100
       },
       "abilities": {
           "0": "방음",
           "1": "정전기",
           "H": "유폭"
       },
       "heightm": 0.5,
       "weightkg": 10.4,
       "color": "Red",
       "evos": ["Electrode"],
       "eggGroups": ["Mineral"]
   },
   "붐볼": {
       "num": 101,
       "name": "Electrode",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 70,
           "spa": 80,
           "spd": 80,
           "spe": 150
       },
       "abilities": {
           "0": "방음",
           "1": "정전기",
           "H": "유폭"
       },
       "heightm": 1.2,
       "weightkg": 66.6,
       "color": "Red",
       "prevo": "Voltorb",
       "evoLevel": 30,
       "eggGroups": ["Mineral"]
   },
   "아라리": {
       "num": 102,
       "name": "Exeggcute",
       "types": ["풀", "에스퍼"],
       "baseStats": {
           "hp": 60,
           "atk": 40,
           "def": 80,
           "spa": 60,
           "spd": 45,
           "spe": 40
       },
       "abilities": {
           "0": "엽록소",
           "H": "수확"
       },
       "heightm": 0.4,
       "weightkg": 2.5,
       "color": "Pink",
       "evos": ["Exeggutor", "Exeggutor-Alola"],
       "eggGroups": ["Grass"]
   },
   "나시": {
       "num": 103,
       "name": "Exeggutor",
       "types": ["풀", "에스퍼"],
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 85,
           "spa": 125,
           "spd": 75,
           "spe": 55
       },
       "abilities": {
           "0": "엽록소",
           "H": "수확"
       },
       "heightm": 2,
       "weightkg": 120,
       "color": "Yellow",
       "prevo": "Exeggcute",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Grass"],
       "otherFormes": ["Exeggutor-Alola"],
       "formeOrder": ["Exeggutor", "Exeggutor-Alola"]
   },
   "나시-알로라": {
       "num": 103,
       "name": "Exeggutor-Alola",
       "baseSpecies": "Exeggutor",
       "forme": "Alola",
       "types": ["풀", "드래곤"],
       "baseStats": {
           "hp": 95,
           "atk": 105,
           "def": 85,
           "spa": 125,
           "spd": 75,
           "spe": 45
       },
       "abilities": {
           "0": "통찰",
           "H": "수확"
       },
       "heightm": 10.9,
       "weightkg": 415.6,
       "color": "Yellow",
       "prevo": "Exeggcute",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Grass"]
   },
   "탕구리": {
       "num": 104,
       "name": "Cubone",
       "types": ["땅"],
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 95,
           "spa": 40,
           "spd": 50,
           "spe": 35
       },
       "abilities": {
           "0": "돌머리",
           "1": "피뢰침",
           "H": "전투 무장"
       },
       "heightm": 0.4,
       "weightkg": 6.5,
       "color": "Brown",
       "evos": ["Marowak", "Marowak-Alola"],
       "eggGroups": ["Monster"]
   },
   "텅구리": {
       "num": 105,
       "name": "Marowak",
       "types": ["땅"],
       "baseStats": {
           "hp": 60,
           "atk": 80,
           "def": 110,
           "spa": 50,
           "spd": 80,
           "spe": 45
       },
       "abilities": {
           "0": "돌머리",
           "1": "피뢰침",
           "H": "전투 무장"
       },
       "heightm": 1,
       "weightkg": 45,
       "color": "Brown",
       "prevo": "Cubone",
       "evoLevel": 28,
       "eggGroups": ["Monster"],
       "otherFormes": ["Marowak-Alola", "Marowak-Alola-Totem"],
       "formeOrder": ["Marowak", "Marowak-Alola", "Marowak-Alola-Totem"]
   },
   "텅구리-알로라": {
       "num": 105,
       "name": "Marowak-Alola",
       "baseSpecies": "Marowak",
       "forme": "Alola",
       "types": ["불꽃", "고스트"],
       "baseStats": {
           "hp": 60,
           "atk": 80,
           "def": 110,
           "spa": 50,
           "spd": 80,
           "spe": 45
       },
       "abilities": {
           "0": "저주받은바디",
           "1": "피뢰침",
           "H": "돌머리"
       },
       "heightm": 1,
       "weightkg": 34,
       "color": "Purple",
       "prevo": "Cubone",
       "evoLevel": 28,
       "eggGroups": ["Monster"]
   },
   "시라소몬": {
       "num": 106,
       "name": "Hitmonlee",
       "types": ["격투"],
       "gender": "M",
       "baseStats": {
           "hp": 50,
           "atk": 120,
           "def": 53,
           "spa": 35,
           "spd": 110,
           "spe": 87
       },
       "abilities": {
           "0": "유연",
           "1": "이판사판",
           "H": "곡예"
       },
       "heightm": 1.5,
       "weightkg": 49.8,
       "color": "Brown",
       "prevo": "Tyrogue",
       "evoLevel": 20,
       "evoCondition": "with an Atk stat > its Def stat",
       "eggGroups": ["Human-Like"]
   },
   "홍수몬": {
       "num": 107,
       "name": "Hitmonchan",
       "types": ["격투"],
       "gender": "M",
       "baseStats": {
           "hp": 50,
           "atk": 105,
           "def": 79,
           "spa": 35,
           "spd": 110,
           "spe": 76
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "철주먹",
           "H": "정신력"
       },
       "heightm": 1.4,
       "weightkg": 50.2,
       "color": "Brown",
       "prevo": "Tyrogue",
       "evoLevel": 20,
       "evoCondition": "with an Atk stat < its Def stat",
       "eggGroups": ["Human-Like"]
   },
   "내루미": {
       "num": 108,
       "name": "Lickitung",
       "types": ["노말"],
       "baseStats": {
           "hp": 90,
           "atk": 55,
           "def": 75,
           "spa": 60,
           "spd": 75,
           "spe": 30
       },
       "abilities": {
           "0": "마이페이스",
           "1": "둔감",
           "H": "날씨 부정"
       },
       "heightm": 1.2,
       "weightkg": 65.5,
       "color": "Pink",
       "evos": ["Lickilicky"],
       "eggGroups": ["Monster"]
   },
   "또가스": {
       "num": 109,
       "name": "Koffing",
       "types": ["독"],
       "baseStats": {
           "hp": 40,
           "atk": 65,
           "def": 95,
           "spa": 60,
           "spd": 45,
           "spe": 35
       },
       "abilities": {
           "0": "부유",
           "1": "화학변화가스",
           "H": "악취"
       },
       "heightm": 0.6,
       "weightkg": 1,
       "color": "Purple",
       "evos": ["Weezing", "Weezing-Galar"],
       "eggGroups": ["Amorphous"]
   },
   "또도가스": {
       "num": 110,
       "name": "Weezing",
       "types": ["독"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 120,
           "spa": 85,
           "spd": 70,
           "spe": 60
       },
       "abilities": {
           "0": "부유",
           "1": "화학변화가스",
           "H": "악취"
       },
       "heightm": 1.2,
       "weightkg": 9.5,
       "color": "Purple",
       "prevo": "Koffing",
       "evoLevel": 35,
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Weezing-Galar"],
       "formeOrder": ["Weezing", "Weezing-Galar"]
   },
   "또도가스-가라르": {
       "num": 110,
       "name": "Weezing-Galar",
       "baseSpecies": "Weezing",
       "forme": "Galar",
       "types": ["독", "페어리"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 120,
           "spa": 85,
           "spd": 70,
           "spe": 60
       },
       "abilities": {
           "0": "부유",
           "1": "화학변화가스",
           "H": "미스트메이커"
       },
       "heightm": 3,
       "weightkg": 16,
       "color": "Gray",
       "prevo": "Koffing",
       "evoLevel": 35,
       "eggGroups": ["Amorphous"]
   },
   "뿔카노": {
       "num": 111,
       "name": "Rhyhorn",
       "types": ["땅", "바위"],
       "baseStats": {
           "hp": 80,
           "atk": 85,
           "def": 95,
           "spa": 30,
           "spd": 30,
           "spe": 25
       },
       "abilities": {
           "0": "피뢰침",
           "1": "돌머리",
           "H": "이판사판"
       },
       "heightm": 1,
       "weightkg": 115,
       "color": "Gray",
       "evos": ["Rhydon"],
       "eggGroups": ["Monster", "Field"]
   },
   "코뿌리": {
       "num": 112,
       "name": "Rhydon",
       "types": ["땅", "바위"],
       "baseStats": {
           "hp": 105,
           "atk": 130,
           "def": 120,
           "spa": 45,
           "spd": 45,
           "spe": 40
       },
       "abilities": {
           "0": "피뢰침",
           "1": "돌머리",
           "H": "이판사판"
       },
       "heightm": 1.9,
       "weightkg": 120,
       "color": "Gray",
       "prevo": "Rhyhorn",
       "evoLevel": 42,
       "evos": ["Rhyperior"],
       "eggGroups": ["Monster", "Field"]
   },
   "럭키": {
       "num": 113,
       "name": "Chansey",
       "types": ["노말"],
       "gender": "F",
       "baseStats": {
           "hp": 250,
           "atk": 5,
           "def": 5,
           "spa": 35,
           "spd": 105,
           "spe": 50
       },
       "abilities": {
           "0": "자연회복",
           "1": "하늘의 은총",
           "H": "치유의마음"
       },
       "heightm": 1.1,
       "weightkg": 34.6,
       "color": "Pink",
       "prevo": "Happiny",
       "evoType": "levelHold",
       "evoItem": "Oval Stone",
       "evoCondition": "during the day",
       "evos": ["Blissey"],
       "eggGroups": ["Fairy"],
       "canHatch": true
   },
   "덩쿠리": {
       "num": 114,
       "name": "Tangela",
       "types": ["풀"],
       "baseStats": {
           "hp": 65,
           "atk": 55,
           "def": 115,
           "spa": 100,
           "spd": 40,
           "spe": 60
       },
       "abilities": {
           "0": "엽록소",
           "1": "리프가드",
           "H": "재생력"
       },
       "heightm": 1,
       "weightkg": 35,
       "color": "Blue",
       "evos": ["Tangrowth"],
       "eggGroups": ["Grass"]
   },
   "캥카": {
       "num": 115,
       "name": "Kangaskhan",
       "types": ["노말"],
       "gender": "F",
       "baseStats": {
           "hp": 105,
           "atk": 95,
           "def": 80,
           "spa": 40,
           "spd": 80,
           "spe": 90
       },
       "abilities": {
           "0": "일찍 기상",
           "1": "배짱",
           "H": "정신력"
       },
       "heightm": 2.2,
       "weightkg": 80,
       "color": "Brown",
       "eggGroups": ["Monster"],
       "otherFormes": ["Kangaskhan-Mega"],
       "formeOrder": ["Kangaskhan", "Kangaskhan-Mega"]
   },
   "쏘드라": {
       "num": 116,
       "name": "Horsea",
       "types": ["물"],
       "baseStats": {
           "hp": 30,
           "atk": 40,
           "def": 70,
           "spa": 70,
           "spd": 25,
           "spe": 60
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "스나이퍼",
           "H": "습기"
       },
       "heightm": 0.4,
       "weightkg": 8,
       "color": "Blue",
       "evos": ["Seadra"],
       "eggGroups": ["Water 1", "Dragon"]
   },
   "시드라": {
       "num": 117,
       "name": "Seadra",
       "types": ["물"],
       "baseStats": {
           "hp": 55,
           "atk": 65,
           "def": 95,
           "spa": 95,
           "spd": 45,
           "spe": 85
       },
       "abilities": {
           "0": "독가시",
           "1": "스나이퍼",
           "H": "습기"
       },
       "heightm": 1.2,
       "weightkg": 25,
       "color": "Blue",
       "prevo": "Horsea",
       "evoLevel": 32,
       "evos": ["Kingdra"],
       "eggGroups": ["Water 1", "Dragon"]
   },
   "콘치": {
       "num": 118,
       "name": "Goldeen",
       "types": ["물"],
       "baseStats": {
           "hp": 45,
           "atk": 67,
           "def": 60,
           "spa": 35,
           "spd": 50,
           "spe": 63
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "수의 베일",
           "H": "피뢰침"
       },
       "heightm": 0.6,
       "weightkg": 15,
       "color": "Red",
       "evos": ["Seaking"],
       "eggGroups": ["Water 2"]
   },
   "왕콘치": {
       "num": 119,
       "name": "Seaking",
       "types": ["물"],
       "baseStats": {
           "hp": 80,
           "atk": 92,
           "def": 65,
           "spa": 65,
           "spd": 80,
           "spe": 68
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "수의 베일",
           "H": "피뢰침"
       },
       "heightm": 1.3,
       "weightkg": 39,
       "color": "Red",
       "prevo": "Goldeen",
       "evoLevel": 33,
       "eggGroups": ["Water 2"]
   },
   "별가사리": {
       "num": 120,
       "name": "Staryu",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 30,
           "atk": 45,
           "def": 55,
           "spa": 70,
           "spd": 55,
           "spe": 85
       },
       "abilities": {
           "0": "발광",
           "1": "자연회복",
           "H": "애널라이즈"
       },
       "heightm": 0.8,
       "weightkg": 34.5,
       "color": "Brown",
       "evos": ["Starmie"],
       "eggGroups": ["Water 3"]
   },
   "아쿠스타": {
       "num": 121,
       "name": "Starmie",
       "types": ["물", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 75,
           "def": 85,
           "spa": 100,
           "spd": 85,
           "spe": 115
       },
       "abilities": {
           "0": "발광",
           "1": "자연회복",
           "H": "애널라이즈"
       },
       "heightm": 1.1,
       "weightkg": 80,
       "color": "Purple",
       "prevo": "Staryu",
       "evoType": "useItem",
       "evoItem": "Water Stone",
       "eggGroups": ["Water 3"]
   },
   "마임맨": {
       "num": 122,
       "name": "Mr. Mime",
       "types": ["에스퍼", "페어리"],
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 65,
           "spa": 100,
           "spd": 120,
           "spe": 90
       },
       "abilities": {
           "0": "방음",
           "1": "필터",
           "H": "테크니션"
       },
       "heightm": 1.3,
       "weightkg": 54.5,
       "color": "Pink",
       "prevo": "Mime Jr.",
       "evoType": "levelMove",
       "evoMove": "Mimic",
       "eggGroups": ["Human-Like"],
       "canHatch": true,
       "otherFormes": ["Mr. Mime-Galar"],
       "formeOrder": ["Mr. Mime", "Mr. Mime-Galar"]
   },
   "스라크": {
       "num": 123,
       "name": "Scyther",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 70,
           "atk": 110,
           "def": 80,
           "spa": 55,
           "spd": 80,
           "spe": 105
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "테크니션",
           "H": "불굴의 마음"
       },
       "heightm": 1.5,
       "weightkg": 56,
       "color": "Green",
       "evos": ["Scizor"],
       "eggGroups": ["Bug"]
   },
   "루주라": {
       "num": 124,
       "name": "Jynx",
       "types": ["얼음", "에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 65,
           "atk": 50,
           "def": 35,
           "spa": 115,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "둔감",
           "1": "예지몽",
           "H": "건조피부"
       },
       "heightm": 1.4,
       "weightkg": 40.6,
       "color": "Red",
       "prevo": "Smoochum",
       "evoLevel": 30,
       "eggGroups": ["Human-Like"]
   },
   "에레브": {
       "num": 125,
       "name": "Electabuzz",
       "types": ["전기"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 65,
           "atk": 83,
           "def": 57,
           "spa": 95,
           "spd": 85,
           "spe": 105
       },
       "abilities": {
           "0": "정전기",
           "H": "의기양양"
       },
       "heightm": 1.1,
       "weightkg": 30,
       "color": "Yellow",
       "prevo": "Elekid",
       "evoLevel": 30,
       "evos": ["Electivire"],
       "eggGroups": ["Human-Like"]
   },
   "마그마": {
       "num": 126,
       "name": "Magmar",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 65,
           "atk": 95,
           "def": 57,
           "spa": 100,
           "spd": 85,
           "spe": 93
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "의기양양"
       },
       "heightm": 1.3,
       "weightkg": 44.5,
       "color": "Red",
       "prevo": "Magby",
       "evoLevel": 30,
       "evos": ["Magmortar"],
       "eggGroups": ["Human-Like"]
   },
   "쁘사이저": {
       "num": 127,
       "name": "Pinsir",
       "types": ["벌레"],
       "baseStats": {
           "hp": 65,
           "atk": 125,
           "def": 100,
           "spa": 55,
           "spd": 70,
           "spe": 85
       },
       "abilities": {
           "0": "괴력집게",
           "1": "틀깨기",
           "H": "자기과신"
       },
       "heightm": 1.5,
       "weightkg": 55,
       "color": "Brown",
       "eggGroups": ["Bug"],
       "otherFormes": ["Pinsir-Mega"],
       "formeOrder": ["Pinsir", "Pinsir-Mega"]
   },
   "켄타로스": {
       "num": 128,
       "name": "Tauros",
       "types": ["노말"],
       "gender": "M",
       "baseStats": {
           "hp": 75,
           "atk": 100,
           "def": 95,
           "spa": 40,
           "spd": 70,
           "spe": 110
       },
       "abilities": {
           "0": "위협",
           "1": "분노의 경혈",
           "H": "우격다짐"
       },
       "heightm": 1.4,
       "weightkg": 88.4,
       "color": "Brown",
       "eggGroups": ["Field"]
   },
   "잉어킹": {
       "num": 129,
       "name": "Magikarp",
       "types": ["물"],
       "baseStats": {
           "hp": 20,
           "atk": 10,
           "def": 55,
           "spa": 15,
           "spd": 20,
           "spe": 80
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "주눅"
       },
       "heightm": 0.9,
       "weightkg": 10,
       "color": "Red",
       "evos": ["Gyarados"],
       "eggGroups": ["Water 2", "Dragon"]
   },
   "갸라도스": {
       "num": 130,
       "name": "Gyarados",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 95,
           "atk": 125,
           "def": 79,
           "spa": 60,
           "spd": 100,
           "spe": 81
       },
       "abilities": {
           "0": "위협",
           "H": "자기과신"
       },
       "heightm": 6.5,
       "weightkg": 235,
       "color": "Blue",
       "prevo": "Magikarp",
       "evoLevel": 20,
       "eggGroups": ["Water 2", "Dragon"],
       "otherFormes": ["Gyarados-Mega"],
       "formeOrder": ["Gyarados", "Gyarados-Mega"]
   },
   "라프라스": {
       "num": 131,
       "name": "Lapras",
       "types": ["물", "얼음"],
       "baseStats": {
           "hp": 130,
           "atk": 85,
           "def": 80,
           "spa": 85,
           "spd": 95,
           "spe": 60
       },
       "abilities": {
           "0": "저수",
           "1": "조가비 갑옷",
           "H": "촉촉바디"
       },
       "heightm": 2.5,
       "weightkg": 220,
       "color": "Blue",
       "eggGroups": ["Monster", "Water 1"],
       "canGigantamax": "G-Max Resonance"
   },
   "메타몽": {
       "num": 132,
       "name": "Ditto",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 48,
           "atk": 48,
           "def": 48,
           "spa": 48,
           "spd": 48,
           "spe": 48
       },
       "abilities": {
           "0": "유연",
           "H": "괴짜"
       },
       "heightm": 0.3,
       "weightkg": 4,
       "color": "Purple",
       "eggGroups": ["Ditto"]
   },
   "이브이": {
       "num": 133,
       "name": "Eevee",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 55,
           "atk": 55,
           "def": 50,
           "spa": 45,
           "spd": 65,
           "spe": 55
       },
       "abilities": {
           "0": "도주",
           "1": "적응력",
           "H": "위험예지"
       },
       "heightm": 0.3,
       "weightkg": 6.5,
       "color": "Brown",
       "evos": ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
       "eggGroups": ["Field"],
       "otherFormes": ["Eevee-Starter"],
       "formeOrder": ["Eevee", "Eevee-Starter"],
       "canGigantamax": "G-Max Cuddle"
   },
   "샤미드": {
       "num": 134,
       "name": "Vaporeon",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 130,
           "atk": 65,
           "def": 60,
           "spa": 110,
           "spd": 95,
           "spe": 65
       },
       "abilities": {
           "0": "저수",
           "H": "촉촉바디"
       },
       "heightm": 1,
       "weightkg": 29,
       "color": "Blue",
       "prevo": "Eevee",
       "evoType": "useItem",
       "evoItem": "Water Stone",
       "eggGroups": ["Field"]
   },
   "쥬피썬더": {
       "num": 135,
       "name": "Jolteon",
       "types": ["전기"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 65,
           "def": 60,
           "spa": 110,
           "spd": 95,
           "spe": 130
       },
       "abilities": {
           "0": "축전",
           "H": "속보"
       },
       "heightm": 0.8,
       "weightkg": 24.5,
       "color": "Yellow",
       "prevo": "Eevee",
       "evoType": "useItem",
       "evoItem": "Thunder Stone",
       "eggGroups": ["Field"]
   },
   "부스터": {
       "num": 136,
       "name": "Flareon",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 130,
           "def": 60,
           "spa": 95,
           "spd": 110,
           "spe": 65
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "H": "근성"
       },
       "heightm": 0.9,
       "weightkg": 25,
       "color": "Red",
       "prevo": "Eevee",
       "evoType": "useItem",
       "evoItem": "Fire Stone",
       "eggGroups": ["Field"]
   },
   "폴리곤": {
       "num": 137,
       "name": "Porygon",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 65,
           "atk": 60,
           "def": 70,
           "spa": 85,
           "spd": 75,
           "spe": 40
       },
       "abilities": {
           "0": "트레이스",
           "1": "다운로드",
           "H": "애널라이즈"
       },
       "heightm": 0.8,
       "weightkg": 36.5,
       "color": "Pink",
       "evos": ["Porygon2"],
       "eggGroups": ["Mineral"]
   },
   "암나이트": {
       "num": 138,
       "name": "Omanyte",
       "types": ["바위", "물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 35,
           "atk": 40,
           "def": 100,
           "spa": 90,
           "spd": 55,
           "spe": 35
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "조가비 갑옷",
           "H": "깨어진갑옷"
       },
       "heightm": 0.4,
       "weightkg": 7.5,
       "color": "Blue",
       "evos": ["Omastar"],
       "eggGroups": ["Water 1", "Water 3"]
   },
   "암스타": {
       "num": 139,
       "name": "Omastar",
       "types": ["바위", "물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 70,
           "atk": 60,
           "def": 125,
           "spa": 115,
           "spd": 70,
           "spe": 55
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "조가비 갑옷",
           "H": "깨어진갑옷"
       },
       "heightm": 1,
       "weightkg": 35,
       "color": "Blue",
       "prevo": "Omanyte",
       "evoLevel": 40,
       "eggGroups": ["Water 1", "Water 3"]
   },
   "투구": {
       "num": 140,
       "name": "Kabuto",
       "types": ["바위", "물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 30,
           "atk": 80,
           "def": 90,
           "spa": 55,
           "spd": 45,
           "spe": 55
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "전투 무장",
           "H": "깨어진갑옷"
       },
       "heightm": 0.5,
       "weightkg": 11.5,
       "color": "Brown",
       "evos": ["Kabutops"],
       "eggGroups": ["Water 1", "Water 3"]
   },
   "투구푸스": {
       "num": 141,
       "name": "Kabutops",
       "types": ["바위", "물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 115,
           "def": 105,
           "spa": 65,
           "spd": 70,
           "spe": 80
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "전투 무장",
           "H": "깨어진갑옷"
       },
       "heightm": 1.3,
       "weightkg": 40.5,
       "color": "Brown",
       "prevo": "Kabuto",
       "evoLevel": 40,
       "eggGroups": ["Water 1", "Water 3"]
   },
   "프테라": {
       "num": 142,
       "name": "Aerodactyl",
       "types": ["바위", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 80,
           "atk": 105,
           "def": 65,
           "spa": 60,
           "spd": 75,
           "spe": 130
       },
       "abilities": {
           "0": "돌머리",
           "1": "프레셔",
           "H": "긴장감"
       },
       "heightm": 1.8,
       "weightkg": 59,
       "color": "Purple",
       "eggGroups": ["Flying"],
       "otherFormes": ["Aerodactyl-Mega"],
       "formeOrder": ["Aerodactyl", "Aerodactyl-Mega"]
   },
   "잠만보": {
       "num": 143,
       "name": "Snorlax",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 160,
           "atk": 110,
           "def": 65,
           "spa": 65,
           "spd": 110,
           "spe": 30
       },
       "abilities": {
           "0": "면역",
           "1": "두꺼운 지방",
           "H": "먹보"
       },
       "heightm": 2.1,
       "weightkg": 460,
       "color": "Black",
       "prevo": "Munchlax",
       "evoType": "levelFriendship",
       "eggGroups": ["Monster"],
       "canHatch": true,
       "canGigantamax": "G-Max Replenish"
   },
   "프리져": {
       "num": 144,
       "name": "Articuno",
       "types": ["얼음", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 85,
           "def": 100,
           "spa": 95,
           "spd": 125,
           "spe": 85
       },
       "abilities": {
           "0": "프레셔",
           "H": "눈숨기"
       },
       "heightm": 1.7,
       "weightkg": 55.4,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Articuno-Galar"],
       "formeOrder": ["Articuno", "Articuno-Galar"]
   },
   "프리져-가라르": {
       "num": 144,
       "name": "Articuno-Galar",
       "baseSpecies": "Articuno",
       "forme": "Galar",
       "types": ["에스퍼", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 85,
           "def": 85,
           "spa": 125,
           "spd": 100,
           "spe": 95
       },
       "abilities": {
           "0": "승기"
       },
       "heightm": 1.7,
       "weightkg": 50.9,
       "color": "Purple",
       "eggGroups": ["Undiscovered"]
   },
   "썬더": {
       "num": 145,
       "name": "Zapdos",
       "types": ["전기", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 90,
           "def": 85,
           "spa": 125,
           "spd": 90,
           "spe": 100
       },
       "abilities": {
           "0": "프레셔",
           "H": "정전기"
       },
       "heightm": 1.6,
       "weightkg": 52.6,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Zapdos-Galar"],
       "formeOrder": ["Zapdos", "Zapdos-Galar"]
   },
   "썬더-가라르": {
       "num": 145,
       "name": "Zapdos-Galar",
       "baseSpecies": "Zapdos",
       "forme": "Galar",
       "types": ["격투", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 125,
           "def": 90,
           "spa": 85,
           "spd": 90,
           "spe": 100
       },
       "abilities": {
           "0": "오기"
       },
       "heightm": 1.6,
       "weightkg": 58.2,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "파이어": {
       "num": 146,
       "name": "Moltres",
       "types": ["불꽃", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 100,
           "def": 90,
           "spa": 125,
           "spd": 85,
           "spe": 90
       },
       "abilities": {
           "0": "프레셔",
           "H": "불꽃몸"
       },
       "heightm": 2,
       "weightkg": 60,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Moltres-Galar"],
       "formeOrder": ["Moltres", "Moltres-Galar"]
   },
   "파이어-가라르": {
       "num": 146,
       "name": "Moltres-Galar",
       "baseSpecies": "Moltres",
       "forme": "Galar",
       "types": ["악", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 85,
           "def": 90,
           "spa": 100,
           "spd": 125,
           "spe": 90
       },
       "abilities": {
           "0": "발끈"
       },
       "heightm": 2,
       "weightkg": 66,
       "color": "Red",
       "eggGroups": ["Undiscovered"]
   },
   "미뇽": {
       "num": 147,
       "name": "Dratini",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 41,
           "atk": 64,
           "def": 45,
           "spa": 50,
           "spd": 50,
           "spe": 50
       },
       "abilities": {
           "0": "탈피",
           "H": "이상한 비늘"
       },
       "heightm": 1.8,
       "weightkg": 3.3,
       "color": "Blue",
       "evos": ["Dragonair"],
       "eggGroups": ["Water 1", "Dragon"]
   },
   "신뇽": {
       "num": 148,
       "name": "Dragonair",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 61,
           "atk": 84,
           "def": 65,
           "spa": 70,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "탈피",
           "H": "이상한 비늘"
       },
       "heightm": 4,
       "weightkg": 16.5,
       "color": "Blue",
       "prevo": "Dratini",
       "evoLevel": 30,
       "evos": ["Dragonite"],
       "eggGroups": ["Water 1", "Dragon"]
   },
   "망나뇽": {
       "num": 149,
       "name": "Dragonite",
       "types": ["드래곤", "비행"],
       "baseStats": {
           "hp": 91,
           "atk": 134,
           "def": 95,
           "spa": 100,
           "spd": 100,
           "spe": 80
       },
       "abilities": {
           "0": "정신력",
           "H": "멀티스케일"
       },
       "heightm": 2.2,
       "weightkg": 210,
       "color": "Brown",
       "prevo": "Dragonair",
       "evoLevel": 55,
       "eggGroups": ["Water 1", "Dragon"]
   },
   "뮤츠": {
       "num": 150,
       "name": "Mewtwo",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 106,
           "atk": 110,
           "def": 90,
           "spa": 154,
           "spd": 90,
           "spe": 130
       },
       "abilities": {
           "0": "프레셔",
           "H": "긴장감"
       },
       "heightm": 2,
       "weightkg": 122,
       "color": "Purple",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Mewtwo-Mega-X", "Mewtwo-Mega-Y"],
       "formeOrder": ["Mewtwo", "Mewtwo-Mega-X", "Mewtwo-Mega-Y"]
   },
   "뮤": {
       "num": 151,
       "name": "Mew",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 100,
           "spa": 100,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "싱크로"
       },
       "heightm": 0.4,
       "weightkg": 4,
       "color": "Pink",
       "eggGroups": ["Undiscovered"]
   },
   "치코리타": {
       "num": 152,
       "name": "Chikorita",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 45,
           "atk": 49,
           "def": 65,
           "spa": 49,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "심록",
           "H": "리프가드"
       },
       "heightm": 0.9,
       "weightkg": 6.4,
       "color": "Green",
       "evos": ["Bayleef"],
       "eggGroups": ["Monster", "Grass"]
   },
   "베이리프": {
       "num": 153,
       "name": "Bayleef",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 62,
           "def": 80,
           "spa": 63,
           "spd": 80,
           "spe": 60
       },
       "abilities": {
           "0": "심록",
           "H": "리프가드"
       },
       "heightm": 1.2,
       "weightkg": 15.8,
       "color": "Green",
       "prevo": "Chikorita",
       "evoLevel": 16,
       "evos": ["Meganium"],
       "eggGroups": ["Monster", "Grass"]
   },
   "브케인": {
       "num": 155,
       "name": "Cyndaquil",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 39,
           "atk": 52,
           "def": 43,
           "spa": 60,
           "spd": 50,
           "spe": 65
       },
       "abilities": {
           "0": "맹화",
           "H": "타오르는 불꽃"
       },
       "heightm": 0.5,
       "weightkg": 7.9,
       "color": "Yellow",
       "evos": ["Quilava"],
       "eggGroups": ["Field"]
   },
   "마그케인": {
       "num": 156,
       "name": "Quilava",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 58,
           "atk": 64,
           "def": 58,
           "spa": 80,
           "spd": 65,
           "spe": 80
       },
       "abilities": {
           "0": "맹화",
           "H": "타오르는 불꽃"
       },
       "heightm": 0.9,
       "weightkg": 19,
       "color": "Yellow",
       "prevo": "Cyndaquil",
       "evoLevel": 14,
       "evos": ["Typhlosion"],
       "eggGroups": ["Field"]
   },
   "블레이범": {
       "num": 157,
       "name": "Typhlosion",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 78,
           "atk": 84,
           "def": 78,
           "spa": 109,
           "spd": 85,
           "spe": 100
       },
       "abilities": {
           "0": "맹화",
           "H": "타오르는 불꽃"
       },
       "heightm": 1.7,
       "weightkg": 79.5,
       "color": "Yellow",
       "prevo": "Quilava",
       "evoLevel": 36,
       "eggGroups": ["Field"]
   },
   "리아코": {
       "num": 158,
       "name": "Totodile",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 64,
           "spa": 44,
           "spd": 48,
           "spe": 43
       },
       "abilities": {
           "0": "급류",
           "H": "우격다짐"
       },
       "heightm": 0.6,
       "weightkg": 9.5,
       "color": "Blue",
       "evos": ["Croconaw"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "엘리게이": {
       "num": 159,
       "name": "Croconaw",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 80,
           "def": 80,
           "spa": 59,
           "spd": 63,
           "spe": 58
       },
       "abilities": {
           "0": "급류",
           "H": "우격다짐"
       },
       "heightm": 1.1,
       "weightkg": 25,
       "color": "Blue",
       "prevo": "Totodile",
       "evoLevel": 18,
       "evos": ["Feraligatr"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "장크로다일": {
       "num": 160,
       "name": "Feraligatr",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 85,
           "atk": 105,
           "def": 100,
           "spa": 79,
           "spd": 83,
           "spe": 78
       },
       "abilities": {
           "0": "급류",
           "H": "우격다짐"
       },
       "heightm": 2.3,
       "weightkg": 88.8,
       "color": "Blue",
       "prevo": "Croconaw",
       "evoLevel": 30,
       "eggGroups": ["Monster", "Water 1"]
   },
   "꼬리선": {
       "num": 161,
       "name": "Sentret",
       "types": ["노말"],
       "baseStats": {
           "hp": 35,
           "atk": 46,
           "def": 34,
           "spa": 35,
           "spd": 45,
           "spe": 20
       },
       "abilities": {
           "0": "도주",
           "1": "날카로운 눈",
           "H": "통찰"
       },
       "heightm": 0.8,
       "weightkg": 6,
       "color": "Brown",
       "evos": ["Furret"],
       "eggGroups": ["Field"]
   },
   "다꼬리": {
       "num": 162,
       "name": "Furret",
       "types": ["노말"],
       "baseStats": {
           "hp": 85,
           "atk": 76,
           "def": 64,
           "spa": 45,
           "spd": 55,
           "spe": 90
       },
       "abilities": {
           "0": "도주",
           "1": "날카로운 눈",
           "H": "통찰"
       },
       "heightm": 1.8,
       "weightkg": 32.5,
       "color": "Brown",
       "prevo": "Sentret",
       "evoLevel": 15,
       "eggGroups": ["Field"]
   },
   "부우부": {
       "num": 163,
       "name": "Hoothoot",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 30,
           "def": 30,
           "spa": 36,
           "spd": 56,
           "spe": 50
       },
       "abilities": {
           "0": "불면",
           "1": "날카로운 눈",
           "H": "색안경"
       },
       "heightm": 0.7,
       "weightkg": 21.2,
       "color": "Brown",
       "evos": ["Noctowl"],
       "eggGroups": ["Flying"]
   },
   "야부엉": {
       "num": 164,
       "name": "Noctowl",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 100,
           "atk": 50,
           "def": 50,
           "spa": 86,
           "spd": 96,
           "spe": 70
       },
       "abilities": {
           "0": "불면",
           "1": "날카로운 눈",
           "H": "색안경"
       },
       "heightm": 1.6,
       "weightkg": 40.8,
       "color": "Brown",
       "prevo": "Hoothoot",
       "evoLevel": 20,
       "eggGroups": ["Flying"]
   },
   "레디바": {
       "num": 165,
       "name": "Ledyba",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 20,
           "def": 30,
           "spa": 40,
           "spd": 80,
           "spe": 55
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "일찍 기상",
           "H": "주눅"
       },
       "heightm": 1,
       "weightkg": 10.8,
       "color": "Red",
       "evos": ["Ledian"],
       "eggGroups": ["Bug"]
   },
   "레디안": {
       "num": 166,
       "name": "Ledian",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 55,
           "atk": 35,
           "def": 50,
           "spa": 55,
           "spd": 110,
           "spe": 85
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "일찍 기상",
           "H": "철주먹"
       },
       "heightm": 1.4,
       "weightkg": 35.6,
       "color": "Red",
       "prevo": "Ledyba",
       "evoLevel": 18,
       "eggGroups": ["Bug"]
   },
   "페이검": {
       "num": 167,
       "name": "Spinarak",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 40,
           "atk": 60,
           "def": 40,
           "spa": 40,
           "spd": 40,
           "spe": 30
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "불면",
           "H": "스나이퍼"
       },
       "heightm": 0.5,
       "weightkg": 8.5,
       "color": "Green",
       "evos": ["Ariados"],
       "eggGroups": ["Bug"]
   },
   "아리아도스": {
       "num": 168,
       "name": "Ariados",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 70,
           "atk": 90,
           "def": 70,
           "spa": 60,
           "spd": 70,
           "spe": 40
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "불면",
           "H": "스나이퍼"
       },
       "heightm": 1.1,
       "weightkg": 33.5,
       "color": "Red",
       "prevo": "Spinarak",
       "evoLevel": 22,
       "eggGroups": ["Bug"]
   },
   "크로뱃": {
       "num": 169,
       "name": "Crobat",
       "types": ["독", "비행"],
       "baseStats": {
           "hp": 85,
           "atk": 90,
           "def": 80,
           "spa": 70,
           "spd": 80,
           "spe": 130
       },
       "abilities": {
           "0": "정신력",
           "H": "틈새포착"
       },
       "heightm": 1.8,
       "weightkg": 75,
       "color": "Purple",
       "prevo": "Golbat",
       "evoType": "levelFriendship",
       "eggGroups": ["Flying"]
   },
   "초라기": {
       "num": 170,
       "name": "Chinchou",
       "types": ["물", "전기"],
       "baseStats": {
           "hp": 75,
           "atk": 38,
           "def": 38,
           "spa": 56,
           "spd": 56,
           "spe": 67
       },
       "abilities": {
           "0": "축전",
           "1": "발광",
           "H": "저수"
       },
       "heightm": 0.5,
       "weightkg": 12,
       "color": "Blue",
       "evos": ["Lanturn"],
       "eggGroups": ["Water 2"]
   },
   "랜턴": {
       "num": 171,
       "name": "Lanturn",
       "types": ["물", "전기"],
       "baseStats": {
           "hp": 125,
           "atk": 58,
           "def": 58,
           "spa": 76,
           "spd": 76,
           "spe": 67
       },
       "abilities": {
           "0": "축전",
           "1": "발광",
           "H": "저수"
       },
       "heightm": 1.2,
       "weightkg": 22.5,
       "color": "Blue",
       "prevo": "Chinchou",
       "evoLevel": 27,
       "eggGroups": ["Water 2"]
   },
   "피츄": {
       "num": 172,
       "name": "Pichu",
       "types": ["전기"],
       "baseStats": {
           "hp": 20,
           "atk": 40,
           "def": 15,
           "spa": 35,
           "spd": 35,
           "spe": 60
       },
       "abilities": {
           "0": "정전기",
           "H": "피뢰침"
       },
       "heightm": 0.3,
       "weightkg": 2,
       "color": "Yellow",
       "evos": ["Pikachu"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true,
       "otherFormes": ["Pichu-Spiky-eared"],
       "formeOrder": ["Pichu", "Pichu-Spiky-eared"]
   },
   "삐": {
       "num": 173,
       "name": "Cleffa",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 50,
           "atk": 25,
           "def": 28,
           "spa": 45,
           "spd": 55,
           "spe": 15
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "매직가드",
           "H": "프렌드가드"
       },
       "heightm": 0.3,
       "weightkg": 3,
       "color": "Pink",
       "evos": ["Clefairy"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "푸푸린": {
       "num": 174,
       "name": "Igglybuff",
       "types": ["노말", "페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 90,
           "atk": 30,
           "def": 15,
           "spa": 40,
           "spd": 20,
           "spe": 15
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "승기",
           "H": "프렌드가드"
       },
       "heightm": 0.3,
       "weightkg": 1,
       "color": "Pink",
       "evos": ["Jigglypuff"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "토게피": {
       "num": 175,
       "name": "Togepi",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 35,
           "atk": 20,
           "def": 65,
           "spa": 40,
           "spd": 65,
           "spe": 20
       },
       "abilities": {
           "0": "의욕",
           "1": "하늘의 은총",
           "H": "대운"
       },
       "heightm": 0.3,
       "weightkg": 1.5,
       "color": "White",
       "evos": ["Togetic"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "토게틱": {
       "num": 176,
       "name": "Togetic",
       "types": ["페어리", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 55,
           "atk": 40,
           "def": 85,
           "spa": 80,
           "spd": 105,
           "spe": 40
       },
       "abilities": {
           "0": "의욕",
           "1": "하늘의 은총",
           "H": "대운"
       },
       "heightm": 0.6,
       "weightkg": 3.2,
       "color": "White",
       "prevo": "Togepi",
       "evoType": "levelFriendship",
       "evos": ["Togekiss"],
       "eggGroups": ["Flying", "Fairy"]
   },
   "네이티": {
       "num": 177,
       "name": "Natu",
       "types": ["에스퍼", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 50,
           "def": 45,
           "spa": 70,
           "spd": 45,
           "spe": 70
       },
       "abilities": {
           "0": "싱크로",
           "1": "일찍 기상",
           "H": "매직미러"
       },
       "heightm": 0.2,
       "weightkg": 2,
       "color": "Green",
       "evos": ["Xatu"],
       "eggGroups": ["Flying"]
   },
   "네이티오": {
       "num": 178,
       "name": "Xatu",
       "types": ["에스퍼", "비행"],
       "baseStats": {
           "hp": 65,
           "atk": 75,
           "def": 70,
           "spa": 95,
           "spd": 70,
           "spe": 95
       },
       "abilities": {
           "0": "싱크로",
           "1": "일찍 기상",
           "H": "매직미러"
       },
       "heightm": 1.5,
       "weightkg": 15,
       "color": "Green",
       "prevo": "Natu",
       "evoLevel": 25,
       "eggGroups": ["Flying"]
   },
   "메리프": {
       "num": 179,
       "name": "Mareep",
       "types": ["전기"],
       "baseStats": {
           "hp": 55,
           "atk": 40,
           "def": 40,
           "spa": 65,
           "spd": 45,
           "spe": 35
       },
       "abilities": {
           "0": "정전기",
           "H": "플러스"
       },
       "heightm": 0.6,
       "weightkg": 7.8,
       "color": "White",
       "evos": ["Flaaffy"],
       "eggGroups": ["Monster", "Field"]
   },
   "보송송": {
       "num": 180,
       "name": "Flaaffy",
       "types": ["전기"],
       "baseStats": {
           "hp": 70,
           "atk": 55,
           "def": 55,
           "spa": 80,
           "spd": 60,
           "spe": 45
       },
       "abilities": {
           "0": "정전기",
           "H": "플러스"
       },
       "heightm": 0.8,
       "weightkg": 13.3,
       "color": "Pink",
       "prevo": "Mareep",
       "evoLevel": 15,
       "evos": ["Ampharos"],
       "eggGroups": ["Monster", "Field"]
   },
   "전룡": {
       "num": 181,
       "name": "Ampharos",
       "types": ["전기"],
       "baseStats": {
           "hp": 90,
           "atk": 75,
           "def": 85,
           "spa": 115,
           "spd": 90,
           "spe": 55
       },
       "abilities": {
           "0": "정전기",
           "H": "플러스"
       },
       "heightm": 1.4,
       "weightkg": 61.5,
       "color": "Yellow",
       "prevo": "Flaaffy",
       "evoLevel": 30,
       "eggGroups": ["Monster", "Field"],
       "otherFormes": ["Ampharos-Mega"],
       "formeOrder": ["Ampharos", "Ampharos-Mega"]
   },
   "아르코": {
       "num": 182,
       "name": "Bellossom",
       "types": ["풀"],
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 95,
           "spa": 90,
           "spd": 100,
           "spe": 50
       },
       "abilities": {
           "0": "엽록소",
           "H": "치유의마음"
       },
       "heightm": 0.4,
       "weightkg": 5.8,
       "color": "Green",
       "prevo": "Gloom",
       "evoType": "useItem",
       "evoItem": "Sun Stone",
       "eggGroups": ["Grass"]
   },
   "마릴": {
       "num": 183,
       "name": "Marill",
       "types": ["물", "페어리"],
       "baseStats": {
           "hp": 70,
           "atk": 20,
           "def": 50,
           "spa": 20,
           "spd": 50,
           "spe": 40
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "천하장사",
           "H": "초식"
       },
       "heightm": 0.4,
       "weightkg": 8.5,
       "color": "Blue",
       "prevo": "Azurill",
       "evoType": "levelFriendship",
       "evos": ["Azumarill"],
       "eggGroups": ["Water 1", "Fairy"],
       "canHatch": true
   },
   "마릴리": {
       "num": 184,
       "name": "Azumarill",
       "types": ["물", "페어리"],
       "baseStats": {
           "hp": 100,
           "atk": 50,
           "def": 80,
           "spa": 60,
           "spd": 80,
           "spe": 50
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "천하장사",
           "H": "초식"
       },
       "heightm": 0.8,
       "weightkg": 28.5,
       "color": "Blue",
       "prevo": "Marill",
       "evoLevel": 18,
       "eggGroups": ["Water 1", "Fairy"]
   },
   "꼬지모": {
       "num": 185,
       "name": "Sudowoodo",
       "types": ["바위"],
       "baseStats": {
           "hp": 70,
           "atk": 100,
           "def": 115,
           "spa": 30,
           "spd": 65,
           "spe": 30
       },
       "abilities": {
           "0": "옹골참",
           "1": "돌머리",
           "H": "주눅"
       },
       "heightm": 1.2,
       "weightkg": 38,
       "color": "Brown",
       "prevo": "Bonsly",
       "evoType": "levelMove",
       "evoMove": "Mimic",
       "eggGroups": ["Mineral"],
       "canHatch": true
   },
   "왕구리": {
       "num": 186,
       "name": "Politoed",
       "types": ["물"],
       "baseStats": {
           "hp": 90,
           "atk": 75,
           "def": 75,
           "spa": 90,
           "spd": 100,
           "spe": 70
       },
       "abilities": {
           "0": "저수",
           "1": "습기",
           "H": "잔비"
       },
       "heightm": 1.1,
       "weightkg": 33.9,
       "color": "Green",
       "prevo": "Poliwhirl",
       "evoType": "trade",
       "evoItem": "King's Rock",
       "eggGroups": ["Water 1"]
   },
   "통통코": {
       "num": 187,
       "name": "Hoppip",
       "types": ["풀", "비행"],
       "baseStats": {
           "hp": 35,
           "atk": 35,
           "def": 40,
           "spa": 35,
           "spd": 55,
           "spe": 50
       },
       "abilities": {
           "0": "엽록소",
           "1": "리프가드",
           "H": "틈새포착"
       },
       "heightm": 0.4,
       "weightkg": 0.5,
       "color": "Pink",
       "evos": ["Skiploom"],
       "eggGroups": ["Fairy", "Grass"]
   },
   "두코": {
       "num": 188,
       "name": "Skiploom",
       "types": ["풀", "비행"],
       "baseStats": {
           "hp": 55,
           "atk": 45,
           "def": 50,
           "spa": 45,
           "spd": 65,
           "spe": 80
       },
       "abilities": {
           "0": "엽록소",
           "1": "리프가드",
           "H": "틈새포착"
       },
       "heightm": 0.6,
       "weightkg": 1,
       "color": "Green",
       "prevo": "Hoppip",
       "evoLevel": 18,
       "evos": ["Jumpluff"],
       "eggGroups": ["Fairy", "Grass"]
   },
   "솜솜코": {
       "num": 189,
       "name": "Jumpluff",
       "types": ["풀", "비행"],
       "baseStats": {
           "hp": 75,
           "atk": 55,
           "def": 70,
           "spa": 55,
           "spd": 95,
           "spe": 110
       },
       "abilities": {
           "0": "엽록소",
           "1": "리프가드",
           "H": "틈새포착"
       },
       "heightm": 0.8,
       "weightkg": 3,
       "color": "Blue",
       "prevo": "Skiploom",
       "evoLevel": 27,
       "eggGroups": ["Fairy", "Grass"]
   },
   "에이팜": {
       "num": 190,
       "name": "Aipom",
       "types": ["노말"],
       "baseStats": {
           "hp": 55,
           "atk": 70,
           "def": 55,
           "spa": 40,
           "spd": 55,
           "spe": 85
       },
       "abilities": {
           "0": "도주",
           "1": "픽업",
           "H": "스킬링크"
       },
       "heightm": 0.8,
       "weightkg": 11.5,
       "color": "Purple",
       "evos": ["Ambipom"],
       "eggGroups": ["Field"]
   },
   "해너츠": {
       "num": 191,
       "name": "Sunkern",
       "types": ["풀"],
       "baseStats": {
           "hp": 30,
           "atk": 30,
           "def": 30,
           "spa": 30,
           "spd": 30,
           "spe": 30
       },
       "abilities": {
           "0": "엽록소",
           "1": "선파워",
           "H": "일찍 기상"
       },
       "heightm": 0.3,
       "weightkg": 1.8,
       "color": "Yellow",
       "evos": ["Sunflora"],
       "eggGroups": ["Grass"]
   },
   "해루미": {
       "num": 192,
       "name": "Sunflora",
       "types": ["풀"],
       "baseStats": {
           "hp": 75,
           "atk": 75,
           "def": 55,
           "spa": 105,
           "spd": 85,
           "spe": 30
       },
       "abilities": {
           "0": "엽록소",
           "1": "선파워",
           "H": "일찍 기상"
       },
       "heightm": 0.8,
       "weightkg": 8.5,
       "color": "Yellow",
       "prevo": "Sunkern",
       "evoType": "useItem",
       "evoItem": "Sun Stone",
       "eggGroups": ["Grass"]
   },
   "왕자리": {
       "num": 193,
       "name": "Yanma",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 65,
           "atk": 65,
           "def": 45,
           "spa": 75,
           "spd": 45,
           "spe": 95
       },
       "abilities": {
           "0": "가속",
           "1": "복안",
           "H": "통찰"
       },
       "heightm": 1.2,
       "weightkg": 38,
       "color": "Red",
       "evos": ["Yanmega"],
       "eggGroups": ["Bug"]
   },
   "우파": {
       "num": 194,
       "name": "Wooper",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 55,
           "atk": 45,
           "def": 45,
           "spa": 25,
           "spd": 25,
           "spe": 15
       },
       "abilities": {
           "0": "습기",
           "1": "저수",
           "H": "천진"
       },
       "heightm": 0.4,
       "weightkg": 8.5,
       "color": "Blue",
       "evos": ["Quagsire"],
       "eggGroups": ["Water 1", "Field"]
   },
   "누오": {
       "num": 195,
       "name": "Quagsire",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 95,
           "atk": 85,
           "def": 85,
           "spa": 65,
           "spd": 65,
           "spe": 35
       },
       "abilities": {
           "0": "습기",
           "1": "저수",
           "H": "천진"
       },
       "heightm": 1.4,
       "weightkg": 75,
       "color": "Blue",
       "prevo": "Wooper",
       "evoLevel": 20,
       "eggGroups": ["Water 1", "Field"]
   },
   "에브이": {
       "num": 196,
       "name": "Espeon",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 65,
           "def": 60,
           "spa": 130,
           "spd": 95,
           "spe": 110
       },
       "abilities": {
           "0": "싱크로",
           "H": "매직미러"
       },
       "heightm": 0.9,
       "weightkg": 26.5,
       "color": "Purple",
       "prevo": "Eevee",
       "evoType": "levelFriendship",
       "evoCondition": "during the day",
       "eggGroups": ["Field"]
   },
   "블래키": {
       "num": 197,
       "name": "Umbreon",
       "types": ["악"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 95,
           "atk": 65,
           "def": 110,
           "spa": 60,
           "spd": 130,
           "spe": 65
       },
       "abilities": {
           "0": "싱크로",
           "H": "정신력"
       },
       "heightm": 1,
       "weightkg": 27,
       "color": "Black",
       "prevo": "Eevee",
       "evoType": "levelFriendship",
       "evoCondition": "at night",
       "eggGroups": ["Field"]
   },
   "니로우": {
       "num": 198,
       "name": "Murkrow",
       "types": ["악", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 42,
           "spa": 85,
           "spd": 42,
           "spe": 91
       },
       "abilities": {
           "0": "불면",
           "1": "대운",
           "H": "짓궂은마음"
       },
       "heightm": 0.5,
       "weightkg": 2.1,
       "color": "Black",
       "evos": ["Honchkrow"],
       "eggGroups": ["Flying"]
   },
   "야도킹": {
       "num": 199,
       "name": "Slowking",
       "types": ["물", "에스퍼"],
       "baseStats": {
           "hp": 95,
           "atk": 75,
           "def": 80,
           "spa": 100,
           "spd": 110,
           "spe": 30
       },
       "abilities": {
           "0": "둔감",
           "1": "마이페이스",
           "H": "재생력"
       },
       "heightm": 2,
       "weightkg": 79.5,
       "color": "Pink",
       "prevo": "Slowpoke",
       "evoType": "trade",
       "evoItem": "King's Rock",
       "eggGroups": ["Monster", "Water 1"],
       "otherFormes": ["Slowking-Galar"],
       "formeOrder": ["Slowking", "Slowking-Galar"]
   },
   "야도킹-가라르": {
       "num": 199,
       "name": "Slowking-Galar",
       "baseSpecies": "Slowking",
       "forme": "Galar",
       "types": ["독", "에스퍼"],
       "baseStats": {
           "hp": 95,
           "atk": 65,
           "def": 80,
           "spa": 110,
           "spd": 110,
           "spe": 30
       },
       "abilities": {
           "0": "기묘한약",
           "1": "마이페이스",
           "H": "재생력"
       },
       "heightm": 1.8,
       "weightkg": 79.5,
       "color": "Pink",
       "prevo": "Slowpoke-Galar",
       "evoType": "useItem",
       "evoItem": "Galarica Wreath",
       "eggGroups": ["Monster", "Water 1"]
   },
   "무우마": {
       "num": 200,
       "name": "Misdreavus",
       "types": ["고스트"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 60,
           "spa": 85,
           "spd": 85,
           "spe": 85
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.7,
       "weightkg": 1,
       "color": "Gray",
       "evos": ["Mismagius"],
       "eggGroups": ["Amorphous"]
   },
   "안농": {
       "num": 201,
       "name": "Unown",
       "baseForme": "A",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 48,
           "atk": 72,
           "def": 48,
           "spa": 72,
           "spd": 48,
           "spe": 48
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.5,
       "weightkg": 5,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "cosmeticFormes": ["Unown-B", "Unown-C", "Unown-D", "Unown-E", "Unown-F", "Unown-G", "Unown-H", "Unown-I", "Unown-J", "Unown-K", "Unown-L", "Unown-M", "Unown-N", "Unown-O", "Unown-P", "Unown-Q", "Unown-R", "Unown-S", "Unown-T", "Unown-U", "Unown-V", "Unown-W", "Unown-X", "Unown-Y", "Unown-Z", "Unown-Exclamation", "Unown-Question"],
       "formeOrder": ["Unown", "Unown-B", "Unown-C", "Unown-D", "Unown-E", "Unown-F", "Unown-G", "Unown-H", "Unown-I", "Unown-J", "Unown-K", "Unown-L", "Unown-M", "Unown-N", "Unown-O", "Unown-P", "Unown-Q", "Unown-R", "Unown-S", "Unown-T", "Unown-U", "Unown-V", "Unown-W", "Unown-X", "Unown-Y", "Unown-Z", "Unown-Exclamation", "Unown-Question"]
   },
   "마자용": {
       "num": 202,
       "name": "Wobbuffet",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 190,
           "atk": 33,
           "def": 58,
           "spa": 33,
           "spd": 58,
           "spe": 33
       },
       "abilities": {
           "0": "그림자 밟기",
           "H": "텔레파시"
       },
       "heightm": 1.3,
       "weightkg": 28.5,
       "color": "Blue",
       "prevo": "Wynaut",
       "evoLevel": 15,
       "eggGroups": ["Amorphous"],
       "canHatch": true
   },
   "키링키": {
       "num": 203,
       "name": "Girafarig",
       "types": ["노말", "에스퍼"],
       "baseStats": {
           "hp": 70,
           "atk": 80,
           "def": 65,
           "spa": 90,
           "spd": 65,
           "spe": 85
       },
       "abilities": {
           "0": "정신력",
           "1": "일찍 기상",
           "H": "초식"
       },
       "heightm": 1.5,
       "weightkg": 41.5,
       "color": "Yellow",
       "eggGroups": ["Field"]
   },
   "피콘": {
       "num": 204,
       "name": "Pineco",
       "types": ["벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 90,
           "spa": 35,
           "spd": 35,
           "spe": 15
       },
       "abilities": {
           "0": "옹골참",
           "H": "방진"
       },
       "heightm": 0.6,
       "weightkg": 7.2,
       "color": "Gray",
       "evos": ["Forretress"],
       "eggGroups": ["Bug"]
   },
   "쏘콘": {
       "num": 205,
       "name": "Forretress",
       "types": ["벌레", "강철"],
       "baseStats": {
           "hp": 75,
           "atk": 90,
           "def": 140,
           "spa": 60,
           "spd": 60,
           "spe": 40
       },
       "abilities": {
           "0": "옹골참",
           "H": "방진"
       },
       "heightm": 1.2,
       "weightkg": 125.8,
       "color": "Purple",
       "prevo": "Pineco",
       "evoLevel": 31,
       "eggGroups": ["Bug"]
   },
   "노고치": {
       "num": 206,
       "name": "Dunsparce",
       "types": ["노말"],
       "baseStats": {
           "hp": 100,
           "atk": 70,
           "def": 70,
           "spa": 65,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "하늘의 은총",
           "1": "도주",
           "H": "주눅"
       },
       "heightm": 1.5,
       "weightkg": 14,
       "color": "Yellow",
       "eggGroups": ["Field"]
   },
   "글라이거": {
       "num": 207,
       "name": "Gligar",
       "types": ["땅", "비행"],
       "baseStats": {
           "hp": 65,
           "atk": 75,
           "def": 105,
           "spa": 35,
           "spd": 65,
           "spe": 85
       },
       "abilities": {
           "0": "괴력집게",
           "1": "모래숨기",
           "H": "면역"
       },
       "heightm": 1.1,
       "weightkg": 64.8,
       "color": "Purple",
       "evos": ["Gliscor"],
       "eggGroups": ["Bug"]
   },
   "강철톤": {
       "num": 208,
       "name": "Steelix",
       "types": ["강철", "땅"],
       "baseStats": {
           "hp": 75,
           "atk": 85,
           "def": 200,
           "spa": 55,
           "spd": 65,
           "spe": 30
       },
       "abilities": {
           "0": "돌머리",
           "1": "옹골참",
           "H": "우격다짐"
       },
       "heightm": 9.2,
       "weightkg": 400,
       "color": "Gray",
       "prevo": "Onix",
       "evoType": "trade",
       "evoItem": "Metal Coat",
       "eggGroups": ["Mineral"],
       "otherFormes": ["Steelix-Mega"],
       "formeOrder": ["Steelix", "Steelix-Mega"]
   },
   "블루": {
       "num": 209,
       "name": "Snubbull",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 60,
           "atk": 80,
           "def": 50,
           "spa": 40,
           "spd": 40,
           "spe": 30
       },
       "abilities": {
           "0": "위협",
           "1": "도주",
           "H": "주눅"
       },
       "heightm": 0.6,
       "weightkg": 7.8,
       "color": "Pink",
       "evos": ["Granbull"],
       "eggGroups": ["Field", "Fairy"]
   },
   "그랑블루": {
       "num": 210,
       "name": "Granbull",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 90,
           "atk": 120,
           "def": 75,
           "spa": 60,
           "spd": 60,
           "spe": 45
       },
       "abilities": {
           "0": "위협",
           "1": "속보",
           "H": "주눅"
       },
       "heightm": 1.4,
       "weightkg": 48.7,
       "color": "Purple",
       "prevo": "Snubbull",
       "evoLevel": 23,
       "eggGroups": ["Field", "Fairy"]
   },
   "침바루": {
       "num": 211,
       "name": "Qwilfish",
       "types": ["물", "독"],
       "baseStats": {
           "hp": 65,
           "atk": 95,
           "def": 85,
           "spa": 55,
           "spd": 55,
           "spe": 85
       },
       "abilities": {
           "0": "독가시",
           "1": "쓱쓱",
           "H": "위협"
       },
       "heightm": 0.5,
       "weightkg": 3.9,
       "color": "Gray",
       "eggGroups": ["Water 2"]
   },
   "핫삼": {
       "num": 212,
       "name": "Scizor",
       "types": ["벌레", "강철"],
       "baseStats": {
           "hp": 70,
           "atk": 130,
           "def": 100,
           "spa": 55,
           "spd": 80,
           "spe": 65
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "테크니션",
           "H": "라이트메탈"
       },
       "heightm": 1.8,
       "weightkg": 118,
       "color": "Red",
       "prevo": "Scyther",
       "evoType": "trade",
       "evoItem": "Metal Coat",
       "eggGroups": ["Bug"],
       "otherFormes": ["Scizor-Mega"],
       "formeOrder": ["Scizor", "Scizor-Mega"]
   },
   "단단지": {
       "num": 213,
       "name": "Shuckle",
       "types": ["벌레", "바위"],
       "baseStats": {
           "hp": 20,
           "atk": 10,
           "def": 230,
           "spa": 10,
           "spd": 230,
           "spe": 5
       },
       "abilities": {
           "0": "옹골참",
           "1": "먹보",
           "H": "심술꾸러기"
       },
       "heightm": 0.6,
       "weightkg": 20.5,
       "color": "Yellow",
       "eggGroups": ["Bug"]
   },
   "헤라크로스": {
       "num": 214,
       "name": "Heracross",
       "types": ["벌레", "격투"],
       "baseStats": {
           "hp": 80,
           "atk": 125,
           "def": 75,
           "spa": 40,
           "spd": 95,
           "spe": 85
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "근성",
           "H": "자기과신"
       },
       "heightm": 1.5,
       "weightkg": 54,
       "color": "Blue",
       "eggGroups": ["Bug"],
       "otherFormes": ["Heracross-Mega"],
       "formeOrder": ["Heracross", "Heracross-Mega"]
   },
   "포푸니": {
       "num": 215,
       "name": "Sneasel",
       "types": ["악", "얼음"],
       "baseStats": {
           "hp": 55,
           "atk": 95,
           "def": 55,
           "spa": 35,
           "spd": 75,
           "spe": 115
       },
       "abilities": {
           "0": "정신력",
           "1": "날카로운 눈",
           "H": "나쁜손버릇"
       },
       "heightm": 0.9,
       "weightkg": 28,
       "color": "Black",
       "evos": ["Weavile"],
       "eggGroups": ["Field"]
   },
   "깜지곰": {
       "num": 216,
       "name": "Teddiursa",
       "types": ["노말"],
       "baseStats": {
           "hp": 60,
           "atk": 80,
           "def": 50,
           "spa": 50,
           "spd": 50,
           "spe": 40
       },
       "abilities": {
           "0": "픽업",
           "1": "속보",
           "H": "꿀모으기"
       },
       "heightm": 0.6,
       "weightkg": 8.8,
       "color": "Brown",
       "evos": ["Ursaring"],
       "eggGroups": ["Field"]
   },
   "링곰": {
       "num": 217,
       "name": "Ursaring",
       "types": ["노말"],
       "baseStats": {
           "hp": 90,
           "atk": 130,
           "def": 75,
           "spa": 75,
           "spd": 75,
           "spe": 55
       },
       "abilities": {
           "0": "근성",
           "1": "속보",
           "H": "긴장감"
       },
       "heightm": 1.8,
       "weightkg": 125.8,
       "color": "Brown",
       "prevo": "Teddiursa",
       "evoLevel": 30,
       "eggGroups": ["Field"]
   },
   "마그마그": {
       "num": 218,
       "name": "Slugma",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 40,
           "atk": 40,
           "def": 40,
           "spa": 70,
           "spd": 40,
           "spe": 20
       },
       "abilities": {
           "0": "마그마의 무장",
           "1": "불꽃몸",
           "H": "깨어진갑옷"
       },
       "heightm": 0.7,
       "weightkg": 35,
       "color": "Red",
       "evos": ["Magcargo"],
       "eggGroups": ["Amorphous"]
   },
   "마그카르고": {
       "num": 219,
       "name": "Magcargo",
       "types": ["불꽃", "바위"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 120,
           "spa": 90,
           "spd": 80,
           "spe": 30
       },
       "abilities": {
           "0": "마그마의 무장",
           "1": "불꽃몸",
           "H": "깨어진갑옷"
       },
       "heightm": 0.8,
       "weightkg": 55,
       "color": "Red",
       "prevo": "Slugma",
       "evoLevel": 38,
       "eggGroups": ["Amorphous"]
   },
   "꾸꾸리": {
       "num": 220,
       "name": "Swinub",
       "types": ["얼음", "땅"],
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 40,
           "spa": 30,
           "spd": 30,
           "spe": 50
       },
       "abilities": {
           "0": "둔감",
           "1": "눈숨기",
           "H": "두꺼운 지방"
       },
       "heightm": 0.4,
       "weightkg": 6.5,
       "color": "Brown",
       "evos": ["Piloswine"],
       "eggGroups": ["Field"]
   },
   "메꾸리": {
       "num": 221,
       "name": "Piloswine",
       "types": ["얼음", "땅"],
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 80,
           "spa": 60,
           "spd": 60,
           "spe": 50
       },
       "abilities": {
           "0": "둔감",
           "1": "눈숨기",
           "H": "두꺼운 지방"
       },
       "heightm": 1.1,
       "weightkg": 55.8,
       "color": "Brown",
       "prevo": "Swinub",
       "evoLevel": 33,
       "evos": ["Mamoswine"],
       "eggGroups": ["Field"]
   },
   "코산호": {
       "num": 222,
       "name": "Corsola",
       "types": ["물", "바위"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 65,
           "atk": 55,
           "def": 95,
           "spa": 65,
           "spd": 95,
           "spe": 35
       },
       "abilities": {
           "0": "의욕",
           "1": "자연회복",
           "H": "재생력"
       },
       "heightm": 0.6,
       "weightkg": 5,
       "color": "Pink",
       "eggGroups": ["Water 1", "Water 3"],
       "otherFormes": ["Corsola-Galar"],
       "formeOrder": ["Corsola", "Corsola-Galar"]
   },
   "코산호-가라르": {
       "num": 222,
       "name": "Corsola-Galar",
       "baseSpecies": "Corsola",
       "forme": "Galar",
       "types": ["고스트"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 60,
           "atk": 55,
           "def": 100,
           "spa": 65,
           "spd": 100,
           "spe": 30
       },
       "abilities": {
           "0": "깨어진갑옷",
           "H": "저주받은바디"
       },
       "heightm": 0.6,
       "weightkg": 0.5,
       "color": "White",
       "evos": ["Cursola"],
       "eggGroups": ["Water 1", "Water 3"]
   },
   "총어": {
       "num": 223,
       "name": "Remoraid",
       "types": ["물"],
       "baseStats": {
           "hp": 35,
           "atk": 65,
           "def": 35,
           "spa": 65,
           "spd": 35,
           "spe": 65
       },
       "abilities": {
           "0": "의욕",
           "1": "스나이퍼",
           "H": "변덕쟁이"
       },
       "heightm": 0.6,
       "weightkg": 12,
       "color": "Gray",
       "evos": ["Octillery"],
       "eggGroups": ["Water 1", "Water 2"]
   },
   "대포무노": {
       "num": 224,
       "name": "Octillery",
       "types": ["물"],
       "baseStats": {
           "hp": 75,
           "atk": 105,
           "def": 75,
           "spa": 105,
           "spd": 75,
           "spe": 45
       },
       "abilities": {
           "0": "흡반",
           "1": "스나이퍼",
           "H": "변덕쟁이"
       },
       "heightm": 0.9,
       "weightkg": 28.5,
       "color": "Red",
       "prevo": "Remoraid",
       "evoLevel": 25,
       "eggGroups": ["Water 1", "Water 2"]
   },
   "딜리버드": {
       "num": 225,
       "name": "Delibird",
       "types": ["얼음", "비행"],
       "baseStats": {
           "hp": 45,
           "atk": 55,
           "def": 45,
           "spa": 65,
           "spd": 45,
           "spe": 75
       },
       "abilities": {
           "0": "의기양양",
           "1": "의욕",
           "H": "불면"
       },
       "heightm": 0.9,
       "weightkg": 16,
       "color": "Red",
       "eggGroups": ["Water 1", "Field"]
   },
   "만타인": {
       "num": 226,
       "name": "Mantine",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 85,
           "atk": 40,
           "def": 70,
           "spa": 80,
           "spd": 140,
           "spe": 70
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "저수",
           "H": "수의 베일"
       },
       "heightm": 2.1,
       "weightkg": 220,
       "color": "Purple",
       "prevo": "Mantyke",
       "evoType": "levelExtra",
       "evoCondition": "with a Remoraid in party",
       "eggGroups": ["Water 1"],
       "canHatch": true
   },
   "무장조": {
       "num": 227,
       "name": "Skarmory",
       "types": ["강철", "비행"],
       "baseStats": {
           "hp": 65,
           "atk": 80,
           "def": 140,
           "spa": 40,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "옹골참",
           "H": "깨어진갑옷"
       },
       "heightm": 1.7,
       "weightkg": 50.5,
       "color": "Gray",
       "eggGroups": ["Flying"]
   },
   "델빌": {
       "num": 228,
       "name": "Houndour",
       "types": ["악", "불꽃"],
       "baseStats": {
           "hp": 45,
           "atk": 60,
           "def": 30,
           "spa": 80,
           "spd": 50,
           "spe": 65
       },
       "abilities": {
           "0": "일찍 기상",
           "1": "타오르는 불꽃",
           "H": "긴장감"
       },
       "heightm": 0.6,
       "weightkg": 10.8,
       "color": "Black",
       "evos": ["Houndoom"],
       "eggGroups": ["Field"]
   },
   "헬가": {
       "num": 229,
       "name": "Houndoom",
       "types": ["악", "불꽃"],
       "baseStats": {
           "hp": 75,
           "atk": 90,
           "def": 50,
           "spa": 110,
           "spd": 80,
           "spe": 95
       },
       "abilities": {
           "0": "일찍 기상",
           "1": "타오르는 불꽃",
           "H": "긴장감"
       },
       "heightm": 1.4,
       "weightkg": 35,
       "color": "Black",
       "prevo": "Houndour",
       "evoLevel": 24,
       "eggGroups": ["Field"],
       "otherFormes": ["Houndoom-Mega"],
       "formeOrder": ["Houndoom", "Houndoom-Mega"]
   },
   "킹드라": {
       "num": 230,
       "name": "Kingdra",
       "types": ["물", "드래곤"],
       "baseStats": {
           "hp": 75,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 85
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "스나이퍼",
           "H": "습기"
       },
       "heightm": 1.8,
       "weightkg": 152,
       "color": "Blue",
       "prevo": "Seadra",
       "evoType": "trade",
       "evoItem": "Dragon Scale",
       "eggGroups": ["Water 1", "Dragon"]
   },
   "코코리": {
       "num": 231,
       "name": "Phanpy",
       "types": ["땅"],
       "baseStats": {
           "hp": 90,
           "atk": 60,
           "def": 60,
           "spa": 40,
           "spd": 40,
           "spe": 40
       },
       "abilities": {
           "0": "픽업",
           "H": "모래숨기"
       },
       "heightm": 0.5,
       "weightkg": 33.5,
       "color": "Blue",
       "evos": ["Donphan"],
       "eggGroups": ["Field"]
   },
   "코리갑": {
       "num": 232,
       "name": "Donphan",
       "types": ["땅"],
       "baseStats": {
           "hp": 90,
           "atk": 120,
           "def": 120,
           "spa": 60,
           "spd": 60,
           "spe": 50
       },
       "abilities": {
           "0": "옹골참",
           "H": "모래숨기"
       },
       "heightm": 1.1,
       "weightkg": 120,
       "color": "Gray",
       "prevo": "Phanpy",
       "evoLevel": 25,
       "eggGroups": ["Field"]
   },
   "폴리곤2": {
       "num": 233,
       "name": "Porygon2",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 85,
           "atk": 80,
           "def": 90,
           "spa": 105,
           "spd": 95,
           "spe": 60
       },
       "abilities": {
           "0": "트레이스",
           "1": "다운로드",
           "H": "애널라이즈"
       },
       "heightm": 0.6,
       "weightkg": 32.5,
       "color": "Red",
       "prevo": "Porygon",
       "evoType": "trade",
       "evoItem": "Up-Grade",
       "evos": ["Porygon-Z"],
       "eggGroups": ["Mineral"]
   },
   "노라키": {
       "num": 234,
       "name": "Stantler",
       "types": ["노말"],
       "baseStats": {
           "hp": 73,
           "atk": 95,
           "def": 62,
           "spa": 85,
           "spd": 65,
           "spe": 85
       },
       "abilities": {
           "0": "위협",
           "1": "통찰",
           "H": "초식"
       },
       "heightm": 1.4,
       "weightkg": 71.2,
       "color": "Brown",
       "eggGroups": ["Field"]
   },
   "루브도": {
       "num": 235,
       "name": "Smeargle",
       "types": ["노말"],
       "baseStats": {
           "hp": 55,
           "atk": 20,
           "def": 35,
           "spa": 20,
           "spd": 45,
           "spe": 75
       },
       "abilities": {
           "0": "마이페이스",
           "1": "테크니션",
           "H": "변덕쟁이"
       },
       "heightm": 1.2,
       "weightkg": 58,
       "color": "White",
       "eggGroups": ["Field"]
   },
   "배루키": {
       "num": 236,
       "name": "Tyrogue",
       "types": ["격투"],
       "gender": "M",
       "baseStats": {
           "hp": 35,
           "atk": 35,
           "def": 35,
           "spa": 35,
           "spd": 35,
           "spe": 35
       },
       "abilities": {
           "0": "근성",
           "1": "불굴의 마음",
           "H": "의기양양"
       },
       "heightm": 0.7,
       "weightkg": 21,
       "color": "Purple",
       "evos": ["Hitmonlee", "Hitmonchan", "Hitmontop"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "카포에라": {
       "num": 237,
       "name": "Hitmontop",
       "types": ["격투"],
       "gender": "M",
       "baseStats": {
           "hp": 50,
           "atk": 95,
           "def": 95,
           "spa": 35,
           "spd": 110,
           "spe": 70
       },
       "abilities": {
           "0": "위협",
           "1": "테크니션",
           "H": "불굴의 마음"
       },
       "heightm": 1.4,
       "weightkg": 48,
       "color": "Brown",
       "prevo": "Tyrogue",
       "evoLevel": 20,
       "evoCondition": "with an Atk stat equal to its Def stat",
       "eggGroups": ["Human-Like"]
   },
   "뽀뽀라": {
       "num": 238,
       "name": "Smoochum",
       "types": ["얼음", "에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 45,
           "atk": 30,
           "def": 15,
           "spa": 85,
           "spd": 65,
           "spe": 65
       },
       "abilities": {
           "0": "둔감",
           "1": "예지몽",
           "H": "촉촉바디"
       },
       "heightm": 0.4,
       "weightkg": 6,
       "color": "Pink",
       "evos": ["Jynx"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "에레키드": {
       "num": 239,
       "name": "Elekid",
       "types": ["전기"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 45,
           "atk": 63,
           "def": 37,
           "spa": 65,
           "spd": 55,
           "spe": 95
       },
       "abilities": {
           "0": "정전기",
           "H": "의기양양"
       },
       "heightm": 0.6,
       "weightkg": 23.5,
       "color": "Yellow",
       "evos": ["Electabuzz"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "마그비": {
       "num": 240,
       "name": "Magby",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 45,
           "atk": 75,
           "def": 37,
           "spa": 70,
           "spd": 55,
           "spe": 83
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "의기양양"
       },
       "heightm": 0.7,
       "weightkg": 21.4,
       "color": "Red",
       "evos": ["Magmar"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "밀탱크": {
       "num": 241,
       "name": "Miltank",
       "types": ["노말"],
       "gender": "F",
       "baseStats": {
           "hp": 95,
           "atk": 80,
           "def": 105,
           "spa": 40,
           "spd": 70,
           "spe": 100
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "배짱",
           "H": "초식"
       },
       "heightm": 1.2,
       "weightkg": 75.5,
       "color": "Pink",
       "eggGroups": ["Field"]
   },
   "해피너스": {
       "num": 242,
       "name": "Blissey",
       "types": ["노말"],
       "gender": "F",
       "baseStats": {
           "hp": 255,
           "atk": 10,
           "def": 10,
           "spa": 75,
           "spd": 135,
           "spe": 55
       },
       "abilities": {
           "0": "자연회복",
           "1": "하늘의 은총",
           "H": "치유의마음"
       },
       "heightm": 1.5,
       "weightkg": 46.8,
       "color": "Pink",
       "prevo": "Chansey",
       "evoType": "levelFriendship",
       "eggGroups": ["Fairy"]
   },
   "라이코": {
       "num": 243,
       "name": "Raikou",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 85,
           "def": 75,
           "spa": 115,
           "spd": 100,
           "spe": 115
       },
       "abilities": {
           "0": "프레셔",
           "H": "정신력"
       },
       "heightm": 1.9,
       "weightkg": 178,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "앤테이": {
       "num": 244,
       "name": "Entei",
       "types": ["불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 115,
           "atk": 115,
           "def": 85,
           "spa": 90,
           "spd": 75,
           "spe": 100
       },
       "abilities": {
           "0": "프레셔",
           "H": "정신력"
       },
       "heightm": 2.1,
       "weightkg": 198,
       "color": "Brown",
       "eggGroups": ["Undiscovered"]
   },
   "스이쿤": {
       "num": 245,
       "name": "Suicune",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 75,
           "def": 115,
           "spa": 90,
           "spd": 115,
           "spe": 85
       },
       "abilities": {
           "0": "프레셔",
           "H": "정신력"
       },
       "heightm": 2,
       "weightkg": 187,
       "color": "Blue",
       "eggGroups": ["Undiscovered"]
   },
   "애버라스": {
       "num": 246,
       "name": "Larvitar",
       "types": ["바위", "땅"],
       "baseStats": {
           "hp": 50,
           "atk": 64,
           "def": 50,
           "spa": 45,
           "spd": 50,
           "spe": 41
       },
       "abilities": {
           "0": "근성",
           "H": "모래숨기"
       },
       "heightm": 0.6,
       "weightkg": 72,
       "color": "Green",
       "evos": ["Pupitar"],
       "eggGroups": ["Monster"]
   },
   "데기라스": {
       "num": 247,
       "name": "Pupitar",
       "types": ["바위", "땅"],
       "baseStats": {
           "hp": 70,
           "atk": 84,
           "def": 70,
           "spa": 65,
           "spd": 70,
           "spe": 51
       },
       "abilities": {
           "0": "탈피"
       },
       "heightm": 1.2,
       "weightkg": 152,
       "color": "Gray",
       "prevo": "Larvitar",
       "evoLevel": 30,
       "evos": ["Tyranitar"],
       "eggGroups": ["Monster"]
   },
   "마기라스": {
       "num": 248,
       "name": "Tyranitar",
       "types": ["바위", "악"],
       "baseStats": {
           "hp": 100,
           "atk": 134,
           "def": 110,
           "spa": 95,
           "spd": 100,
           "spe": 61
       },
       "abilities": {
           "0": "모래날림",
           "H": "긴장감"
       },
       "heightm": 2,
       "weightkg": 202,
       "color": "Green",
       "prevo": "Pupitar",
       "evoLevel": 55,
       "eggGroups": ["Monster"],
       "otherFormes": ["Tyranitar-Mega"],
       "formeOrder": ["Tyranitar", "Tyranitar-Mega"]
   },
   "루기아": {
       "num": 249,
       "name": "Lugia",
       "types": ["에스퍼", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 106,
           "atk": 90,
           "def": 130,
           "spa": 90,
           "spd": 154,
           "spe": 110
       },
       "abilities": {
           "0": "프레셔",
           "H": "멀티스케일"
       },
       "heightm": 5.2,
       "weightkg": 216,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "칠색조": {
       "num": 250,
       "name": "Ho-Oh",
       "types": ["불꽃", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 106,
           "atk": 130,
           "def": 90,
           "spa": 110,
           "spd": 154,
           "spe": 90
       },
       "abilities": {
           "0": "프레셔",
           "H": "재생력"
       },
       "heightm": 3.8,
       "weightkg": 199,
       "color": "Red",
       "eggGroups": ["Undiscovered"]
   },
   "세레비": {
       "num": 251,
       "name": "Celebi",
       "types": ["에스퍼", "풀"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 100,
           "spa": 100,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "자연회복"
       },
       "heightm": 0.6,
       "weightkg": 5,
       "color": "Green",
       "eggGroups": ["Undiscovered"]
   },
   "나무지기": {
       "num": 252,
       "name": "Treecko",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 35,
           "spa": 65,
           "spd": 55,
           "spe": 70
       },
       "abilities": {
           "0": "심록",
           "H": "곡예"
       },
       "heightm": 0.5,
       "weightkg": 5,
       "color": "Green",
       "evos": ["Grovyle"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "나무돌이": {
       "num": 253,
       "name": "Grovyle",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 45,
           "spa": 85,
           "spd": 65,
           "spe": 95
       },
       "abilities": {
           "0": "심록",
           "H": "곡예"
       },
       "heightm": 0.9,
       "weightkg": 21.6,
       "color": "Green",
       "prevo": "Treecko",
       "evoLevel": 16,
       "evos": ["Sceptile"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "나무킹": {
       "num": 254,
       "name": "Sceptile",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 65,
           "spa": 105,
           "spd": 85,
           "spe": 120
       },
       "abilities": {
           "0": "심록",
           "H": "곡예"
       },
       "heightm": 1.7,
       "weightkg": 52.2,
       "color": "Green",
       "prevo": "Grovyle",
       "evoLevel": 36,
       "eggGroups": ["Monster", "Dragon"],
       "otherFormes": ["Sceptile-Mega"],
       "formeOrder": ["Sceptile", "Sceptile-Mega"]
   },
   "아차모": {
       "num": 255,
       "name": "Torchic",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 45,
           "atk": 60,
           "def": 40,
           "spa": 70,
           "spd": 50,
           "spe": 45
       },
       "abilities": {
           "0": "맹화",
           "H": "가속"
       },
       "heightm": 0.4,
       "weightkg": 2.5,
       "color": "Red",
       "evos": ["Combusken"],
       "eggGroups": ["Field"]
   },
   "영치코": {
       "num": 256,
       "name": "Combusken",
       "types": ["불꽃", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 60,
           "spa": 85,
           "spd": 60,
           "spe": 55
       },
       "abilities": {
           "0": "맹화",
           "H": "가속"
       },
       "heightm": 0.9,
       "weightkg": 19.5,
       "color": "Red",
       "prevo": "Torchic",
       "evoLevel": 16,
       "evos": ["Blaziken"],
       "eggGroups": ["Field"]
   },
   "번치코": {
       "num": 257,
       "name": "Blaziken",
       "types": ["불꽃", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 80,
           "atk": 120,
           "def": 70,
           "spa": 110,
           "spd": 70,
           "spe": 80
       },
       "abilities": {
           "0": "맹화",
           "H": "가속"
       },
       "heightm": 1.9,
       "weightkg": 52,
       "color": "Red",
       "prevo": "Combusken",
       "evoLevel": 36,
       "eggGroups": ["Field"],
       "otherFormes": ["Blaziken-Mega"],
       "formeOrder": ["Blaziken", "Blaziken-Mega"]
   },
   "물짱이": {
       "num": 258,
       "name": "Mudkip",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 70,
           "def": 50,
           "spa": 50,
           "spd": 50,
           "spe": 40
       },
       "abilities": {
           "0": "급류",
           "H": "습기"
       },
       "heightm": 0.4,
       "weightkg": 7.6,
       "color": "Blue",
       "evos": ["Marshtomp"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "늪짱이": {
       "num": 259,
       "name": "Marshtomp",
       "types": ["물", "땅"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 70,
           "spa": 60,
           "spd": 70,
           "spe": 50
       },
       "abilities": {
           "0": "급류",
           "H": "습기"
       },
       "heightm": 0.7,
       "weightkg": 28,
       "color": "Blue",
       "prevo": "Mudkip",
       "evoLevel": 16,
       "evos": ["Swampert"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "대짱이": {
       "num": 260,
       "name": "Swampert",
       "types": ["물", "땅"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 100,
           "atk": 110,
           "def": 90,
           "spa": 85,
           "spd": 90,
           "spe": 60
       },
       "abilities": {
           "0": "급류",
           "H": "습기"
       },
       "heightm": 1.5,
       "weightkg": 81.9,
       "color": "Blue",
       "prevo": "Marshtomp",
       "evoLevel": 36,
       "eggGroups": ["Monster", "Water 1"],
       "otherFormes": ["Swampert-Mega"],
       "formeOrder": ["Swampert", "Swampert-Mega"]
   },
   "포챠나": {
       "num": 261,
       "name": "Poochyena",
       "types": ["악"],
       "baseStats": {
           "hp": 35,
           "atk": 55,
           "def": 35,
           "spa": 30,
           "spd": 30,
           "spe": 35
       },
       "abilities": {
           "0": "도주",
           "1": "속보",
           "H": "주눅"
       },
       "heightm": 0.5,
       "weightkg": 13.6,
       "color": "Gray",
       "evos": ["Mightyena"],
       "eggGroups": ["Field"]
   },
   "그라에나": {
       "num": 262,
       "name": "Mightyena",
       "types": ["악"],
       "baseStats": {
           "hp": 70,
           "atk": 90,
           "def": 70,
           "spa": 60,
           "spd": 60,
           "spe": 70
       },
       "abilities": {
           "0": "위협",
           "1": "속보",
           "H": "자기과신"
       },
       "heightm": 1,
       "weightkg": 37,
       "color": "Gray",
       "prevo": "Poochyena",
       "evoLevel": 18,
       "eggGroups": ["Field"]
   },
   "지그제구리": {
       "num": 263,
       "name": "Zigzagoon",
       "types": ["노말"],
       "baseStats": {
           "hp": 38,
           "atk": 30,
           "def": 41,
           "spa": 30,
           "spd": 41,
           "spe": 60
       },
       "abilities": {
           "0": "픽업",
           "1": "먹보",
           "H": "속보"
       },
       "heightm": 0.4,
       "weightkg": 17.5,
       "color": "Brown",
       "evos": ["Linoone"],
       "eggGroups": ["Field"],
       "otherFormes": ["Zigzagoon-Galar"],
       "formeOrder": ["Zigzagoon", "Zigzagoon-Galar"]
   },
   "지그제구리-가라르": {
       "num": 263,
       "name": "Zigzagoon-Galar",
       "baseSpecies": "Zigzagoon",
       "forme": "Galar",
       "types": ["악", "노말"],
       "baseStats": {
           "hp": 38,
           "atk": 30,
           "def": 41,
           "spa": 30,
           "spd": 41,
           "spe": 60
       },
       "abilities": {
           "0": "픽업",
           "1": "먹보",
           "H": "속보"
       },
       "heightm": 0.4,
       "weightkg": 17.5,
       "color": "White",
       "evos": ["Linoone-Galar"],
       "eggGroups": ["Field"]
   },
   "직구리": {
       "num": 264,
       "name": "Linoone",
       "types": ["노말"],
       "baseStats": {
           "hp": 78,
           "atk": 70,
           "def": 61,
           "spa": 50,
           "spd": 61,
           "spe": 100
       },
       "abilities": {
           "0": "픽업",
           "1": "먹보",
           "H": "속보"
       },
       "heightm": 0.5,
       "weightkg": 32.5,
       "color": "White",
       "prevo": "Zigzagoon",
       "evoLevel": 20,
       "eggGroups": ["Field"],
       "otherFormes": ["Linoone-Galar"],
       "formeOrder": ["Linoone", "Linoone-Galar"]
   },
   "직구리-가라르": {
       "num": 264,
       "name": "Linoone-Galar",
       "baseSpecies": "Linoone",
       "forme": "Galar",
       "types": ["악", "노말"],
       "baseStats": {
           "hp": 78,
           "atk": 70,
           "def": 61,
           "spa": 50,
           "spd": 61,
           "spe": 100
       },
       "abilities": {
           "0": "픽업",
           "1": "먹보",
           "H": "속보"
       },
       "heightm": 0.5,
       "weightkg": 32.5,
       "color": "White",
       "prevo": "Zigzagoon-Galar",
       "evoLevel": 20,
       "evos": ["Obstagoon"],
       "eggGroups": ["Field"]
   },
   "개무소": {
       "num": 265,
       "name": "Wurmple",
       "types": ["벌레"],
       "baseStats": {
           "hp": 45,
           "atk": 45,
           "def": 35,
           "spa": 20,
           "spd": 30,
           "spe": 20
       },
       "abilities": {
           "0": "인분",
           "H": "도주"
       },
       "heightm": 0.3,
       "weightkg": 3.6,
       "color": "Red",
       "evos": ["Silcoon", "Cascoon"],
       "eggGroups": ["Bug"]
   },
   "실쿤": {
       "num": 266,
       "name": "Silcoon",
       "types": ["벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 35,
           "def": 55,
           "spa": 25,
           "spd": 25,
           "spe": 15
       },
       "abilities": {
           "0": "탈피"
       },
       "heightm": 0.6,
       "weightkg": 10,
       "color": "White",
       "prevo": "Wurmple",
       "evoLevel": 7,
       "evos": ["Beautifly"],
       "eggGroups": ["Bug"]
   },
   "뷰티플라이": {
       "num": 267,
       "name": "Beautifly",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 70,
           "def": 50,
           "spa": 100,
           "spd": 50,
           "spe": 65
       },
       "abilities": {
           "0": "벌레의 알림",
           "H": "투쟁심"
       },
       "heightm": 1,
       "weightkg": 28.4,
       "color": "Yellow",
       "prevo": "Silcoon",
       "evoLevel": 10,
       "eggGroups": ["Bug"]
   },
   "카스쿤": {
       "num": 268,
       "name": "Cascoon",
       "types": ["벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 35,
           "def": 55,
           "spa": 25,
           "spd": 25,
           "spe": 15
       },
       "abilities": {
           "0": "탈피"
       },
       "heightm": 0.7,
       "weightkg": 11.5,
       "color": "Purple",
       "prevo": "Wurmple",
       "evoLevel": 7,
       "evos": ["Dustox"],
       "eggGroups": ["Bug"]
   },
   "독케일": {
       "num": 269,
       "name": "Dustox",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 70,
           "spa": 50,
           "spd": 90,
           "spe": 65
       },
       "abilities": {
           "0": "인분",
           "H": "복안"
       },
       "heightm": 1.2,
       "weightkg": 31.6,
       "color": "Green",
       "prevo": "Cascoon",
       "evoLevel": 10,
       "eggGroups": ["Bug"]
   },
   "연꽃몬": {
       "num": 270,
       "name": "Lotad",
       "types": ["물", "풀"],
       "baseStats": {
           "hp": 40,
           "atk": 30,
           "def": 30,
           "spa": 40,
           "spd": 50,
           "spe": 30
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "젖은접시",
           "H": "마이페이스"
       },
       "heightm": 0.5,
       "weightkg": 2.6,
       "color": "Green",
       "evos": ["Lombre"],
       "eggGroups": ["Water 1", "Grass"]
   },
   "로토스": {
       "num": 271,
       "name": "Lombre",
       "types": ["물", "풀"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 50,
           "spa": 60,
           "spd": 70,
           "spe": 50
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "젖은접시",
           "H": "마이페이스"
       },
       "heightm": 1.2,
       "weightkg": 32.5,
       "color": "Green",
       "prevo": "Lotad",
       "evoLevel": 14,
       "evos": ["Ludicolo"],
       "eggGroups": ["Water 1", "Grass"]
   },
   "로파파": {
       "num": 272,
       "name": "Ludicolo",
       "types": ["물", "풀"],
       "baseStats": {
           "hp": 80,
           "atk": 70,
           "def": 70,
           "spa": 90,
           "spd": 100,
           "spe": 70
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "젖은접시",
           "H": "마이페이스"
       },
       "heightm": 1.5,
       "weightkg": 55,
       "color": "Green",
       "prevo": "Lombre",
       "evoType": "useItem",
       "evoItem": "Water Stone",
       "eggGroups": ["Water 1", "Grass"]
   },
   "도토링": {
       "num": 273,
       "name": "Seedot",
       "types": ["풀"],
       "baseStats": {
           "hp": 40,
           "atk": 40,
           "def": 50,
           "spa": 30,
           "spd": 30,
           "spe": 30
       },
       "abilities": {
           "0": "엽록소",
           "1": "일찍 기상",
           "H": "나쁜손버릇"
       },
       "heightm": 0.5,
       "weightkg": 4,
       "color": "Brown",
       "evos": ["Nuzleaf"],
       "eggGroups": ["Field", "Grass"]
   },
   "잎새코": {
       "num": 274,
       "name": "Nuzleaf",
       "types": ["풀", "악"],
       "baseStats": {
           "hp": 70,
           "atk": 70,
           "def": 40,
           "spa": 60,
           "spd": 40,
           "spe": 60
       },
       "abilities": {
           "0": "엽록소",
           "1": "일찍 기상",
           "H": "나쁜손버릇"
       },
       "heightm": 1,
       "weightkg": 28,
       "color": "Brown",
       "prevo": "Seedot",
       "evoLevel": 14,
       "evos": ["Shiftry"],
       "eggGroups": ["Field", "Grass"]
   },
   "다탱구": {
       "num": 275,
       "name": "Shiftry",
       "types": ["풀", "악"],
       "baseStats": {
           "hp": 90,
           "atk": 100,
           "def": 60,
           "spa": 90,
           "spd": 60,
           "spe": 80
       },
       "abilities": {
           "0": "엽록소",
           "1": "일찍 기상",
           "H": "나쁜손버릇"
       },
       "heightm": 1.3,
       "weightkg": 59.6,
       "color": "Brown",
       "prevo": "Nuzleaf",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Field", "Grass"]
   },
   "테일로": {
       "num": 276,
       "name": "Taillow",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 55,
           "def": 30,
           "spa": 30,
           "spd": 30,
           "spe": 85
       },
       "abilities": {
           "0": "근성",
           "H": "배짱"
       },
       "heightm": 0.3,
       "weightkg": 2.3,
       "color": "Blue",
       "evos": ["Swellow"],
       "eggGroups": ["Flying"]
   },
   "스왈로": {
       "num": 277,
       "name": "Swellow",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 60,
           "spa": 75,
           "spd": 50,
           "spe": 125
       },
       "abilities": {
           "0": "근성",
           "H": "배짱"
       },
       "heightm": 0.7,
       "weightkg": 19.8,
       "color": "Blue",
       "prevo": "Taillow",
       "evoLevel": 22,
       "eggGroups": ["Flying"]
   },
   "갈모매": {
       "num": 278,
       "name": "Wingull",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 30,
           "def": 30,
           "spa": 55,
           "spd": 30,
           "spe": 85
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "촉촉바디",
           "H": "젖은접시"
       },
       "heightm": 0.6,
       "weightkg": 9.5,
       "color": "White",
       "evos": ["Pelipper"],
       "eggGroups": ["Water 1", "Flying"]
   },
   "패리퍼": {
       "num": 279,
       "name": "Pelipper",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 100,
           "spa": 95,
           "spd": 70,
           "spe": 65
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "잔비",
           "H": "젖은접시"
       },
       "heightm": 1.2,
       "weightkg": 28,
       "color": "Yellow",
       "prevo": "Wingull",
       "evoLevel": 25,
       "eggGroups": ["Water 1", "Flying"]
   },
   "랄토스": {
       "num": 280,
       "name": "Ralts",
       "types": ["에스퍼", "페어리"],
       "baseStats": {
           "hp": 28,
           "atk": 25,
           "def": 25,
           "spa": 45,
           "spd": 35,
           "spe": 40
       },
       "abilities": {
           "0": "싱크로",
           "1": "트레이스",
           "H": "텔레파시"
       },
       "heightm": 0.4,
       "weightkg": 6.6,
       "color": "White",
       "evos": ["Kirlia"],
       "eggGroups": ["Human-Like", "Amorphous"]
   },
   "킬리아": {
       "num": 281,
       "name": "Kirlia",
       "types": ["에스퍼", "페어리"],
       "baseStats": {
           "hp": 38,
           "atk": 35,
           "def": 35,
           "spa": 65,
           "spd": 55,
           "spe": 50
       },
       "abilities": {
           "0": "싱크로",
           "1": "트레이스",
           "H": "텔레파시"
       },
       "heightm": 0.8,
       "weightkg": 20.2,
       "color": "White",
       "prevo": "Ralts",
       "evoLevel": 20,
       "evos": ["Gardevoir", "Gallade"],
       "eggGroups": ["Human-Like", "Amorphous"]
   },
   "가디안": {
       "num": 282,
       "name": "Gardevoir",
       "types": ["에스퍼", "페어리"],
       "baseStats": {
           "hp": 68,
           "atk": 65,
           "def": 65,
           "spa": 125,
           "spd": 115,
           "spe": 80
       },
       "abilities": {
           "0": "싱크로",
           "1": "트레이스",
           "H": "텔레파시"
       },
       "heightm": 1.6,
       "weightkg": 48.4,
       "color": "White",
       "prevo": "Kirlia",
       "evoLevel": 30,
       "eggGroups": ["Human-Like", "Amorphous"],
       "otherFormes": ["Gardevoir-Mega"],
       "formeOrder": ["Gardevoir", "Gardevoir-Mega"]
   },
   "비구술": {
       "num": 283,
       "name": "Surskit",
       "types": ["벌레", "물"],
       "baseStats": {
           "hp": 40,
           "atk": 30,
           "def": 32,
           "spa": 50,
           "spd": 52,
           "spe": 65
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "젖은접시"
       },
       "heightm": 0.5,
       "weightkg": 1.7,
       "color": "Blue",
       "evos": ["Masquerain"],
       "eggGroups": ["Water 1", "Bug"]
   },
   "비나방": {
       "num": 284,
       "name": "Masquerain",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 70,
           "atk": 60,
           "def": 62,
           "spa": 100,
           "spd": 82,
           "spe": 80
       },
       "abilities": {
           "0": "위협",
           "H": "긴장감"
       },
       "heightm": 0.8,
       "weightkg": 3.6,
       "color": "Blue",
       "prevo": "Surskit",
       "evoLevel": 22,
       "eggGroups": ["Water 1", "Bug"]
   },
   "버섯꼬": {
       "num": 285,
       "name": "Shroomish",
       "types": ["풀"],
       "baseStats": {
           "hp": 60,
           "atk": 40,
           "def": 60,
           "spa": 40,
           "spd": 60,
           "spe": 35
       },
       "abilities": {
           "0": "포자",
           "1": "포이즌힐",
           "H": "속보"
       },
       "heightm": 0.4,
       "weightkg": 4.5,
       "color": "Brown",
       "evos": ["Breloom"],
       "eggGroups": ["Fairy", "Grass"]
   },
   "버섯모": {
       "num": 286,
       "name": "Breloom",
       "types": ["풀", "격투"],
       "baseStats": {
           "hp": 60,
           "atk": 130,
           "def": 80,
           "spa": 60,
           "spd": 60,
           "spe": 70
       },
       "abilities": {
           "0": "포자",
           "1": "포이즌힐",
           "H": "테크니션"
       },
       "heightm": 1.2,
       "weightkg": 39.2,
       "color": "Green",
       "prevo": "Shroomish",
       "evoLevel": 23,
       "eggGroups": ["Fairy", "Grass"]
   },
   "게을로": {
       "num": 287,
       "name": "Slakoth",
       "types": ["노말"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 60,
           "spa": 35,
           "spd": 35,
           "spe": 30
       },
       "abilities": {
           "0": "게으름"
       },
       "heightm": 0.8,
       "weightkg": 24,
       "color": "Brown",
       "evos": ["Vigoroth"],
       "eggGroups": ["Field"]
   },
   "발바로": {
       "num": 288,
       "name": "Vigoroth",
       "types": ["노말"],
       "baseStats": {
           "hp": 80,
           "atk": 80,
           "def": 80,
           "spa": 55,
           "spd": 55,
           "spe": 90
       },
       "abilities": {
           "0": "의기양양"
       },
       "heightm": 1.4,
       "weightkg": 46.5,
       "color": "White",
       "prevo": "Slakoth",
       "evoLevel": 18,
       "evos": ["Slaking"],
       "eggGroups": ["Field"]
   },
   "게을킹": {
       "num": 289,
       "name": "Slaking",
       "types": ["노말"],
       "baseStats": {
           "hp": 150,
           "atk": 160,
           "def": 100,
           "spa": 95,
           "spd": 65,
           "spe": 100
       },
       "abilities": {
           "0": "게으름"
       },
       "heightm": 2,
       "weightkg": 130.5,
       "color": "Brown",
       "prevo": "Vigoroth",
       "evoLevel": 36,
       "eggGroups": ["Field"]
   },
   "토중몬": {
       "num": 290,
       "name": "Nincada",
       "types": ["벌레", "땅"],
       "baseStats": {
           "hp": 31,
           "atk": 45,
           "def": 90,
           "spa": 30,
           "spd": 30,
           "spe": 40
       },
       "abilities": {
           "0": "복안",
           "H": "도주"
       },
       "heightm": 0.5,
       "weightkg": 5.5,
       "color": "Gray",
       "evos": ["Ninjask", "Shedinja"],
       "eggGroups": ["Bug"]
   },
   "아이스크": {
       "num": 291,
       "name": "Ninjask",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 61,
           "atk": 90,
           "def": 45,
           "spa": 50,
           "spd": 50,
           "spe": 160
       },
       "abilities": {
           "0": "가속",
           "H": "틈새포착"
       },
       "heightm": 0.8,
       "weightkg": 12,
       "color": "Yellow",
       "prevo": "Nincada",
       "evoLevel": 20,
       "eggGroups": ["Bug"]
   },
   "껍질몬": {
       "num": 292,
       "name": "Shedinja",
       "types": ["벌레", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 1,
           "atk": 90,
           "def": 45,
           "spa": 30,
           "spd": 30,
           "spe": 40
       },
       "maxHP": 1,
       "abilities": {
           "0": "불가사의 부적"
       },
       "heightm": 0.8,
       "weightkg": 1.2,
       "color": "Brown",
       "prevo": "Nincada",
       "evoLevel": 20,
       "eggGroups": ["Mineral"]
   },
   "소곤룡": {
       "num": 293,
       "name": "Whismur",
       "types": ["노말"],
       "baseStats": {
           "hp": 64,
           "atk": 51,
           "def": 23,
           "spa": 51,
           "spd": 23,
           "spe": 28
       },
       "abilities": {
           "0": "방음",
           "H": "주눅"
       },
       "heightm": 0.6,
       "weightkg": 16.3,
       "color": "Pink",
       "evos": ["Loudred"],
       "eggGroups": ["Monster", "Field"]
   },
   "노공룡": {
       "num": 294,
       "name": "Loudred",
       "types": ["노말"],
       "baseStats": {
           "hp": 84,
           "atk": 71,
           "def": 43,
           "spa": 71,
           "spd": 43,
           "spe": 48
       },
       "abilities": {
           "0": "방음",
           "H": "배짱"
       },
       "heightm": 1,
       "weightkg": 40.5,
       "color": "Blue",
       "prevo": "Whismur",
       "evoLevel": 20,
       "evos": ["Exploud"],
       "eggGroups": ["Monster", "Field"]
   },
   "폭음룡": {
       "num": 295,
       "name": "Exploud",
       "types": ["노말"],
       "baseStats": {
           "hp": 104,
           "atk": 91,
           "def": 63,
           "spa": 91,
           "spd": 73,
           "spe": 68
       },
       "abilities": {
           "0": "방음",
           "H": "배짱"
       },
       "heightm": 1.5,
       "weightkg": 84,
       "color": "Blue",
       "prevo": "Loudred",
       "evoLevel": 40,
       "eggGroups": ["Monster", "Field"]
   },
   "마크탕": {
       "num": 296,
       "name": "Makuhita",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 72,
           "atk": 60,
           "def": 30,
           "spa": 20,
           "spd": 30,
           "spe": 25
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "근성",
           "H": "우격다짐"
       },
       "heightm": 1,
       "weightkg": 86.4,
       "color": "Yellow",
       "evos": ["Hariyama"],
       "eggGroups": ["Human-Like"]
   },
   "하리뭉": {
       "num": 297,
       "name": "Hariyama",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 144,
           "atk": 120,
           "def": 60,
           "spa": 40,
           "spd": 60,
           "spe": 50
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "근성",
           "H": "우격다짐"
       },
       "heightm": 2.3,
       "weightkg": 253.8,
       "color": "Brown",
       "prevo": "Makuhita",
       "evoLevel": 24,
       "eggGroups": ["Human-Like"]
   },
   "루리리": {
       "num": 298,
       "name": "Azurill",
       "types": ["노말", "페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 50,
           "atk": 20,
           "def": 40,
           "spa": 20,
           "spd": 40,
           "spe": 20
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "천하장사",
           "H": "초식"
       },
       "heightm": 0.2,
       "weightkg": 2,
       "color": "Blue",
       "evos": ["Marill"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "코코파스": {
       "num": 299,
       "name": "Nosepass",
       "types": ["바위"],
       "baseStats": {
           "hp": 30,
           "atk": 45,
           "def": 135,
           "spa": 45,
           "spd": 90,
           "spe": 30
       },
       "abilities": {
           "0": "옹골참",
           "1": "자력",
           "H": "모래의힘"
       },
       "heightm": 1,
       "weightkg": 97,
       "color": "Gray",
       "evos": ["Probopass"],
       "eggGroups": ["Mineral"]
   },
   "에나비": {
       "num": 300,
       "name": "Skitty",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 50,
           "atk": 45,
           "def": 45,
           "spa": 35,
           "spd": 35,
           "spe": 50
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "노말스킨",
           "H": "미라클스킨"
       },
       "heightm": 0.6,
       "weightkg": 11,
       "color": "Pink",
       "evos": ["Delcatty"],
       "eggGroups": ["Field", "Fairy"]
   },
   "델케티": {
       "num": 301,
       "name": "Delcatty",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 70,
           "atk": 65,
           "def": 65,
           "spa": 55,
           "spd": 55,
           "spe": 90
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "노말스킨",
           "H": "미라클스킨"
       },
       "heightm": 1.1,
       "weightkg": 32.6,
       "color": "Purple",
       "prevo": "Skitty",
       "evoType": "useItem",
       "evoItem": "Moon Stone",
       "eggGroups": ["Field", "Fairy"]
   },
   "깜까미": {
       "num": 302,
       "name": "Sableye",
       "types": ["악", "고스트"],
       "baseStats": {
           "hp": 50,
           "atk": 75,
           "def": 75,
           "spa": 65,
           "spd": 65,
           "spe": 50
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "시간벌기",
           "H": "짓궂은마음"
       },
       "heightm": 0.5,
       "weightkg": 11,
       "color": "Purple",
       "eggGroups": ["Human-Like"],
       "otherFormes": ["Sableye-Mega"],
       "formeOrder": ["Sableye", "Sableye-Mega"]
   },
   "입치트": {
       "num": 303,
       "name": "Mawile",
       "types": ["강철", "페어리"],
       "baseStats": {
           "hp": 50,
           "atk": 85,
           "def": 85,
           "spa": 55,
           "spd": 55,
           "spe": 50
       },
       "abilities": {
           "0": "괴력집게",
           "1": "위협",
           "H": "우격다짐"
       },
       "heightm": 0.6,
       "weightkg": 11.5,
       "color": "Black",
       "eggGroups": ["Field", "Fairy"],
       "otherFormes": ["Mawile-Mega"],
       "formeOrder": ["Mawile", "Mawile-Mega"]
   },
   "가보리": {
       "num": 304,
       "name": "Aron",
       "types": ["강철", "바위"],
       "baseStats": {
           "hp": 50,
           "atk": 70,
           "def": 100,
           "spa": 40,
           "spd": 40,
           "spe": 30
       },
       "abilities": {
           "0": "옹골참",
           "1": "돌머리",
           "H": "헤비메탈"
       },
       "heightm": 0.4,
       "weightkg": 60,
       "color": "Gray",
       "evos": ["Lairon"],
       "eggGroups": ["Monster"]
   },
   "갱도라": {
       "num": 305,
       "name": "Lairon",
       "types": ["강철", "바위"],
       "baseStats": {
           "hp": 60,
           "atk": 90,
           "def": 140,
           "spa": 50,
           "spd": 50,
           "spe": 40
       },
       "abilities": {
           "0": "옹골참",
           "1": "돌머리",
           "H": "헤비메탈"
       },
       "heightm": 0.9,
       "weightkg": 120,
       "color": "Gray",
       "prevo": "Aron",
       "evoLevel": 32,
       "evos": ["Aggron"],
       "eggGroups": ["Monster"]
   },
   "보스로라": {
       "num": 306,
       "name": "Aggron",
       "types": ["강철", "바위"],
       "baseStats": {
           "hp": 70,
           "atk": 110,
           "def": 180,
           "spa": 60,
           "spd": 60,
           "spe": 50
       },
       "abilities": {
           "0": "옹골참",
           "1": "돌머리",
           "H": "헤비메탈"
       },
       "heightm": 2.1,
       "weightkg": 360,
       "color": "Gray",
       "prevo": "Lairon",
       "evoLevel": 42,
       "eggGroups": ["Monster"],
       "otherFormes": ["Aggron-Mega"],
       "formeOrder": ["Aggron", "Aggron-Mega"]
   },
   "요가랑": {
       "num": 307,
       "name": "Meditite",
       "types": ["격투", "에스퍼"],
       "baseStats": {
           "hp": 30,
           "atk": 40,
           "def": 55,
           "spa": 40,
           "spd": 55,
           "spe": 60
       },
       "abilities": {
           "0": "순수한힘",
           "H": "텔레파시"
       },
       "heightm": 0.6,
       "weightkg": 11.2,
       "color": "Blue",
       "evos": ["Medicham"],
       "eggGroups": ["Human-Like"]
   },
   "요가램": {
       "num": 308,
       "name": "Medicham",
       "types": ["격투", "에스퍼"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 75,
           "spa": 60,
           "spd": 75,
           "spe": 80
       },
       "abilities": {
           "0": "순수한힘",
           "H": "텔레파시"
       },
       "heightm": 1.3,
       "weightkg": 31.5,
       "color": "Red",
       "prevo": "Meditite",
       "evoLevel": 37,
       "eggGroups": ["Human-Like"],
       "otherFormes": ["Medicham-Mega"],
       "formeOrder": ["Medicham", "Medicham-Mega"]
   },
   "썬더라이": {
       "num": 309,
       "name": "Electrike",
       "types": ["전기"],
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 40,
           "spa": 65,
           "spd": 40,
           "spe": 65
       },
       "abilities": {
           "0": "정전기",
           "1": "피뢰침",
           "H": "마이너스"
       },
       "heightm": 0.6,
       "weightkg": 15.2,
       "color": "Green",
       "evos": ["Manectric"],
       "eggGroups": ["Field"]
   },
   "썬더볼트": {
       "num": 310,
       "name": "Manectric",
       "types": ["전기"],
       "baseStats": {
           "hp": 70,
           "atk": 75,
           "def": 60,
           "spa": 105,
           "spd": 60,
           "spe": 105
       },
       "abilities": {
           "0": "정전기",
           "1": "피뢰침",
           "H": "마이너스"
       },
       "heightm": 1.5,
       "weightkg": 40.2,
       "color": "Yellow",
       "prevo": "Electrike",
       "evoLevel": 26,
       "eggGroups": ["Field"],
       "otherFormes": ["Manectric-Mega"],
       "formeOrder": ["Manectric", "Manectric-Mega"]
   },
   "플러시": {
       "num": 311,
       "name": "Plusle",
       "types": ["전기"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 40,
           "spa": 85,
           "spd": 75,
           "spe": 95
       },
       "abilities": {
           "0": "플러스",
           "H": "피뢰침"
       },
       "heightm": 0.4,
       "weightkg": 4.2,
       "color": "Yellow",
       "eggGroups": ["Fairy"]
   },
   "마이농": {
       "num": 312,
       "name": "Minun",
       "types": ["전기"],
       "baseStats": {
           "hp": 60,
           "atk": 40,
           "def": 50,
           "spa": 75,
           "spd": 85,
           "spe": 95
       },
       "abilities": {
           "0": "마이너스",
           "H": "축전"
       },
       "heightm": 0.4,
       "weightkg": 4.2,
       "color": "Yellow",
       "eggGroups": ["Fairy"]
   },
   "볼비트": {
       "num": 313,
       "name": "Volbeat",
       "types": ["벌레"],
       "gender": "M",
       "baseStats": {
           "hp": 65,
           "atk": 73,
           "def": 75,
           "spa": 47,
           "spd": 85,
           "spe": 85
       },
       "abilities": {
           "0": "발광",
           "1": "벌레의 알림",
           "H": "짓궂은마음"
       },
       "heightm": 0.7,
       "weightkg": 17.7,
       "color": "Gray",
       "eggGroups": ["Bug", "Human-Like"]
   },
   "네오비트": {
       "num": 314,
       "name": "Illumise",
       "types": ["벌레"],
       "gender": "F",
       "baseStats": {
           "hp": 65,
           "atk": 47,
           "def": 75,
           "spa": 73,
           "spd": 85,
           "spe": 85
       },
       "abilities": {
           "0": "둔감",
           "1": "색안경",
           "H": "짓궂은마음"
       },
       "heightm": 0.6,
       "weightkg": 17.7,
       "color": "Purple",
       "eggGroups": ["Bug", "Human-Like"]
   },
   "로젤리아": {
       "num": 315,
       "name": "Roselia",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 50,
           "atk": 60,
           "def": 45,
           "spa": 100,
           "spd": 80,
           "spe": 65
       },
       "abilities": {
           "0": "자연회복",
           "1": "독가시",
           "H": "리프가드"
       },
       "heightm": 0.3,
       "weightkg": 2,
       "color": "Green",
       "prevo": "Budew",
       "evoType": "levelFriendship",
       "evoCondition": "during the day",
       "evos": ["Roserade"],
       "eggGroups": ["Fairy", "Grass"],
       "canHatch": true
   },
   "꼴깍몬": {
       "num": 316,
       "name": "Gulpin",
       "types": ["독"],
       "baseStats": {
           "hp": 70,
           "atk": 43,
           "def": 53,
           "spa": 43,
           "spd": 53,
           "spe": 40
       },
       "abilities": {
           "0": "해감액",
           "1": "점착",
           "H": "먹보"
       },
       "heightm": 0.4,
       "weightkg": 10.3,
       "color": "Green",
       "evos": ["Swalot"],
       "eggGroups": ["Amorphous"]
   },
   "꿀꺽몬": {
       "num": 317,
       "name": "Swalot",
       "types": ["독"],
       "baseStats": {
           "hp": 100,
           "atk": 73,
           "def": 83,
           "spa": 73,
           "spd": 83,
           "spe": 55
       },
       "abilities": {
           "0": "해감액",
           "1": "점착",
           "H": "먹보"
       },
       "heightm": 1.7,
       "weightkg": 80,
       "color": "Purple",
       "prevo": "Gulpin",
       "evoLevel": 26,
       "eggGroups": ["Amorphous"]
   },
   "샤프니아": {
       "num": 318,
       "name": "Carvanha",
       "types": ["물", "악"],
       "baseStats": {
           "hp": 45,
           "atk": 90,
           "def": 20,
           "spa": 65,
           "spd": 20,
           "spe": 65
       },
       "abilities": {
           "0": "까칠한 피부",
           "H": "가속"
       },
       "heightm": 0.8,
       "weightkg": 20.8,
       "color": "Red",
       "evos": ["Sharpedo"],
       "eggGroups": ["Water 2"]
   },
   "샤크니아": {
       "num": 319,
       "name": "Sharpedo",
       "types": ["물", "악"],
       "baseStats": {
           "hp": 70,
           "atk": 120,
           "def": 40,
           "spa": 95,
           "spd": 40,
           "spe": 95
       },
       "abilities": {
           "0": "까칠한 피부",
           "H": "가속"
       },
       "heightm": 1.8,
       "weightkg": 88.8,
       "color": "Blue",
       "prevo": "Carvanha",
       "evoLevel": 30,
       "eggGroups": ["Water 2"],
       "otherFormes": ["Sharpedo-Mega"],
       "formeOrder": ["Sharpedo", "Sharpedo-Mega"]
   },
   "고래왕자": {
       "num": 320,
       "name": "Wailmer",
       "types": ["물"],
       "baseStats": {
           "hp": 130,
           "atk": 70,
           "def": 35,
           "spa": 70,
           "spd": 35,
           "spe": 60
       },
       "abilities": {
           "0": "수의 베일",
           "1": "둔감",
           "H": "프레셔"
       },
       "heightm": 2,
       "weightkg": 130,
       "color": "Blue",
       "evos": ["Wailord"],
       "eggGroups": ["Field", "Water 2"]
   },
   "고래왕": {
       "num": 321,
       "name": "Wailord",
       "types": ["물"],
       "baseStats": {
           "hp": 170,
           "atk": 90,
           "def": 45,
           "spa": 90,
           "spd": 45,
           "spe": 60
       },
       "abilities": {
           "0": "수의 베일",
           "1": "둔감",
           "H": "프레셔"
       },
       "heightm": 14.5,
       "weightkg": 398,
       "color": "Blue",
       "prevo": "Wailmer",
       "evoLevel": 40,
       "eggGroups": ["Field", "Water 2"]
   },
   "둔타": {
       "num": 322,
       "name": "Numel",
       "types": ["불꽃", "땅"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 40,
           "spa": 65,
           "spd": 45,
           "spe": 35
       },
       "abilities": {
           "0": "둔감",
           "1": "단순",
           "H": "마이페이스"
       },
       "heightm": 0.7,
       "weightkg": 24,
       "color": "Yellow",
       "evos": ["Camerupt"],
       "eggGroups": ["Field"]
   },
   "폭타": {
       "num": 323,
       "name": "Camerupt",
       "types": ["불꽃", "땅"],
       "baseStats": {
           "hp": 70,
           "atk": 100,
           "def": 70,
           "spa": 105,
           "spd": 75,
           "spe": 40
       },
       "abilities": {
           "0": "마그마의 무장",
           "1": "하드록",
           "H": "분노의 경혈"
       },
       "heightm": 1.9,
       "weightkg": 220,
       "color": "Red",
       "prevo": "Numel",
       "evoLevel": 33,
       "eggGroups": ["Field"],
       "otherFormes": ["Camerupt-Mega"],
       "formeOrder": ["Camerupt", "Camerupt-Mega"]
   },
   "코터스": {
       "num": 324,
       "name": "Torkoal",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 140,
           "spa": 85,
           "spd": 70,
           "spe": 20
       },
       "abilities": {
           "0": "하얀연기",
           "1": "가뭄",
           "H": "조가비 갑옷"
       },
       "heightm": 0.5,
       "weightkg": 80.4,
       "color": "Brown",
       "eggGroups": ["Field"]
   },
   "피그점프": {
       "num": 325,
       "name": "Spoink",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 60,
           "atk": 25,
           "def": 35,
           "spa": 70,
           "spd": 80,
           "spe": 60
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "마이페이스",
           "H": "먹보"
       },
       "heightm": 0.7,
       "weightkg": 30.6,
       "color": "Black",
       "evos": ["Grumpig"],
       "eggGroups": ["Field"]
   },
   "피그킹": {
       "num": 326,
       "name": "Grumpig",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 80,
           "atk": 45,
           "def": 65,
           "spa": 90,
           "spd": 110,
           "spe": 80
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "마이페이스",
           "H": "먹보"
       },
       "heightm": 0.9,
       "weightkg": 71.5,
       "color": "Purple",
       "prevo": "Spoink",
       "evoLevel": 32,
       "eggGroups": ["Field"]
   },
   "얼루기": {
       "num": 327,
       "name": "Spinda",
       "types": ["노말"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 60,
           "spa": 60,
           "spd": 60,
           "spe": 60
       },
       "abilities": {
           "0": "마이페이스",
           "1": "갈지자걸음",
           "H": "심술꾸러기"
       },
       "heightm": 1.1,
       "weightkg": 5,
       "color": "Brown",
       "eggGroups": ["Field", "Human-Like"]
   },
   "톱치": {
       "num": 328,
       "name": "Trapinch",
       "types": ["땅"],
       "baseStats": {
           "hp": 45,
           "atk": 100,
           "def": 45,
           "spa": 45,
           "spd": 45,
           "spe": 10
       },
       "abilities": {
           "0": "괴력집게",
           "1": "개미지옥",
           "H": "우격다짐"
       },
       "heightm": 0.7,
       "weightkg": 15,
       "color": "Brown",
       "evos": ["Vibrava"],
       "eggGroups": ["Bug", "Dragon"]
   },
   "비브라바": {
       "num": 329,
       "name": "Vibrava",
       "types": ["땅", "드래곤"],
       "baseStats": {
           "hp": 50,
           "atk": 70,
           "def": 50,
           "spa": 50,
           "spd": 50,
           "spe": 70
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.1,
       "weightkg": 15.3,
       "color": "Green",
       "prevo": "Trapinch",
       "evoLevel": 35,
       "evos": ["Flygon"],
       "eggGroups": ["Bug", "Dragon"]
   },
   "플라이곤": {
       "num": 330,
       "name": "Flygon",
       "types": ["땅", "드래곤"],
       "baseStats": {
           "hp": 80,
           "atk": 100,
           "def": 80,
           "spa": 80,
           "spd": 80,
           "spe": 100
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 2,
       "weightkg": 82,
       "color": "Green",
       "prevo": "Vibrava",
       "evoLevel": 45,
       "eggGroups": ["Bug", "Dragon"]
   },
   "선인왕": {
       "num": 331,
       "name": "Cacnea",
       "types": ["풀"],
       "baseStats": {
           "hp": 50,
           "atk": 85,
           "def": 40,
           "spa": 85,
           "spd": 40,
           "spe": 35
       },
       "abilities": {
           "0": "모래숨기",
           "H": "저수"
       },
       "heightm": 0.4,
       "weightkg": 51.3,
       "color": "Green",
       "evos": ["Cacturne"],
       "eggGroups": ["Grass", "Human-Like"]
   },
   "밤선인": {
       "num": 332,
       "name": "Cacturne",
       "types": ["풀", "악"],
       "baseStats": {
           "hp": 70,
           "atk": 115,
           "def": 60,
           "spa": 115,
           "spd": 60,
           "spe": 55
       },
       "abilities": {
           "0": "모래숨기",
           "H": "저수"
       },
       "heightm": 1.3,
       "weightkg": 77.4,
       "color": "Green",
       "prevo": "Cacnea",
       "evoLevel": 32,
       "eggGroups": ["Grass", "Human-Like"]
   },
   "파비코": {
       "num": 333,
       "name": "Swablu",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 45,
           "atk": 40,
           "def": 60,
           "spa": 40,
           "spd": 75,
           "spe": 50
       },
       "abilities": {
           "0": "자연회복",
           "H": "날씨 부정"
       },
       "heightm": 0.4,
       "weightkg": 1.2,
       "color": "Blue",
       "evos": ["Altaria"],
       "eggGroups": ["Flying", "Dragon"]
   },
   "파비코리": {
       "num": 334,
       "name": "Altaria",
       "types": ["드래곤", "비행"],
       "baseStats": {
           "hp": 75,
           "atk": 70,
           "def": 90,
           "spa": 70,
           "spd": 105,
           "spe": 80
       },
       "abilities": {
           "0": "자연회복",
           "H": "날씨 부정"
       },
       "heightm": 1.1,
       "weightkg": 20.6,
       "color": "Blue",
       "prevo": "Swablu",
       "evoLevel": 35,
       "eggGroups": ["Flying", "Dragon"],
       "otherFormes": ["Altaria-Mega"],
       "formeOrder": ["Altaria", "Altaria-Mega"]
   },
   "쟝고": {
       "num": 335,
       "name": "Zangoose",
       "types": ["노말"],
       "baseStats": {
           "hp": 73,
           "atk": 115,
           "def": 60,
           "spa": 60,
           "spd": 60,
           "spe": 90
       },
       "abilities": {
           "0": "면역",
           "H": "독폭주"
       },
       "heightm": 1.3,
       "weightkg": 40.3,
       "color": "White",
       "eggGroups": ["Field"]
   },
   "세비퍼": {
       "num": 336,
       "name": "Seviper",
       "types": ["독"],
       "baseStats": {
           "hp": 73,
           "atk": 100,
           "def": 60,
           "spa": 100,
           "spd": 60,
           "spe": 65
       },
       "abilities": {
           "0": "탈피",
           "H": "틈새포착"
       },
       "heightm": 2.7,
       "weightkg": 52.5,
       "color": "Black",
       "eggGroups": ["Field", "Dragon"]
   },
   "루나톤": {
       "num": 337,
       "name": "Lunatone",
       "types": ["바위", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 55,
           "def": 65,
           "spa": 95,
           "spd": 85,
           "spe": 70
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1,
       "weightkg": 168,
       "color": "Yellow",
       "eggGroups": ["Mineral"]
   },
   "솔록": {
       "num": 338,
       "name": "Solrock",
       "types": ["바위", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 95,
           "def": 85,
           "spa": 55,
           "spd": 65,
           "spe": 70
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.2,
       "weightkg": 154,
       "color": "Red",
       "eggGroups": ["Mineral"]
   },
   "미꾸리": {
       "num": 339,
       "name": "Barboach",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 50,
           "atk": 48,
           "def": 43,
           "spa": 46,
           "spd": 41,
           "spe": 60
       },
       "abilities": {
           "0": "둔감",
           "1": "위험예지",
           "H": "촉촉바디"
       },
       "heightm": 0.4,
       "weightkg": 1.9,
       "color": "Gray",
       "evos": ["Whiscash"],
       "eggGroups": ["Water 2"]
   },
   "메깅": {
       "num": 340,
       "name": "Whiscash",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 110,
           "atk": 78,
           "def": 73,
           "spa": 76,
           "spd": 71,
           "spe": 60
       },
       "abilities": {
           "0": "둔감",
           "1": "위험예지",
           "H": "촉촉바디"
       },
       "heightm": 0.9,
       "weightkg": 23.6,
       "color": "Blue",
       "prevo": "Barboach",
       "evoLevel": 30,
       "eggGroups": ["Water 2"]
   },
   "가재군": {
       "num": 341,
       "name": "Corphish",
       "types": ["물"],
       "baseStats": {
           "hp": 43,
           "atk": 80,
           "def": 65,
           "spa": 50,
           "spd": 35,
           "spe": 35
       },
       "abilities": {
           "0": "괴력집게",
           "1": "조가비 갑옷",
           "H": "적응력"
       },
       "heightm": 0.6,
       "weightkg": 11.5,
       "color": "Red",
       "evos": ["Crawdaunt"],
       "eggGroups": ["Water 1", "Water 3"]
   },
   "가재장군": {
       "num": 342,
       "name": "Crawdaunt",
       "types": ["물", "악"],
       "baseStats": {
           "hp": 63,
           "atk": 120,
           "def": 85,
           "spa": 90,
           "spd": 55,
           "spe": 55
       },
       "abilities": {
           "0": "괴력집게",
           "1": "조가비 갑옷",
           "H": "적응력"
       },
       "heightm": 1.1,
       "weightkg": 32.8,
       "color": "Red",
       "prevo": "Corphish",
       "evoLevel": 30,
       "eggGroups": ["Water 1", "Water 3"]
   },
   "오뚝군": {
       "num": 343,
       "name": "Baltoy",
       "types": ["땅", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 40,
           "atk": 40,
           "def": 55,
           "spa": 40,
           "spd": 70,
           "spe": 55
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.5,
       "weightkg": 21.5,
       "color": "Brown",
       "evos": ["Claydol"],
       "eggGroups": ["Mineral"]
   },
   "점토도리": {
       "num": 344,
       "name": "Claydol",
       "types": ["땅", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 70,
           "def": 105,
           "spa": 70,
           "spd": 120,
           "spe": 75
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.5,
       "weightkg": 108,
       "color": "Black",
       "prevo": "Baltoy",
       "evoLevel": 36,
       "eggGroups": ["Mineral"]
   },
   "릴링": {
       "num": 345,
       "name": "Lileep",
       "types": ["바위", "풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 66,
           "atk": 41,
           "def": 77,
           "spa": 61,
           "spd": 87,
           "spe": 23
       },
       "abilities": {
           "0": "흡반",
           "H": "마중물"
       },
       "heightm": 1,
       "weightkg": 23.8,
       "color": "Purple",
       "evos": ["Cradily"],
       "eggGroups": ["Water 3"]
   },
   "릴리요": {
       "num": 346,
       "name": "Cradily",
       "types": ["바위", "풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 86,
           "atk": 81,
           "def": 97,
           "spa": 81,
           "spd": 107,
           "spe": 43
       },
       "abilities": {
           "0": "흡반",
           "H": "마중물"
       },
       "heightm": 1.5,
       "weightkg": 60.4,
       "color": "Green",
       "prevo": "Lileep",
       "evoLevel": 40,
       "eggGroups": ["Water 3"]
   },
   "아노딥스": {
       "num": 347,
       "name": "Anorith",
       "types": ["바위", "벌레"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 45,
           "atk": 95,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 75
       },
       "abilities": {
           "0": "전투 무장",
           "H": "쓱쓱"
       },
       "heightm": 0.7,
       "weightkg": 12.5,
       "color": "Gray",
       "evos": ["Armaldo"],
       "eggGroups": ["Water 3"]
   },
   "아말도": {
       "num": 348,
       "name": "Armaldo",
       "types": ["바위", "벌레"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 125,
           "def": 100,
           "spa": 70,
           "spd": 80,
           "spe": 45
       },
       "abilities": {
           "0": "전투 무장",
           "H": "쓱쓱"
       },
       "heightm": 1.5,
       "weightkg": 68.2,
       "color": "Gray",
       "prevo": "Anorith",
       "evoLevel": 40,
       "eggGroups": ["Water 3"]
   },
   "빈티나": {
       "num": 349,
       "name": "Feebas",
       "types": ["물"],
       "baseStats": {
           "hp": 20,
           "atk": 15,
           "def": 20,
           "spa": 10,
           "spd": 55,
           "spe": 80
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "둔감",
           "H": "적응력"
       },
       "heightm": 0.6,
       "weightkg": 7.4,
       "color": "Brown",
       "evos": ["Milotic"],
       "eggGroups": ["Water 1", "Dragon"]
   },
   "밀로틱": {
       "num": 350,
       "name": "Milotic",
       "types": ["물"],
       "baseStats": {
           "hp": 95,
           "atk": 60,
           "def": 79,
           "spa": 100,
           "spd": 125,
           "spe": 81
       },
       "abilities": {
           "0": "이상한 비늘",
           "1": "승기",
           "H": "헤롱헤롱 바디"
       },
       "heightm": 6.2,
       "weightkg": 162,
       "color": "Pink",
       "prevo": "Feebas",
       "evoType": "trade",
       "evoItem": "Prism Scale",
       "eggGroups": ["Water 1", "Dragon"]
   },
   "캐스퐁": {
       "num": 351,
       "name": "Castform",
       "types": ["노말"],
       "baseStats": {
           "hp": 70,
           "atk": 70,
           "def": 70,
           "spa": 70,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "기분파"
       },
       "heightm": 0.3,
       "weightkg": 0.8,
       "color": "Gray",
       "eggGroups": ["Fairy", "Amorphous"],
       "otherFormes": ["Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
       "formeOrder": ["Castform", "Castform-Sunny", "Castform-Rainy", "Castform-Snowy"]
   },
   "캐스퐁-태양": {
       "num": 351,
       "name": "Castform-Sunny",
       "baseSpecies": "Castform",
       "forme": "Sunny",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 70,
           "atk": 70,
           "def": 70,
           "spa": 70,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "기분파"
       },
       "heightm": 0.3,
       "weightkg": 0.8,
       "color": "Red",
       "eggGroups": ["Fairy", "Amorphous"],
       "requiredAbility": "Forecast",
       "battleOnly": "Castform"
   },
   "캐스퐁-빗방울": {
       "num": 351,
       "name": "Castform-Rainy",
       "baseSpecies": "Castform",
       "forme": "Rainy",
       "types": ["물"],
       "baseStats": {
           "hp": 70,
           "atk": 70,
           "def": 70,
           "spa": 70,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "기분파"
       },
       "heightm": 0.3,
       "weightkg": 0.8,
       "color": "Blue",
       "eggGroups": ["Fairy", "Amorphous"],
       "requiredAbility": "Forecast",
       "battleOnly": "Castform"
   },
   "캐스퐁-설운": {
       "num": 351,
       "name": "Castform-Snowy",
       "baseSpecies": "Castform",
       "forme": "Snowy",
       "types": ["얼음"],
       "baseStats": {
           "hp": 70,
           "atk": 70,
           "def": 70,
           "spa": 70,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "기분파"
       },
       "heightm": 0.3,
       "weightkg": 0.8,
       "color": "White",
       "eggGroups": ["Fairy", "Amorphous"],
       "requiredAbility": "Forecast",
       "battleOnly": "Castform"
   },
   "켈리몬": {
       "num": 352,
       "name": "Kecleon",
       "types": ["노말"],
       "baseStats": {
           "hp": 60,
           "atk": 90,
           "def": 70,
           "spa": 60,
           "spd": 120,
           "spe": 40
       },
       "abilities": {
           "0": "변색",
           "H": "변환자재"
       },
       "heightm": 1,
       "weightkg": 22,
       "color": "Green",
       "eggGroups": ["Field"]
   },
   "어둠대신": {
       "num": 353,
       "name": "Shuppet",
       "types": ["고스트"],
       "baseStats": {
           "hp": 44,
           "atk": 75,
           "def": 35,
           "spa": 63,
           "spd": 33,
           "spe": 45
       },
       "abilities": {
           "0": "불면",
           "1": "통찰",
           "H": "저주받은바디"
       },
       "heightm": 0.6,
       "weightkg": 2.3,
       "color": "Black",
       "evos": ["Banette"],
       "eggGroups": ["Amorphous"]
   },
   "다크펫": {
       "num": 354,
       "name": "Banette",
       "types": ["고스트"],
       "baseStats": {
           "hp": 64,
           "atk": 115,
           "def": 65,
           "spa": 83,
           "spd": 63,
           "spe": 65
       },
       "abilities": {
           "0": "불면",
           "1": "통찰",
           "H": "저주받은바디"
       },
       "heightm": 1.1,
       "weightkg": 12.5,
       "color": "Black",
       "prevo": "Shuppet",
       "evoLevel": 37,
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Banette-Mega"],
       "formeOrder": ["Banette", "Banette-Mega"]
   },
   "해골몽": {
       "num": 355,
       "name": "Duskull",
       "types": ["고스트"],
       "baseStats": {
           "hp": 20,
           "atk": 40,
           "def": 90,
           "spa": 30,
           "spd": 90,
           "spe": 25
       },
       "abilities": {
           "0": "부유",
           "H": "통찰"
       },
       "heightm": 0.8,
       "weightkg": 15,
       "color": "Black",
       "evos": ["Dusclops"],
       "eggGroups": ["Amorphous"]
   },
   "미라몽": {
       "num": 356,
       "name": "Dusclops",
       "types": ["고스트"],
       "baseStats": {
           "hp": 40,
           "atk": 70,
           "def": 130,
           "spa": 60,
           "spd": 130,
           "spe": 25
       },
       "abilities": {
           "0": "프레셔",
           "H": "통찰"
       },
       "heightm": 1.6,
       "weightkg": 30.6,
       "color": "Black",
       "prevo": "Duskull",
       "evoLevel": 37,
       "evos": ["Dusknoir"],
       "eggGroups": ["Amorphous"]
   },
   "트로피우스": {
       "num": 357,
       "name": "Tropius",
       "types": ["풀", "비행"],
       "baseStats": {
           "hp": 99,
           "atk": 68,
           "def": 83,
           "spa": 72,
           "spd": 87,
           "spe": 51
       },
       "abilities": {
           "0": "엽록소",
           "1": "선파워",
           "H": "수확"
       },
       "heightm": 2,
       "weightkg": 100,
       "color": "Green",
       "eggGroups": ["Monster", "Grass"]
   },
   "치렁": {
       "num": 358,
       "name": "Chimecho",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 75,
           "atk": 50,
           "def": 80,
           "spa": 95,
           "spd": 90,
           "spe": 65
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.6,
       "weightkg": 1,
       "color": "Blue",
       "prevo": "Chingling",
       "evoType": "levelFriendship",
       "evoCondition": "at night",
       "eggGroups": ["Amorphous"],
       "canHatch": true
   },
   "앱솔": {
       "num": 359,
       "name": "Absol",
       "types": ["악"],
       "baseStats": {
           "hp": 65,
           "atk": 130,
           "def": 60,
           "spa": 75,
           "spd": 60,
           "spe": 75
       },
       "abilities": {
           "0": "프레셔",
           "1": "대운",
           "H": "정의의마음"
       },
       "heightm": 1.2,
       "weightkg": 47,
       "color": "White",
       "eggGroups": ["Field"],
       "otherFormes": ["Absol-Mega"],
       "formeOrder": ["Absol", "Absol-Mega"]
   },
   "마자": {
       "num": 360,
       "name": "Wynaut",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 95,
           "atk": 23,
           "def": 48,
           "spa": 23,
           "spd": 48,
           "spe": 23
       },
       "abilities": {
           "0": "그림자 밟기",
           "H": "텔레파시"
       },
       "heightm": 0.6,
       "weightkg": 14,
       "color": "Blue",
       "evos": ["Wobbuffet"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "눈꼬마": {
       "num": 361,
       "name": "Snorunt",
       "types": ["얼음"],
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 50,
           "spa": 50,
           "spd": 50,
           "spe": 50
       },
       "abilities": {
           "0": "정신력",
           "1": "아이스바디",
           "H": "변덕쟁이"
       },
       "heightm": 0.7,
       "weightkg": 16.8,
       "color": "Gray",
       "evos": ["Glalie", "Froslass"],
       "eggGroups": ["Fairy", "Mineral"]
   },
   "얼음귀신": {
       "num": 362,
       "name": "Glalie",
       "types": ["얼음"],
       "baseStats": {
           "hp": 80,
           "atk": 80,
           "def": 80,
           "spa": 80,
           "spd": 80,
           "spe": 80
       },
       "abilities": {
           "0": "정신력",
           "1": "아이스바디",
           "H": "변덕쟁이"
       },
       "heightm": 1.5,
       "weightkg": 256.5,
       "color": "Gray",
       "prevo": "Snorunt",
       "evoLevel": 42,
       "eggGroups": ["Fairy", "Mineral"],
       "otherFormes": ["Glalie-Mega"],
       "formeOrder": ["Glalie", "Glalie-Mega"]
   },
   "대굴레오": {
       "num": 363,
       "name": "Spheal",
       "types": ["얼음", "물"],
       "baseStats": {
           "hp": 70,
           "atk": 40,
           "def": 50,
           "spa": 55,
           "spd": 50,
           "spe": 25
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "아이스바디",
           "H": "둔감"
       },
       "heightm": 0.8,
       "weightkg": 39.5,
       "color": "Blue",
       "evos": ["Sealeo"],
       "eggGroups": ["Water 1", "Field"]
   },
   "씨레오": {
       "num": 364,
       "name": "Sealeo",
       "types": ["얼음", "물"],
       "baseStats": {
           "hp": 90,
           "atk": 60,
           "def": 70,
           "spa": 75,
           "spd": 70,
           "spe": 45
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "아이스바디",
           "H": "둔감"
       },
       "heightm": 1.1,
       "weightkg": 87.6,
       "color": "Blue",
       "prevo": "Spheal",
       "evoLevel": 32,
       "evos": ["Walrein"],
       "eggGroups": ["Water 1", "Field"]
   },
   "씨카이저": {
       "num": 365,
       "name": "Walrein",
       "types": ["얼음", "물"],
       "baseStats": {
           "hp": 110,
           "atk": 80,
           "def": 90,
           "spa": 95,
           "spd": 90,
           "spe": 65
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "아이스바디",
           "H": "둔감"
       },
       "heightm": 1.4,
       "weightkg": 150.6,
       "color": "Blue",
       "prevo": "Sealeo",
       "evoLevel": 44,
       "eggGroups": ["Water 1", "Field"]
   },
   "진주몽": {
       "num": 366,
       "name": "Clamperl",
       "types": ["물"],
       "baseStats": {
           "hp": 35,
           "atk": 64,
           "def": 85,
           "spa": 74,
           "spd": 55,
           "spe": 32
       },
       "abilities": {
           "0": "조가비 갑옷",
           "H": "주눅"
       },
       "heightm": 0.4,
       "weightkg": 52.5,
       "color": "Blue",
       "evos": ["Huntail", "Gorebyss"],
       "eggGroups": ["Water 1"]
   },
   "헌테일": {
       "num": 367,
       "name": "Huntail",
       "types": ["물"],
       "baseStats": {
           "hp": 55,
           "atk": 104,
           "def": 105,
           "spa": 94,
           "spd": 75,
           "spe": 52
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "수의 베일"
       },
       "heightm": 1.7,
       "weightkg": 27,
       "color": "Blue",
       "prevo": "Clamperl",
       "evoType": "trade",
       "evoItem": "Deep Sea Tooth",
       "eggGroups": ["Water 1"]
   },
   "분홍장이": {
       "num": 368,
       "name": "Gorebyss",
       "types": ["물"],
       "baseStats": {
           "hp": 55,
           "atk": 84,
           "def": 105,
           "spa": 114,
           "spd": 75,
           "spe": 52
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "촉촉바디"
       },
       "heightm": 1.8,
       "weightkg": 22.6,
       "color": "Pink",
       "prevo": "Clamperl",
       "evoType": "trade",
       "evoItem": "Deep Sea Scale",
       "eggGroups": ["Water 1"]
   },
   "시라칸": {
       "num": 369,
       "name": "Relicanth",
       "types": ["물", "바위"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 100,
           "atk": 90,
           "def": 130,
           "spa": 45,
           "spd": 65,
           "spe": 55
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "돌머리",
           "H": "옹골참"
       },
       "heightm": 1,
       "weightkg": 23.4,
       "color": "Gray",
       "eggGroups": ["Water 1", "Water 2"]
   },
   "사랑동이": {
       "num": 370,
       "name": "Luvdisc",
       "types": ["물"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 43,
           "atk": 30,
           "def": 55,
           "spa": 40,
           "spd": 65,
           "spe": 97
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "촉촉바디"
       },
       "heightm": 0.6,
       "weightkg": 8.7,
       "color": "Pink",
       "eggGroups": ["Water 2"]
   },
   "아공이": {
       "num": 371,
       "name": "Bagon",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 45,
           "atk": 75,
           "def": 60,
           "spa": 40,
           "spd": 30,
           "spe": 50
       },
       "abilities": {
           "0": "돌머리",
           "H": "우격다짐"
       },
       "heightm": 0.6,
       "weightkg": 42.1,
       "color": "Blue",
       "evos": ["Shelgon"],
       "eggGroups": ["Dragon"]
   },
   "쉘곤": {
       "num": 372,
       "name": "Shelgon",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 65,
           "atk": 95,
           "def": 100,
           "spa": 60,
           "spd": 50,
           "spe": 50
       },
       "abilities": {
           "0": "돌머리",
           "H": "방진"
       },
       "heightm": 1.1,
       "weightkg": 110.5,
       "color": "White",
       "prevo": "Bagon",
       "evoLevel": 30,
       "evos": ["Salamence"],
       "eggGroups": ["Dragon"]
   },
   "보만다": {
       "num": 373,
       "name": "Salamence",
       "types": ["드래곤", "비행"],
       "baseStats": {
           "hp": 95,
           "atk": 135,
           "def": 80,
           "spa": 110,
           "spd": 80,
           "spe": 100
       },
       "abilities": {
           "0": "위협",
           "H": "자기과신"
       },
       "heightm": 1.5,
       "weightkg": 102.6,
       "color": "Blue",
       "prevo": "Shelgon",
       "evoLevel": 50,
       "eggGroups": ["Dragon"],
       "otherFormes": ["Salamence-Mega"],
       "formeOrder": ["Salamence", "Salamence-Mega"]
   },
   "메탕": {
       "num": 374,
       "name": "Beldum",
       "types": ["강철", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 40,
           "atk": 55,
           "def": 80,
           "spa": 35,
           "spd": 60,
           "spe": 30
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "라이트메탈"
       },
       "heightm": 0.6,
       "weightkg": 95.2,
       "color": "Blue",
       "evos": ["Metang"],
       "eggGroups": ["Mineral"]
   },
   "메탕구": {
       "num": 375,
       "name": "Metang",
       "types": ["강철", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 75,
           "def": 100,
           "spa": 55,
           "spd": 80,
           "spe": 50
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "라이트메탈"
       },
       "heightm": 1.2,
       "weightkg": 202.5,
       "color": "Blue",
       "prevo": "Beldum",
       "evoLevel": 20,
       "evos": ["Metagross"],
       "eggGroups": ["Mineral"]
   },
   "메타그로스": {
       "num": 376,
       "name": "Metagross",
       "types": ["강철", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 135,
           "def": 130,
           "spa": 95,
           "spd": 90,
           "spe": 70
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "라이트메탈"
       },
       "heightm": 1.6,
       "weightkg": 550,
       "color": "Blue",
       "prevo": "Metang",
       "evoLevel": 45,
       "eggGroups": ["Mineral"],
       "otherFormes": ["Metagross-Mega"],
       "formeOrder": ["Metagross", "Metagross-Mega"]
   },
   "레지락": {
       "num": 377,
       "name": "Regirock",
       "types": ["바위"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 100,
           "def": 200,
           "spa": 50,
           "spd": 100,
           "spe": 50
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "옹골참"
       },
       "heightm": 1.7,
       "weightkg": 230,
       "color": "Brown",
       "eggGroups": ["Undiscovered"]
   },
   "레지아이스": {
       "num": 378,
       "name": "Regice",
       "types": ["얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 50,
           "def": 100,
           "spa": 100,
           "spd": 200,
           "spe": 50
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "아이스바디"
       },
       "heightm": 1.8,
       "weightkg": 175,
       "color": "Blue",
       "eggGroups": ["Undiscovered"]
   },
   "레지스틸": {
       "num": 379,
       "name": "Registeel",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 75,
           "def": 150,
           "spa": 75,
           "spd": 150,
           "spe": 50
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "라이트메탈"
       },
       "heightm": 1.9,
       "weightkg": 205,
       "color": "Gray",
       "eggGroups": ["Undiscovered"]
   },
   "라티아스": {
       "num": 380,
       "name": "Latias",
       "types": ["드래곤", "에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 80,
           "atk": 80,
           "def": 90,
           "spa": 110,
           "spd": 130,
           "spe": 110
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.4,
       "weightkg": 40,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Latias-Mega"],
       "formeOrder": ["Latias", "Latias-Mega"]
   },
   "라티오스": {
       "num": 381,
       "name": "Latios",
       "types": ["드래곤", "에스퍼"],
       "gender": "M",
       "baseStats": {
           "hp": 80,
           "atk": 90,
           "def": 80,
           "spa": 130,
           "spd": 110,
           "spe": 110
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 2,
       "weightkg": 60,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Latios-Mega"],
       "formeOrder": ["Latios", "Latios-Mega"]
   },
   "가이오가": {
       "num": 382,
       "name": "Kyogre",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 90,
           "spa": 150,
           "spd": 140,
           "spe": 90
       },
       "abilities": {
           "0": "잔비"
       },
       "heightm": 4.5,
       "weightkg": 352,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Kyogre-Primal"],
       "formeOrder": ["Kyogre", "Kyogre-Primal"]
   },
   "원시가이오가": {
       "num": 382,
       "name": "Kyogre-Primal",
       "baseSpecies": "Kyogre",
       "forme": "Primal",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 150,
           "def": 90,
           "spa": 180,
           "spd": 160,
           "spe": 90
       },
       "abilities": {
           "0": "시작의바다"
       },
       "heightm": 9.8,
       "weightkg": 430,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Blue Orb"
   },
   "그란돈": {
       "num": 383,
       "name": "Groudon",
       "types": ["땅"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 150,
           "def": 140,
           "spa": 100,
           "spd": 90,
           "spe": 90
       },
       "abilities": {
           "0": "가뭄"
       },
       "heightm": 3.5,
       "weightkg": 950,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Groudon-Primal"],
       "formeOrder": ["Groudon", "Groudon-Primal"]
   },
   "원시그란돈": {
       "num": 383,
       "name": "Groudon-Primal",
       "baseSpecies": "Groudon",
       "forme": "Primal",
       "types": ["땅", "불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 180,
           "def": 160,
           "spa": 150,
           "spd": 90,
           "spe": 90
       },
       "abilities": {
           "0": "끝의대지"
       },
       "heightm": 5,
       "weightkg": 999.7,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Red Orb"
   },
   "레쿠쟈": {
       "num": 384,
       "name": "Rayquaza",
       "types": ["드래곤", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 105,
           "atk": 150,
           "def": 90,
           "spa": 150,
           "spd": 90,
           "spe": 95
       },
       "abilities": {
           "0": "에어록"
       },
       "heightm": 7,
       "weightkg": 206.5,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Rayquaza-Mega"],
       "formeOrder": ["Rayquaza", "Rayquaza-Mega"]
   },
   "지라치": {
       "num": 385,
       "name": "Jirachi",
       "types": ["강철", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 100,
           "spa": 100,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "하늘의 은총"
       },
       "heightm": 0.3,
       "weightkg": 1.1,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "테오키스": {
       "num": 386,
       "name": "Deoxys",
       "baseForme": "Normal",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 150,
           "def": 50,
           "spa": 150,
           "spd": 50,
           "spe": 150
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 1.7,
       "weightkg": 60.8,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"],
       "formeOrder": ["Deoxys", "Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"]
   },
   "테오키스-어택": {
       "num": 386,
       "name": "Deoxys-Attack",
       "baseSpecies": "Deoxys",
       "forme": "Attack",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 180,
           "def": 20,
           "spa": 180,
           "spd": 20,
           "spe": 150
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 1.7,
       "weightkg": 60.8,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Deoxys"
   },
   "테오키스-디펜스": {
       "num": 386,
       "name": "Deoxys-Defense",
       "baseSpecies": "Deoxys",
       "forme": "Defense",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 70,
           "def": 160,
           "spa": 70,
           "spd": 160,
           "spe": 90
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 1.7,
       "weightkg": 60.8,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Deoxys"
   },
   "테오키스-스피드": {
       "num": 386,
       "name": "Deoxys-Speed",
       "baseSpecies": "Deoxys",
       "forme": "Speed",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 95,
           "def": 90,
           "spa": 95,
           "spd": 90,
           "spe": 180
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 1.7,
       "weightkg": 60.8,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Deoxys"
   },
   "모부기": {
       "num": 387,
       "name": "Turtwig",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 55,
           "atk": 68,
           "def": 64,
           "spa": 45,
           "spd": 55,
           "spe": 31
       },
       "abilities": {
           "0": "심록",
           "H": "조가비 갑옷"
       },
       "heightm": 0.4,
       "weightkg": 10.2,
       "color": "Green",
       "evos": ["Grotle"],
       "eggGroups": ["Monster", "Grass"]
   },
   "수풀부기": {
       "num": 388,
       "name": "Grotle",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 89,
           "def": 85,
           "spa": 55,
           "spd": 65,
           "spe": 36
       },
       "abilities": {
           "0": "심록",
           "H": "조가비 갑옷"
       },
       "heightm": 1.1,
       "weightkg": 97,
       "color": "Green",
       "prevo": "Turtwig",
       "evoLevel": 18,
       "evos": ["Torterra"],
       "eggGroups": ["Monster", "Grass"]
   },
   "토대부기": {
       "num": 389,
       "name": "Torterra",
       "types": ["풀", "땅"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 95,
           "atk": 109,
           "def": 105,
           "spa": 75,
           "spd": 85,
           "spe": 56
       },
       "abilities": {
           "0": "심록",
           "H": "조가비 갑옷"
       },
       "heightm": 2.2,
       "weightkg": 310,
       "color": "Green",
       "prevo": "Grotle",
       "evoLevel": 32,
       "eggGroups": ["Monster", "Grass"]
   },
   "불꽃숭이": {
       "num": 390,
       "name": "Chimchar",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 44,
           "atk": 58,
           "def": 44,
           "spa": 58,
           "spd": 44,
           "spe": 61
       },
       "abilities": {
           "0": "맹화",
           "H": "철주먹"
       },
       "heightm": 0.5,
       "weightkg": 6.2,
       "color": "Brown",
       "evos": ["Monferno"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "파이숭이": {
       "num": 391,
       "name": "Monferno",
       "types": ["불꽃", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 64,
           "atk": 78,
           "def": 52,
           "spa": 78,
           "spd": 52,
           "spe": 81
       },
       "abilities": {
           "0": "맹화",
           "H": "철주먹"
       },
       "heightm": 0.9,
       "weightkg": 22,
       "color": "Brown",
       "prevo": "Chimchar",
       "evoLevel": 14,
       "evos": ["Infernape"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "초염몽": {
       "num": 392,
       "name": "Infernape",
       "types": ["불꽃", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 76,
           "atk": 104,
           "def": 71,
           "spa": 104,
           "spd": 71,
           "spe": 108
       },
       "abilities": {
           "0": "맹화",
           "H": "철주먹"
       },
       "heightm": 1.2,
       "weightkg": 55,
       "color": "Brown",
       "prevo": "Monferno",
       "evoLevel": 36,
       "eggGroups": ["Field", "Human-Like"]
   },
   "팽도리": {
       "num": 393,
       "name": "Piplup",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 53,
           "atk": 51,
           "def": 53,
           "spa": 61,
           "spd": 56,
           "spe": 40
       },
       "abilities": {
           "0": "급류",
           "H": "오기"
       },
       "heightm": 0.4,
       "weightkg": 5.2,
       "color": "Blue",
       "evos": ["Prinplup"],
       "eggGroups": ["Water 1", "Field"]
   },
   "팽태자": {
       "num": 394,
       "name": "Prinplup",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 64,
           "atk": 66,
           "def": 68,
           "spa": 81,
           "spd": 76,
           "spe": 50
       },
       "abilities": {
           "0": "급류",
           "H": "오기"
       },
       "heightm": 0.8,
       "weightkg": 23,
       "color": "Blue",
       "prevo": "Piplup",
       "evoLevel": 16,
       "evos": ["Empoleon"],
       "eggGroups": ["Water 1", "Field"]
   },
   "엠페르트": {
       "num": 395,
       "name": "Empoleon",
       "types": ["물", "강철"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 84,
           "atk": 86,
           "def": 88,
           "spa": 111,
           "spd": 101,
           "spe": 60
       },
       "abilities": {
           "0": "급류",
           "H": "오기"
       },
       "heightm": 1.7,
       "weightkg": 84.5,
       "color": "Blue",
       "prevo": "Prinplup",
       "evoLevel": 36,
       "eggGroups": ["Water 1", "Field"]
   },
   "찌르꼬": {
       "num": 396,
       "name": "Starly",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 40,
           "atk": 55,
           "def": 30,
           "spa": 30,
           "spd": 30,
           "spe": 60
       },
       "abilities": {
           "0": "날카로운 눈",
           "H": "이판사판"
       },
       "heightm": 0.3,
       "weightkg": 2,
       "color": "Brown",
       "evos": ["Staravia"],
       "eggGroups": ["Flying"]
   },
   "찌르버드": {
       "num": 397,
       "name": "Staravia",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 55,
           "atk": 75,
           "def": 50,
           "spa": 40,
           "spd": 40,
           "spe": 80
       },
       "abilities": {
           "0": "위협",
           "H": "이판사판"
       },
       "heightm": 0.6,
       "weightkg": 15.5,
       "color": "Brown",
       "prevo": "Starly",
       "evoLevel": 14,
       "evos": ["Staraptor"],
       "eggGroups": ["Flying"]
   },
   "찌르호크": {
       "num": 398,
       "name": "Staraptor",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 85,
           "atk": 120,
           "def": 70,
           "spa": 50,
           "spd": 60,
           "spe": 100
       },
       "abilities": {
           "0": "위협",
           "H": "이판사판"
       },
       "heightm": 1.2,
       "weightkg": 24.9,
       "color": "Brown",
       "prevo": "Staravia",
       "evoLevel": 34,
       "eggGroups": ["Flying"]
   },
   "비버니": {
       "num": 399,
       "name": "Bidoof",
       "types": ["노말"],
       "baseStats": {
           "hp": 59,
           "atk": 45,
           "def": 40,
           "spa": 35,
           "spd": 40,
           "spe": 31
       },
       "abilities": {
           "0": "단순",
           "1": "천진",
           "H": "변덕쟁이"
       },
       "heightm": 0.5,
       "weightkg": 20,
       "color": "Brown",
       "evos": ["Bibarel"],
       "eggGroups": ["Water 1", "Field"]
   },
   "비버통": {
       "num": 400,
       "name": "Bibarel",
       "types": ["노말", "물"],
       "baseStats": {
           "hp": 79,
           "atk": 85,
           "def": 60,
           "spa": 55,
           "spd": 60,
           "spe": 71
       },
       "abilities": {
           "0": "단순",
           "1": "천진",
           "H": "변덕쟁이"
       },
       "heightm": 1,
       "weightkg": 31.5,
       "color": "Brown",
       "prevo": "Bidoof",
       "evoLevel": 15,
       "eggGroups": ["Water 1", "Field"]
   },
   "귀뚤뚜기": {
       "num": 401,
       "name": "Kricketot",
       "types": ["벌레"],
       "baseStats": {
           "hp": 37,
           "atk": 25,
           "def": 41,
           "spa": 25,
           "spd": 41,
           "spe": 25
       },
       "abilities": {
           "0": "탈피",
           "H": "도주"
       },
       "heightm": 0.3,
       "weightkg": 2.2,
       "color": "Red",
       "evos": ["Kricketune"],
       "eggGroups": ["Bug"]
   },
   "귀뚤톡크": {
       "num": 402,
       "name": "Kricketune",
       "types": ["벌레"],
       "baseStats": {
           "hp": 77,
           "atk": 85,
           "def": 51,
           "spa": 55,
           "spd": 51,
           "spe": 65
       },
       "abilities": {
           "0": "벌레의 알림",
           "H": "테크니션"
       },
       "heightm": 1,
       "weightkg": 25.5,
       "color": "Red",
       "prevo": "Kricketot",
       "evoLevel": 10,
       "eggGroups": ["Bug"]
   },
   "꼬링크": {
       "num": 403,
       "name": "Shinx",
       "types": ["전기"],
       "baseStats": {
           "hp": 45,
           "atk": 65,
           "def": 34,
           "spa": 40,
           "spd": 34,
           "spe": 45
       },
       "abilities": {
           "0": "투쟁심",
           "1": "위협",
           "H": "근성"
       },
       "heightm": 0.5,
       "weightkg": 9.5,
       "color": "Blue",
       "evos": ["Luxio"],
       "eggGroups": ["Field"]
   },
   "럭시오": {
       "num": 404,
       "name": "Luxio",
       "types": ["전기"],
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 49,
           "spa": 60,
           "spd": 49,
           "spe": 60
       },
       "abilities": {
           "0": "투쟁심",
           "1": "위협",
           "H": "근성"
       },
       "heightm": 0.9,
       "weightkg": 30.5,
       "color": "Blue",
       "prevo": "Shinx",
       "evoLevel": 15,
       "evos": ["Luxray"],
       "eggGroups": ["Field"]
   },
   "렌트라": {
       "num": 405,
       "name": "Luxray",
       "types": ["전기"],
       "baseStats": {
           "hp": 80,
           "atk": 120,
           "def": 79,
           "spa": 95,
           "spd": 79,
           "spe": 70
       },
       "abilities": {
           "0": "투쟁심",
           "1": "위협",
           "H": "근성"
       },
       "heightm": 1.4,
       "weightkg": 42,
       "color": "Blue",
       "prevo": "Luxio",
       "evoLevel": 30,
       "eggGroups": ["Field"]
   },
   "꼬몽울": {
       "num": 406,
       "name": "Budew",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 40,
           "atk": 30,
           "def": 35,
           "spa": 50,
           "spd": 70,
           "spe": 55
       },
       "abilities": {
           "0": "자연회복",
           "1": "독가시",
           "H": "리프가드"
       },
       "heightm": 0.2,
       "weightkg": 1.2,
       "color": "Green",
       "evos": ["Roselia"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "로즈레이드": {
       "num": 407,
       "name": "Roserade",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 60,
           "atk": 70,
           "def": 65,
           "spa": 125,
           "spd": 105,
           "spe": 90
       },
       "abilities": {
           "0": "자연회복",
           "1": "독가시",
           "H": "테크니션"
       },
       "heightm": 0.9,
       "weightkg": 14.5,
       "color": "Green",
       "prevo": "Roselia",
       "evoType": "useItem",
       "evoItem": "Shiny Stone",
       "eggGroups": ["Fairy", "Grass"]
   },
   "두개도스": {
       "num": 408,
       "name": "Cranidos",
       "types": ["바위"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 67,
           "atk": 125,
           "def": 40,
           "spa": 30,
           "spd": 30,
           "spe": 58
       },
       "abilities": {
           "0": "틀깨기",
           "H": "우격다짐"
       },
       "heightm": 0.9,
       "weightkg": 31.5,
       "color": "Blue",
       "evos": ["Rampardos"],
       "eggGroups": ["Monster"]
   },
   "램펄드": {
       "num": 409,
       "name": "Rampardos",
       "types": ["바위"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 97,
           "atk": 165,
           "def": 60,
           "spa": 65,
           "spd": 50,
           "spe": 58
       },
       "abilities": {
           "0": "틀깨기",
           "H": "우격다짐"
       },
       "heightm": 1.6,
       "weightkg": 102.5,
       "color": "Blue",
       "prevo": "Cranidos",
       "evoLevel": 30,
       "eggGroups": ["Monster"]
   },
   "방패톱스": {
       "num": 410,
       "name": "Shieldon",
       "types": ["바위", "강철"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 30,
           "atk": 42,
           "def": 118,
           "spa": 42,
           "spd": 88,
           "spe": 30
       },
       "abilities": {
           "0": "옹골참",
           "H": "방음"
       },
       "heightm": 0.5,
       "weightkg": 57,
       "color": "Gray",
       "evos": ["Bastiodon"],
       "eggGroups": ["Monster"]
   },
   "바리톱스": {
       "num": 411,
       "name": "Bastiodon",
       "types": ["바위", "강철"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 52,
           "def": 168,
           "spa": 47,
           "spd": 138,
           "spe": 30
       },
       "abilities": {
           "0": "옹골참",
           "H": "방음"
       },
       "heightm": 1.3,
       "weightkg": 149.5,
       "color": "Gray",
       "prevo": "Shieldon",
       "evoLevel": 30,
       "eggGroups": ["Monster"]
   },
   "도롱충이": {
       "num": 412,
       "name": "Burmy",
       "baseForme": "Plant",
       "types": ["벌레"],
       "baseStats": {
           "hp": 40,
           "atk": 29,
           "def": 45,
           "spa": 29,
           "spd": 45,
           "spe": 36
       },
       "abilities": {
           "0": "탈피",
           "H": "방진"
       },
       "heightm": 0.2,
       "weightkg": 3.4,
       "color": "Green",
       "evos": ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash", "Mothim"],
       "eggGroups": ["Bug"],
       "cosmeticFormes": ["Burmy-Sandy", "Burmy-Trash"],
       "formeOrder": ["Burmy", "Burmy-Sandy", "Burmy-Trash"]
   },
   "도롱마담": {
       "num": 413,
       "name": "Wormadam",
       "baseForme": "Plant",
       "types": ["벌레", "풀"],
       "gender": "F",
       "baseStats": {
           "hp": 60,
           "atk": 59,
           "def": 85,
           "spa": 79,
           "spd": 105,
           "spe": 36
       },
       "abilities": {
           "0": "위험예지",
           "H": "방진"
       },
       "heightm": 0.5,
       "weightkg": 6.5,
       "color": "Green",
       "prevo": "Burmy",
       "evoLevel": 20,
       "eggGroups": ["Bug"],
       "otherFormes": ["Wormadam-Sandy", "Wormadam-Trash"],
       "formeOrder": ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash"]
   },
   "모래땅도롱": {
       "num": 413,
       "name": "Wormadam-Sandy",
       "baseSpecies": "Wormadam",
       "forme": "Sandy",
       "types": ["벌레", "땅"],
       "gender": "F",
       "baseStats": {
           "hp": 60,
           "atk": 79,
           "def": 105,
           "spa": 59,
           "spd": 85,
           "spe": 36
       },
       "abilities": {
           "0": "위험예지",
           "H": "방진"
       },
       "heightm": 0.5,
       "weightkg": 6.5,
       "color": "Brown",
       "prevo": "Burmy",
       "evoLevel": 20,
       "eggGroups": ["Bug"]
   },
   "슈레도롱": {
       "num": 413,
       "name": "Wormadam-Trash",
       "baseSpecies": "Wormadam",
       "forme": "Trash",
       "types": ["벌레", "강철"],
       "gender": "F",
       "baseStats": {
           "hp": 60,
           "atk": 69,
           "def": 95,
           "spa": 69,
           "spd": 95,
           "spe": 36
       },
       "abilities": {
           "0": "위험예지",
           "H": "방진"
       },
       "heightm": 0.5,
       "weightkg": 6.5,
       "color": "Red",
       "prevo": "Burmy",
       "evoLevel": 20,
       "eggGroups": ["Bug"]
   },
   "나메일": {
       "num": 414,
       "name": "Mothim",
       "types": ["벌레", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 70,
           "atk": 94,
           "def": 50,
           "spa": 94,
           "spd": 50,
           "spe": 66
       },
       "abilities": {
           "0": "벌레의 알림",
           "H": "색안경"
       },
       "heightm": 0.9,
       "weightkg": 23.3,
       "color": "Yellow",
       "prevo": "Burmy",
       "evoLevel": 20,
       "eggGroups": ["Bug"]
   },
   "세꿀버리": {
       "num": 415,
       "name": "Combee",
       "types": ["벌레", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 30,
           "atk": 30,
           "def": 42,
           "spa": 30,
           "spd": 42,
           "spe": 70
       },
       "abilities": {
           "0": "꿀모으기",
           "H": "의욕"
       },
       "heightm": 0.3,
       "weightkg": 5.5,
       "color": "Yellow",
       "evos": ["Vespiquen"],
       "eggGroups": ["Bug"]
   },
   "비퀸": {
       "num": 416,
       "name": "Vespiquen",
       "types": ["벌레", "비행"],
       "gender": "F",
       "baseStats": {
           "hp": 70,
           "atk": 80,
           "def": 102,
           "spa": 80,
           "spd": 102,
           "spe": 40
       },
       "abilities": {
           "0": "프레셔",
           "H": "긴장감"
       },
       "heightm": 1.2,
       "weightkg": 38.5,
       "color": "Yellow",
       "prevo": "Combee",
       "evoLevel": 21,
       "eggGroups": ["Bug"]
   },
   "파치리스": {
       "num": 417,
       "name": "Pachirisu",
       "types": ["전기"],
       "baseStats": {
           "hp": 60,
           "atk": 45,
           "def": 70,
           "spa": 45,
           "spd": 90,
           "spe": 95
       },
       "abilities": {
           "0": "도주",
           "1": "픽업",
           "H": "축전"
       },
       "heightm": 0.4,
       "weightkg": 3.9,
       "color": "White",
       "eggGroups": ["Field", "Fairy"]
   },
   "브이젤": {
       "num": 418,
       "name": "Buizel",
       "types": ["물"],
       "baseStats": {
           "hp": 55,
           "atk": 65,
           "def": 35,
           "spa": 60,
           "spd": 30,
           "spe": 85
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "수의 베일"
       },
       "heightm": 0.7,
       "weightkg": 29.5,
       "color": "Brown",
       "evos": ["Floatzel"],
       "eggGroups": ["Water 1", "Field"]
   },
   "플로젤": {
       "num": 419,
       "name": "Floatzel",
       "types": ["물"],
       "baseStats": {
           "hp": 85,
           "atk": 105,
           "def": 55,
           "spa": 85,
           "spd": 50,
           "spe": 115
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "수의 베일"
       },
       "heightm": 1.1,
       "weightkg": 33.5,
       "color": "Brown",
       "prevo": "Buizel",
       "evoLevel": 26,
       "eggGroups": ["Water 1", "Field"]
   },
   "체리버": {
       "num": 420,
       "name": "Cherubi",
       "types": ["풀"],
       "baseStats": {
           "hp": 45,
           "atk": 35,
           "def": 45,
           "spa": 62,
           "spd": 53,
           "spe": 35
       },
       "abilities": {
           "0": "엽록소"
       },
       "heightm": 0.4,
       "weightkg": 3.3,
       "color": "Pink",
       "evos": ["Cherrim"],
       "eggGroups": ["Fairy", "Grass"]
   },
   "체리꼬": {
       "num": 421,
       "name": "Cherrim",
       "baseForme": "Overcast",
       "types": ["풀"],
       "baseStats": {
           "hp": 70,
           "atk": 60,
           "def": 70,
           "spa": 87,
           "spd": 78,
           "spe": 85
       },
       "abilities": {
           "0": "플라워기프트"
       },
       "heightm": 0.5,
       "weightkg": 9.3,
       "color": "Purple",
       "prevo": "Cherubi",
       "evoLevel": 25,
       "eggGroups": ["Fairy", "Grass"],
       "otherFormes": ["Cherrim-Sunshine"],
       "formeOrder": ["Cherrim", "Cherrim-Sunshine"]
   },
   "깝질무": {
       "num": 422,
       "name": "Shellos",
       "baseForme": "West",
       "types": ["물"],
       "baseStats": {
           "hp": 76,
           "atk": 48,
           "def": 48,
           "spa": 57,
           "spd": 62,
           "spe": 34
       },
       "abilities": {
           "0": "점착",
           "1": "마중물",
           "H": "모래의힘"
       },
       "heightm": 0.3,
       "weightkg": 6.3,
       "color": "Purple",
       "evos": ["Gastrodon"],
       "eggGroups": ["Water 1", "Amorphous"],
       "cosmeticFormes": ["Shellos-East"],
       "formeOrder": ["Shellos", "Shellos-East"]
   },
   "트리토돈": {
       "num": 423,
       "name": "Gastrodon",
       "baseForme": "West",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 111,
           "atk": 83,
           "def": 68,
           "spa": 92,
           "spd": 82,
           "spe": 39
       },
       "abilities": {
           "0": "점착",
           "1": "마중물",
           "H": "모래의힘"
       },
       "heightm": 0.9,
       "weightkg": 29.9,
       "color": "Purple",
       "prevo": "Shellos",
       "evoLevel": 30,
       "eggGroups": ["Water 1", "Amorphous"],
       "cosmeticFormes": ["Gastrodon-East"],
       "formeOrder": ["Gastrodon", "Gastrodon-East"]
   },
   "겟핸보숭": {
       "num": 424,
       "name": "Ambipom",
       "types": ["노말"],
       "baseStats": {
           "hp": 75,
           "atk": 100,
           "def": 66,
           "spa": 60,
           "spd": 66,
           "spe": 115
       },
       "abilities": {
           "0": "테크니션",
           "1": "픽업",
           "H": "스킬링크"
       },
       "heightm": 1.2,
       "weightkg": 20.3,
       "color": "Purple",
       "prevo": "Aipom",
       "evoType": "levelMove",
       "evoMove": "Double Hit",
       "eggGroups": ["Field"]
   },
   "흔들풍손": {
       "num": 425,
       "name": "Drifloon",
       "types": ["고스트", "비행"],
       "baseStats": {
           "hp": 90,
           "atk": 50,
           "def": 34,
           "spa": 60,
           "spd": 44,
           "spe": 70
       },
       "abilities": {
           "0": "유폭",
           "1": "곡예",
           "H": "열폭주"
       },
       "heightm": 0.4,
       "weightkg": 1.2,
       "color": "Purple",
       "evos": ["Drifblim"],
       "eggGroups": ["Amorphous"]
   },
   "둥실라이드": {
       "num": 426,
       "name": "Drifblim",
       "types": ["고스트", "비행"],
       "baseStats": {
           "hp": 150,
           "atk": 80,
           "def": 44,
           "spa": 90,
           "spd": 54,
           "spe": 80
       },
       "abilities": {
           "0": "유폭",
           "1": "곡예",
           "H": "열폭주"
       },
       "heightm": 1.2,
       "weightkg": 15,
       "color": "Purple",
       "prevo": "Drifloon",
       "evoLevel": 28,
       "eggGroups": ["Amorphous"]
   },
   "이어롤": {
       "num": 427,
       "name": "Buneary",
       "types": ["노말"],
       "baseStats": {
           "hp": 55,
           "atk": 66,
           "def": 44,
           "spa": 44,
           "spd": 56,
           "spe": 85
       },
       "abilities": {
           "0": "도주",
           "1": "서투름",
           "H": "유연"
       },
       "heightm": 0.4,
       "weightkg": 5.5,
       "color": "Brown",
       "evos": ["Lopunny"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "이어롭": {
       "num": 428,
       "name": "Lopunny",
       "types": ["노말"],
       "baseStats": {
           "hp": 65,
           "atk": 76,
           "def": 84,
           "spa": 54,
           "spd": 96,
           "spe": 105
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "서투름",
           "H": "유연"
       },
       "heightm": 1.2,
       "weightkg": 33.3,
       "color": "Brown",
       "prevo": "Buneary",
       "evoType": "levelFriendship",
       "eggGroups": ["Field", "Human-Like"],
       "otherFormes": ["Lopunny-Mega"],
       "formeOrder": ["Lopunny", "Lopunny-Mega"]
   },
   "무우마직": {
       "num": 429,
       "name": "Mismagius",
       "types": ["고스트"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 60,
           "spa": 105,
           "spd": 105,
           "spe": 105
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.9,
       "weightkg": 4.4,
       "color": "Purple",
       "prevo": "Misdreavus",
       "evoType": "useItem",
       "evoItem": "Dusk Stone",
       "eggGroups": ["Amorphous"]
   },
   "돈크로우": {
       "num": 430,
       "name": "Honchkrow",
       "types": ["악", "비행"],
       "baseStats": {
           "hp": 100,
           "atk": 125,
           "def": 52,
           "spa": 105,
           "spd": 52,
           "spe": 71
       },
       "abilities": {
           "0": "불면",
           "1": "대운",
           "H": "자기과신"
       },
       "heightm": 0.9,
       "weightkg": 27.3,
       "color": "Black",
       "prevo": "Murkrow",
       "evoType": "useItem",
       "evoItem": "Dusk Stone",
       "eggGroups": ["Flying"]
   },
   "나옹마": {
       "num": 431,
       "name": "Glameow",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 49,
           "atk": 55,
           "def": 42,
           "spa": 42,
           "spd": 37,
           "spe": 85
       },
       "abilities": {
           "0": "유연",
           "1": "마이페이스",
           "H": "날카로운 눈"
       },
       "heightm": 0.5,
       "weightkg": 3.9,
       "color": "Gray",
       "evos": ["Purugly"],
       "eggGroups": ["Field"]
   },
   "몬냥이": {
       "num": 432,
       "name": "Purugly",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 71,
           "atk": 82,
           "def": 64,
           "spa": 64,
           "spd": 59,
           "spe": 112
       },
       "abilities": {
           "0": "두꺼운 지방",
           "1": "마이페이스",
           "H": "오기"
       },
       "heightm": 1,
       "weightkg": 43.8,
       "color": "Gray",
       "prevo": "Glameow",
       "evoLevel": 38,
       "eggGroups": ["Field"]
   },
   "랑딸랑": {
       "num": 433,
       "name": "Chingling",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 45,
           "atk": 30,
           "def": 50,
           "spa": 65,
           "spd": 50,
           "spe": 45
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.2,
       "weightkg": 0.6,
       "color": "Yellow",
       "evos": ["Chimecho"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "스컹뿡": {
       "num": 434,
       "name": "Stunky",
       "types": ["독", "악"],
       "baseStats": {
           "hp": 63,
           "atk": 63,
           "def": 47,
           "spa": 41,
           "spd": 41,
           "spe": 74
       },
       "abilities": {
           "0": "악취",
           "1": "유폭",
           "H": "날카로운 눈"
       },
       "heightm": 0.4,
       "weightkg": 19.2,
       "color": "Purple",
       "evos": ["Skuntank"],
       "eggGroups": ["Field"]
   },
   "스컹탱크": {
       "num": 435,
       "name": "Skuntank",
       "types": ["독", "악"],
       "baseStats": {
           "hp": 103,
           "atk": 93,
           "def": 67,
           "spa": 71,
           "spd": 61,
           "spe": 84
       },
       "abilities": {
           "0": "악취",
           "1": "유폭",
           "H": "날카로운 눈"
       },
       "heightm": 1,
       "weightkg": 38,
       "color": "Purple",
       "prevo": "Stunky",
       "evoLevel": 34,
       "eggGroups": ["Field"]
   },
   "동미러": {
       "num": 436,
       "name": "Bronzor",
       "types": ["강철", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 57,
           "atk": 24,
           "def": 86,
           "spa": 24,
           "spd": 86,
           "spe": 23
       },
       "abilities": {
           "0": "부유",
           "1": "내열",
           "H": "헤비메탈"
       },
       "heightm": 0.5,
       "weightkg": 60.5,
       "color": "Green",
       "evos": ["Bronzong"],
       "eggGroups": ["Mineral"]
   },
   "동탁군": {
       "num": 437,
       "name": "Bronzong",
       "types": ["강철", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 67,
           "atk": 89,
           "def": 116,
           "spa": 79,
           "spd": 116,
           "spe": 33
       },
       "abilities": {
           "0": "부유",
           "1": "내열",
           "H": "헤비메탈"
       },
       "heightm": 1.3,
       "weightkg": 187,
       "color": "Green",
       "prevo": "Bronzor",
       "evoLevel": 33,
       "eggGroups": ["Mineral"]
   },
   "꼬지지": {
       "num": 438,
       "name": "Bonsly",
       "types": ["바위"],
       "baseStats": {
           "hp": 50,
           "atk": 80,
           "def": 95,
           "spa": 10,
           "spd": 45,
           "spe": 10
       },
       "abilities": {
           "0": "옹골참",
           "1": "돌머리",
           "H": "주눅"
       },
       "heightm": 0.5,
       "weightkg": 15,
       "color": "Brown",
       "evos": ["Sudowoodo"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "흉내내": {
       "num": 439,
       "name": "Mime Jr.",
       "types": ["에스퍼", "페어리"],
       "baseStats": {
           "hp": 20,
           "atk": 25,
           "def": 45,
           "spa": 70,
           "spd": 90,
           "spe": 60
       },
       "abilities": {
           "0": "방음",
           "1": "필터",
           "H": "테크니션"
       },
       "heightm": 0.6,
       "weightkg": 13,
       "color": "Pink",
       "evos": ["Mr. Mime", "Mr. Mime-Galar"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "핑복": {
       "num": 440,
       "name": "Happiny",
       "types": ["노말"],
       "gender": "F",
       "baseStats": {
           "hp": 100,
           "atk": 5,
           "def": 5,
           "spa": 15,
           "spd": 65,
           "spe": 30
       },
       "abilities": {
           "0": "자연회복",
           "1": "하늘의 은총",
           "H": "프렌드가드"
       },
       "heightm": 0.6,
       "weightkg": 24.4,
       "color": "Pink",
       "evos": ["Chansey"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "페라페": {
       "num": 441,
       "name": "Chatot",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 76,
           "atk": 65,
           "def": 45,
           "spa": 92,
           "spd": 42,
           "spe": 91
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "갈지자걸음",
           "H": "부풀린가슴"
       },
       "heightm": 0.5,
       "weightkg": 1.9,
       "color": "Black",
       "eggGroups": ["Flying"]
   },
   "화강돌": {
       "num": 442,
       "name": "Spiritomb",
       "types": ["고스트", "악"],
       "baseStats": {
           "hp": 50,
           "atk": 92,
           "def": 108,
           "spa": 92,
           "spd": 108,
           "spe": 35
       },
       "abilities": {
           "0": "프레셔",
           "H": "틈새포착"
       },
       "heightm": 1,
       "weightkg": 108,
       "color": "Purple",
       "eggGroups": ["Amorphous"]
   },
   "딥상어동": {
       "num": 443,
       "name": "Gible",
       "types": ["드래곤", "땅"],
       "baseStats": {
           "hp": 58,
           "atk": 70,
           "def": 45,
           "spa": 40,
           "spd": 45,
           "spe": 42
       },
       "abilities": {
           "0": "모래숨기",
           "H": "까칠한 피부"
       },
       "heightm": 0.7,
       "weightkg": 20.5,
       "color": "Blue",
       "evos": ["Gabite"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "한바이트": {
       "num": 444,
       "name": "Gabite",
       "types": ["드래곤", "땅"],
       "baseStats": {
           "hp": 68,
           "atk": 90,
           "def": 65,
           "spa": 50,
           "spd": 55,
           "spe": 82
       },
       "abilities": {
           "0": "모래숨기",
           "H": "까칠한 피부"
       },
       "heightm": 1.4,
       "weightkg": 56,
       "color": "Blue",
       "prevo": "Gible",
       "evoLevel": 24,
       "evos": ["Garchomp"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "한카리아스": {
       "num": 445,
       "name": "Garchomp",
       "types": ["드래곤", "땅"],
       "baseStats": {
           "hp": 108,
           "atk": 130,
           "def": 95,
           "spa": 80,
           "spd": 85,
           "spe": 102
       },
       "abilities": {
           "0": "모래숨기",
           "H": "까칠한 피부"
       },
       "heightm": 1.9,
       "weightkg": 95,
       "color": "Blue",
       "prevo": "Gabite",
       "evoLevel": 48,
       "eggGroups": ["Monster", "Dragon"],
       "otherFormes": ["Garchomp-Mega"],
       "formeOrder": ["Garchomp", "Garchomp-Mega"]
   },
   "먹고자": {
       "num": 446,
       "name": "Munchlax",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 135,
           "atk": 85,
           "def": 40,
           "spa": 40,
           "spd": 85,
           "spe": 5
       },
       "abilities": {
           "0": "픽업",
           "1": "두꺼운 지방",
           "H": "먹보"
       },
       "heightm": 0.6,
       "weightkg": 105,
       "color": "Black",
       "evos": ["Snorlax"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "리오르": {
       "num": 447,
       "name": "Riolu",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 40,
           "atk": 70,
           "def": 40,
           "spa": 35,
           "spd": 40,
           "spe": 60
       },
       "abilities": {
           "0": "불굴의 마음",
           "1": "정신력",
           "H": "짓궂은마음"
       },
       "heightm": 0.7,
       "weightkg": 20.2,
       "color": "Blue",
       "evos": ["Lucario"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "루카리오": {
       "num": 448,
       "name": "Lucario",
       "types": ["격투", "강철"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 70,
           "atk": 110,
           "def": 70,
           "spa": 115,
           "spd": 70,
           "spe": 90
       },
       "abilities": {
           "0": "불굴의 마음",
           "1": "정신력",
           "H": "정의의마음"
       },
       "heightm": 1.2,
       "weightkg": 54,
       "color": "Blue",
       "prevo": "Riolu",
       "evoType": "levelFriendship",
       "evoCondition": "during the day",
       "eggGroups": ["Field", "Human-Like"],
       "otherFormes": ["Lucario-Mega"],
       "formeOrder": ["Lucario", "Lucario-Mega"]
   },
   "히포포타스": {
       "num": 449,
       "name": "Hippopotas",
       "types": ["땅"],
       "baseStats": {
           "hp": 68,
           "atk": 72,
           "def": 78,
           "spa": 38,
           "spd": 42,
           "spe": 32
       },
       "abilities": {
           "0": "모래날림",
           "H": "모래의힘"
       },
       "heightm": 0.8,
       "weightkg": 49.5,
       "color": "Brown",
       "evos": ["Hippowdon"],
       "eggGroups": ["Field"]
   },
   "하마돈": {
       "num": 450,
       "name": "Hippowdon",
       "types": ["땅"],
       "baseStats": {
           "hp": 108,
           "atk": 112,
           "def": 118,
           "spa": 68,
           "spd": 72,
           "spe": 47
       },
       "abilities": {
           "0": "모래날림",
           "H": "모래의힘"
       },
       "heightm": 2,
       "weightkg": 300,
       "color": "Brown",
       "prevo": "Hippopotas",
       "evoLevel": 34,
       "eggGroups": ["Field"]
   },
   "스콜피": {
       "num": 451,
       "name": "Skorupi",
       "types": ["독", "벌레"],
       "baseStats": {
           "hp": 40,
           "atk": 50,
           "def": 90,
           "spa": 30,
           "spd": 55,
           "spe": 65
       },
       "abilities": {
           "0": "전투 무장",
           "1": "스나이퍼",
           "H": "날카로운 눈"
       },
       "heightm": 0.8,
       "weightkg": 12,
       "color": "Purple",
       "evos": ["Drapion"],
       "eggGroups": ["Bug", "Water 3"]
   },
   "드래피온": {
       "num": 452,
       "name": "Drapion",
       "types": ["독", "악"],
       "baseStats": {
           "hp": 70,
           "atk": 90,
           "def": 110,
           "spa": 60,
           "spd": 75,
           "spe": 95
       },
       "abilities": {
           "0": "전투 무장",
           "1": "스나이퍼",
           "H": "날카로운 눈"
       },
       "heightm": 1.3,
       "weightkg": 61.5,
       "color": "Purple",
       "prevo": "Skorupi",
       "evoLevel": 40,
       "eggGroups": ["Bug", "Water 3"]
   },
   "삐딱구리": {
       "num": 453,
       "name": "Croagunk",
       "types": ["독", "격투"],
       "baseStats": {
           "hp": 48,
           "atk": 61,
           "def": 40,
           "spa": 61,
           "spd": 40,
           "spe": 50
       },
       "abilities": {
           "0": "위험예지",
           "1": "건조피부",
           "H": "독수"
       },
       "heightm": 0.7,
       "weightkg": 23,
       "color": "Blue",
       "evos": ["Toxicroak"],
       "eggGroups": ["Human-Like"]
   },
   "독개굴": {
       "num": 454,
       "name": "Toxicroak",
       "types": ["독", "격투"],
       "baseStats": {
           "hp": 83,
           "atk": 106,
           "def": 65,
           "spa": 86,
           "spd": 65,
           "spe": 85
       },
       "abilities": {
           "0": "위험예지",
           "1": "건조피부",
           "H": "독수"
       },
       "heightm": 1.3,
       "weightkg": 44.4,
       "color": "Blue",
       "prevo": "Croagunk",
       "evoLevel": 37,
       "eggGroups": ["Human-Like"]
   },
   "무스틈니": {
       "num": 455,
       "name": "Carnivine",
       "types": ["풀"],
       "baseStats": {
           "hp": 74,
           "atk": 100,
           "def": 72,
           "spa": 90,
           "spd": 72,
           "spe": 46
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.4,
       "weightkg": 27,
       "color": "Green",
       "eggGroups": ["Grass"]
   },
   "형광어": {
       "num": 456,
       "name": "Finneon",
       "types": ["물"],
       "baseStats": {
           "hp": 49,
           "atk": 49,
           "def": 56,
           "spa": 49,
           "spd": 61,
           "spe": 66
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "마중물",
           "H": "수의 베일"
       },
       "heightm": 0.4,
       "weightkg": 7,
       "color": "Blue",
       "evos": ["Lumineon"],
       "eggGroups": ["Water 2"]
   },
   "네오라이트": {
       "num": 457,
       "name": "Lumineon",
       "types": ["물"],
       "baseStats": {
           "hp": 69,
           "atk": 69,
           "def": 76,
           "spa": 69,
           "spd": 86,
           "spe": 91
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "마중물",
           "H": "수의 베일"
       },
       "heightm": 1.2,
       "weightkg": 24,
       "color": "Blue",
       "prevo": "Finneon",
       "evoLevel": 31,
       "eggGroups": ["Water 2"]
   },
   "타만타": {
       "num": 458,
       "name": "Mantyke",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 45,
           "atk": 20,
           "def": 50,
           "spa": 60,
           "spd": 120,
           "spe": 50
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "저수",
           "H": "수의 베일"
       },
       "heightm": 1,
       "weightkg": 65,
       "color": "Blue",
       "evos": ["Mantine"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "눈쓰개": {
       "num": 459,
       "name": "Snover",
       "types": ["풀", "얼음"],
       "baseStats": {
           "hp": 60,
           "atk": 62,
           "def": 50,
           "spa": 62,
           "spd": 60,
           "spe": 40
       },
       "abilities": {
           "0": "눈퍼뜨리기",
           "H": "방음"
       },
       "heightm": 1,
       "weightkg": 50.5,
       "color": "White",
       "evos": ["Abomasnow"],
       "eggGroups": ["Monster", "Grass"]
   },
   "눈설왕": {
       "num": 460,
       "name": "Abomasnow",
       "types": ["풀", "얼음"],
       "baseStats": {
           "hp": 90,
           "atk": 92,
           "def": 75,
           "spa": 92,
           "spd": 85,
           "spe": 60
       },
       "abilities": {
           "0": "눈퍼뜨리기",
           "H": "방음"
       },
       "heightm": 2.2,
       "weightkg": 135.5,
       "color": "White",
       "prevo": "Snover",
       "evoLevel": 40,
       "eggGroups": ["Monster", "Grass"],
       "otherFormes": ["Abomasnow-Mega"],
       "formeOrder": ["Abomasnow", "Abomasnow-Mega"]
   },
   "포푸니라": {
       "num": 461,
       "name": "Weavile",
       "types": ["악", "얼음"],
       "baseStats": {
           "hp": 70,
           "atk": 120,
           "def": 65,
           "spa": 45,
           "spd": 85,
           "spe": 125
       },
       "abilities": {
           "0": "프레셔",
           "H": "나쁜손버릇"
       },
       "heightm": 1.1,
       "weightkg": 34,
       "color": "Black",
       "prevo": "Sneasel",
       "evoType": "levelHold",
       "evoItem": "Razor Claw",
       "eggGroups": ["Field"]
   },
   "자포코일": {
       "num": 462,
       "name": "Magnezone",
       "types": ["전기", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 70,
           "def": 115,
           "spa": 130,
           "spd": 90,
           "spe": 60
       },
       "abilities": {
           "0": "자력",
           "1": "옹골참",
           "H": "애널라이즈"
       },
       "heightm": 1.2,
       "weightkg": 180,
       "color": "Gray",
       "prevo": "Magneton",
       "evoType": "useItem",
       "evoItem": "Thunder Stone",
       "eggGroups": ["Mineral"]
   },
   "내룸벨트": {
       "num": 463,
       "name": "Lickilicky",
       "types": ["노말"],
       "baseStats": {
           "hp": 110,
           "atk": 85,
           "def": 95,
           "spa": 80,
           "spd": 95,
           "spe": 50
       },
       "abilities": {
           "0": "마이페이스",
           "1": "둔감",
           "H": "날씨 부정"
       },
       "heightm": 1.7,
       "weightkg": 140,
       "color": "Pink",
       "prevo": "Lickitung",
       "evoType": "levelMove",
       "evoMove": "Rollout",
       "eggGroups": ["Monster"]
   },
   "거대코뿌리": {
       "num": 464,
       "name": "Rhyperior",
       "types": ["땅", "바위"],
       "baseStats": {
           "hp": 115,
           "atk": 140,
           "def": 130,
           "spa": 55,
           "spd": 55,
           "spe": 40
       },
       "abilities": {
           "0": "피뢰침",
           "1": "하드록",
           "H": "이판사판"
       },
       "heightm": 2.4,
       "weightkg": 282.8,
       "color": "Gray",
       "prevo": "Rhydon",
       "evoType": "trade",
       "evoItem": "Protector",
       "eggGroups": ["Monster", "Field"]
   },
   "덩쿠림보": {
       "num": 465,
       "name": "Tangrowth",
       "types": ["풀"],
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 125,
           "spa": 110,
           "spd": 50,
           "spe": 50
       },
       "abilities": {
           "0": "엽록소",
           "1": "리프가드",
           "H": "재생력"
       },
       "heightm": 2,
       "weightkg": 128.6,
       "color": "Blue",
       "prevo": "Tangela",
       "evoType": "levelMove",
       "evoMove": "Ancient Power",
       "eggGroups": ["Grass"]
   },
   "에레키블": {
       "num": 466,
       "name": "Electivire",
       "types": ["전기"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 75,
           "atk": 123,
           "def": 67,
           "spa": 95,
           "spd": 85,
           "spe": 95
       },
       "abilities": {
           "0": "전기엔진",
           "H": "의기양양"
       },
       "heightm": 1.8,
       "weightkg": 138.6,
       "color": "Yellow",
       "prevo": "Electabuzz",
       "evoType": "trade",
       "evoItem": "Electirizer",
       "eggGroups": ["Human-Like"]
   },
   "마그마번": {
       "num": 467,
       "name": "Magmortar",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 75,
           "atk": 95,
           "def": 67,
           "spa": 125,
           "spd": 95,
           "spe": 83
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "의기양양"
       },
       "heightm": 1.6,
       "weightkg": 68,
       "color": "Red",
       "prevo": "Magmar",
       "evoType": "trade",
       "evoItem": "Magmarizer",
       "eggGroups": ["Human-Like"]
   },
   "토게키스": {
       "num": 468,
       "name": "Togekiss",
       "types": ["페어리", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 85,
           "atk": 50,
           "def": 95,
           "spa": 120,
           "spd": 115,
           "spe": 80
       },
       "abilities": {
           "0": "의욕",
           "1": "하늘의 은총",
           "H": "대운"
       },
       "heightm": 1.5,
       "weightkg": 38,
       "color": "White",
       "prevo": "Togetic",
       "evoType": "useItem",
       "evoItem": "Shiny Stone",
       "eggGroups": ["Flying", "Fairy"]
   },
   "리피아": {
       "num": 470,
       "name": "Leafeon",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 110,
           "def": 130,
           "spa": 60,
           "spd": 65,
           "spe": 95
       },
       "abilities": {
           "0": "리프가드",
           "H": "엽록소"
       },
       "heightm": 1,
       "weightkg": 25.5,
       "color": "Green",
       "prevo": "Eevee",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Field"]
   },
   "글레이시아": {
       "num": 471,
       "name": "Glaceon",
       "types": ["얼음"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 60,
           "def": 110,
           "spa": 130,
           "spd": 95,
           "spe": 65
       },
       "abilities": {
           "0": "눈숨기",
           "H": "아이스바디"
       },
       "heightm": 0.8,
       "weightkg": 25.9,
       "color": "Blue",
       "prevo": "Eevee",
       "evoType": "useItem",
       "evoItem": "Ice Stone",
       "eggGroups": ["Field"]
   },
   "글라이온": {
       "num": 472,
       "name": "Gliscor",
       "types": ["땅", "비행"],
       "baseStats": {
           "hp": 75,
           "atk": 95,
           "def": 125,
           "spa": 45,
           "spd": 75,
           "spe": 95
       },
       "abilities": {
           "0": "괴력집게",
           "1": "모래숨기",
           "H": "포이즌힐"
       },
       "heightm": 2,
       "weightkg": 42.5,
       "color": "Purple",
       "prevo": "Gligar",
       "evoType": "levelHold",
       "evoItem": "Razor Fang",
       "evoCondition": "at night",
       "eggGroups": ["Bug"]
   },
   "맘모꾸리": {
       "num": 473,
       "name": "Mamoswine",
       "types": ["얼음", "땅"],
       "baseStats": {
           "hp": 110,
           "atk": 130,
           "def": 80,
           "spa": 70,
           "spd": 60,
           "spe": 80
       },
       "abilities": {
           "0": "둔감",
           "1": "눈숨기",
           "H": "두꺼운 지방"
       },
       "heightm": 2.5,
       "weightkg": 291,
       "color": "Brown",
       "prevo": "Piloswine",
       "evoType": "levelMove",
       "evoMove": "Ancient Power",
       "eggGroups": ["Field"]
   },
   "폴리곤z": {
       "num": 474,
       "name": "Porygon-Z",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 85,
           "atk": 80,
           "def": 70,
           "spa": 135,
           "spd": 75,
           "spe": 90
       },
       "abilities": {
           "0": "적응력",
           "1": "다운로드",
           "H": "애널라이즈"
       },
       "heightm": 0.9,
       "weightkg": 34,
       "color": "Red",
       "prevo": "Porygon2",
       "evoType": "trade",
       "evoItem": "Dubious Disc",
       "eggGroups": ["Mineral"]
   },
   "엘레이드": {
       "num": 475,
       "name": "Gallade",
       "types": ["에스퍼", "격투"],
       "gender": "M",
       "baseStats": {
           "hp": 68,
           "atk": 125,
           "def": 65,
           "spa": 65,
           "spd": 115,
           "spe": 80
       },
       "abilities": {
           "0": "불굴의 마음",
           "H": "정의의마음"
       },
       "heightm": 1.6,
       "weightkg": 52,
       "color": "White",
       "prevo": "Kirlia",
       "evoType": "useItem",
       "evoItem": "Dawn Stone",
       "eggGroups": ["Human-Like", "Amorphous"],
       "otherFormes": ["Gallade-Mega"],
       "formeOrder": ["Gallade", "Gallade-Mega"]
   },
   "대코파스": {
       "num": 476,
       "name": "Probopass",
       "types": ["바위", "강철"],
       "baseStats": {
           "hp": 60,
           "atk": 55,
           "def": 145,
           "spa": 75,
           "spd": 150,
           "spe": 40
       },
       "abilities": {
           "0": "옹골참",
           "1": "자력",
           "H": "모래의힘"
       },
       "heightm": 1.4,
       "weightkg": 340,
       "color": "Gray",
       "prevo": "Nosepass",
       "evoType": "levelExtra",
       "evoCondition": "near a special magnetic field",
       "eggGroups": ["Mineral"]
   },
   "야느와르몽": {
       "num": 477,
       "name": "Dusknoir",
       "types": ["고스트"],
       "baseStats": {
           "hp": 45,
           "atk": 100,
           "def": 135,
           "spa": 65,
           "spd": 135,
           "spe": 45
       },
       "abilities": {
           "0": "프레셔",
           "H": "통찰"
       },
       "heightm": 2.2,
       "weightkg": 106.6,
       "color": "Black",
       "prevo": "Dusclops",
       "evoType": "trade",
       "evoItem": "Reaper Cloth",
       "eggGroups": ["Amorphous"]
   },
   "눈여아": {
       "num": 478,
       "name": "Froslass",
       "types": ["얼음", "고스트"],
       "gender": "F",
       "baseStats": {
           "hp": 70,
           "atk": 80,
           "def": 70,
           "spa": 80,
           "spd": 70,
           "spe": 110
       },
       "abilities": {
           "0": "눈숨기",
           "H": "저주받은바디"
       },
       "heightm": 1.3,
       "weightkg": 26.6,
       "color": "White",
       "prevo": "Snorunt",
       "evoType": "useItem",
       "evoItem": "Dawn Stone",
       "eggGroups": ["Fairy", "Mineral"]
   },
   "로토무": {
       "num": 479,
       "name": "Rotom",
       "types": ["전기", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 77,
           "spa": 95,
           "spd": 77,
           "spe": 91
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
       "formeOrder": ["Rotom", "Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"]
   },
   "히트로토무": {
       "num": 479,
       "name": "Rotom-Heat",
       "baseSpecies": "Rotom",
       "forme": "Heat",
       "types": ["전기", "불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 107,
           "spa": 105,
           "spd": 107,
           "spe": 86
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Amorphous"],
       "changesFrom": "Rotom"
   },
   "워시로토무": {
       "num": 479,
       "name": "Rotom-Wash",
       "baseSpecies": "Rotom",
       "forme": "Wash",
       "types": ["전기", "물"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 107,
           "spa": 105,
           "spd": 107,
           "spe": 86
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Amorphous"],
       "changesFrom": "Rotom"
   },
   "프로스트로토무": {
       "num": 479,
       "name": "Rotom-Frost",
       "baseSpecies": "Rotom",
       "forme": "Frost",
       "types": ["전기", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 107,
           "spa": 105,
           "spd": 107,
           "spe": 86
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Amorphous"],
       "changesFrom": "Rotom"
   },
   "스핀로토무": {
       "num": 479,
       "name": "Rotom-Fan",
       "baseSpecies": "Rotom",
       "forme": "Fan",
       "types": ["전기", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 107,
           "spa": 105,
           "spd": 107,
           "spe": 86
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Amorphous"],
       "changesFrom": "Rotom"
   },
   "커트로토무": {
       "num": 479,
       "name": "Rotom-Mow",
       "baseSpecies": "Rotom",
       "forme": "Mow",
       "types": ["전기", "풀"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 107,
           "spa": 105,
           "spd": 107,
           "spe": 86
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Amorphous"],
       "changesFrom": "Rotom"
   },
   "유크시": {
       "num": 480,
       "name": "Uxie",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 75,
           "atk": 75,
           "def": 130,
           "spa": 75,
           "spd": 130,
           "spe": 95
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "엠라이트": {
       "num": 481,
       "name": "Mesprit",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 105,
           "def": 105,
           "spa": 105,
           "spd": 105,
           "spe": 80
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Pink",
       "eggGroups": ["Undiscovered"]
   },
   "아그놈": {
       "num": 482,
       "name": "Azelf",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 75,
           "atk": 125,
           "def": 70,
           "spa": 125,
           "spd": 70,
           "spe": 115
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Blue",
       "eggGroups": ["Undiscovered"]
   },
   "디아루가": {
       "num": 483,
       "name": "Dialga",
       "types": ["강철", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 120,
           "def": 120,
           "spa": 150,
           "spd": 100,
           "spe": 90
       },
       "abilities": {
           "0": "프레셔",
           "H": "텔레파시"
       },
       "heightm": 5.4,
       "weightkg": 683,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "펄기아": {
       "num": 484,
       "name": "Palkia",
       "types": ["물", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 120,
           "def": 100,
           "spa": 150,
           "spd": 120,
           "spe": 100
       },
       "abilities": {
           "0": "프레셔",
           "H": "텔레파시"
       },
       "heightm": 4.2,
       "weightkg": 336,
       "color": "Purple",
       "eggGroups": ["Undiscovered"]
   },
   "히드런": {
       "num": 485,
       "name": "Heatran",
       "types": ["불꽃", "강철"],
       "baseStats": {
           "hp": 91,
           "atk": 90,
           "def": 106,
           "spa": 130,
           "spd": 106,
           "spe": 77
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "H": "불꽃몸"
       },
       "heightm": 1.7,
       "weightkg": 430,
       "color": "Brown",
       "eggGroups": ["Undiscovered"]
   },
   "레지기가스": {
       "num": 486,
       "name": "Regigigas",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 110,
           "atk": 160,
           "def": 110,
           "spa": 80,
           "spd": 110,
           "spe": 100
       },
       "abilities": {
           "0": "슬로스타트"
       },
       "heightm": 3.7,
       "weightkg": 420,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "기라티나": {
       "num": 487,
       "name": "Giratina",
       "baseForme": "Altered",
       "types": ["고스트", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 150,
           "atk": 100,
           "def": 120,
           "spa": 100,
           "spd": 120,
           "spe": 90
       },
       "abilities": {
           "0": "프레셔",
           "H": "텔레파시"
       },
       "heightm": 4.5,
       "weightkg": 750,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Giratina-Origin"],
       "formeOrder": ["Giratina", "Giratina-Origin"]
   },
   "기라티나-오리진폼": {
       "num": 487,
       "name": "Giratina-Origin",
       "baseSpecies": "Giratina",
       "forme": "Origin",
       "types": ["고스트", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 150,
           "atk": 120,
           "def": 100,
           "spa": 120,
           "spd": 100,
           "spe": 90
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 6.9,
       "weightkg": 650,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Griseous Orb",
       "changesFrom": "Giratina"
   },
   "크레세리아": {
       "num": 488,
       "name": "Cresselia",
       "types": ["에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 120,
           "atk": 70,
           "def": 120,
           "spa": 75,
           "spd": 130,
           "spe": 85
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.5,
       "weightkg": 85.6,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "피오네": {
       "num": 489,
       "name": "Phione",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 80,
           "def": 80,
           "spa": 80,
           "spd": 80,
           "spe": 80
       },
       "abilities": {
           "0": "촉촉바디"
       },
       "heightm": 0.4,
       "weightkg": 3.1,
       "color": "Blue",
       "eggGroups": ["Water 1", "Fairy"]
   },
   "마나피": {
       "num": 490,
       "name": "Manaphy",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 100,
           "spa": 100,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "촉촉바디"
       },
       "heightm": 0.3,
       "weightkg": 1.4,
       "color": "Blue",
       "eggGroups": ["Water 1", "Fairy"]
   },
   "다크라이": {
       "num": 491,
       "name": "Darkrai",
       "types": ["악"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 90,
           "def": 90,
           "spa": 135,
           "spd": 90,
           "spe": 125
       },
       "abilities": {
           "0": "나이트메어"
       },
       "heightm": 1.5,
       "weightkg": 50.5,
       "color": "Black",
       "eggGroups": ["Undiscovered"]
   },
   "쉐이미": {
       "num": 492,
       "name": "Shaymin",
       "baseForme": "Land",
       "types": ["풀"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 100,
           "spa": 100,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "자연회복"
       },
       "heightm": 0.2,
       "weightkg": 2.1,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Shaymin-Sky"],
       "formeOrder": ["Shaymin", "Shaymin-Sky"]
   },
   "쉐이미-스카이폼": {
       "num": 492,
       "name": "Shaymin-Sky",
       "baseSpecies": "Shaymin",
       "forme": "Sky",
       "types": ["풀", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 103,
           "def": 75,
           "spa": 120,
           "spd": 75,
           "spe": 127
       },
       "abilities": {
           "0": "하늘의 은총"
       },
       "heightm": 0.4,
       "weightkg": 5.2,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Shaymin"
   },
   "아르세우스": {
       "num": 493,
       "name": "Arceus",
       "baseForme": "Normal",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Arceus-Bug", "Arceus-Dark", "Arceus-Dragon", "Arceus-Electric", "Arceus-Fairy", "Arceus-Fighting", "Arceus-Fire", "Arceus-Flying", "Arceus-Ghost", "Arceus-Grass", "Arceus-Ground", "Arceus-Ice", "Arceus-Poison", "Arceus-Psychic", "Arceus-Rock", "Arceus-Steel", "Arceus-Water"],
       "formeOrder": ["Arceus", "Arceus-Fighting", "Arceus-Flying", "Arceus-Poison", "Arceus-Ground", "Arceus-Rock", "Arceus-Bug", "Arceus-Ghost", "Arceus-Steel", "Arceus-Fire", "Arceus-Water", "Arceus-Grass", "Arceus-Electric", "Arceus-Psychic", "Arceus-Ice", "Arceus-Dragon", "Arceus-Dark", "Arceus-Fairy"]
   },
   "아르세우스-벌레": {
       "num": 493,
       "name": "Arceus-Bug",
       "baseSpecies": "Arceus",
       "forme": "Bug",
       "types": ["벌레"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Insect Plate", "Buginium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-악": {
       "num": 493,
       "name": "Arceus-Dark",
       "baseSpecies": "Arceus",
       "forme": "Dark",
       "types": ["악"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Dread Plate", "Darkinium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-드래곤": {
       "num": 493,
       "name": "Arceus-Dragon",
       "baseSpecies": "Arceus",
       "forme": "Dragon",
       "types": ["드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Draco Plate", "Dragonium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-전기": {
       "num": 493,
       "name": "Arceus-Electric",
       "baseSpecies": "Arceus",
       "forme": "Electric",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Zap Plate", "Electrium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-페어리": {
       "num": 493,
       "name": "Arceus-Fairy",
       "baseSpecies": "Arceus",
       "forme": "Fairy",
       "types": ["페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Pixie Plate", "Fairium Z"],
       "changesFrom": "Arceus",
       "gen": 6
   },
   "아르세우스-격투": {
       "num": 493,
       "name": "Arceus-Fighting",
       "baseSpecies": "Arceus",
       "forme": "Fighting",
       "types": ["격투"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Fist Plate", "Fightinium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-불꽃": {
       "num": 493,
       "name": "Arceus-Fire",
       "baseSpecies": "Arceus",
       "forme": "Fire",
       "types": ["불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Flame Plate", "Firium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-비행": {
       "num": 493,
       "name": "Arceus-Flying",
       "baseSpecies": "Arceus",
       "forme": "Flying",
       "types": ["비행"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Sky Plate", "Flyinium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-고스트": {
       "num": 493,
       "name": "Arceus-Ghost",
       "baseSpecies": "Arceus",
       "forme": "Ghost",
       "types": ["고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Spooky Plate", "Ghostium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-풀": {
       "num": 493,
       "name": "Arceus-Grass",
       "baseSpecies": "Arceus",
       "forme": "Grass",
       "types": ["풀"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Meadow Plate", "Grassium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-땅": {
       "num": 493,
       "name": "Arceus-Ground",
       "baseSpecies": "Arceus",
       "forme": "Ground",
       "types": ["땅"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Earth Plate", "Groundium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-얼음": {
       "num": 493,
       "name": "Arceus-Ice",
       "baseSpecies": "Arceus",
       "forme": "Ice",
       "types": ["얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Icicle Plate", "Icium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-독": {
       "num": 493,
       "name": "Arceus-Poison",
       "baseSpecies": "Arceus",
       "forme": "Poison",
       "types": ["독"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Toxic Plate", "Poisonium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-에스퍼": {
       "num": 493,
       "name": "Arceus-Psychic",
       "baseSpecies": "Arceus",
       "forme": "Psychic",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Mind Plate", "Psychium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-바위": {
       "num": 493,
       "name": "Arceus-Rock",
       "baseSpecies": "Arceus",
       "forme": "Rock",
       "types": ["바위"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Stone Plate", "Rockium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-강철": {
       "num": 493,
       "name": "Arceus-Steel",
       "baseSpecies": "Arceus",
       "forme": "Steel",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Iron Plate", "Steelium Z"],
       "changesFrom": "Arceus"
   },
   "아르세우스-물": {
       "num": 493,
       "name": "Arceus-Water",
       "baseSpecies": "Arceus",
       "forme": "Water",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 120,
           "atk": 120,
           "def": 120,
           "spa": 120,
           "spd": 120,
           "spe": 120
       },
       "abilities": {
           "0": "멀티타입"
       },
       "heightm": 3.2,
       "weightkg": 320,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredItems": ["Splash Plate", "Waterium Z"],
       "changesFrom": "Arceus"
   },
   "비크티니": {
       "num": 494,
       "name": "Victini",
       "types": ["에스퍼", "불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 100,
           "def": 100,
           "spa": 100,
           "spd": 100,
           "spe": 100
       },
       "abilities": {
           "0": "승리의별"
       },
       "heightm": 0.4,
       "weightkg": 4,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "주리비얀": {
       "num": 495,
       "name": "Snivy",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 45,
           "atk": 45,
           "def": 55,
           "spa": 45,
           "spd": 55,
           "spe": 63
       },
       "abilities": {
           "0": "심록",
           "H": "심술꾸러기"
       },
       "heightm": 0.6,
       "weightkg": 8.1,
       "color": "Green",
       "evos": ["Servine"],
       "eggGroups": ["Field", "Grass"]
   },
   "샤비": {
       "num": 496,
       "name": "Servine",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 75,
           "spa": 60,
           "spd": 75,
           "spe": 83
       },
       "abilities": {
           "0": "심록",
           "H": "심술꾸러기"
       },
       "heightm": 0.8,
       "weightkg": 16,
       "color": "Green",
       "prevo": "Snivy",
       "evoLevel": 17,
       "evos": ["Serperior"],
       "eggGroups": ["Field", "Grass"]
   },
   "샤로다": {
       "num": 497,
       "name": "Serperior",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 75,
           "def": 95,
           "spa": 75,
           "spd": 95,
           "spe": 113
       },
       "abilities": {
           "0": "심록",
           "H": "심술꾸러기"
       },
       "heightm": 3.3,
       "weightkg": 63,
       "color": "Green",
       "prevo": "Servine",
       "evoLevel": 36,
       "eggGroups": ["Field", "Grass"]
   },
   "뚜꾸리": {
       "num": 498,
       "name": "Tepig",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 63,
           "def": 45,
           "spa": 45,
           "spd": 45,
           "spe": 45
       },
       "abilities": {
           "0": "맹화",
           "H": "두꺼운 지방"
       },
       "heightm": 0.5,
       "weightkg": 9.9,
       "color": "Red",
       "evos": ["Pignite"],
       "eggGroups": ["Field"]
   },
   "차오꿀": {
       "num": 499,
       "name": "Pignite",
       "types": ["불꽃", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 90,
           "atk": 93,
           "def": 55,
           "spa": 70,
           "spd": 55,
           "spe": 55
       },
       "abilities": {
           "0": "맹화",
           "H": "두꺼운 지방"
       },
       "heightm": 1,
       "weightkg": 55.5,
       "color": "Red",
       "prevo": "Tepig",
       "evoLevel": 17,
       "evos": ["Emboar"],
       "eggGroups": ["Field"]
   },
   "염무왕": {
       "num": 500,
       "name": "Emboar",
       "types": ["불꽃", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 110,
           "atk": 123,
           "def": 65,
           "spa": 100,
           "spd": 65,
           "spe": 65
       },
       "abilities": {
           "0": "맹화",
           "H": "이판사판"
       },
       "heightm": 1.6,
       "weightkg": 150,
       "color": "Red",
       "prevo": "Pignite",
       "evoLevel": 36,
       "eggGroups": ["Field"]
   },
   "수댕이": {
       "num": 501,
       "name": "Oshawott",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 55,
           "atk": 55,
           "def": 45,
           "spa": 63,
           "spd": 45,
           "spe": 45
       },
       "abilities": {
           "0": "급류",
           "H": "조가비 갑옷"
       },
       "heightm": 0.5,
       "weightkg": 5.9,
       "color": "Blue",
       "evos": ["Dewott"],
       "eggGroups": ["Field"]
   },
   "쌍검자비": {
       "num": 502,
       "name": "Dewott",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 75,
           "def": 60,
           "spa": 83,
           "spd": 60,
           "spe": 60
       },
       "abilities": {
           "0": "급류",
           "H": "조가비 갑옷"
       },
       "heightm": 0.8,
       "weightkg": 24.5,
       "color": "Blue",
       "prevo": "Oshawott",
       "evoLevel": 17,
       "evos": ["Samurott"],
       "eggGroups": ["Field"]
   },
   "대검귀": {
       "num": 503,
       "name": "Samurott",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 95,
           "atk": 100,
           "def": 85,
           "spa": 108,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "급류",
           "H": "조가비 갑옷"
       },
       "heightm": 1.5,
       "weightkg": 94.6,
       "color": "Blue",
       "prevo": "Dewott",
       "evoLevel": 36,
       "eggGroups": ["Field"]
   },
   "보르쥐": {
       "num": 504,
       "name": "Patrat",
       "types": ["노말"],
       "baseStats": {
           "hp": 45,
           "atk": 55,
           "def": 39,
           "spa": 35,
           "spd": 39,
           "spe": 42
       },
       "abilities": {
           "0": "도주",
           "1": "날카로운 눈",
           "H": "애널라이즈"
       },
       "heightm": 0.5,
       "weightkg": 11.6,
       "color": "Brown",
       "evos": ["Watchog"],
       "eggGroups": ["Field"]
   },
   "보르그": {
       "num": 505,
       "name": "Watchog",
       "types": ["노말"],
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 69,
           "spa": 60,
           "spd": 69,
           "spe": 77
       },
       "abilities": {
           "0": "발광",
           "1": "날카로운 눈",
           "H": "애널라이즈"
       },
       "heightm": 1.1,
       "weightkg": 27,
       "color": "Brown",
       "prevo": "Patrat",
       "evoLevel": 20,
       "eggGroups": ["Field"]
   },
   "요테리": {
       "num": 506,
       "name": "Lillipup",
       "types": ["노말"],
       "baseStats": {
           "hp": 45,
           "atk": 60,
           "def": 45,
           "spa": 25,
           "spd": 45,
           "spe": 55
       },
       "abilities": {
           "0": "의기양양",
           "1": "픽업",
           "H": "도주"
       },
       "heightm": 0.4,
       "weightkg": 4.1,
       "color": "Brown",
       "evos": ["Herdier"],
       "eggGroups": ["Field"]
   },
   "하데리어": {
       "num": 507,
       "name": "Herdier",
       "types": ["노말"],
       "baseStats": {
           "hp": 65,
           "atk": 80,
           "def": 65,
           "spa": 35,
           "spd": 65,
           "spe": 60
       },
       "abilities": {
           "0": "위협",
           "1": "모래헤치기",
           "H": "배짱"
       },
       "heightm": 0.9,
       "weightkg": 14.7,
       "color": "Gray",
       "prevo": "Lillipup",
       "evoLevel": 16,
       "evos": ["Stoutland"],
       "eggGroups": ["Field"]
   },
   "바랜드": {
       "num": 508,
       "name": "Stoutland",
       "types": ["노말"],
       "baseStats": {
           "hp": 85,
           "atk": 110,
           "def": 90,
           "spa": 45,
           "spd": 90,
           "spe": 80
       },
       "abilities": {
           "0": "위협",
           "1": "모래헤치기",
           "H": "배짱"
       },
       "heightm": 1.2,
       "weightkg": 61,
       "color": "Gray",
       "prevo": "Herdier",
       "evoLevel": 32,
       "eggGroups": ["Field"]
   },
   "쌔비냥": {
       "num": 509,
       "name": "Purrloin",
       "types": ["악"],
       "baseStats": {
           "hp": 41,
           "atk": 50,
           "def": 37,
           "spa": 50,
           "spd": 37,
           "spe": 66
       },
       "abilities": {
           "0": "유연",
           "1": "곡예",
           "H": "짓궂은마음"
       },
       "heightm": 0.4,
       "weightkg": 10.1,
       "color": "Purple",
       "evos": ["Liepard"],
       "eggGroups": ["Field"]
   },
   "레파르다스": {
       "num": 510,
       "name": "Liepard",
       "types": ["악"],
       "baseStats": {
           "hp": 64,
           "atk": 88,
           "def": 50,
           "spa": 88,
           "spd": 50,
           "spe": 106
       },
       "abilities": {
           "0": "유연",
           "1": "곡예",
           "H": "짓궂은마음"
       },
       "heightm": 1.1,
       "weightkg": 37.5,
       "color": "Purple",
       "prevo": "Purrloin",
       "evoLevel": 20,
       "eggGroups": ["Field"]
   },
   "야나프": {
       "num": 511,
       "name": "Pansage",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 53,
           "def": 48,
           "spa": 53,
           "spd": 48,
           "spe": 64
       },
       "abilities": {
           "0": "먹보",
           "H": "심록"
       },
       "heightm": 0.6,
       "weightkg": 10.5,
       "color": "Green",
       "evos": ["Simisage"],
       "eggGroups": ["Field"]
   },
   "야나키": {
       "num": 512,
       "name": "Simisage",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 98,
           "def": 63,
           "spa": 98,
           "spd": 63,
           "spe": 101
       },
       "abilities": {
           "0": "먹보",
           "H": "심록"
       },
       "heightm": 1.1,
       "weightkg": 30.5,
       "color": "Green",
       "prevo": "Pansage",
       "evoType": "useItem",
       "evoItem": "Leaf Stone",
       "eggGroups": ["Field"]
   },
   "바오프": {
       "num": 513,
       "name": "Pansear",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 53,
           "def": 48,
           "spa": 53,
           "spd": 48,
           "spe": 64
       },
       "abilities": {
           "0": "먹보",
           "H": "맹화"
       },
       "heightm": 0.6,
       "weightkg": 11,
       "color": "Red",
       "evos": ["Simisear"],
       "eggGroups": ["Field"]
   },
   "바오키": {
       "num": 514,
       "name": "Simisear",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 98,
           "def": 63,
           "spa": 98,
           "spd": 63,
           "spe": 101
       },
       "abilities": {
           "0": "먹보",
           "H": "맹화"
       },
       "heightm": 1,
       "weightkg": 28,
       "color": "Red",
       "prevo": "Pansear",
       "evoType": "useItem",
       "evoItem": "Fire Stone",
       "eggGroups": ["Field"]
   },
   "앗차프": {
       "num": 515,
       "name": "Panpour",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 53,
           "def": 48,
           "spa": 53,
           "spd": 48,
           "spe": 64
       },
       "abilities": {
           "0": "먹보",
           "H": "급류"
       },
       "heightm": 0.6,
       "weightkg": 13.5,
       "color": "Blue",
       "evos": ["Simipour"],
       "eggGroups": ["Field"]
   },
   "앗차키": {
       "num": 516,
       "name": "Simipour",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 98,
           "def": 63,
           "spa": 98,
           "spd": 63,
           "spe": 101
       },
       "abilities": {
           "0": "먹보",
           "H": "급류"
       },
       "heightm": 1,
       "weightkg": 29,
       "color": "Blue",
       "prevo": "Panpour",
       "evoType": "useItem",
       "evoItem": "Water Stone",
       "eggGroups": ["Field"]
   },
   "몽나": {
       "num": 517,
       "name": "Munna",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 76,
           "atk": 25,
           "def": 45,
           "spa": 67,
           "spd": 55,
           "spe": 24
       },
       "abilities": {
           "0": "예지몽",
           "1": "싱크로",
           "H": "텔레파시"
       },
       "heightm": 0.6,
       "weightkg": 23.3,
       "color": "Pink",
       "evos": ["Musharna"],
       "eggGroups": ["Field"]
   },
   "몽얌나": {
       "num": 518,
       "name": "Musharna",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 116,
           "atk": 55,
           "def": 85,
           "spa": 107,
           "spd": 95,
           "spe": 29
       },
       "abilities": {
           "0": "예지몽",
           "1": "싱크로",
           "H": "텔레파시"
       },
       "heightm": 1.1,
       "weightkg": 60.5,
       "color": "Pink",
       "prevo": "Munna",
       "evoType": "useItem",
       "evoItem": "Moon Stone",
       "eggGroups": ["Field"]
   },
   "콩둘기": {
       "num": 519,
       "name": "Pidove",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 50,
           "atk": 55,
           "def": 50,
           "spa": 36,
           "spd": 30,
           "spe": 43
       },
       "abilities": {
           "0": "부풀린가슴",
           "1": "대운",
           "H": "투쟁심"
       },
       "heightm": 0.3,
       "weightkg": 2.1,
       "color": "Gray",
       "evos": ["Tranquill"],
       "eggGroups": ["Flying"]
   },
   "유토브": {
       "num": 520,
       "name": "Tranquill",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 62,
           "atk": 77,
           "def": 62,
           "spa": 50,
           "spd": 42,
           "spe": 65
       },
       "abilities": {
           "0": "부풀린가슴",
           "1": "대운",
           "H": "투쟁심"
       },
       "heightm": 0.6,
       "weightkg": 15,
       "color": "Gray",
       "prevo": "Pidove",
       "evoLevel": 21,
       "evos": ["Unfezant"],
       "eggGroups": ["Flying"]
   },
   "켄호로우": {
       "num": 521,
       "name": "Unfezant",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 80,
           "atk": 115,
           "def": 80,
           "spa": 65,
           "spd": 55,
           "spe": 93
       },
       "abilities": {
           "0": "부풀린가슴",
           "1": "대운",
           "H": "투쟁심"
       },
       "heightm": 1.2,
       "weightkg": 29,
       "color": "Gray",
       "prevo": "Tranquill",
       "evoLevel": 32,
       "eggGroups": ["Flying"]
   },
   "줄뮤마": {
       "num": 522,
       "name": "Blitzle",
       "types": ["전기"],
       "baseStats": {
           "hp": 45,
           "atk": 60,
           "def": 32,
           "spa": 50,
           "spd": 32,
           "spe": 76
       },
       "abilities": {
           "0": "피뢰침",
           "1": "전기엔진",
           "H": "초식"
       },
       "heightm": 0.8,
       "weightkg": 29.8,
       "color": "Black",
       "evos": ["Zebstrika"],
       "eggGroups": ["Field"]
   },
   "제브라이카": {
       "num": 523,
       "name": "Zebstrika",
       "types": ["전기"],
       "baseStats": {
           "hp": 75,
           "atk": 100,
           "def": 63,
           "spa": 80,
           "spd": 63,
           "spe": 116
       },
       "abilities": {
           "0": "피뢰침",
           "1": "전기엔진",
           "H": "초식"
       },
       "heightm": 1.6,
       "weightkg": 79.5,
       "color": "Black",
       "prevo": "Blitzle",
       "evoLevel": 27,
       "eggGroups": ["Field"]
   },
   "단굴": {
       "num": 524,
       "name": "Roggenrola",
       "types": ["바위"],
       "baseStats": {
           "hp": 55,
           "atk": 75,
           "def": 85,
           "spa": 25,
           "spd": 25,
           "spe": 15
       },
       "abilities": {
           "0": "옹골참",
           "1": "깨어진갑옷",
           "H": "모래의힘"
       },
       "heightm": 0.4,
       "weightkg": 18,
       "color": "Blue",
       "evos": ["Boldore"],
       "eggGroups": ["Mineral"]
   },
   "암트르": {
       "num": 525,
       "name": "Boldore",
       "types": ["바위"],
       "baseStats": {
           "hp": 70,
           "atk": 105,
           "def": 105,
           "spa": 50,
           "spd": 40,
           "spe": 20
       },
       "abilities": {
           "0": "옹골참",
           "1": "깨어진갑옷",
           "H": "모래의힘"
       },
       "heightm": 0.9,
       "weightkg": 102,
       "color": "Blue",
       "prevo": "Roggenrola",
       "evoLevel": 25,
       "evos": ["Gigalith"],
       "eggGroups": ["Mineral"]
   },
   "기가이어스": {
       "num": 526,
       "name": "Gigalith",
       "types": ["바위"],
       "baseStats": {
           "hp": 85,
           "atk": 135,
           "def": 130,
           "spa": 60,
           "spd": 80,
           "spe": 25
       },
       "abilities": {
           "0": "옹골참",
           "1": "모래날림",
           "H": "모래의힘"
       },
       "heightm": 1.7,
       "weightkg": 260,
       "color": "Blue",
       "prevo": "Boldore",
       "evoType": "trade",
       "eggGroups": ["Mineral"]
   },
   "또르박쥐": {
       "num": 527,
       "name": "Woobat",
       "types": ["에스퍼", "비행"],
       "baseStats": {
           "hp": 65,
           "atk": 45,
           "def": 43,
           "spa": 55,
           "spd": 43,
           "spe": 72
       },
       "abilities": {
           "0": "천진",
           "1": "서투름",
           "H": "단순"
       },
       "heightm": 0.4,
       "weightkg": 2.1,
       "color": "Blue",
       "evos": ["Swoobat"],
       "eggGroups": ["Flying", "Field"]
   },
   "맘박쥐": {
       "num": 528,
       "name": "Swoobat",
       "types": ["에스퍼", "비행"],
       "baseStats": {
           "hp": 67,
           "atk": 57,
           "def": 55,
           "spa": 77,
           "spd": 55,
           "spe": 114
       },
       "abilities": {
           "0": "천진",
           "1": "서투름",
           "H": "단순"
       },
       "heightm": 0.9,
       "weightkg": 10.5,
       "color": "Blue",
       "prevo": "Woobat",
       "evoType": "levelFriendship",
       "eggGroups": ["Flying", "Field"]
   },
   "두더류": {
       "num": 529,
       "name": "Drilbur",
       "types": ["땅"],
       "baseStats": {
           "hp": 60,
           "atk": 85,
           "def": 40,
           "spa": 30,
           "spd": 45,
           "spe": 68
       },
       "abilities": {
           "0": "모래헤치기",
           "1": "모래의힘",
           "H": "틀깨기"
       },
       "heightm": 0.3,
       "weightkg": 8.5,
       "color": "Gray",
       "evos": ["Excadrill"],
       "eggGroups": ["Field"]
   },
   "몰드류": {
       "num": 530,
       "name": "Excadrill",
       "types": ["땅", "강철"],
       "baseStats": {
           "hp": 110,
           "atk": 135,
           "def": 60,
           "spa": 50,
           "spd": 65,
           "spe": 88
       },
       "abilities": {
           "0": "모래헤치기",
           "1": "모래의힘",
           "H": "틀깨기"
       },
       "heightm": 0.7,
       "weightkg": 40.4,
       "color": "Gray",
       "prevo": "Drilbur",
       "evoLevel": 31,
       "eggGroups": ["Field"]
   },
   "다부니": {
       "num": 531,
       "name": "Audino",
       "types": ["노말"],
       "baseStats": {
           "hp": 103,
           "atk": 60,
           "def": 86,
           "spa": 60,
           "spd": 86,
           "spe": 50
       },
       "abilities": {
           "0": "치유의마음",
           "1": "재생력",
           "H": "서투름"
       },
       "heightm": 1.1,
       "weightkg": 31,
       "color": "Pink",
       "eggGroups": ["Fairy"],
       "otherFormes": ["Audino-Mega"],
       "formeOrder": ["Audino", "Audino-Mega"]
   },
   "으랏차": {
       "num": 532,
       "name": "Timburr",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 55,
           "spa": 25,
           "spd": 35,
           "spe": 35
       },
       "abilities": {
           "0": "근성",
           "1": "우격다짐",
           "H": "철주먹"
       },
       "heightm": 0.6,
       "weightkg": 12.5,
       "color": "Gray",
       "evos": ["Gurdurr"],
       "eggGroups": ["Human-Like"]
   },
   "토쇠골": {
       "num": 533,
       "name": "Gurdurr",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 85,
           "atk": 105,
           "def": 85,
           "spa": 40,
           "spd": 50,
           "spe": 40
       },
       "abilities": {
           "0": "근성",
           "1": "우격다짐",
           "H": "철주먹"
       },
       "heightm": 1.2,
       "weightkg": 40,
       "color": "Gray",
       "prevo": "Timburr",
       "evoLevel": 25,
       "evos": ["Conkeldurr"],
       "eggGroups": ["Human-Like"]
   },
   "노보청": {
       "num": 534,
       "name": "Conkeldurr",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.75,
           "F": 0.25
       },
       "baseStats": {
           "hp": 105,
           "atk": 140,
           "def": 95,
           "spa": 55,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "근성",
           "1": "우격다짐",
           "H": "철주먹"
       },
       "heightm": 1.4,
       "weightkg": 87,
       "color": "Brown",
       "prevo": "Gurdurr",
       "evoType": "trade",
       "eggGroups": ["Human-Like"]
   },
   "동챙이": {
       "num": 535,
       "name": "Tympole",
       "types": ["물"],
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 40,
           "spa": 50,
           "spd": 40,
           "spe": 64
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "촉촉바디",
           "H": "저수"
       },
       "heightm": 0.5,
       "weightkg": 4.5,
       "color": "Blue",
       "evos": ["Palpitoad"],
       "eggGroups": ["Water 1"]
   },
   "두까비": {
       "num": 536,
       "name": "Palpitoad",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 75,
           "atk": 65,
           "def": 55,
           "spa": 65,
           "spd": 55,
           "spe": 69
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "촉촉바디",
           "H": "저수"
       },
       "heightm": 0.8,
       "weightkg": 17,
       "color": "Blue",
       "prevo": "Tympole",
       "evoLevel": 25,
       "evos": ["Seismitoad"],
       "eggGroups": ["Water 1"]
   },
   "두빅굴": {
       "num": 537,
       "name": "Seismitoad",
       "types": ["물", "땅"],
       "baseStats": {
           "hp": 105,
           "atk": 95,
           "def": 75,
           "spa": 85,
           "spd": 75,
           "spe": 74
       },
       "abilities": {
           "0": "쓱쓱",
           "1": "독수",
           "H": "저수"
       },
       "heightm": 1.5,
       "weightkg": 62,
       "color": "Blue",
       "prevo": "Palpitoad",
       "evoLevel": 36,
       "eggGroups": ["Water 1"]
   },
   "던지미": {
       "num": 538,
       "name": "Throh",
       "types": ["격투"],
       "gender": "M",
       "baseStats": {
           "hp": 120,
           "atk": 100,
           "def": 85,
           "spa": 30,
           "spd": 85,
           "spe": 45
       },
       "abilities": {
           "0": "근성",
           "1": "정신력",
           "H": "틀깨기"
       },
       "heightm": 1.3,
       "weightkg": 55.5,
       "color": "Red",
       "eggGroups": ["Human-Like"]
   },
   "타격귀": {
       "num": 539,
       "name": "Sawk",
       "types": ["격투"],
       "gender": "M",
       "baseStats": {
           "hp": 75,
           "atk": 125,
           "def": 75,
           "spa": 30,
           "spd": 75,
           "spe": 85
       },
       "abilities": {
           "0": "옹골참",
           "1": "정신력",
           "H": "틀깨기"
       },
       "heightm": 1.4,
       "weightkg": 51,
       "color": "Blue",
       "eggGroups": ["Human-Like"]
   },
   "두르보": {
       "num": 540,
       "name": "Sewaddle",
       "types": ["벌레", "풀"],
       "baseStats": {
           "hp": 45,
           "atk": 53,
           "def": 70,
           "spa": 40,
           "spd": 60,
           "spe": 42
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "엽록소",
           "H": "방진"
       },
       "heightm": 0.3,
       "weightkg": 2.5,
       "color": "Yellow",
       "evos": ["Swadloon"],
       "eggGroups": ["Bug"]
   },
   "두르쿤": {
       "num": 541,
       "name": "Swadloon",
       "types": ["벌레", "풀"],
       "baseStats": {
           "hp": 55,
           "atk": 63,
           "def": 90,
           "spa": 50,
           "spd": 80,
           "spe": 42
       },
       "abilities": {
           "0": "리프가드",
           "1": "엽록소",
           "H": "방진"
       },
       "heightm": 0.5,
       "weightkg": 7.3,
       "color": "Green",
       "prevo": "Sewaddle",
       "evoLevel": 20,
       "evos": ["Leavanny"],
       "eggGroups": ["Bug"]
   },
   "모아머": {
       "num": 542,
       "name": "Leavanny",
       "types": ["벌레", "풀"],
       "baseStats": {
           "hp": 75,
           "atk": 103,
           "def": 80,
           "spa": 70,
           "spd": 80,
           "spe": 92
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "엽록소",
           "H": "방진"
       },
       "heightm": 1.2,
       "weightkg": 20.5,
       "color": "Yellow",
       "prevo": "Swadloon",
       "evoType": "levelFriendship",
       "eggGroups": ["Bug"]
   },
   "마디네": {
       "num": 543,
       "name": "Venipede",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 30,
           "atk": 45,
           "def": 59,
           "spa": 30,
           "spd": 39,
           "spe": 57
       },
       "abilities": {
           "0": "독가시",
           "1": "벌레의 알림",
           "H": "가속"
       },
       "heightm": 0.4,
       "weightkg": 5.3,
       "color": "Red",
       "evos": ["Whirlipede"],
       "eggGroups": ["Bug"]
   },
   "휠구": {
       "num": 544,
       "name": "Whirlipede",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 40,
           "atk": 55,
           "def": 99,
           "spa": 40,
           "spd": 79,
           "spe": 47
       },
       "abilities": {
           "0": "독가시",
           "1": "벌레의 알림",
           "H": "가속"
       },
       "heightm": 1.2,
       "weightkg": 58.5,
       "color": "Gray",
       "prevo": "Venipede",
       "evoLevel": 22,
       "evos": ["Scolipede"],
       "eggGroups": ["Bug"]
   },
   "펜드라": {
       "num": 545,
       "name": "Scolipede",
       "types": ["벌레", "독"],
       "baseStats": {
           "hp": 60,
           "atk": 100,
           "def": 89,
           "spa": 55,
           "spd": 69,
           "spe": 112
       },
       "abilities": {
           "0": "독가시",
           "1": "벌레의 알림",
           "H": "가속"
       },
       "heightm": 2.5,
       "weightkg": 200.5,
       "color": "Red",
       "prevo": "Whirlipede",
       "evoLevel": 30,
       "eggGroups": ["Bug"]
   },
   "소미안": {
       "num": 546,
       "name": "Cottonee",
       "types": ["풀", "페어리"],
       "baseStats": {
           "hp": 40,
           "atk": 27,
           "def": 60,
           "spa": 37,
           "spd": 50,
           "spe": 66
       },
       "abilities": {
           "0": "짓궂은마음",
           "1": "틈새포착",
           "H": "엽록소"
       },
       "heightm": 0.3,
       "weightkg": 0.6,
       "color": "Green",
       "evos": ["Whimsicott"],
       "eggGroups": ["Fairy", "Grass"]
   },
   "엘풍": {
       "num": 547,
       "name": "Whimsicott",
       "types": ["풀", "페어리"],
       "baseStats": {
           "hp": 60,
           "atk": 67,
           "def": 85,
           "spa": 77,
           "spd": 75,
           "spe": 116
       },
       "abilities": {
           "0": "짓궂은마음",
           "1": "틈새포착",
           "H": "엽록소"
       },
       "heightm": 0.7,
       "weightkg": 6.6,
       "color": "Green",
       "prevo": "Cottonee",
       "evoType": "useItem",
       "evoItem": "Sun Stone",
       "eggGroups": ["Fairy", "Grass"]
   },
   "치릴리": {
       "num": 548,
       "name": "Petilil",
       "types": ["풀"],
       "gender": "F",
       "baseStats": {
           "hp": 45,
           "atk": 35,
           "def": 50,
           "spa": 70,
           "spd": 50,
           "spe": 30
       },
       "abilities": {
           "0": "엽록소",
           "1": "마이페이스",
           "H": "리프가드"
       },
       "heightm": 0.5,
       "weightkg": 6.6,
       "color": "Green",
       "evos": ["Lilligant"],
       "eggGroups": ["Grass"]
   },
   "드레디어": {
       "num": 549,
       "name": "Lilligant",
       "types": ["풀"],
       "gender": "F",
       "baseStats": {
           "hp": 70,
           "atk": 60,
           "def": 75,
           "spa": 110,
           "spd": 75,
           "spe": 90
       },
       "abilities": {
           "0": "엽록소",
           "1": "마이페이스",
           "H": "리프가드"
       },
       "heightm": 1.1,
       "weightkg": 16.3,
       "color": "Green",
       "prevo": "Petilil",
       "evoType": "useItem",
       "evoItem": "Sun Stone",
       "eggGroups": ["Grass"]
   },
   "배쓰나이": {
       "num": 550,
       "name": "Basculin",
       "baseForme": "Red-Striped",
       "types": ["물"],
       "baseStats": {
           "hp": 70,
           "atk": 92,
           "def": 65,
           "spa": 80,
           "spd": 55,
           "spe": 98
       },
       "abilities": {
           "0": "이판사판",
           "1": "적응력",
           "H": "틀깨기"
       },
       "heightm": 1,
       "weightkg": 18,
       "color": "Green",
       "eggGroups": ["Water 2"],
       "otherFormes": ["Basculin-Blue-Striped"],
       "formeOrder": ["Basculin", "Basculin-Blue-Striped"]
   },
   "깜눈크": {
       "num": 551,
       "name": "Sandile",
       "types": ["땅", "악"],
       "baseStats": {
           "hp": 50,
           "atk": 72,
           "def": 35,
           "spa": 35,
           "spd": 35,
           "spe": 65
       },
       "abilities": {
           "0": "위협",
           "1": "자기과신",
           "H": "분노의 경혈"
       },
       "heightm": 0.7,
       "weightkg": 15.2,
       "color": "Brown",
       "evos": ["Krokorok"],
       "eggGroups": ["Field"]
   },
   "악비르": {
       "num": 552,
       "name": "Krokorok",
       "types": ["땅", "악"],
       "baseStats": {
           "hp": 60,
           "atk": 82,
           "def": 45,
           "spa": 45,
           "spd": 45,
           "spe": 74
       },
       "abilities": {
           "0": "위협",
           "1": "자기과신",
           "H": "분노의 경혈"
       },
       "heightm": 1,
       "weightkg": 33.4,
       "color": "Brown",
       "prevo": "Sandile",
       "evoLevel": 29,
       "evos": ["Krookodile"],
       "eggGroups": ["Field"]
   },
   "악비아르": {
       "num": 553,
       "name": "Krookodile",
       "types": ["땅", "악"],
       "baseStats": {
           "hp": 95,
           "atk": 117,
           "def": 80,
           "spa": 65,
           "spd": 70,
           "spe": 92
       },
       "abilities": {
           "0": "위협",
           "1": "자기과신",
           "H": "분노의 경혈"
       },
       "heightm": 1.5,
       "weightkg": 96.3,
       "color": "Red",
       "prevo": "Krokorok",
       "evoLevel": 40,
       "eggGroups": ["Field"]
   },
   "달막화": {
       "num": 554,
       "name": "Darumaka",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 70,
           "atk": 90,
           "def": 45,
           "spa": 15,
           "spd": 45,
           "spe": 50
       },
       "abilities": {
           "0": "의욕",
           "H": "정신력"
       },
       "heightm": 0.6,
       "weightkg": 37.5,
       "color": "Red",
       "evos": ["Darmanitan"],
       "eggGroups": ["Field"],
       "otherFormes": ["Darumaka-Galar"],
       "formeOrder": ["Darumaka", "Darumaka-Galar"]
   },
   "달막화-가라르": {
       "num": 554,
       "name": "Darumaka-Galar",
       "baseSpecies": "Darumaka",
       "forme": "Galar",
       "types": ["얼음"],
       "baseStats": {
           "hp": 70,
           "atk": 90,
           "def": 45,
           "spa": 15,
           "spd": 45,
           "spe": 50
       },
       "abilities": {
           "0": "의욕",
           "H": "정신력"
       },
       "heightm": 0.7,
       "weightkg": 40,
       "color": "White",
       "evos": ["Darmanitan-Galar"],
       "eggGroups": ["Field"]
   },
   "불비달마": {
       "num": 555,
       "name": "Darmanitan",
       "baseForme": "Standard",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 105,
           "atk": 140,
           "def": 55,
           "spa": 30,
           "spd": 55,
           "spe": 95
       },
       "abilities": {
           "0": "우격다짐",
           "H": "달마모드"
       },
       "heightm": 1.3,
       "weightkg": 92.9,
       "color": "Red",
       "prevo": "Darumaka",
       "evoLevel": 35,
       "eggGroups": ["Field"],
       "otherFormes": ["Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen"],
       "formeOrder": ["Darmanitan", "Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen"]
   },
   "불비달마-달마모드": {
       "num": 555,
       "name": "Darmanitan-Zen",
       "baseSpecies": "Darmanitan",
       "forme": "Zen",
       "types": ["불꽃", "에스퍼"],
       "baseStats": {
           "hp": 105,
           "atk": 30,
           "def": 105,
           "spa": 140,
           "spd": 105,
           "spe": 55
       },
       "abilities": {
           "0": "달마모드"
       },
       "heightm": 1.3,
       "weightkg": 92.9,
       "color": "Blue",
       "eggGroups": ["Field"],
       "requiredAbility": "Zen Mode",
       "battleOnly": "Darmanitan"
   },
   "불비달마-가라르": {
       "num": 555,
       "name": "Darmanitan-Galar",
       "baseSpecies": "Darmanitan",
       "forme": "Galar",
       "types": ["얼음"],
       "baseStats": {
           "hp": 105,
           "atk": 140,
           "def": 55,
           "spa": 30,
           "spd": 55,
           "spe": 95
       },
       "abilities": {
           "0": "무아지경",
           "H": "달마모드"
       },
       "heightm": 1.7,
       "weightkg": 120,
       "color": "White",
       "prevo": "Darumaka-Galar",
       "evoType": "useItem",
       "evoItem": "Ice Stone",
       "eggGroups": ["Field"]
   },
   "불비달마-가라르-달마모드": {
       "num": 555,
       "name": "Darmanitan-Galar-Zen",
       "baseSpecies": "Darmanitan",
       "forme": "Galar-Zen",
       "types": ["얼음", "불꽃"],
       "baseStats": {
           "hp": 105,
           "atk": 160,
           "def": 55,
           "spa": 30,
           "spd": 55,
           "spe": 135
       },
       "abilities": {
           "0": "달마모드"
       },
       "heightm": 1.7,
       "weightkg": 120,
       "color": "White",
       "eggGroups": ["Field"],
       "requiredAbility": "Zen Mode",
       "battleOnly": "Darmanitan-Galar"
   },
   "마라카치": {
       "num": 556,
       "name": "Maractus",
       "types": ["풀"],
       "baseStats": {
           "hp": 75,
           "atk": 86,
           "def": 67,
           "spa": 106,
           "spd": 67,
           "spe": 60
       },
       "abilities": {
           "0": "저수",
           "1": "엽록소",
           "H": "마중물"
       },
       "heightm": 1,
       "weightkg": 28,
       "color": "Green",
       "eggGroups": ["Grass"]
   },
   "돌살이": {
       "num": 557,
       "name": "Dwebble",
       "types": ["벌레", "바위"],
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 85,
           "spa": 35,
           "spd": 35,
           "spe": 55
       },
       "abilities": {
           "0": "옹골참",
           "1": "조가비 갑옷",
           "H": "깨어진갑옷"
       },
       "heightm": 0.3,
       "weightkg": 14.5,
       "color": "Red",
       "evos": ["Crustle"],
       "eggGroups": ["Bug", "Mineral"]
   },
   "암팰리스": {
       "num": 558,
       "name": "Crustle",
       "types": ["벌레", "바위"],
       "baseStats": {
           "hp": 70,
           "atk": 105,
           "def": 125,
           "spa": 65,
           "spd": 75,
           "spe": 45
       },
       "abilities": {
           "0": "옹골참",
           "1": "조가비 갑옷",
           "H": "깨어진갑옷"
       },
       "heightm": 1.4,
       "weightkg": 200,
       "color": "Red",
       "prevo": "Dwebble",
       "evoLevel": 34,
       "eggGroups": ["Bug", "Mineral"]
   },
   "곤율랭": {
       "num": 559,
       "name": "Scraggy",
       "types": ["악", "격투"],
       "baseStats": {
           "hp": 50,
           "atk": 75,
           "def": 70,
           "spa": 35,
           "spd": 70,
           "spe": 48
       },
       "abilities": {
           "0": "탈피",
           "1": "자기과신",
           "H": "위협"
       },
       "heightm": 0.6,
       "weightkg": 11.8,
       "color": "Yellow",
       "evos": ["Scrafty"],
       "eggGroups": ["Field", "Dragon"]
   },
   "곤율거니": {
       "num": 560,
       "name": "Scrafty",
       "types": ["악", "격투"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 115,
           "spa": 45,
           "spd": 115,
           "spe": 58
       },
       "abilities": {
           "0": "탈피",
           "1": "자기과신",
           "H": "위협"
       },
       "heightm": 1.1,
       "weightkg": 30,
       "color": "Red",
       "prevo": "Scraggy",
       "evoLevel": 39,
       "eggGroups": ["Field", "Dragon"]
   },
   "심보러": {
       "num": 561,
       "name": "Sigilyph",
       "types": ["에스퍼", "비행"],
       "baseStats": {
           "hp": 72,
           "atk": 58,
           "def": 80,
           "spa": 103,
           "spd": 80,
           "spe": 97
       },
       "abilities": {
           "0": "미라클스킨",
           "1": "매직가드",
           "H": "색안경"
       },
       "heightm": 1.4,
       "weightkg": 14,
       "color": "Black",
       "eggGroups": ["Flying"]
   },
   "데스마스": {
       "num": 562,
       "name": "Yamask",
       "types": ["고스트"],
       "baseStats": {
           "hp": 38,
           "atk": 30,
           "def": 85,
           "spa": 55,
           "spd": 65,
           "spe": 30
       },
       "abilities": {
           "0": "미라"
       },
       "heightm": 0.5,
       "weightkg": 1.5,
       "color": "Black",
       "evos": ["Cofagrigus"],
       "eggGroups": ["Mineral", "Amorphous"],
       "otherFormes": ["Yamask-Galar"],
       "formeOrder": ["Yamask", "Yamask-Galar"]
   },
   "데스마스-가라르": {
       "num": 562,
       "name": "Yamask-Galar",
       "baseSpecies": "Yamask",
       "forme": "Galar",
       "types": ["땅", "고스트"],
       "baseStats": {
           "hp": 38,
           "atk": 55,
           "def": 85,
           "spa": 30,
           "spd": 65,
           "spe": 30
       },
       "abilities": {
           "0": "떠도는영혼"
       },
       "heightm": 0.5,
       "weightkg": 1.5,
       "color": "Black",
       "evos": ["Runerigus"],
       "eggGroups": ["Mineral", "Amorphous"]
   },
   "데스니칸": {
       "num": 563,
       "name": "Cofagrigus",
       "types": ["고스트"],
       "baseStats": {
           "hp": 58,
           "atk": 50,
           "def": 145,
           "spa": 95,
           "spd": 105,
           "spe": 30
       },
       "abilities": {
           "0": "미라"
       },
       "heightm": 1.7,
       "weightkg": 76.5,
       "color": "Yellow",
       "prevo": "Yamask",
       "evoLevel": 34,
       "eggGroups": ["Mineral", "Amorphous"]
   },
   "프로토가": {
       "num": 564,
       "name": "Tirtouga",
       "types": ["물", "바위"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 54,
           "atk": 78,
           "def": 103,
           "spa": 53,
           "spd": 45,
           "spe": 22
       },
       "abilities": {
           "0": "하드록",
           "1": "옹골참",
           "H": "쓱쓱"
       },
       "heightm": 0.7,
       "weightkg": 16.5,
       "color": "Blue",
       "evos": ["Carracosta"],
       "eggGroups": ["Water 1", "Water 3"]
   },
   "늑골라": {
       "num": 565,
       "name": "Carracosta",
       "types": ["물", "바위"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 74,
           "atk": 108,
           "def": 133,
           "spa": 83,
           "spd": 65,
           "spe": 32
       },
       "abilities": {
           "0": "하드록",
           "1": "옹골참",
           "H": "쓱쓱"
       },
       "heightm": 1.2,
       "weightkg": 81,
       "color": "Blue",
       "prevo": "Tirtouga",
       "evoLevel": 37,
       "eggGroups": ["Water 1", "Water 3"]
   },
   "아켄": {
       "num": 566,
       "name": "Archen",
       "types": ["바위", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 55,
           "atk": 112,
           "def": 45,
           "spa": 74,
           "spd": 45,
           "spe": 70
       },
       "abilities": {
           "0": "무기력"
       },
       "heightm": 0.5,
       "weightkg": 9.5,
       "color": "Yellow",
       "evos": ["Archeops"],
       "eggGroups": ["Flying", "Water 3"]
   },
   "아케오스": {
       "num": 567,
       "name": "Archeops",
       "types": ["바위", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 140,
           "def": 65,
           "spa": 112,
           "spd": 65,
           "spe": 110
       },
       "abilities": {
           "0": "무기력"
       },
       "heightm": 1.4,
       "weightkg": 32,
       "color": "Yellow",
       "prevo": "Archen",
       "evoLevel": 37,
       "eggGroups": ["Flying", "Water 3"]
   },
   "깨봉이": {
       "num": 568,
       "name": "Trubbish",
       "types": ["독"],
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 62,
           "spa": 40,
           "spd": 62,
           "spe": 65
       },
       "abilities": {
           "0": "악취",
           "1": "점착",
           "H": "유폭"
       },
       "heightm": 0.6,
       "weightkg": 31,
       "color": "Green",
       "evos": ["Garbodor"],
       "eggGroups": ["Mineral"]
   },
   "더스트나": {
       "num": 569,
       "name": "Garbodor",
       "types": ["독"],
       "baseStats": {
           "hp": 80,
           "atk": 95,
           "def": 82,
           "spa": 60,
           "spd": 82,
           "spe": 75
       },
       "abilities": {
           "0": "악취",
           "1": "깨어진갑옷",
           "H": "유폭"
       },
       "heightm": 1.9,
       "weightkg": 107.3,
       "color": "Green",
       "prevo": "Trubbish",
       "evoLevel": 36,
       "eggGroups": ["Mineral"],
       "canGigantamax": "G-Max Malodor"
   },
   "조로아": {
       "num": 570,
       "name": "Zorua",
       "types": ["악"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 40,
           "atk": 65,
           "def": 40,
           "spa": 80,
           "spd": 40,
           "spe": 65
       },
       "abilities": {
           "0": "일루전"
       },
       "heightm": 0.7,
       "weightkg": 12.5,
       "color": "Gray",
       "evos": ["Zoroark"],
       "eggGroups": ["Field"]
   },
   "조로아크": {
       "num": 571,
       "name": "Zoroark",
       "types": ["악"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 105,
           "def": 60,
           "spa": 120,
           "spd": 60,
           "spe": 105
       },
       "abilities": {
           "0": "일루전"
       },
       "heightm": 1.6,
       "weightkg": 81.1,
       "color": "Gray",
       "prevo": "Zorua",
       "evoLevel": 30,
       "eggGroups": ["Field"]
   },
   "치라미": {
       "num": 572,
       "name": "Minccino",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 55,
           "atk": 50,
           "def": 40,
           "spa": 40,
           "spd": 40,
           "spe": 75
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "테크니션",
           "H": "스킬링크"
       },
       "heightm": 0.4,
       "weightkg": 5.8,
       "color": "Gray",
       "evos": ["Cinccino"],
       "eggGroups": ["Field"]
   },
   "치라치노": {
       "num": 573,
       "name": "Cinccino",
       "types": ["노말"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 75,
           "atk": 95,
           "def": 60,
           "spa": 65,
           "spd": 60,
           "spe": 115
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "1": "테크니션",
           "H": "스킬링크"
       },
       "heightm": 0.5,
       "weightkg": 7.5,
       "color": "Gray",
       "prevo": "Minccino",
       "evoType": "useItem",
       "evoItem": "Shiny Stone",
       "eggGroups": ["Field"]
   },
   "고디탱": {
       "num": 574,
       "name": "Gothita",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 45,
           "atk": 30,
           "def": 50,
           "spa": 55,
           "spd": 65,
           "spe": 45
       },
       "abilities": {
           "0": "통찰",
           "1": "승기",
           "H": "그림자 밟기"
       },
       "heightm": 0.4,
       "weightkg": 5.8,
       "color": "Purple",
       "evos": ["Gothorita"],
       "eggGroups": ["Human-Like"]
   },
   "고디보미": {
       "num": 575,
       "name": "Gothorita",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 60,
           "atk": 45,
           "def": 70,
           "spa": 75,
           "spd": 85,
           "spe": 55
       },
       "abilities": {
           "0": "통찰",
           "1": "승기",
           "H": "그림자 밟기"
       },
       "heightm": 0.7,
       "weightkg": 18,
       "color": "Purple",
       "prevo": "Gothita",
       "evoLevel": 32,
       "evos": ["Gothitelle"],
       "eggGroups": ["Human-Like"]
   },
   "고디모아젤": {
       "num": 576,
       "name": "Gothitelle",
       "types": ["에스퍼"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 70,
           "atk": 55,
           "def": 95,
           "spa": 95,
           "spd": 110,
           "spe": 65
       },
       "abilities": {
           "0": "통찰",
           "1": "승기",
           "H": "그림자 밟기"
       },
       "heightm": 1.5,
       "weightkg": 44,
       "color": "Purple",
       "prevo": "Gothorita",
       "evoLevel": 41,
       "eggGroups": ["Human-Like"]
   },
   "유니란": {
       "num": 577,
       "name": "Solosis",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 45,
           "atk": 30,
           "def": 40,
           "spa": 105,
           "spd": 50,
           "spe": 20
       },
       "abilities": {
           "0": "방진",
           "1": "매직가드",
           "H": "재생력"
       },
       "heightm": 0.3,
       "weightkg": 1,
       "color": "Green",
       "evos": ["Duosion"],
       "eggGroups": ["Amorphous"]
   },
   "듀란": {
       "num": 578,
       "name": "Duosion",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 65,
           "atk": 40,
           "def": 50,
           "spa": 125,
           "spd": 60,
           "spe": 30
       },
       "abilities": {
           "0": "방진",
           "1": "매직가드",
           "H": "재생력"
       },
       "heightm": 0.6,
       "weightkg": 8,
       "color": "Green",
       "prevo": "Solosis",
       "evoLevel": 32,
       "evos": ["Reuniclus"],
       "eggGroups": ["Amorphous"]
   },
   "란쿨루스": {
       "num": 579,
       "name": "Reuniclus",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 110,
           "atk": 65,
           "def": 75,
           "spa": 125,
           "spd": 85,
           "spe": 30
       },
       "abilities": {
           "0": "방진",
           "1": "매직가드",
           "H": "재생력"
       },
       "heightm": 1,
       "weightkg": 20.1,
       "color": "Green",
       "prevo": "Duosion",
       "evoLevel": 41,
       "eggGroups": ["Amorphous"]
   },
   "꼬지보리": {
       "num": 580,
       "name": "Ducklett",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 62,
           "atk": 44,
           "def": 50,
           "spa": 44,
           "spd": 50,
           "spe": 55
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "부풀린가슴",
           "H": "촉촉바디"
       },
       "heightm": 0.5,
       "weightkg": 5.5,
       "color": "Blue",
       "evos": ["Swanna"],
       "eggGroups": ["Water 1", "Flying"]
   },
   "스완나": {
       "num": 581,
       "name": "Swanna",
       "types": ["물", "비행"],
       "baseStats": {
           "hp": 75,
           "atk": 87,
           "def": 63,
           "spa": 87,
           "spd": 63,
           "spe": 98
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "부풀린가슴",
           "H": "촉촉바디"
       },
       "heightm": 1.3,
       "weightkg": 24.2,
       "color": "White",
       "prevo": "Ducklett",
       "evoLevel": 35,
       "eggGroups": ["Water 1", "Flying"]
   },
   "바닐프티": {
       "num": 582,
       "name": "Vanillite",
       "types": ["얼음"],
       "baseStats": {
           "hp": 36,
           "atk": 50,
           "def": 50,
           "spa": 65,
           "spd": 60,
           "spe": 44
       },
       "abilities": {
           "0": "아이스바디",
           "1": "눈숨기",
           "H": "깨어진갑옷"
       },
       "heightm": 0.4,
       "weightkg": 5.7,
       "color": "White",
       "evos": ["Vanillish"],
       "eggGroups": ["Mineral"]
   },
   "바닐리치": {
       "num": 583,
       "name": "Vanillish",
       "types": ["얼음"],
       "baseStats": {
           "hp": 51,
           "atk": 65,
           "def": 65,
           "spa": 80,
           "spd": 75,
           "spe": 59
       },
       "abilities": {
           "0": "아이스바디",
           "1": "눈숨기",
           "H": "깨어진갑옷"
       },
       "heightm": 1.1,
       "weightkg": 41,
       "color": "White",
       "prevo": "Vanillite",
       "evoLevel": 35,
       "evos": ["Vanilluxe"],
       "eggGroups": ["Mineral"]
   },
   "배바닐라": {
       "num": 584,
       "name": "Vanilluxe",
       "types": ["얼음"],
       "baseStats": {
           "hp": 71,
           "atk": 95,
           "def": 85,
           "spa": 110,
           "spd": 95,
           "spe": 79
       },
       "abilities": {
           "0": "아이스바디",
           "1": "눈퍼뜨리기",
           "H": "깨어진갑옷"
       },
       "heightm": 1.3,
       "weightkg": 57.5,
       "color": "White",
       "prevo": "Vanillish",
       "evoLevel": 47,
       "eggGroups": ["Mineral"]
   },
   "사철록": {
       "num": 585,
       "name": "Deerling",
       "baseForme": "Spring",
       "types": ["노말", "풀"],
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 75
       },
       "abilities": {
           "0": "엽록소",
           "1": "초식",
           "H": "하늘의 은총"
       },
       "heightm": 0.6,
       "weightkg": 19.5,
       "color": "Pink",
       "evos": ["Sawsbuck"],
       "eggGroups": ["Field"],
       "cosmeticFormes": ["Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"],
       "formeOrder": ["Deerling", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"]
   },
   "바라철록": {
       "num": 586,
       "name": "Sawsbuck",
       "baseForme": "Spring",
       "types": ["노말", "풀"],
       "baseStats": {
           "hp": 80,
           "atk": 100,
           "def": 70,
           "spa": 60,
           "spd": 70,
           "spe": 95
       },
       "abilities": {
           "0": "엽록소",
           "1": "초식",
           "H": "하늘의 은총"
       },
       "heightm": 1.9,
       "weightkg": 92.5,
       "color": "Brown",
       "prevo": "Deerling",
       "evoLevel": 34,
       "eggGroups": ["Field"],
       "cosmeticFormes": ["Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"],
       "formeOrder": ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"]
   },
   "에몽가": {
       "num": 587,
       "name": "Emolga",
       "types": ["전기", "비행"],
       "baseStats": {
           "hp": 55,
           "atk": 75,
           "def": 60,
           "spa": 75,
           "spd": 60,
           "spe": 103
       },
       "abilities": {
           "0": "정전기",
           "H": "전기엔진"
       },
       "heightm": 0.4,
       "weightkg": 5,
       "color": "White",
       "eggGroups": ["Field"]
   },
   "딱정곤": {
       "num": 588,
       "name": "Karrablast",
       "types": ["벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 75,
           "def": 45,
           "spa": 40,
           "spd": 45,
           "spe": 60
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "탈피",
           "H": "노가드"
       },
       "heightm": 0.5,
       "weightkg": 5.9,
       "color": "Blue",
       "evos": ["Escavalier"],
       "eggGroups": ["Bug"]
   },
   "슈바르고": {
       "num": 589,
       "name": "Escavalier",
       "types": ["벌레", "강철"],
       "baseStats": {
           "hp": 70,
           "atk": 135,
           "def": 105,
           "spa": 60,
           "spd": 105,
           "spe": 20
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "조가비 갑옷",
           "H": "방진"
       },
       "heightm": 1,
       "weightkg": 33,
       "color": "Gray",
       "prevo": "Karrablast",
       "evoType": "trade",
       "evoCondition": "with a Shelmet",
       "eggGroups": ["Bug"]
   },
   "깜놀버슬": {
       "num": 590,
       "name": "Foongus",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 69,
           "atk": 55,
           "def": 45,
           "spa": 55,
           "spd": 55,
           "spe": 15
       },
       "abilities": {
           "0": "포자",
           "H": "재생력"
       },
       "heightm": 0.2,
       "weightkg": 1,
       "color": "White",
       "evos": ["Amoonguss"],
       "eggGroups": ["Grass"]
   },
   "뽀록나": {
       "num": 591,
       "name": "Amoonguss",
       "types": ["풀", "독"],
       "baseStats": {
           "hp": 114,
           "atk": 85,
           "def": 70,
           "spa": 85,
           "spd": 80,
           "spe": 30
       },
       "abilities": {
           "0": "포자",
           "H": "재생력"
       },
       "heightm": 0.6,
       "weightkg": 10.5,
       "color": "White",
       "prevo": "Foongus",
       "evoLevel": 39,
       "eggGroups": ["Grass"]
   },
   "탱그릴": {
       "num": 592,
       "name": "Frillish",
       "types": ["물", "고스트"],
       "baseStats": {
           "hp": 55,
           "atk": 40,
           "def": 50,
           "spa": 65,
           "spd": 85,
           "spe": 40
       },
       "abilities": {
           "0": "저수",
           "1": "저주받은바디",
           "H": "습기"
       },
       "heightm": 1.2,
       "weightkg": 33,
       "color": "White",
       "evos": ["Jellicent"],
       "eggGroups": ["Amorphous"]
   },
   "탱탱겔": {
       "num": 593,
       "name": "Jellicent",
       "types": ["물", "고스트"],
       "baseStats": {
           "hp": 100,
           "atk": 60,
           "def": 70,
           "spa": 85,
           "spd": 105,
           "spe": 60
       },
       "abilities": {
           "0": "저수",
           "1": "저주받은바디",
           "H": "습기"
       },
       "heightm": 2.2,
       "weightkg": 135,
       "color": "White",
       "prevo": "Frillish",
       "evoLevel": 40,
       "eggGroups": ["Amorphous"]
   },
   "맘복치": {
       "num": 594,
       "name": "Alomomola",
       "types": ["물"],
       "baseStats": {
           "hp": 165,
           "atk": 75,
           "def": 80,
           "spa": 40,
           "spd": 45,
           "spe": 65
       },
       "abilities": {
           "0": "치유의마음",
           "1": "촉촉바디",
           "H": "재생력"
       },
       "heightm": 1.2,
       "weightkg": 31.6,
       "color": "Pink",
       "eggGroups": ["Water 1", "Water 2"]
   },
   "파쪼옥": {
       "num": 595,
       "name": "Joltik",
       "types": ["벌레", "전기"],
       "baseStats": {
           "hp": 50,
           "atk": 47,
           "def": 50,
           "spa": 57,
           "spd": 50,
           "spe": 65
       },
       "abilities": {
           "0": "복안",
           "1": "긴장감",
           "H": "벌레의 알림"
       },
       "heightm": 0.1,
       "weightkg": 0.6,
       "color": "Yellow",
       "evos": ["Galvantula"],
       "eggGroups": ["Bug"]
   },
   "전툴라": {
       "num": 596,
       "name": "Galvantula",
       "types": ["벌레", "전기"],
       "baseStats": {
           "hp": 70,
           "atk": 77,
           "def": 60,
           "spa": 97,
           "spd": 60,
           "spe": 108
       },
       "abilities": {
           "0": "복안",
           "1": "긴장감",
           "H": "벌레의 알림"
       },
       "heightm": 0.8,
       "weightkg": 14.3,
       "color": "Yellow",
       "prevo": "Joltik",
       "evoLevel": 36,
       "eggGroups": ["Bug"]
   },
   "철시드": {
       "num": 597,
       "name": "Ferroseed",
       "types": ["풀", "강철"],
       "baseStats": {
           "hp": 44,
           "atk": 50,
           "def": 91,
           "spa": 24,
           "spd": 86,
           "spe": 10
       },
       "abilities": {
           "0": "철가시"
       },
       "heightm": 0.6,
       "weightkg": 18.8,
       "color": "Gray",
       "evos": ["Ferrothorn"],
       "eggGroups": ["Grass", "Mineral"]
   },
   "너트령": {
       "num": 598,
       "name": "Ferrothorn",
       "types": ["풀", "강철"],
       "baseStats": {
           "hp": 74,
           "atk": 94,
           "def": 131,
           "spa": 54,
           "spd": 116,
           "spe": 20
       },
       "abilities": {
           "0": "철가시",
           "H": "위험예지"
       },
       "heightm": 1,
       "weightkg": 110,
       "color": "Gray",
       "prevo": "Ferroseed",
       "evoLevel": 40,
       "eggGroups": ["Grass", "Mineral"]
   },
   "기어르": {
       "num": 599,
       "name": "Klink",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 40,
           "atk": 55,
           "def": 70,
           "spa": 45,
           "spd": 60,
           "spe": 30
       },
       "abilities": {
           "0": "플러스",
           "1": "마이너스",
           "H": "클리어 바디"
       },
       "heightm": 0.3,
       "weightkg": 21,
       "color": "Gray",
       "evos": ["Klang"],
       "eggGroups": ["Mineral"]
   },
   "기기어르": {
       "num": 600,
       "name": "Klang",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 80,
           "def": 95,
           "spa": 70,
           "spd": 85,
           "spe": 50
       },
       "abilities": {
           "0": "플러스",
           "1": "마이너스",
           "H": "클리어 바디"
       },
       "heightm": 0.6,
       "weightkg": 51,
       "color": "Gray",
       "prevo": "Klink",
       "evoLevel": 38,
       "evos": ["Klinklang"],
       "eggGroups": ["Mineral"]
   },
   "기기기어르": {
       "num": 601,
       "name": "Klinklang",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 100,
           "def": 115,
           "spa": 70,
           "spd": 85,
           "spe": 90
       },
       "abilities": {
           "0": "플러스",
           "1": "마이너스",
           "H": "클리어 바디"
       },
       "heightm": 0.6,
       "weightkg": 81,
       "color": "Gray",
       "prevo": "Klang",
       "evoLevel": 49,
       "eggGroups": ["Mineral"]
   },
   "저리어": {
       "num": 602,
       "name": "Tynamo",
       "types": ["전기"],
       "baseStats": {
           "hp": 35,
           "atk": 55,
           "def": 40,
           "spa": 45,
           "spd": 40,
           "spe": 60
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 0.2,
       "weightkg": 0.3,
       "color": "White",
       "evos": ["Eelektrik"],
       "eggGroups": ["Amorphous"]
   },
   "저리릴": {
       "num": 603,
       "name": "Eelektrik",
       "types": ["전기"],
       "baseStats": {
           "hp": 65,
           "atk": 85,
           "def": 70,
           "spa": 75,
           "spd": 70,
           "spe": 40
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.2,
       "weightkg": 22,
       "color": "Blue",
       "prevo": "Tynamo",
       "evoLevel": 39,
       "evos": ["Eelektross"],
       "eggGroups": ["Amorphous"]
   },
   "저리더프": {
       "num": 604,
       "name": "Eelektross",
       "types": ["전기"],
       "baseStats": {
           "hp": 85,
           "atk": 115,
           "def": 80,
           "spa": 105,
           "spd": 80,
           "spe": 50
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 2.1,
       "weightkg": 80.5,
       "color": "Blue",
       "prevo": "Eelektrik",
       "evoType": "useItem",
       "evoItem": "Thunder Stone",
       "eggGroups": ["Amorphous"]
   },
   "리그레": {
       "num": 605,
       "name": "Elgyem",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 55,
           "atk": 55,
           "def": 55,
           "spa": 85,
           "spd": 55,
           "spe": 30
       },
       "abilities": {
           "0": "텔레파시",
           "1": "싱크로",
           "H": "애널라이즈"
       },
       "heightm": 0.5,
       "weightkg": 9,
       "color": "Blue",
       "evos": ["Beheeyem"],
       "eggGroups": ["Human-Like"]
   },
   "벰크": {
       "num": 606,
       "name": "Beheeyem",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 75,
           "atk": 75,
           "def": 75,
           "spa": 125,
           "spd": 95,
           "spe": 40
       },
       "abilities": {
           "0": "텔레파시",
           "1": "싱크로",
           "H": "애널라이즈"
       },
       "heightm": 1,
       "weightkg": 34.5,
       "color": "Brown",
       "prevo": "Elgyem",
       "evoLevel": 42,
       "eggGroups": ["Human-Like"]
   },
   "불켜미": {
       "num": 607,
       "name": "Litwick",
       "types": ["고스트", "불꽃"],
       "baseStats": {
           "hp": 50,
           "atk": 30,
           "def": 55,
           "spa": 65,
           "spd": 55,
           "spe": 20
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "1": "불꽃몸",
           "H": "틈새포착"
       },
       "heightm": 0.3,
       "weightkg": 3.1,
       "color": "White",
       "evos": ["Lampent"],
       "eggGroups": ["Amorphous"]
   },
   "램프라": {
       "num": 608,
       "name": "Lampent",
       "types": ["고스트", "불꽃"],
       "baseStats": {
           "hp": 60,
           "atk": 40,
           "def": 60,
           "spa": 95,
           "spd": 60,
           "spe": 55
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "1": "불꽃몸",
           "H": "틈새포착"
       },
       "heightm": 0.6,
       "weightkg": 13,
       "color": "Black",
       "prevo": "Litwick",
       "evoLevel": 41,
       "evos": ["Chandelure"],
       "eggGroups": ["Amorphous"]
   },
   "샹델라": {
       "num": 609,
       "name": "Chandelure",
       "types": ["고스트", "불꽃"],
       "baseStats": {
           "hp": 60,
           "atk": 55,
           "def": 90,
           "spa": 145,
           "spd": 90,
           "spe": 80
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "1": "불꽃몸",
           "H": "틈새포착"
       },
       "heightm": 1,
       "weightkg": 34.3,
       "color": "Black",
       "prevo": "Lampent",
       "evoType": "useItem",
       "evoItem": "Dusk Stone",
       "eggGroups": ["Amorphous"]
   },
   "터검니": {
       "num": 610,
       "name": "Axew",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 46,
           "atk": 87,
           "def": 60,
           "spa": 30,
           "spd": 40,
           "spe": 57
       },
       "abilities": {
           "0": "투쟁심",
           "1": "틀깨기",
           "H": "긴장감"
       },
       "heightm": 0.6,
       "weightkg": 18,
       "color": "Green",
       "evos": ["Fraxure"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "액슨도": {
       "num": 611,
       "name": "Fraxure",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 66,
           "atk": 117,
           "def": 70,
           "spa": 40,
           "spd": 50,
           "spe": 67
       },
       "abilities": {
           "0": "투쟁심",
           "1": "틀깨기",
           "H": "긴장감"
       },
       "heightm": 1,
       "weightkg": 36,
       "color": "Green",
       "prevo": "Axew",
       "evoLevel": 38,
       "evos": ["Haxorus"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "액스라이즈": {
       "num": 612,
       "name": "Haxorus",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 76,
           "atk": 147,
           "def": 90,
           "spa": 60,
           "spd": 70,
           "spe": 97
       },
       "abilities": {
           "0": "투쟁심",
           "1": "틀깨기",
           "H": "긴장감"
       },
       "heightm": 1.8,
       "weightkg": 105.5,
       "color": "Yellow",
       "prevo": "Fraxure",
       "evoLevel": 48,
       "eggGroups": ["Monster", "Dragon"]
   },
   "코고미": {
       "num": 613,
       "name": "Cubchoo",
       "types": ["얼음"],
       "baseStats": {
           "hp": 55,
           "atk": 70,
           "def": 40,
           "spa": 60,
           "spd": 40,
           "spe": 40
       },
       "abilities": {
           "0": "눈숨기",
           "1": "눈치우기",
           "H": "주눅"
       },
       "heightm": 0.5,
       "weightkg": 8.5,
       "color": "White",
       "evos": ["Beartic"],
       "eggGroups": ["Field"]
   },
   "툰베어": {
       "num": 614,
       "name": "Beartic",
       "types": ["얼음"],
       "baseStats": {
           "hp": 95,
           "atk": 130,
           "def": 80,
           "spa": 70,
           "spd": 80,
           "spe": 50
       },
       "abilities": {
           "0": "눈숨기",
           "1": "눈치우기",
           "H": "쓱쓱"
       },
       "heightm": 2.6,
       "weightkg": 260,
       "color": "White",
       "prevo": "Cubchoo",
       "evoLevel": 37,
       "eggGroups": ["Field"]
   },
   "프리지오": {
       "num": 615,
       "name": "Cryogonal",
       "types": ["얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 50,
           "def": 50,
           "spa": 95,
           "spd": 135,
           "spe": 105
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.1,
       "weightkg": 148,
       "color": "Blue",
       "eggGroups": ["Mineral"]
   },
   "쪼마리": {
       "num": 616,
       "name": "Shelmet",
       "types": ["벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 40,
           "def": 85,
           "spa": 40,
           "spd": 65,
           "spe": 25
       },
       "abilities": {
           "0": "촉촉바디",
           "1": "조가비 갑옷",
           "H": "방진"
       },
       "heightm": 0.4,
       "weightkg": 7.7,
       "color": "Red",
       "evos": ["Accelgor"],
       "eggGroups": ["Bug"]
   },
   "어지리더": {
       "num": 617,
       "name": "Accelgor",
       "types": ["벌레"],
       "baseStats": {
           "hp": 80,
           "atk": 70,
           "def": 40,
           "spa": 100,
           "spd": 60,
           "spe": 145
       },
       "abilities": {
           "0": "촉촉바디",
           "1": "점착",
           "H": "곡예"
       },
       "heightm": 0.8,
       "weightkg": 25.3,
       "color": "Red",
       "prevo": "Shelmet",
       "evoType": "trade",
       "evoCondition": "with a Karrablast",
       "eggGroups": ["Bug"]
   },
   "메더": {
       "num": 618,
       "name": "Stunfisk",
       "types": ["땅", "전기"],
       "baseStats": {
           "hp": 109,
           "atk": 66,
           "def": 84,
           "spa": 81,
           "spd": 99,
           "spe": 32
       },
       "abilities": {
           "0": "정전기",
           "1": "유연",
           "H": "모래숨기"
       },
       "heightm": 0.7,
       "weightkg": 11,
       "color": "Brown",
       "eggGroups": ["Water 1", "Amorphous"],
       "otherFormes": ["Stunfisk-Galar"],
       "formeOrder": ["Stunfisk", "Stunfisk-Galar"]
   },
   "메더-가라르": {
       "num": 618,
       "name": "Stunfisk-Galar",
       "baseSpecies": "Stunfisk",
       "forme": "Galar",
       "types": ["땅", "강철"],
       "baseStats": {
           "hp": 109,
           "atk": 81,
           "def": 99,
           "spa": 66,
           "spd": 84,
           "spe": 32
       },
       "abilities": {
           "0": "의태"
       },
       "heightm": 0.7,
       "weightkg": 20.5,
       "color": "Green",
       "eggGroups": ["Water 1", "Amorphous"]
   },
   "비조푸": {
       "num": 619,
       "name": "Mienfoo",
       "types": ["격투"],
       "baseStats": {
           "hp": 45,
           "atk": 85,
           "def": 50,
           "spa": 55,
           "spd": 50,
           "spe": 65
       },
       "abilities": {
           "0": "정신력",
           "1": "재생력",
           "H": "이판사판"
       },
       "heightm": 0.9,
       "weightkg": 20,
       "color": "Yellow",
       "evos": ["Mienshao"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "비조도": {
       "num": 620,
       "name": "Mienshao",
       "types": ["격투"],
       "baseStats": {
           "hp": 65,
           "atk": 125,
           "def": 60,
           "spa": 95,
           "spd": 60,
           "spe": 105
       },
       "abilities": {
           "0": "정신력",
           "1": "재생력",
           "H": "이판사판"
       },
       "heightm": 1.4,
       "weightkg": 35.5,
       "color": "Purple",
       "prevo": "Mienfoo",
       "evoLevel": 50,
       "eggGroups": ["Field", "Human-Like"]
   },
   "크리만": {
       "num": 621,
       "name": "Druddigon",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 77,
           "atk": 120,
           "def": 90,
           "spa": 60,
           "spd": 90,
           "spe": 48
       },
       "abilities": {
           "0": "까칠한 피부",
           "1": "우격다짐",
           "H": "틀깨기"
       },
       "heightm": 1.6,
       "weightkg": 139,
       "color": "Red",
       "eggGroups": ["Monster", "Dragon"]
   },
   "골비람": {
       "num": 622,
       "name": "Golett",
       "types": ["땅", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 59,
           "atk": 74,
           "def": 50,
           "spa": 35,
           "spd": 50,
           "spe": 35
       },
       "abilities": {
           "0": "철주먹",
           "1": "서투름",
           "H": "노가드"
       },
       "heightm": 1,
       "weightkg": 92,
       "color": "Green",
       "evos": ["Golurk"],
       "eggGroups": ["Mineral"]
   },
   "골루그": {
       "num": 623,
       "name": "Golurk",
       "types": ["땅", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 89,
           "atk": 124,
           "def": 80,
           "spa": 55,
           "spd": 80,
           "spe": 55
       },
       "abilities": {
           "0": "철주먹",
           "1": "서투름",
           "H": "노가드"
       },
       "heightm": 2.8,
       "weightkg": 330,
       "color": "Green",
       "prevo": "Golett",
       "evoLevel": 43,
       "eggGroups": ["Mineral"]
   },
   "자망칼": {
       "num": 624,
       "name": "Pawniard",
       "types": ["악", "강철"],
       "baseStats": {
           "hp": 45,
           "atk": 85,
           "def": 70,
           "spa": 40,
           "spd": 40,
           "spe": 60
       },
       "abilities": {
           "0": "오기",
           "1": "정신력",
           "H": "프레셔"
       },
       "heightm": 0.5,
       "weightkg": 10.2,
       "color": "Red",
       "evos": ["Bisharp"],
       "eggGroups": ["Human-Like"]
   },
   "절각참": {
       "num": 625,
       "name": "Bisharp",
       "types": ["악", "강철"],
       "baseStats": {
           "hp": 65,
           "atk": 125,
           "def": 100,
           "spa": 60,
           "spd": 70,
           "spe": 70
       },
       "abilities": {
           "0": "오기",
           "1": "정신력",
           "H": "프레셔"
       },
       "heightm": 1.6,
       "weightkg": 70,
       "color": "Red",
       "prevo": "Pawniard",
       "evoLevel": 52,
       "eggGroups": ["Human-Like"]
   },
   "버프론": {
       "num": 626,
       "name": "Bouffalant",
       "types": ["노말"],
       "baseStats": {
           "hp": 95,
           "atk": 110,
           "def": 95,
           "spa": 40,
           "spd": 95,
           "spe": 55
       },
       "abilities": {
           "0": "이판사판",
           "1": "초식",
           "H": "방음"
       },
       "heightm": 1.6,
       "weightkg": 94.6,
       "color": "Brown",
       "eggGroups": ["Field"]
   },
   "수리둥보": {
       "num": 627,
       "name": "Rufflet",
       "types": ["노말", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 70,
           "atk": 83,
           "def": 50,
           "spa": 37,
           "spd": 50,
           "spe": 60
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "우격다짐",
           "H": "의욕"
       },
       "heightm": 0.5,
       "weightkg": 10.5,
       "color": "White",
       "evos": ["Braviary"],
       "eggGroups": ["Flying"]
   },
   "워글": {
       "num": 628,
       "name": "Braviary",
       "types": ["노말", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 100,
           "atk": 123,
           "def": 75,
           "spa": 57,
           "spd": 75,
           "spe": 80
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "우격다짐",
           "H": "오기"
       },
       "heightm": 1.5,
       "weightkg": 41,
       "color": "Red",
       "prevo": "Rufflet",
       "evoLevel": 54,
       "eggGroups": ["Flying"]
   },
   "벌차이": {
       "num": 629,
       "name": "Vullaby",
       "types": ["악", "비행"],
       "gender": "F",
       "baseStats": {
           "hp": 70,
           "atk": 55,
           "def": 75,
           "spa": 45,
           "spd": 65,
           "spe": 60
       },
       "abilities": {
           "0": "부풀린가슴",
           "1": "방진",
           "H": "깨어진갑옷"
       },
       "heightm": 0.5,
       "weightkg": 9,
       "color": "Brown",
       "evos": ["Mandibuzz"],
       "eggGroups": ["Flying"]
   },
   "버랜지나": {
       "num": 630,
       "name": "Mandibuzz",
       "types": ["악", "비행"],
       "gender": "F",
       "baseStats": {
           "hp": 110,
           "atk": 65,
           "def": 105,
           "spa": 55,
           "spd": 95,
           "spe": 80
       },
       "abilities": {
           "0": "부풀린가슴",
           "1": "방진",
           "H": "깨어진갑옷"
       },
       "heightm": 1.2,
       "weightkg": 39.5,
       "color": "Brown",
       "prevo": "Vullaby",
       "evoLevel": 54,
       "eggGroups": ["Flying"]
   },
   "앤티골": {
       "num": 631,
       "name": "Heatmor",
       "types": ["불꽃"],
       "baseStats": {
           "hp": 85,
           "atk": 97,
           "def": 66,
           "spa": 105,
           "spd": 66,
           "spe": 65
       },
       "abilities": {
           "0": "먹보",
           "1": "타오르는 불꽃",
           "H": "하얀연기"
       },
       "heightm": 1.4,
       "weightkg": 58,
       "color": "Red",
       "eggGroups": ["Field"]
   },
   "아이앤트": {
       "num": 632,
       "name": "Durant",
       "types": ["벌레", "강철"],
       "baseStats": {
           "hp": 58,
           "atk": 109,
           "def": 112,
           "spa": 48,
           "spd": 48,
           "spe": 109
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "의욕",
           "H": "게으름"
       },
       "heightm": 0.3,
       "weightkg": 33,
       "color": "Gray",
       "eggGroups": ["Bug"]
   },
   "모노두": {
       "num": 633,
       "name": "Deino",
       "types": ["악", "드래곤"],
       "baseStats": {
           "hp": 52,
           "atk": 65,
           "def": 50,
           "spa": 45,
           "spd": 50,
           "spe": 38
       },
       "abilities": {
           "0": "의욕"
       },
       "heightm": 0.8,
       "weightkg": 17.3,
       "color": "Blue",
       "evos": ["Zweilous"],
       "eggGroups": ["Dragon"]
   },
   "디헤드": {
       "num": 634,
       "name": "Zweilous",
       "types": ["악", "드래곤"],
       "baseStats": {
           "hp": 72,
           "atk": 85,
           "def": 70,
           "spa": 65,
           "spd": 70,
           "spe": 58
       },
       "abilities": {
           "0": "의욕"
       },
       "heightm": 1.4,
       "weightkg": 50,
       "color": "Blue",
       "prevo": "Deino",
       "evoLevel": 50,
       "evos": ["Hydreigon"],
       "eggGroups": ["Dragon"]
   },
   "삼삼드래": {
       "num": 635,
       "name": "Hydreigon",
       "types": ["악", "드래곤"],
       "baseStats": {
           "hp": 92,
           "atk": 105,
           "def": 90,
           "spa": 125,
           "spd": 90,
           "spe": 98
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.8,
       "weightkg": 160,
       "color": "Blue",
       "prevo": "Zweilous",
       "evoLevel": 64,
       "eggGroups": ["Dragon"]
   },
   "활화르바": {
       "num": 636,
       "name": "Larvesta",
       "types": ["벌레", "불꽃"],
       "baseStats": {
           "hp": 55,
           "atk": 85,
           "def": 55,
           "spa": 50,
           "spd": 55,
           "spe": 60
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "벌레의 알림"
       },
       "heightm": 1.1,
       "weightkg": 28.8,
       "color": "White",
       "evos": ["Volcarona"],
       "eggGroups": ["Bug"]
   },
   "불카모스": {
       "num": 637,
       "name": "Volcarona",
       "types": ["벌레", "불꽃"],
       "baseStats": {
           "hp": 85,
           "atk": 60,
           "def": 65,
           "spa": 135,
           "spd": 105,
           "spe": 100
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "벌레의 알림"
       },
       "heightm": 1.6,
       "weightkg": 46,
       "color": "White",
       "prevo": "Larvesta",
       "evoLevel": 59,
       "eggGroups": ["Bug"]
   },
   "코바르온": {
       "num": 638,
       "name": "Cobalion",
       "types": ["강철", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 91,
           "atk": 90,
           "def": 129,
           "spa": 90,
           "spd": 72,
           "spe": 108
       },
       "abilities": {
           "0": "정의의마음"
       },
       "heightm": 2.1,
       "weightkg": 250,
       "color": "Blue",
       "eggGroups": ["Undiscovered"]
   },
   "테라키온": {
       "num": 639,
       "name": "Terrakion",
       "types": ["바위", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 91,
           "atk": 129,
           "def": 90,
           "spa": 72,
           "spd": 90,
           "spe": 108
       },
       "abilities": {
           "0": "정의의마음"
       },
       "heightm": 1.9,
       "weightkg": 260,
       "color": "Gray",
       "eggGroups": ["Undiscovered"]
   },
   "비리디온": {
       "num": 640,
       "name": "Virizion",
       "types": ["풀", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 91,
           "atk": 90,
           "def": 72,
           "spa": 90,
           "spd": 129,
           "spe": 108
       },
       "abilities": {
           "0": "정의의마음"
       },
       "heightm": 2,
       "weightkg": 200,
       "color": "Green",
       "eggGroups": ["Undiscovered"]
   },
   "토네로스-화신폼": {
       "num": 641,
       "name": "Tornadus",
       "baseForme": "Incarnate",
       "types": ["비행"],
       "gender": "M",
       "baseStats": {
           "hp": 79,
           "atk": 115,
           "def": 70,
           "spa": 125,
           "spd": 80,
           "spe": 111
       },
       "abilities": {
           "0": "짓궂은마음",
           "H": "오기"
       },
       "heightm": 1.5,
       "weightkg": 63,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Tornadus-Therian"],
       "formeOrder": ["Tornadus", "Tornadus-Therian"]
   },
   "토네로스-영물폼": {
       "num": 641,
       "name": "Tornadus-Therian",
       "baseSpecies": "Tornadus",
       "forme": "Therian",
       "types": ["비행"],
       "gender": "M",
       "baseStats": {
           "hp": 79,
           "atk": 100,
           "def": 80,
           "spa": 110,
           "spd": 90,
           "spe": 121
       },
       "abilities": {
           "0": "재생력"
       },
       "heightm": 1.4,
       "weightkg": 63,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Tornadus"
   },
   "볼트로스-화신폼": {
       "num": 642,
       "name": "Thundurus",
       "baseForme": "Incarnate",
       "types": ["전기", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 79,
           "atk": 115,
           "def": 70,
           "spa": 125,
           "spd": 80,
           "spe": 111
       },
       "abilities": {
           "0": "짓궂은마음",
           "H": "오기"
       },
       "heightm": 1.5,
       "weightkg": 61,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Thundurus-Therian"],
       "formeOrder": ["Thundurus", "Thundurus-Therian"]
   },
   "볼트로스-영물폼": {
       "num": 642,
       "name": "Thundurus-Therian",
       "baseSpecies": "Thundurus",
       "forme": "Therian",
       "types": ["전기", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 79,
           "atk": 105,
           "def": 70,
           "spa": 145,
           "spd": 80,
           "spe": 101
       },
       "abilities": {
           "0": "축전"
       },
       "heightm": 3,
       "weightkg": 61,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Thundurus"
   },
   "레시라무": {
       "num": 643,
       "name": "Reshiram",
       "types": ["드래곤", "불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 120,
           "def": 100,
           "spa": 150,
           "spd": 120,
           "spe": 90
       },
       "abilities": {
           "0": "터보블레이즈"
       },
       "heightm": 3.2,
       "weightkg": 330,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "제크로무": {
       "num": 644,
       "name": "Zekrom",
       "types": ["드래곤", "전기"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 150,
           "def": 120,
           "spa": 120,
           "spd": 100,
           "spe": 90
       },
       "abilities": {
           "0": "테라볼티지"
       },
       "heightm": 2.9,
       "weightkg": 345,
       "color": "Black",
       "eggGroups": ["Undiscovered"]
   },
   "랜드로스-영물폼": {
       "num": 645,
       "name": "Landorus",
       "baseForme": "Incarnate",
       "types": ["땅", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 89,
           "atk": 125,
           "def": 90,
           "spa": 115,
           "spd": 80,
           "spe": 101
       },
       "abilities": {
           "0": "모래의힘",
           "H": "우격다짐"
       },
       "heightm": 1.5,
       "weightkg": 68,
       "color": "Brown",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Landorus-Therian"],
       "formeOrder": ["Landorus", "Landorus-Therian"]
   },
   "랜드로스-화신폼": {
       "num": 645,
       "name": "Landorus-Therian",
       "baseSpecies": "Landorus",
       "forme": "Therian",
       "types": ["땅", "비행"],
       "gender": "M",
       "baseStats": {
           "hp": 89,
           "atk": 145,
           "def": 90,
           "spa": 105,
           "spd": 80,
           "spe": 91
       },
       "abilities": {
           "0": "위협"
       },
       "heightm": 1.3,
       "weightkg": 68,
       "color": "Brown",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Landorus"
   },
   "큐레무": {
       "num": 646,
       "name": "Kyurem",
       "types": ["드래곤", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 125,
           "atk": 130,
           "def": 90,
           "spa": 130,
           "spd": 90,
           "spe": 95
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 3,
       "weightkg": 325,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Kyurem-Black", "Kyurem-White"],
       "formeOrder": ["Kyurem", "Kyurem-White", "Kyurem-Black"]
   },
   "큐레무-블랙": {
       "num": 646,
       "name": "Kyurem-Black",
       "baseSpecies": "Kyurem",
       "forme": "Black",
       "types": ["드래곤", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 125,
           "atk": 170,
           "def": 100,
           "spa": 120,
           "spd": 90,
           "spe": 95
       },
       "abilities": {
           "0": "테라볼티지"
       },
       "heightm": 3.3,
       "weightkg": 325,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Kyurem"
   },
   "큐레무-화이트": {
       "num": 646,
       "name": "Kyurem-White",
       "baseSpecies": "Kyurem",
       "forme": "White",
       "types": ["드래곤", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 125,
           "atk": 120,
           "def": 90,
           "spa": 170,
           "spd": 100,
           "spe": 95
       },
       "abilities": {
           "0": "터보블레이즈"
       },
       "heightm": 3.6,
       "weightkg": 325,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Kyurem"
   },
   "케르디오": {
       "num": 647,
       "name": "Keldeo",
       "baseForme": "Ordinary",
       "types": ["물", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 91,
           "atk": 72,
           "def": 90,
           "spa": 129,
           "spd": 90,
           "spe": 108
       },
       "abilities": {
           "0": "정의의마음"
       },
       "heightm": 1.4,
       "weightkg": 48.5,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Keldeo-Resolute"],
       "formeOrder": ["Keldeo", "Keldeo-Resolute"]
   },
   "메로엣타-보이스폼": {
       "num": 648,
       "name": "Meloetta",
       "baseForme": "Aria",
       "types": ["노말", "에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 77,
           "def": 77,
           "spa": 128,
           "spd": 128,
           "spe": 90
       },
       "abilities": {
           "0": "하늘의 은총"
       },
       "heightm": 0.6,
       "weightkg": 6.5,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Meloetta-Pirouette"],
       "formeOrder": ["Meloetta", "Meloetta-Pirouette"]
   },
   "메로엣타-스텝폼": {
       "num": 648,
       "name": "Meloetta-Pirouette",
       "baseSpecies": "Meloetta",
       "forme": "Pirouette",
       "types": ["노말", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 128,
           "def": 90,
           "spa": 77,
           "spd": 77,
           "spe": 128
       },
       "abilities": {
           "0": "하늘의 은총"
       },
       "heightm": 0.6,
       "weightkg": 6.5,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "requiredMove": "Relic Song",
       "battleOnly": "Meloetta"
   },
   "게노세크트": {
       "num": 649,
       "name": "Genesect",
       "types": ["벌레", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 71,
           "atk": 120,
           "def": 95,
           "spa": 120,
           "spd": 95,
           "spe": 99
       },
       "abilities": {
           "0": "다운로드"
       },
       "heightm": 1.5,
       "weightkg": 82.5,
       "color": "Purple",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Genesect-Douse", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
       "formeOrder": ["Genesect", "Genesect-Douse", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"]
   },
   "도치마론": {
       "num": 650,
       "name": "Chespin",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 56,
           "atk": 61,
           "def": 65,
           "spa": 48,
           "spd": 45,
           "spe": 38
       },
       "abilities": {
           "0": "심록",
           "H": "방탄"
       },
       "heightm": 0.4,
       "weightkg": 9,
       "color": "Green",
       "evos": ["Quilladin"],
       "eggGroups": ["Field"]
   },
   "도치보구": {
       "num": 651,
       "name": "Quilladin",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 61,
           "atk": 78,
           "def": 95,
           "spa": 56,
           "spd": 58,
           "spe": 57
       },
       "abilities": {
           "0": "심록",
           "H": "방탄"
       },
       "heightm": 0.7,
       "weightkg": 29,
       "color": "Green",
       "prevo": "Chespin",
       "evoLevel": 16,
       "evos": ["Chesnaught"],
       "eggGroups": ["Field"]
   },
   "브리가론": {
       "num": 652,
       "name": "Chesnaught",
       "types": ["풀", "격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 88,
           "atk": 107,
           "def": 122,
           "spa": 74,
           "spd": 75,
           "spe": 64
       },
       "abilities": {
           "0": "심록",
           "H": "방탄"
       },
       "heightm": 1.6,
       "weightkg": 90,
       "color": "Green",
       "prevo": "Quilladin",
       "evoLevel": 36,
       "eggGroups": ["Field"]
   },
   "푸호꼬": {
       "num": 653,
       "name": "Fennekin",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 40,
           "spa": 62,
           "spd": 60,
           "spe": 60
       },
       "abilities": {
           "0": "맹화",
           "H": "매지션"
       },
       "heightm": 0.4,
       "weightkg": 9.4,
       "color": "Red",
       "evos": ["Braixen"],
       "eggGroups": ["Field"]
   },
   "테르나": {
       "num": 654,
       "name": "Braixen",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 59,
           "atk": 59,
           "def": 58,
           "spa": 90,
           "spd": 70,
           "spe": 73
       },
       "abilities": {
           "0": "맹화",
           "H": "매지션"
       },
       "heightm": 1,
       "weightkg": 14.5,
       "color": "Red",
       "prevo": "Fennekin",
       "evoLevel": 16,
       "evos": ["Delphox"],
       "eggGroups": ["Field"]
   },
   "마폭시": {
       "num": 655,
       "name": "Delphox",
       "types": ["불꽃", "에스퍼"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 75,
           "atk": 69,
           "def": 72,
           "spa": 114,
           "spd": 100,
           "spe": 104
       },
       "abilities": {
           "0": "맹화",
           "H": "매지션"
       },
       "heightm": 1.5,
       "weightkg": 39,
       "color": "Red",
       "prevo": "Braixen",
       "evoLevel": 36,
       "eggGroups": ["Field"]
   },
   "개구마르": {
       "num": 656,
       "name": "Froakie",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 41,
           "atk": 56,
           "def": 40,
           "spa": 62,
           "spd": 44,
           "spe": 71
       },
       "abilities": {
           "0": "급류",
           "H": "변환자재"
       },
       "heightm": 0.3,
       "weightkg": 7,
       "color": "Blue",
       "evos": ["Frogadier"],
       "eggGroups": ["Water 1"]
   },
   "개굴반장": {
       "num": 657,
       "name": "Frogadier",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 54,
           "atk": 63,
           "def": 52,
           "spa": 83,
           "spd": 56,
           "spe": 97
       },
       "abilities": {
           "0": "급류",
           "H": "변환자재"
       },
       "heightm": 0.6,
       "weightkg": 10.9,
       "color": "Blue",
       "prevo": "Froakie",
       "evoLevel": 16,
       "evos": ["Greninja"],
       "eggGroups": ["Water 1"]
   },
   "개굴닌자": {
       "num": 658,
       "name": "Greninja",
       "types": ["물", "악"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 72,
           "atk": 95,
           "def": 67,
           "spa": 103,
           "spd": 71,
           "spe": 122
       },
       "abilities": {
           "0": "급류",
           "H": "변환자재",
           "S": "Battle Bond"
       },
       "heightm": 1.5,
       "weightkg": 40,
       "color": "Blue",
       "prevo": "Frogadier",
       "evoLevel": 36,
       "eggGroups": ["Water 1"],
       "otherFormes": ["Greninja-Ash"],
       "formeOrder": ["Greninja", "Greninja", "Greninja-Ash"]
   },
   "파르빗": {
       "num": 659,
       "name": "Bunnelby",
       "types": ["노말"],
       "baseStats": {
           "hp": 38,
           "atk": 36,
           "def": 38,
           "spa": 32,
           "spd": 36,
           "spe": 57
       },
       "abilities": {
           "0": "픽업",
           "1": "볼주머니",
           "H": "천하장사"
       },
       "heightm": 0.4,
       "weightkg": 5,
       "color": "Brown",
       "evos": ["Diggersby"],
       "eggGroups": ["Field"]
   },
   "파르토": {
       "num": 660,
       "name": "Diggersby",
       "types": ["노말", "땅"],
       "baseStats": {
           "hp": 85,
           "atk": 56,
           "def": 77,
           "spa": 50,
           "spd": 77,
           "spe": 78
       },
       "abilities": {
           "0": "픽업",
           "1": "볼주머니",
           "H": "천하장사"
       },
       "heightm": 1,
       "weightkg": 42.4,
       "color": "Brown",
       "prevo": "Bunnelby",
       "evoLevel": 20,
       "eggGroups": ["Field"]
   },
   "화살꼬빈": {
       "num": 661,
       "name": "Fletchling",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 45,
           "atk": 50,
           "def": 43,
           "spa": 40,
           "spd": 38,
           "spe": 62
       },
       "abilities": {
           "0": "부풀린가슴",
           "H": "질풍날개"
       },
       "heightm": 0.3,
       "weightkg": 1.7,
       "color": "Red",
       "evos": ["Fletchinder"],
       "eggGroups": ["Flying"]
   },
   "불화살빈": {
       "num": 662,
       "name": "Fletchinder",
       "types": ["불꽃", "비행"],
       "baseStats": {
           "hp": 62,
           "atk": 73,
           "def": 55,
           "spa": 56,
           "spd": 52,
           "spe": 84
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "질풍날개"
       },
       "heightm": 0.7,
       "weightkg": 16,
       "color": "Red",
       "prevo": "Fletchling",
       "evoLevel": 17,
       "evos": ["Talonflame"],
       "eggGroups": ["Flying"]
   },
   "파이어로": {
       "num": 663,
       "name": "Talonflame",
       "types": ["불꽃", "비행"],
       "baseStats": {
           "hp": 78,
           "atk": 81,
           "def": 71,
           "spa": 74,
           "spd": 69,
           "spe": 126
       },
       "abilities": {
           "0": "불꽃몸",
           "H": "질풍날개"
       },
       "heightm": 1.2,
       "weightkg": 24.5,
       "color": "Red",
       "prevo": "Fletchinder",
       "evoLevel": 35,
       "eggGroups": ["Flying"]
   },
   "분이벌레": {
       "num": 664,
       "name": "Scatterbug",
       "types": ["벌레"],
       "baseStats": {
           "hp": 38,
           "atk": 35,
           "def": 40,
           "spa": 27,
           "spd": 25,
           "spe": 35
       },
       "abilities": {
           "0": "인분",
           "1": "복안",
           "H": "프렌드가드"
       },
       "heightm": 0.3,
       "weightkg": 2.5,
       "color": "Black",
       "evos": ["Spewpa"],
       "eggGroups": ["Bug"]
   },
   "분떠도리": {
       "num": 665,
       "name": "Spewpa",
       "types": ["벌레"],
       "baseStats": {
           "hp": 45,
           "atk": 22,
           "def": 60,
           "spa": 27,
           "spd": 30,
           "spe": 29
       },
       "abilities": {
           "0": "탈피",
           "H": "프렌드가드"
       },
       "heightm": 0.3,
       "weightkg": 8.4,
       "color": "Black",
       "prevo": "Scatterbug",
       "evoLevel": 9,
       "evos": ["Vivillon"],
       "eggGroups": ["Bug"]
   },
   "비비용": {
       "num": 666,
       "name": "Vivillon",
       "baseForme": "Meadow",
       "types": ["벌레", "비행"],
       "baseStats": {
           "hp": 80,
           "atk": 52,
           "def": 50,
           "spa": 90,
           "spd": 50,
           "spe": 89
       },
       "abilities": {
           "0": "인분",
           "1": "복안",
           "H": "프렌드가드"
       },
       "heightm": 1.2,
       "weightkg": 17,
       "color": "White",
       "prevo": "Spewpa",
       "evoLevel": 12,
       "eggGroups": ["Bug"],
       "otherFormes": ["Vivillon-Fancy", "Vivillon-Pokeball"],
       "cosmeticFormes": ["Vivillon-Archipelago", "Vivillon-Continental", "Vivillon-Elegant", "Vivillon-Garden", "Vivillon-High Plains", "Vivillon-Icy Snow", "Vivillon-Jungle", "Vivillon-Marine", "Vivillon-Modern", "Vivillon-Monsoon", "Vivillon-Ocean", "Vivillon-Polar", "Vivillon-River", "Vivillon-Sandstorm", "Vivillon-Savanna", "Vivillon-Sun", "Vivillon-Tundra"],
       "formeOrder": ["Vivillon-Icy Snow", "Vivillon-Polar", "Vivillon-Tundra", "Vivillon-Continental", "Vivillon-Garden", "Vivillon-Elegant", "Vivillon", "Vivillon-Modern", "Vivillon-Marine", "Vivillon-Archipelago", "Vivillon-High Plains", "Vivillon-Sandstorm", "Vivillon-River", "Vivillon-Monsoon", "Vivillon-Savanna", "Vivillon-Sun", "Vivillon-Ocean", "Vivillon-Jungle", "Vivillon-Fancy", "Vivillon-Pokeball"]
   },
   "레오꼬": {
       "num": 667,
       "name": "Litleo",
       "types": ["불꽃", "노말"],
       "genderRatio": {
           "M": 0.125,
           "F": 0.875
       },
       "baseStats": {
           "hp": 62,
           "atk": 50,
           "def": 58,
           "spa": 73,
           "spd": 54,
           "spe": 72
       },
       "abilities": {
           "0": "투쟁심",
           "1": "긴장감",
           "H": "자기과신"
       },
       "heightm": 0.6,
       "weightkg": 13.5,
       "color": "Brown",
       "evos": ["Pyroar"],
       "eggGroups": ["Field"]
   },
   "화염레오": {
       "num": 668,
       "name": "Pyroar",
       "types": ["불꽃", "노말"],
       "genderRatio": {
           "M": 0.125,
           "F": 0.875
       },
       "baseStats": {
           "hp": 86,
           "atk": 68,
           "def": 72,
           "spa": 109,
           "spd": 66,
           "spe": 106
       },
       "abilities": {
           "0": "투쟁심",
           "1": "긴장감",
           "H": "자기과신"
       },
       "heightm": 1.5,
       "weightkg": 81.5,
       "color": "Brown",
       "prevo": "Litleo",
       "evoLevel": 35,
       "eggGroups": ["Field"]
   },
   "플라베베": {
       "num": 669,
       "name": "Flabébé",
       "baseForme": "Red",
       "types": ["페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 44,
           "atk": 38,
           "def": 39,
           "spa": 61,
           "spd": 79,
           "spe": 42
       },
       "abilities": {
           "0": "플라워베일",
           "H": "공생"
       },
       "heightm": 0.1,
       "weightkg": 0.1,
       "color": "White",
       "evos": ["Floette"],
       "eggGroups": ["Fairy"],
       "cosmeticFormes": ["Flabébé-Blue", "Flabébé-Orange", "Flabébé-White", "Flabébé-Yellow"],
       "formeOrder": ["Flabébé", "Flabébé-Blue", "Flabébé-Orange", "Flabébé-White", "Flabébé-Yellow"]
   },
   "플라엣테": {
       "num": 670,
       "name": "Floette",
       "baseForme": "Red",
       "types": ["페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 54,
           "atk": 45,
           "def": 47,
           "spa": 75,
           "spd": 98,
           "spe": 52
       },
       "abilities": {
           "0": "플라워베일",
           "H": "공생"
       },
       "heightm": 0.2,
       "weightkg": 0.9,
       "color": "White",
       "prevo": "Flabébé",
       "evoLevel": 19,
       "evos": ["Florges"],
       "eggGroups": ["Fairy"],
       "otherFormes": ["Floette-Eternal"],
       "cosmeticFormes": ["Floette-Blue", "Floette-Orange", "Floette-White", "Floette-Yellow"],
       "formeOrder": ["Floette", "Floette-Blue", "Floette-Orange", "Floette-White", "Floette-Yellow", "Floette-Eternal"]
   },
   "플라엣테-영원의 꽃": {
       "num": 670,
       "name": "Floette-Eternal",
       "baseSpecies": "Floette",
       "forme": "Eternal",
       "types": ["페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 74,
           "atk": 65,
           "def": 67,
           "spa": 125,
           "spd": 128,
           "spe": 92
       },
       "abilities": {
           "0": "플라워베일"
       },
       "heightm": 0.2,
       "weightkg": 0.9,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "플라제스": {
       "num": 671,
       "name": "Florges",
       "baseForme": "Red",
       "types": ["페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 78,
           "atk": 65,
           "def": 68,
           "spa": 112,
           "spd": 154,
           "spe": 75
       },
       "abilities": {
           "0": "플라워베일",
           "H": "공생"
       },
       "heightm": 1.1,
       "weightkg": 10,
       "color": "White",
       "prevo": "Floette",
       "evoType": "useItem",
       "evoItem": "Shiny Stone",
       "eggGroups": ["Fairy"],
       "cosmeticFormes": ["Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
       "formeOrder": ["Florges", "Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"]
   },
   "메이클": {
       "num": 672,
       "name": "Skiddo",
       "types": ["풀"],
       "baseStats": {
           "hp": 66,
           "atk": 65,
           "def": 48,
           "spa": 62,
           "spd": 57,
           "spe": 52
       },
       "abilities": {
           "0": "초식",
           "H": "풀모피"
       },
       "heightm": 0.9,
       "weightkg": 31,
       "color": "Brown",
       "evos": ["Gogoat"],
       "eggGroups": ["Field"]
   },
   "고고트": {
       "num": 673,
       "name": "Gogoat",
       "types": ["풀"],
       "baseStats": {
           "hp": 123,
           "atk": 100,
           "def": 62,
           "spa": 97,
           "spd": 81,
           "spe": 68
       },
       "abilities": {
           "0": "초식",
           "H": "풀모피"
       },
       "heightm": 1.7,
       "weightkg": 91,
       "color": "Brown",
       "prevo": "Skiddo",
       "evoLevel": 32,
       "eggGroups": ["Field"]
   },
   "판짱": {
       "num": 674,
       "name": "Pancham",
       "types": ["격투"],
       "baseStats": {
           "hp": 67,
           "atk": 82,
           "def": 62,
           "spa": 46,
           "spd": 48,
           "spe": 43
       },
       "abilities": {
           "0": "철주먹",
           "1": "틀깨기",
           "H": "배짱"
       },
       "heightm": 0.6,
       "weightkg": 8,
       "color": "White",
       "evos": ["Pangoro"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "부란다": {
       "num": 675,
       "name": "Pangoro",
       "types": ["격투", "악"],
       "baseStats": {
           "hp": 95,
           "atk": 124,
           "def": 78,
           "spa": 69,
           "spd": 71,
           "spe": 58
       },
       "abilities": {
           "0": "철주먹",
           "1": "틀깨기",
           "H": "배짱"
       },
       "heightm": 2.1,
       "weightkg": 136,
       "color": "White",
       "prevo": "Pancham",
       "evoLevel": 32,
       "evoCondition": "with a Dark-type in the party",
       "eggGroups": ["Field", "Human-Like"]
   },
   "트리미앙": {
       "num": 676,
       "name": "Furfrou",
       "baseForme": "Natural",
       "types": ["노말"],
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 60,
           "spa": 65,
           "spd": 90,
           "spe": 102
       },
       "abilities": {
           "0": "퍼코트"
       },
       "heightm": 1.2,
       "weightkg": 28,
       "color": "White",
       "eggGroups": ["Field"],
       "cosmeticFormes": ["Furfrou-Dandy", "Furfrou-Debutante", "Furfrou-Diamond", "Furfrou-Heart", "Furfrou-Kabuki", "Furfrou-La Reine", "Furfrou-Matron", "Furfrou-Pharaoh", "Furfrou-Star"],
       "formeOrder": ["Furfrou", "Furfrou-Heart", "Furfrou-Star", "Furfrou-Diamond", "Furfrou-Debutante", "Furfrou-Matron", "Furfrou-Dandy", "Furfrou-La Reine", "Furfrou-Kabuki", "Furfrou-Pharaoh"]
   },
   "냐스퍼": {
       "num": 677,
       "name": "Espurr",
       "types": ["에스퍼"],
       "baseStats": {
           "hp": 62,
           "atk": 48,
           "def": 54,
           "spa": 63,
           "spd": 60,
           "spe": 68
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "틈새포착",
           "H": "마이페이스"
       },
       "heightm": 0.3,
       "weightkg": 3.5,
       "color": "Gray",
       "evos": ["Meowstic", "Meowstic-F"],
       "eggGroups": ["Field"]
   },
   "냐오닉스-수컷": {
       "num": 678,
       "name": "Meowstic",
       "baseForme": "M",
       "types": ["에스퍼"],
       "gender": "M",
       "baseStats": {
           "hp": 74,
           "atk": 48,
           "def": 76,
           "spa": 83,
           "spd": 81,
           "spe": 104
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "틈새포착",
           "H": "짓궂은마음"
       },
       "heightm": 0.6,
       "weightkg": 8.5,
       "color": "Blue",
       "prevo": "Espurr",
       "evoLevel": 25,
       "eggGroups": ["Field"],
       "otherFormes": ["Meowstic-F"],
       "formeOrder": ["Meowstic", "Meowstic-F"]
   },
   "냐오닉스-암컷": {
       "num": 678,
       "name": "Meowstic-F",
       "baseSpecies": "Meowstic",
       "forme": "F",
       "types": ["에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 74,
           "atk": 48,
           "def": 76,
           "spa": 83,
           "spd": 81,
           "spe": 104
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "틈새포착",
           "H": "승기"
       },
       "heightm": 0.6,
       "weightkg": 8.5,
       "color": "White",
       "prevo": "Espurr",
       "evoLevel": 25,
       "eggGroups": ["Field"]
   },
   "단칼빙": {
       "num": 679,
       "name": "Honedge",
       "types": ["강철", "고스트"],
       "baseStats": {
           "hp": 45,
           "atk": 80,
           "def": 100,
           "spa": 35,
           "spd": 37,
           "spe": 28
       },
       "abilities": {
           "0": "노가드"
       },
       "heightm": 0.8,
       "weightkg": 2,
       "color": "Brown",
       "evos": ["Doublade"],
       "eggGroups": ["Mineral"]
   },
   "쌍검킬": {
       "num": 680,
       "name": "Doublade",
       "types": ["강철", "고스트"],
       "baseStats": {
           "hp": 59,
           "atk": 110,
           "def": 150,
           "spa": 45,
           "spd": 49,
           "spe": 35
       },
       "abilities": {
           "0": "노가드"
       },
       "heightm": 0.8,
       "weightkg": 4.5,
       "color": "Brown",
       "prevo": "Honedge",
       "evoLevel": 35,
       "evos": ["Aegislash"],
       "eggGroups": ["Mineral"]
   },
   "킬가르도-실드폼": {
       "num": 681,
       "name": "Aegislash",
       "baseForme": "Shield",
       "types": ["강철", "고스트"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 140,
           "spa": 50,
           "spd": 140,
           "spe": 60
       },
       "abilities": {
           "0": "배틀스위치"
       },
       "heightm": 1.7,
       "weightkg": 53,
       "color": "Brown",
       "prevo": "Doublade",
       "evoType": "useItem",
       "evoItem": "Dusk Stone",
       "eggGroups": ["Mineral"],
       "otherFormes": ["Aegislash-Blade"],
       "formeOrder": ["Aegislash", "Aegislash-Blade"]
   },
   "킬가르도-블레이드폼": {
       "num": 681,
       "name": "Aegislash-Blade",
       "baseSpecies": "Aegislash",
       "forme": "Blade",
       "types": ["강철", "고스트"],
       "baseStats": {
           "hp": 60,
           "atk": 140,
           "def": 50,
           "spa": 140,
           "spd": 50,
           "spe": 60
       },
       "abilities": {
           "0": "배틀스위치"
       },
       "heightm": 1.7,
       "weightkg": 53,
       "color": "Brown",
       "eggGroups": ["Mineral"],
       "requiredAbility": "Stance Change",
       "battleOnly": "Aegislash"
   },
   "슈쁘": {
       "num": 682,
       "name": "Spritzee",
       "types": ["페어리"],
       "baseStats": {
           "hp": 78,
           "atk": 52,
           "def": 60,
           "spa": 63,
           "spd": 65,
           "spe": 23
       },
       "abilities": {
           "0": "치유의마음",
           "H": "아로마베일"
       },
       "heightm": 0.2,
       "weightkg": 0.5,
       "color": "Pink",
       "evos": ["Aromatisse"],
       "eggGroups": ["Fairy"]
   },
   "프레프티르": {
       "num": 683,
       "name": "Aromatisse",
       "types": ["페어리"],
       "baseStats": {
           "hp": 101,
           "atk": 72,
           "def": 72,
           "spa": 99,
           "spd": 89,
           "spe": 29
       },
       "abilities": {
           "0": "치유의마음",
           "H": "아로마베일"
       },
       "heightm": 0.8,
       "weightkg": 15.5,
       "color": "Pink",
       "prevo": "Spritzee",
       "evoType": "trade",
       "evoItem": "Sachet",
       "eggGroups": ["Fairy"]
   },
   "나룸퍼프": {
       "num": 684,
       "name": "Swirlix",
       "types": ["페어리"],
       "baseStats": {
           "hp": 62,
           "atk": 48,
           "def": 66,
           "spa": 59,
           "spd": 57,
           "spe": 49
       },
       "abilities": {
           "0": "스위트베일",
           "H": "곡예"
       },
       "heightm": 0.4,
       "weightkg": 3.5,
       "color": "White",
       "evos": ["Slurpuff"],
       "eggGroups": ["Fairy"]
   },
   "나루림": {
       "num": 685,
       "name": "Slurpuff",
       "types": ["페어리"],
       "baseStats": {
           "hp": 82,
           "atk": 80,
           "def": 86,
           "spa": 85,
           "spd": 75,
           "spe": 72
       },
       "abilities": {
           "0": "스위트베일",
           "H": "곡예"
       },
       "heightm": 0.8,
       "weightkg": 5,
       "color": "White",
       "prevo": "Swirlix",
       "evoType": "trade",
       "evoItem": "Whipped Dream",
       "eggGroups": ["Fairy"]
   },
   "오케이징": {
       "num": 686,
       "name": "Inkay",
       "types": ["악", "에스퍼"],
       "baseStats": {
           "hp": 53,
           "atk": 54,
           "def": 53,
           "spa": 37,
           "spd": 46,
           "spe": 45
       },
       "abilities": {
           "0": "심술꾸러기",
           "1": "흡반",
           "H": "틈새포착"
       },
       "heightm": 0.4,
       "weightkg": 3.5,
       "color": "Blue",
       "evos": ["Malamar"],
       "eggGroups": ["Water 1", "Water 2"]
   },
   "칼라마네로": {
       "num": 687,
       "name": "Malamar",
       "types": ["악", "에스퍼"],
       "baseStats": {
           "hp": 86,
           "atk": 92,
           "def": 88,
           "spa": 68,
           "spd": 75,
           "spe": 73
       },
       "abilities": {
           "0": "심술꾸러기",
           "1": "흡반",
           "H": "틈새포착"
       },
       "heightm": 1.5,
       "weightkg": 47,
       "color": "Blue",
       "prevo": "Inkay",
       "evoLevel": 30,
       "evoCondition": "with the console turned upside-down",
       "eggGroups": ["Water 1", "Water 2"]
   },
   "거북손손": {
       "num": 688,
       "name": "Binacle",
       "types": ["바위", "물"],
       "baseStats": {
           "hp": 42,
           "atk": 52,
           "def": 67,
           "spa": 39,
           "spd": 56,
           "spe": 50
       },
       "abilities": {
           "0": "단단한 발톱",
           "1": "스나이퍼",
           "H": "나쁜손버릇"
       },
       "heightm": 0.5,
       "weightkg": 31,
       "color": "Brown",
       "evos": ["Barbaracle"],
       "eggGroups": ["Water 3"]
   },
   "거북손데스": {
       "num": 689,
       "name": "Barbaracle",
       "types": ["바위", "물"],
       "baseStats": {
           "hp": 72,
           "atk": 105,
           "def": 115,
           "spa": 54,
           "spd": 86,
           "spe": 68
       },
       "abilities": {
           "0": "단단한 발톱",
           "1": "스나이퍼",
           "H": "나쁜손버릇"
       },
       "heightm": 1.3,
       "weightkg": 96,
       "color": "Brown",
       "prevo": "Binacle",
       "evoLevel": 39,
       "eggGroups": ["Water 3"]
   },
   "수레기": {
       "num": 690,
       "name": "Skrelp",
       "types": ["독", "물"],
       "baseStats": {
           "hp": 50,
           "atk": 60,
           "def": 60,
           "spa": 60,
           "spd": 60,
           "spe": 30
       },
       "abilities": {
           "0": "독가시",
           "1": "독수",
           "H": "적응력"
       },
       "heightm": 0.5,
       "weightkg": 7.3,
       "color": "Brown",
       "evos": ["Dragalge"],
       "eggGroups": ["Water 1", "Dragon"]
   },
   "드래캄": {
       "num": 691,
       "name": "Dragalge",
       "types": ["독", "드래곤"],
       "baseStats": {
           "hp": 65,
           "atk": 75,
           "def": 90,
           "spa": 97,
           "spd": 123,
           "spe": 44
       },
       "abilities": {
           "0": "독가시",
           "1": "독수",
           "H": "적응력"
       },
       "heightm": 1.8,
       "weightkg": 81.5,
       "color": "Brown",
       "prevo": "Skrelp",
       "evoLevel": 48,
       "eggGroups": ["Water 1", "Dragon"]
   },
   "완철포": {
       "num": 692,
       "name": "Clauncher",
       "types": ["물"],
       "baseStats": {
           "hp": 50,
           "atk": 53,
           "def": 62,
           "spa": 58,
           "spd": 63,
           "spe": 44
       },
       "abilities": {
           "0": "메가런처"
       },
       "heightm": 0.5,
       "weightkg": 8.3,
       "color": "Blue",
       "evos": ["Clawitzer"],
       "eggGroups": ["Water 1", "Water 3"]
   },
   "블로스터": {
       "num": 693,
       "name": "Clawitzer",
       "types": ["물"],
       "baseStats": {
           "hp": 71,
           "atk": 73,
           "def": 88,
           "spa": 120,
           "spd": 89,
           "spe": 59
       },
       "abilities": {
           "0": "메가런처"
       },
       "heightm": 1.3,
       "weightkg": 35.3,
       "color": "Blue",
       "prevo": "Clauncher",
       "evoLevel": 37,
       "eggGroups": ["Water 1", "Water 3"]
   },
   "목도리키텔": {
       "num": 694,
       "name": "Helioptile",
       "types": ["전기", "노말"],
       "baseStats": {
           "hp": 44,
           "atk": 38,
           "def": 33,
           "spa": 61,
           "spd": 43,
           "spe": 70
       },
       "abilities": {
           "0": "건조피부",
           "1": "모래숨기",
           "H": "선파워"
       },
       "heightm": 0.5,
       "weightkg": 6,
       "color": "Yellow",
       "evos": ["Heliolisk"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "일레도리자드": {
       "num": 695,
       "name": "Heliolisk",
       "types": ["전기", "노말"],
       "baseStats": {
           "hp": 62,
           "atk": 55,
           "def": 52,
           "spa": 109,
           "spd": 94,
           "spe": 109
       },
       "abilities": {
           "0": "건조피부",
           "1": "모래숨기",
           "H": "선파워"
       },
       "heightm": 1,
       "weightkg": 21,
       "color": "Yellow",
       "prevo": "Helioptile",
       "evoType": "useItem",
       "evoItem": "Sun Stone",
       "eggGroups": ["Monster", "Dragon"]
   },
   "티고라스": {
       "num": 696,
       "name": "Tyrunt",
       "types": ["바위", "드래곤"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 58,
           "atk": 89,
           "def": 77,
           "spa": 45,
           "spd": 45,
           "spe": 48
       },
       "abilities": {
           "0": "옹골찬턱",
           "H": "옹골참"
       },
       "heightm": 0.8,
       "weightkg": 26,
       "color": "Brown",
       "evos": ["Tyrantrum"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "견고라스": {
       "num": 697,
       "name": "Tyrantrum",
       "types": ["바위", "드래곤"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 82,
           "atk": 121,
           "def": 119,
           "spa": 69,
           "spd": 59,
           "spe": 71
       },
       "abilities": {
           "0": "옹골찬턱",
           "H": "돌머리"
       },
       "heightm": 2.5,
       "weightkg": 270,
       "color": "Red",
       "prevo": "Tyrunt",
       "evoLevel": 39,
       "eggGroups": ["Monster", "Dragon"]
   },
   "아마루스": {
       "num": 698,
       "name": "Amaura",
       "types": ["바위", "얼음"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 77,
           "atk": 59,
           "def": 50,
           "spa": 67,
           "spd": 63,
           "spe": 46
       },
       "abilities": {
           "0": "프리즈스킨",
           "H": "눈퍼뜨리기"
       },
       "heightm": 1.3,
       "weightkg": 25.2,
       "color": "Blue",
       "evos": ["Aurorus"],
       "eggGroups": ["Monster"]
   },
   "아마루르가": {
       "num": 699,
       "name": "Aurorus",
       "types": ["바위", "얼음"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 123,
           "atk": 77,
           "def": 72,
           "spa": 99,
           "spd": 92,
           "spe": 58
       },
       "abilities": {
           "0": "프리즈스킨",
           "H": "눈퍼뜨리기"
       },
       "heightm": 2.7,
       "weightkg": 225,
       "color": "Blue",
       "prevo": "Amaura",
       "evoLevel": 39,
       "eggGroups": ["Monster"]
   },
   "님피아": {
       "num": 700,
       "name": "Sylveon",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 95,
           "atk": 65,
           "def": 65,
           "spa": 110,
           "spd": 130,
           "spe": 60
       },
       "abilities": {
           "0": "헤롱헤롱 바디",
           "H": "페어리스킨"
       },
       "heightm": 1,
       "weightkg": 23.5,
       "color": "Pink",
       "prevo": "Eevee",
       "evoType": "levelExtra",
       "evoCondition": "with a Fairy-type move and two levels of Affection",
       "eggGroups": ["Field"]
   },
   "루차불": {
       "num": 701,
       "name": "Hawlucha",
       "types": ["격투", "비행"],
       "baseStats": {
           "hp": 78,
           "atk": 92,
           "def": 75,
           "spa": 74,
           "spd": 63,
           "spe": 118
       },
       "abilities": {
           "0": "유연",
           "1": "곡예",
           "H": "틀깨기"
       },
       "heightm": 0.8,
       "weightkg": 21.5,
       "color": "Green",
       "eggGroups": ["Flying", "Human-Like"]
   },
   "데덴네": {
       "num": 702,
       "name": "Dedenne",
       "types": ["전기", "페어리"],
       "baseStats": {
           "hp": 67,
           "atk": 58,
           "def": 57,
           "spa": 81,
           "spd": 67,
           "spe": 101
       },
       "abilities": {
           "0": "볼주머니",
           "1": "픽업",
           "H": "플러스"
       },
       "heightm": 0.2,
       "weightkg": 2.2,
       "color": "Yellow",
       "eggGroups": ["Field", "Fairy"]
   },
   "멜리시": {
       "num": 703,
       "name": "Carbink",
       "types": ["바위", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 50,
           "def": 150,
           "spa": 50,
           "spd": 150,
           "spe": 50
       },
       "abilities": {
           "0": "클리어 바디",
           "H": "옹골참"
       },
       "heightm": 0.3,
       "weightkg": 5.7,
       "color": "Gray",
       "eggGroups": ["Fairy", "Mineral"]
   },
   "미끄메라": {
       "num": 704,
       "name": "Goomy",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 45,
           "atk": 50,
           "def": 35,
           "spa": 55,
           "spd": 75,
           "spe": 40
       },
       "abilities": {
           "0": "초식",
           "1": "촉촉바디",
           "H": "미끈미끈"
       },
       "heightm": 0.3,
       "weightkg": 2.8,
       "color": "Purple",
       "evos": ["Sliggoo"],
       "eggGroups": ["Dragon"]
   },
   "미끄네일": {
       "num": 705,
       "name": "Sliggoo",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 68,
           "atk": 75,
           "def": 53,
           "spa": 83,
           "spd": 113,
           "spe": 60
       },
       "abilities": {
           "0": "초식",
           "1": "촉촉바디",
           "H": "미끈미끈"
       },
       "heightm": 0.8,
       "weightkg": 17.5,
       "color": "Purple",
       "prevo": "Goomy",
       "evoLevel": 40,
       "evos": ["Goodra"],
       "eggGroups": ["Dragon"]
   },
   "미끄래곤": {
       "num": 706,
       "name": "Goodra",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 90,
           "atk": 100,
           "def": 70,
           "spa": 110,
           "spd": 150,
           "spe": 80
       },
       "abilities": {
           "0": "초식",
           "1": "촉촉바디",
           "H": "미끈미끈"
       },
       "heightm": 2,
       "weightkg": 150.5,
       "color": "Purple",
       "prevo": "Sliggoo",
       "evoLevel": 50,
       "eggGroups": ["Dragon"]
   },
   "클레피": {
       "num": 707,
       "name": "Klefki",
       "types": ["강철", "페어리"],
       "baseStats": {
           "hp": 57,
           "atk": 80,
           "def": 91,
           "spa": 80,
           "spd": 87,
           "spe": 75
       },
       "abilities": {
           "0": "짓궂은마음",
           "H": "매지션"
       },
       "heightm": 0.2,
       "weightkg": 3,
       "color": "Gray",
       "eggGroups": ["Mineral"]
   },
   "나목령": {
       "num": 708,
       "name": "Phantump",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 43,
           "atk": 70,
           "def": 48,
           "spa": 50,
           "spd": 60,
           "spe": 38
       },
       "abilities": {
           "0": "자연회복",
           "1": "통찰",
           "H": "수확"
       },
       "heightm": 0.4,
       "weightkg": 7,
       "color": "Brown",
       "evos": ["Trevenant"],
       "eggGroups": ["Grass", "Amorphous"]
   },
   "대로트": {
       "num": 709,
       "name": "Trevenant",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 85,
           "atk": 110,
           "def": 76,
           "spa": 65,
           "spd": 82,
           "spe": 56
       },
       "abilities": {
           "0": "자연회복",
           "1": "통찰",
           "H": "수확"
       },
       "heightm": 1.5,
       "weightkg": 71,
       "color": "Brown",
       "prevo": "Phantump",
       "evoType": "trade",
       "eggGroups": ["Grass", "Amorphous"]
   },
   "호바귀": {
       "num": 710,
       "name": "Pumpkaboo",
       "baseForme": "Average",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 49,
           "atk": 66,
           "def": 70,
           "spa": 44,
           "spd": 55,
           "spe": 51
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 0.4,
       "weightkg": 5,
       "color": "Brown",
       "evos": ["Gourgeist"],
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"],
       "formeOrder": ["Pumpkaboo", "Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"]
   },
   "호바귀-소": {
       "num": 710,
       "name": "Pumpkaboo-Small",
       "baseSpecies": "Pumpkaboo",
       "forme": "Small",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 44,
           "atk": 66,
           "def": 70,
           "spa": 44,
           "spd": 55,
           "spe": 56
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 0.3,
       "weightkg": 3.5,
       "color": "Brown",
       "evos": ["Gourgeist-Small"],
       "eggGroups": ["Amorphous"]
   },
   "호바귀-대": {
       "num": 710,
       "name": "Pumpkaboo-Large",
       "baseSpecies": "Pumpkaboo",
       "forme": "Large",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 54,
           "atk": 66,
           "def": 70,
           "spa": 44,
           "spd": 55,
           "spe": 46
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 0.5,
       "weightkg": 7.5,
       "color": "Brown",
       "evos": ["Gourgeist-Large"],
       "eggGroups": ["Amorphous"]
   },
   "호바귀-특대": {
       "num": 710,
       "name": "Pumpkaboo-Super",
       "baseSpecies": "Pumpkaboo",
       "forme": "Super",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 59,
           "atk": 66,
           "def": 70,
           "spa": 44,
           "spd": 55,
           "spe": 41
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 0.8,
       "weightkg": 15,
       "color": "Brown",
       "evos": ["Gourgeist-Super"],
       "eggGroups": ["Amorphous"]
   },
   "펌킨인": {
       "num": 711,
       "name": "Gourgeist",
       "baseForme": "Average",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 65,
           "atk": 90,
           "def": 122,
           "spa": 58,
           "spd": 75,
           "spe": 84
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 0.9,
       "weightkg": 12.5,
       "color": "Brown",
       "prevo": "Pumpkaboo",
       "evoType": "trade",
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"],
       "formeOrder": ["Gourgeist", "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"]
   },
   "펌킨인-소": {
       "num": 711,
       "name": "Gourgeist-Small",
       "baseSpecies": "Gourgeist",
       "forme": "Small",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 55,
           "atk": 85,
           "def": 122,
           "spa": 58,
           "spd": 75,
           "spe": 99
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 0.7,
       "weightkg": 9.5,
       "color": "Brown",
       "prevo": "Pumpkaboo-Small",
       "evoType": "trade",
       "eggGroups": ["Amorphous"]
   },
   "펌킨인-중": {
       "num": 711,
       "name": "Gourgeist-Large",
       "baseSpecies": "Gourgeist",
       "forme": "Large",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 75,
           "atk": 95,
           "def": 122,
           "spa": 58,
           "spd": 75,
           "spe": 69
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 1.1,
       "weightkg": 14,
       "color": "Brown",
       "prevo": "Pumpkaboo-Large",
       "evoType": "trade",
       "eggGroups": ["Amorphous"]
   },
   "펌킨인-특대": {
       "num": 711,
       "name": "Gourgeist-Super",
       "baseSpecies": "Gourgeist",
       "forme": "Super",
       "types": ["고스트", "풀"],
       "baseStats": {
           "hp": 85,
           "atk": 100,
           "def": 122,
           "spa": 58,
           "spd": 75,
           "spe": 54
       },
       "abilities": {
           "0": "픽업",
           "1": "통찰",
           "H": "불면"
       },
       "heightm": 1.7,
       "weightkg": 39,
       "color": "Brown",
       "prevo": "Pumpkaboo-Super",
       "evoType": "trade",
       "eggGroups": ["Amorphous"]
   },
   "꽁어름": {
       "num": 712,
       "name": "Bergmite",
       "types": ["얼음"],
       "baseStats": {
           "hp": 55,
           "atk": 69,
           "def": 85,
           "spa": 32,
           "spd": 35,
           "spe": 28
       },
       "abilities": {
           "0": "마이페이스",
           "1": "아이스바디",
           "H": "옹골참"
       },
       "heightm": 1,
       "weightkg": 99.5,
       "color": "Blue",
       "evos": ["Avalugg"],
       "eggGroups": ["Monster", "Mineral"]
   },
   "크레베이스": {
       "num": 713,
       "name": "Avalugg",
       "types": ["얼음"],
       "baseStats": {
           "hp": 95,
           "atk": 117,
           "def": 184,
           "spa": 44,
           "spd": 46,
           "spe": 28
       },
       "abilities": {
           "0": "마이페이스",
           "1": "아이스바디",
           "H": "옹골참"
       },
       "heightm": 2,
       "weightkg": 505,
       "color": "Blue",
       "prevo": "Bergmite",
       "evoLevel": 37,
       "eggGroups": ["Monster", "Mineral"]
   },
   "음뱃": {
       "num": 714,
       "name": "Noibat",
       "types": ["비행", "드래곤"],
       "baseStats": {
           "hp": 40,
           "atk": 30,
           "def": 35,
           "spa": 45,
           "spd": 40,
           "spe": 55
       },
       "abilities": {
           "0": "통찰",
           "1": "틈새포착",
           "H": "텔레파시"
       },
       "heightm": 0.5,
       "weightkg": 8,
       "color": "Purple",
       "evos": ["Noivern"],
       "eggGroups": ["Flying", "Dragon"]
   },
   "음번": {
       "num": 715,
       "name": "Noivern",
       "types": ["비행", "드래곤"],
       "baseStats": {
           "hp": 85,
           "atk": 70,
           "def": 80,
           "spa": 97,
           "spd": 80,
           "spe": 123
       },
       "abilities": {
           "0": "통찰",
           "1": "틈새포착",
           "H": "텔레파시"
       },
       "heightm": 1.5,
       "weightkg": 85,
       "color": "Purple",
       "prevo": "Noibat",
       "evoLevel": 48,
       "eggGroups": ["Flying", "Dragon"]
   },
   "제르네아스": {
       "num": 716,
       "name": "Xerneas",
       "baseForme": "Active",
       "types": ["페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 126,
           "atk": 131,
           "def": 95,
           "spa": 131,
           "spd": 98,
           "spe": 99
       },
       "abilities": {
           "0": "페어리오라"
       },
       "heightm": 3,
       "weightkg": 215,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Xerneas-Neutral"],
       "formeOrder": ["Xerneas-Neutral", "Xerneas"]
   },
   "이벨타르": {
       "num": 717,
       "name": "Yveltal",
       "types": ["악", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 126,
           "atk": 131,
           "def": 95,
           "spa": 131,
           "spd": 98,
           "spe": 99
       },
       "abilities": {
           "0": "다크오라"
       },
       "heightm": 5.8,
       "weightkg": 203,
       "color": "Red",
       "eggGroups": ["Undiscovered"]
   },
   "지가르데-50%": {
       "num": 718,
       "name": "Zygarde",
       "baseForme": "50%",
       "types": ["드래곤", "땅"],
       "gender": "N",
       "baseStats": {
           "hp": 108,
           "atk": 100,
           "def": 121,
           "spa": 81,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "오라브레이크",
           "S": "Power Construct"
       },
       "heightm": 5,
       "weightkg": 305,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Zygarde-10%", "Zygarde-Complete"],
       "formeOrder": ["Zygarde", "Zygarde-10%", "Zygarde-10%", "Zygarde", "Zygarde-Complete"]
   },
   "지가르데-10%": {
       "num": 718,
       "name": "Zygarde-10%",
       "baseSpecies": "Zygarde",
       "forme": "10%",
       "types": ["드래곤", "땅"],
       "gender": "N",
       "baseStats": {
           "hp": 54,
           "atk": 100,
           "def": 71,
           "spa": 61,
           "spd": 85,
           "spe": 115
       },
       "abilities": {
           "0": "오라브레이크",
           "S": "Power Construct"
       },
       "heightm": 1.2,
       "weightkg": 33.5,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Zygarde",
       "gen": 7
   },
   "지가르데-퍼펙트폼": {
       "num": 718,
       "name": "Zygarde-Complete",
       "baseSpecies": "Zygarde",
       "forme": "Complete",
       "types": ["드래곤", "땅"],
       "gender": "N",
       "baseStats": {
           "hp": 216,
           "atk": 100,
           "def": 121,
           "spa": 91,
           "spd": 95,
           "spe": 85
       },
       "abilities": {
           "0": "스웜체인지"
       },
       "heightm": 4.5,
       "weightkg": 610,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "requiredAbility": "Power Construct",
       "battleOnly": ["Zygarde", "Zygarde-10%"],
       "gen": 7
   },
   "디안시": {
       "num": 719,
       "name": "Diancie",
       "types": ["바위", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 50,
           "atk": 100,
           "def": 150,
           "spa": 100,
           "spd": 150,
           "spe": 50
       },
       "abilities": {
           "0": "클리어 바디"
       },
       "heightm": 0.7,
       "weightkg": 8.8,
       "color": "Pink",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Diancie-Mega"],
       "formeOrder": ["Diancie", "Diancie-Mega"]
   },
   "후파": {
       "num": 720,
       "name": "Hoopa",
       "baseForme": "Confined",
       "types": ["에스퍼", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 110,
           "def": 60,
           "spa": 150,
           "spd": 130,
           "spe": 70
       },
       "abilities": {
           "0": "매지션"
       },
       "heightm": 0.5,
       "weightkg": 9,
       "color": "Purple",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Hoopa-Unbound"],
       "formeOrder": ["Hoopa", "Hoopa-Unbound"]
   },
   "후파-굴레를벗어난": {
       "num": 720,
       "name": "Hoopa-Unbound",
       "baseSpecies": "Hoopa",
       "forme": "Unbound",
       "types": ["에스퍼", "악"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 160,
           "def": 60,
           "spa": 170,
           "spd": 130,
           "spe": 80
       },
       "abilities": {
           "0": "매지션"
       },
       "heightm": 6.5,
       "weightkg": 490,
       "color": "Purple",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Hoopa"
   },
   "볼케니온": {
       "num": 721,
       "name": "Volcanion",
       "types": ["불꽃", "물"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 110,
           "def": 120,
           "spa": 130,
           "spd": 90,
           "spe": 70
       },
       "abilities": {
           "0": "저수"
       },
       "heightm": 1.7,
       "weightkg": 195,
       "color": "Brown",
       "eggGroups": ["Undiscovered"]
   },
   "나몰빼미": {
       "num": 722,
       "name": "Rowlet",
       "types": ["풀", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 68,
           "atk": 55,
           "def": 55,
           "spa": 50,
           "spd": 50,
           "spe": 42
       },
       "abilities": {
           "0": "심록",
           "H": "원격"
       },
       "heightm": 0.3,
       "weightkg": 1.5,
       "color": "Brown",
       "evos": ["Dartrix"],
       "eggGroups": ["Flying"]
   },
   "빼미스로우": {
       "num": 723,
       "name": "Dartrix",
       "types": ["풀", "비행"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 78,
           "atk": 75,
           "def": 75,
           "spa": 70,
           "spd": 70,
           "spe": 52
       },
       "abilities": {
           "0": "심록",
           "H": "원격"
       },
       "heightm": 0.7,
       "weightkg": 16,
       "color": "Brown",
       "prevo": "Rowlet",
       "evoLevel": 17,
       "evos": ["Decidueye"],
       "eggGroups": ["Flying"]
   },
   "모크나이퍼": {
       "num": 724,
       "name": "Decidueye",
       "types": ["풀", "고스트"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 78,
           "atk": 107,
           "def": 75,
           "spa": 100,
           "spd": 100,
           "spe": 70
       },
       "abilities": {
           "0": "심록",
           "H": "원격"
       },
       "heightm": 1.6,
       "weightkg": 36.6,
       "color": "Brown",
       "prevo": "Dartrix",
       "evoLevel": 34,
       "eggGroups": ["Flying"]
   },
   "냐오불": {
       "num": 725,
       "name": "Litten",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 45,
           "atk": 65,
           "def": 40,
           "spa": 60,
           "spd": 40,
           "spe": 70
       },
       "abilities": {
           "0": "맹화",
           "H": "위협"
       },
       "heightm": 0.4,
       "weightkg": 4.3,
       "color": "Red",
       "evos": ["Torracat"],
       "eggGroups": ["Field"]
   },
   "냐오히트": {
       "num": 726,
       "name": "Torracat",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 85,
           "def": 50,
           "spa": 80,
           "spd": 50,
           "spe": 90
       },
       "abilities": {
           "0": "맹화",
           "H": "위협"
       },
       "heightm": 0.7,
       "weightkg": 25,
       "color": "Red",
       "prevo": "Litten",
       "evoLevel": 17,
       "evos": ["Incineroar"],
       "eggGroups": ["Field"]
   },
   "어흥염": {
       "num": 727,
       "name": "Incineroar",
       "types": ["불꽃", "악"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 95,
           "atk": 115,
           "def": 90,
           "spa": 80,
           "spd": 90,
           "spe": 60
       },
       "abilities": {
           "0": "맹화",
           "H": "위협"
       },
       "heightm": 1.8,
       "weightkg": 83,
       "color": "Red",
       "prevo": "Torracat",
       "evoLevel": 34,
       "eggGroups": ["Field"]
   },
   "누리공": {
       "num": 728,
       "name": "Popplio",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 54,
           "def": 54,
           "spa": 66,
           "spd": 56,
           "spe": 40
       },
       "abilities": {
           "0": "급류",
           "H": "촉촉보이스"
       },
       "heightm": 0.4,
       "weightkg": 7.5,
       "color": "Blue",
       "evos": ["Brionne"],
       "eggGroups": ["Water 1", "Field"]
   },
   "키요공": {
       "num": 729,
       "name": "Brionne",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 69,
           "def": 69,
           "spa": 91,
           "spd": 81,
           "spe": 50
       },
       "abilities": {
           "0": "급류",
           "H": "촉촉보이스"
       },
       "heightm": 0.6,
       "weightkg": 17.5,
       "color": "Blue",
       "prevo": "Popplio",
       "evoLevel": 17,
       "evos": ["Primarina"],
       "eggGroups": ["Water 1", "Field"]
   },
   "누리레느": {
       "num": 730,
       "name": "Primarina",
       "types": ["물", "페어리"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 80,
           "atk": 74,
           "def": 74,
           "spa": 126,
           "spd": 116,
           "spe": 60
       },
       "abilities": {
           "0": "급류",
           "H": "촉촉보이스"
       },
       "heightm": 1.8,
       "weightkg": 44,
       "color": "Blue",
       "prevo": "Brionne",
       "evoLevel": 34,
       "eggGroups": ["Water 1", "Field"]
   },
   "콕코구리": {
       "num": 731,
       "name": "Pikipek",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 35,
           "atk": 75,
           "def": 30,
           "spa": 30,
           "spd": 30,
           "spe": 65
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "스킬링크",
           "H": "픽업"
       },
       "heightm": 0.3,
       "weightkg": 1.2,
       "color": "Black",
       "evos": ["Trumbeak"],
       "eggGroups": ["Flying"]
   },
   "크라파": {
       "num": 732,
       "name": "Trumbeak",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 55,
           "atk": 85,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 75
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "스킬링크",
           "H": "픽업"
       },
       "heightm": 0.6,
       "weightkg": 14.8,
       "color": "Black",
       "prevo": "Pikipek",
       "evoLevel": 14,
       "evos": ["Toucannon"],
       "eggGroups": ["Flying"]
   },
   "왕큰부리": {
       "num": 733,
       "name": "Toucannon",
       "types": ["노말", "비행"],
       "baseStats": {
           "hp": 80,
           "atk": 120,
           "def": 75,
           "spa": 75,
           "spd": 75,
           "spe": 60
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "스킬링크",
           "H": "우격다짐"
       },
       "heightm": 1.1,
       "weightkg": 26,
       "color": "Black",
       "prevo": "Trumbeak",
       "evoLevel": 28,
       "eggGroups": ["Flying"]
   },
   "영구스": {
       "num": 734,
       "name": "Yungoos",
       "types": ["노말"],
       "baseStats": {
           "hp": 48,
           "atk": 70,
           "def": 30,
           "spa": 30,
           "spd": 30,
           "spe": 45
       },
       "abilities": {
           "0": "잠복",
           "1": "옹골찬턱",
           "H": "적응력"
       },
       "heightm": 0.4,
       "weightkg": 6,
       "color": "Brown",
       "evos": ["Gumshoos"],
       "eggGroups": ["Field"]
   },
   "형사구스": {
       "num": 735,
       "name": "Gumshoos",
       "types": ["노말"],
       "baseStats": {
           "hp": 88,
           "atk": 110,
           "def": 60,
           "spa": 55,
           "spd": 60,
           "spe": 45
       },
       "abilities": {
           "0": "잠복",
           "1": "옹골찬턱",
           "H": "적응력"
       },
       "heightm": 0.7,
       "weightkg": 14.2,
       "color": "Brown",
       "prevo": "Yungoos",
       "evoLevel": 20,
       "eggGroups": ["Field"],
       "otherFormes": ["Gumshoos-Totem"],
       "formeOrder": ["Gumshoos", "Gumshoos-Totem"]
   },
   "턱지충이": {
       "num": 736,
       "name": "Grubbin",
       "types": ["벌레"],
       "baseStats": {
           "hp": 47,
           "atk": 62,
           "def": 45,
           "spa": 55,
           "spd": 45,
           "spe": 46
       },
       "abilities": {
           "0": "벌레의 알림"
       },
       "heightm": 0.4,
       "weightkg": 4.4,
       "color": "Gray",
       "evos": ["Charjabug"],
       "eggGroups": ["Bug"]
   },
   "전지충이": {
       "num": 737,
       "name": "Charjabug",
       "types": ["벌레", "전기"],
       "baseStats": {
           "hp": 57,
           "atk": 82,
           "def": 95,
           "spa": 55,
           "spd": 75,
           "spe": 36
       },
       "abilities": {
           "0": "배터리"
       },
       "heightm": 0.5,
       "weightkg": 10.5,
       "color": "Green",
       "prevo": "Grubbin",
       "evoLevel": 20,
       "evos": ["Vikavolt"],
       "eggGroups": ["Bug"]
   },
   "투구뿌논": {
       "num": 738,
       "name": "Vikavolt",
       "types": ["벌레", "전기"],
       "baseStats": {
           "hp": 77,
           "atk": 70,
           "def": 90,
           "spa": 145,
           "spd": 75,
           "spe": 43
       },
       "abilities": {
           "0": "부유"
       },
       "heightm": 1.5,
       "weightkg": 45,
       "color": "Blue",
       "prevo": "Charjabug",
       "evoType": "useItem",
       "evoItem": "Thunder Stone",
       "eggGroups": ["Bug"],
       "otherFormes": ["Vikavolt-Totem"],
       "formeOrder": ["Vikavolt", "Vikavolt-Totem"]
   },
   "오기지게": {
       "num": 739,
       "name": "Crabrawler",
       "types": ["격투"],
       "baseStats": {
           "hp": 47,
           "atk": 82,
           "def": 57,
           "spa": 42,
           "spd": 47,
           "spe": 63
       },
       "abilities": {
           "0": "괴력집게",
           "1": "철주먹",
           "H": "분노의 경혈"
       },
       "heightm": 0.6,
       "weightkg": 7,
       "color": "Purple",
       "evos": ["Crabominable"],
       "eggGroups": ["Water 3"]
   },
   "모단단게": {
       "num": 740,
       "name": "Crabominable",
       "types": ["격투", "얼음"],
       "baseStats": {
           "hp": 97,
           "atk": 132,
           "def": 77,
           "spa": 62,
           "spd": 67,
           "spe": 43
       },
       "abilities": {
           "0": "괴력집게",
           "1": "철주먹",
           "H": "분노의 경혈"
       },
       "heightm": 1.7,
       "weightkg": 180,
       "color": "White",
       "prevo": "Crabrawler",
       "evoType": "levelExtra",
       "evoCondition": "at Mount Lanakila",
       "eggGroups": ["Water 3"]
   },
   "춤추새-이글이글": {
       "num": 741,
       "name": "Oricorio",
       "baseForme": "Baile",
       "types": ["불꽃", "비행"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 75,
           "atk": 70,
           "def": 70,
           "spa": 98,
           "spd": 70,
           "spe": 93
       },
       "abilities": {
           "0": "무희"
       },
       "heightm": 0.6,
       "weightkg": 3.4,
       "color": "Red",
       "eggGroups": ["Flying"],
       "otherFormes": ["Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"],
       "formeOrder": ["Oricorio", "Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"]
   },
   "춤추새-파칙파칙": {
       "num": 741,
       "name": "Oricorio-Pom-Pom",
       "baseSpecies": "Oricorio",
       "forme": "Pom-Pom",
       "types": ["전기", "비행"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 75,
           "atk": 70,
           "def": 70,
           "spa": 98,
           "spd": 70,
           "spe": 93
       },
       "abilities": {
           "0": "무희"
       },
       "heightm": 0.6,
       "weightkg": 3.4,
       "color": "Yellow",
       "eggGroups": ["Flying"],
       "changesFrom": "Oricorio"
   },
   "춤추새-훌라훌라": {
       "num": 741,
       "name": "Oricorio-Pa'u",
       "baseSpecies": "Oricorio",
       "forme": "Pa'u",
       "types": ["에스퍼", "비행"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 75,
           "atk": 70,
           "def": 70,
           "spa": 98,
           "spd": 70,
           "spe": 93
       },
       "abilities": {
           "0": "무희"
       },
       "heightm": 0.6,
       "weightkg": 3.4,
       "color": "Pink",
       "eggGroups": ["Flying"],
       "changesFrom": "Oricorio"
   },
   "춤추새-하늘하늘": {
       "num": 741,
       "name": "Oricorio-Sensu",
       "baseSpecies": "Oricorio",
       "forme": "Sensu",
       "types": ["고스트", "비행"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 75,
           "atk": 70,
           "def": 70,
           "spa": 98,
           "spd": 70,
           "spe": 93
       },
       "abilities": {
           "0": "무희"
       },
       "heightm": 0.6,
       "weightkg": 3.4,
       "color": "Purple",
       "eggGroups": ["Flying"],
       "changesFrom": "Oricorio"
   },
   "에블리": {
       "num": 742,
       "name": "Cutiefly",
       "types": ["벌레", "페어리"],
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 40,
           "spa": 55,
           "spd": 40,
           "spe": 84
       },
       "abilities": {
           "0": "꿀모으기",
           "1": "인분",
           "H": "스위트베일"
       },
       "heightm": 0.1,
       "weightkg": 0.2,
       "color": "Yellow",
       "evos": ["Ribombee"],
       "eggGroups": ["Bug", "Fairy"]
   },
   "에리본": {
       "num": 743,
       "name": "Ribombee",
       "types": ["벌레", "페어리"],
       "baseStats": {
           "hp": 60,
           "atk": 55,
           "def": 60,
           "spa": 95,
           "spd": 70,
           "spe": 124
       },
       "abilities": {
           "0": "꿀모으기",
           "1": "인분",
           "H": "스위트베일"
       },
       "heightm": 0.2,
       "weightkg": 0.5,
       "color": "Yellow",
       "prevo": "Cutiefly",
       "evoLevel": 25,
       "eggGroups": ["Bug", "Fairy"],
       "otherFormes": ["Ribombee-Totem"],
       "formeOrder": ["Ribombee", "Ribombee-Totem"]
   },
   "암멍이": {
       "num": 744,
       "name": "Rockruff",
       "baseForme": "Midday",
       "types": ["바위"],
       "baseStats": {
           "hp": 45,
           "atk": 65,
           "def": 40,
           "spa": 30,
           "spd": 40,
           "spe": 60
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "의기양양",
           "H": "불굴의 마음",
           "S": "Own Tempo"
       },
       "heightm": 0.5,
       "weightkg": 9.2,
       "color": "Brown",
       "evos": ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
       "eggGroups": ["Field"],
       "formeOrder": ["Rockruff", "Rockruff"]
   },
   "루가루암-한낮": {
       "num": 745,
       "name": "Lycanroc",
       "baseForme": "Midday",
       "types": ["바위"],
       "baseStats": {
           "hp": 75,
           "atk": 115,
           "def": 65,
           "spa": 55,
           "spd": 65,
           "spe": 112
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "모래헤치기",
           "H": "불굴의 마음"
       },
       "heightm": 0.8,
       "weightkg": 25,
       "color": "Brown",
       "prevo": "Rockruff",
       "evoLevel": 25,
       "evoCondition": "during the day",
       "eggGroups": ["Field"],
       "otherFormes": ["Lycanroc-Midnight", "Lycanroc-Dusk"],
       "formeOrder": ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"]
   },
   "루가루암-한밤": {
       "num": 745,
       "name": "Lycanroc-Midnight",
       "baseSpecies": "Lycanroc",
       "forme": "Midnight",
       "types": ["바위"],
       "baseStats": {
           "hp": 85,
           "atk": 115,
           "def": 75,
           "spa": 55,
           "spd": 75,
           "spe": 82
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "의기양양",
           "H": "노가드"
       },
       "heightm": 1.1,
       "weightkg": 25,
       "color": "Red",
       "prevo": "Rockruff",
       "evoLevel": 25,
       "evoCondition": "during the night",
       "eggGroups": ["Field"]
   },
   "루가루암-황혼": {
       "num": 745,
       "name": "Lycanroc-Dusk",
       "baseSpecies": "Lycanroc",
       "forme": "Dusk",
       "types": ["바위"],
       "baseStats": {
           "hp": 75,
           "atk": 117,
           "def": 65,
           "spa": 55,
           "spd": 65,
           "spe": 110
       },
       "abilities": {
           "0": "단단한 발톱"
       },
       "heightm": 0.8,
       "weightkg": 25,
       "color": "Brown",
       "prevo": "Rockruff",
       "evoLevel": 25,
       "evoCondition": "from a special Rockruff",
       "eggGroups": ["Field"]
   },
   "약어리": {
       "num": 746,
       "name": "Wishiwashi",
       "baseForme": "Solo",
       "types": ["물"],
       "baseStats": {
           "hp": 45,
           "atk": 20,
           "def": 20,
           "spa": 25,
           "spd": 25,
           "spe": 40
       },
       "abilities": {
           "0": "어군"
       },
       "heightm": 0.2,
       "weightkg": 0.3,
       "color": "Blue",
       "eggGroups": ["Water 2"],
       "otherFormes": ["Wishiwashi-School"],
       "formeOrder": ["Wishiwashi", "Wishiwashi-School"]
   },
   "약어리-군집": {
       "num": 746,
       "name": "Wishiwashi-School",
       "baseSpecies": "Wishiwashi",
       "forme": "School",
       "types": ["물"],
       "baseStats": {
           "hp": 45,
           "atk": 140,
           "def": 130,
           "spa": 140,
           "spd": 135,
           "spe": 30
       },
       "abilities": {
           "0": "어군"
       },
       "heightm": 8.2,
       "weightkg": 78.6,
       "color": "Blue",
       "eggGroups": ["Water 2"],
       "requiredAbility": "Schooling",
       "battleOnly": "Wishiwashi"
   },
   "시마사리": {
       "num": 747,
       "name": "Mareanie",
       "types": ["독", "물"],
       "baseStats": {
           "hp": 50,
           "atk": 53,
           "def": 62,
           "spa": 43,
           "spd": 52,
           "spe": 45
       },
       "abilities": {
           "0": "무도한행동",
           "1": "유연",
           "H": "재생력"
       },
       "heightm": 0.4,
       "weightkg": 8,
       "color": "Blue",
       "evos": ["Toxapex"],
       "eggGroups": ["Water 1"]
   },
   "더시마사리": {
       "num": 748,
       "name": "Toxapex",
       "types": ["독", "물"],
       "baseStats": {
           "hp": 50,
           "atk": 63,
           "def": 152,
           "spa": 53,
           "spd": 142,
           "spe": 35
       },
       "abilities": {
           "0": "무도한행동",
           "1": "유연",
           "H": "재생력"
       },
       "heightm": 0.7,
       "weightkg": 14.5,
       "color": "Blue",
       "prevo": "Mareanie",
       "evoLevel": 38,
       "eggGroups": ["Water 1"]
   },
   "머드나기": {
       "num": 749,
       "name": "Mudbray",
       "types": ["땅"],
       "baseStats": {
           "hp": 70,
           "atk": 100,
           "def": 70,
           "spa": 45,
           "spd": 55,
           "spe": 45
       },
       "abilities": {
           "0": "마이페이스",
           "1": "지구력",
           "H": "정신력"
       },
       "heightm": 1,
       "weightkg": 110,
       "color": "Brown",
       "evos": ["Mudsdale"],
       "eggGroups": ["Field"]
   },
   "만마드": {
       "num": 750,
       "name": "Mudsdale",
       "types": ["땅"],
       "baseStats": {
           "hp": 100,
           "atk": 125,
           "def": 100,
           "spa": 55,
           "spd": 85,
           "spe": 35
       },
       "abilities": {
           "0": "마이페이스",
           "1": "지구력",
           "H": "정신력"
       },
       "heightm": 2.5,
       "weightkg": 920,
       "color": "Brown",
       "prevo": "Mudbray",
       "evoLevel": 30,
       "eggGroups": ["Field"]
   },
   "물거미": {
       "num": 751,
       "name": "Dewpider",
       "types": ["물", "벌레"],
       "baseStats": {
           "hp": 38,
           "atk": 40,
           "def": 52,
           "spa": 40,
           "spd": 72,
           "spe": 27
       },
       "abilities": {
           "0": "수포",
           "H": "저수"
       },
       "heightm": 0.3,
       "weightkg": 4,
       "color": "Green",
       "evos": ["Araquanid"],
       "eggGroups": ["Water 1", "Bug"]
   },
   "깨비물거미": {
       "num": 752,
       "name": "Araquanid",
       "types": ["물", "벌레"],
       "baseStats": {
           "hp": 68,
           "atk": 70,
           "def": 92,
           "spa": 50,
           "spd": 132,
           "spe": 42
       },
       "abilities": {
           "0": "수포",
           "H": "저수"
       },
       "heightm": 1.8,
       "weightkg": 82,
       "color": "Green",
       "prevo": "Dewpider",
       "evoLevel": 22,
       "eggGroups": ["Water 1", "Bug"],
       "otherFormes": ["Araquanid-Totem"],
       "formeOrder": ["Araquanid", "Araquanid-Totem"]
   },
   "짜랑랑": {
       "num": 753,
       "name": "Fomantis",
       "types": ["풀"],
       "baseStats": {
           "hp": 40,
           "atk": 55,
           "def": 35,
           "spa": 50,
           "spd": 35,
           "spe": 35
       },
       "abilities": {
           "0": "리프가드",
           "H": "심술꾸러기"
       },
       "heightm": 0.3,
       "weightkg": 1.5,
       "color": "Pink",
       "evos": ["Lurantis"],
       "eggGroups": ["Grass"]
   },
   "라란티스": {
       "num": 754,
       "name": "Lurantis",
       "types": ["풀"],
       "baseStats": {
           "hp": 70,
           "atk": 105,
           "def": 90,
           "spa": 80,
           "spd": 90,
           "spe": 45
       },
       "abilities": {
           "0": "리프가드",
           "H": "심술꾸러기"
       },
       "heightm": 0.9,
       "weightkg": 18.5,
       "color": "Pink",
       "prevo": "Fomantis",
       "evoLevel": 34,
       "eggGroups": ["Grass"],
       "otherFormes": ["Lurantis-Totem"],
       "formeOrder": ["Lurantis", "Lurantis-Totem"]
   },
   "자마슈": {
       "num": 755,
       "name": "Morelull",
       "types": ["풀", "페어리"],
       "baseStats": {
           "hp": 40,
           "atk": 35,
           "def": 55,
           "spa": 65,
           "spd": 75,
           "spe": 15
       },
       "abilities": {
           "0": "발광",
           "1": "포자",
           "H": "젖은접시"
       },
       "heightm": 0.2,
       "weightkg": 1.5,
       "color": "Purple",
       "evos": ["Shiinotic"],
       "eggGroups": ["Grass"]
   },
   "마셰이드": {
       "num": 756,
       "name": "Shiinotic",
       "types": ["풀", "페어리"],
       "baseStats": {
           "hp": 60,
           "atk": 45,
           "def": 80,
           "spa": 90,
           "spd": 100,
           "spe": 30
       },
       "abilities": {
           "0": "발광",
           "1": "포자",
           "H": "젖은접시"
       },
       "heightm": 1,
       "weightkg": 11.5,
       "color": "Purple",
       "prevo": "Morelull",
       "evoLevel": 24,
       "eggGroups": ["Grass"]
   },
   "야도뇽": {
       "num": 757,
       "name": "Salandit",
       "types": ["독", "불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 48,
           "atk": 44,
           "def": 40,
           "spa": 71,
           "spd": 40,
           "spe": 77
       },
       "abilities": {
           "0": "부식",
           "H": "둔감"
       },
       "heightm": 0.6,
       "weightkg": 4.8,
       "color": "Black",
       "evos": ["Salazzle"],
       "eggGroups": ["Monster", "Dragon"]
   },
   "염뉴트": {
       "num": 758,
       "name": "Salazzle",
       "types": ["독", "불꽃"],
       "gender": "F",
       "baseStats": {
           "hp": 68,
           "atk": 64,
           "def": 60,
           "spa": 111,
           "spd": 60,
           "spe": 117
       },
       "abilities": {
           "0": "부식",
           "H": "둔감"
       },
       "heightm": 1.2,
       "weightkg": 22.2,
       "color": "Black",
       "prevo": "Salandit",
       "evoLevel": 33,
       "eggGroups": ["Monster", "Dragon"],
       "otherFormes": ["Salazzle-Totem"],
       "formeOrder": ["Salazzle", "Salazzle-Totem"]
   },
   "포곰곰": {
       "num": 759,
       "name": "Stufful",
       "types": ["노말", "격투"],
       "baseStats": {
           "hp": 70,
           "atk": 75,
           "def": 50,
           "spa": 45,
           "spd": 50,
           "spe": 50
       },
       "abilities": {
           "0": "복슬복슬",
           "1": "서투름",
           "H": "헤롱헤롱 바디"
       },
       "heightm": 0.5,
       "weightkg": 6.8,
       "color": "Pink",
       "evos": ["Bewear"],
       "eggGroups": ["Field"]
   },
   "이븐곰": {
       "num": 760,
       "name": "Bewear",
       "types": ["노말", "격투"],
       "baseStats": {
           "hp": 120,
           "atk": 125,
           "def": 80,
           "spa": 55,
           "spd": 60,
           "spe": 60
       },
       "abilities": {
           "0": "복슬복슬",
           "1": "서투름",
           "H": "긴장감"
       },
       "heightm": 2.1,
       "weightkg": 135,
       "color": "Pink",
       "prevo": "Stufful",
       "evoLevel": 27,
       "eggGroups": ["Field"]
   },
   "달콤아": {
       "num": 761,
       "name": "Bounsweet",
       "types": ["풀"],
       "gender": "F",
       "baseStats": {
           "hp": 42,
           "atk": 30,
           "def": 38,
           "spa": 30,
           "spd": 38,
           "spe": 32
       },
       "abilities": {
           "0": "리프가드",
           "1": "둔감",
           "H": "스위트베일"
       },
       "heightm": 0.3,
       "weightkg": 3.2,
       "color": "Purple",
       "evos": ["Steenee"],
       "eggGroups": ["Grass"]
   },
   "달무리나": {
       "num": 762,
       "name": "Steenee",
       "types": ["풀"],
       "gender": "F",
       "baseStats": {
           "hp": 52,
           "atk": 40,
           "def": 48,
           "spa": 40,
           "spd": 48,
           "spe": 62
       },
       "abilities": {
           "0": "리프가드",
           "1": "둔감",
           "H": "스위트베일"
       },
       "heightm": 0.7,
       "weightkg": 8.2,
       "color": "Purple",
       "prevo": "Bounsweet",
       "evoLevel": 18,
       "evos": ["Tsareena"],
       "eggGroups": ["Grass"]
   },
   "달코퀸": {
       "num": 763,
       "name": "Tsareena",
       "types": ["풀"],
       "gender": "F",
       "baseStats": {
           "hp": 72,
           "atk": 120,
           "def": 98,
           "spa": 50,
           "spd": 98,
           "spe": 72
       },
       "abilities": {
           "0": "리프가드",
           "1": "여왕의위엄",
           "H": "스위트베일"
       },
       "heightm": 1.2,
       "weightkg": 21.4,
       "color": "Purple",
       "prevo": "Steenee",
       "evoType": "levelMove",
       "evoMove": "Stomp",
       "eggGroups": ["Grass"]
   },
   "큐아링": {
       "num": 764,
       "name": "Comfey",
       "types": ["페어리"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 51,
           "atk": 52,
           "def": 90,
           "spa": 82,
           "spd": 110,
           "spe": 100
       },
       "abilities": {
           "0": "플라워베일",
           "1": "힐링시프트",
           "H": "자연회복"
       },
       "heightm": 0.1,
       "weightkg": 0.3,
       "color": "Green",
       "eggGroups": ["Grass"]
   },
   "하랑우탄": {
       "num": 765,
       "name": "Oranguru",
       "types": ["노말", "에스퍼"],
       "baseStats": {
           "hp": 90,
           "atk": 60,
           "def": 80,
           "spa": 90,
           "spd": 110,
           "spe": 60
       },
       "abilities": {
           "0": "정신력",
           "1": "텔레파시",
           "H": "공생"
       },
       "heightm": 1.5,
       "weightkg": 76,
       "color": "White",
       "eggGroups": ["Field"]
   },
   "내던숭이": {
       "num": 766,
       "name": "Passimian",
       "types": ["격투"],
       "baseStats": {
           "hp": 100,
           "atk": 120,
           "def": 90,
           "spa": 40,
           "spd": 60,
           "spe": 80
       },
       "abilities": {
           "0": "리시버",
           "H": "오기"
       },
       "heightm": 2,
       "weightkg": 82.8,
       "color": "White",
       "eggGroups": ["Field"]
   },
   "꼬시레": {
       "num": 767,
       "name": "Wimpod",
       "types": ["벌레", "물"],
       "baseStats": {
           "hp": 25,
           "atk": 35,
           "def": 40,
           "spa": 20,
           "spd": 30,
           "spe": 80
       },
       "abilities": {
           "0": "도망태세"
       },
       "heightm": 0.5,
       "weightkg": 12,
       "color": "Gray",
       "evos": ["Golisopod"],
       "eggGroups": ["Bug", "Water 3"]
   },
   "갑주무사": {
       "num": 768,
       "name": "Golisopod",
       "types": ["벌레", "물"],
       "baseStats": {
           "hp": 75,
           "atk": 125,
           "def": 140,
           "spa": 60,
           "spd": 90,
           "spe": 40
       },
       "abilities": {
           "0": "위기회피"
       },
       "heightm": 2,
       "weightkg": 108,
       "color": "Gray",
       "prevo": "Wimpod",
       "evoLevel": 30,
       "eggGroups": ["Bug", "Water 3"]
   },
   "모래꿍": {
       "num": 769,
       "name": "Sandygast",
       "types": ["고스트", "땅"],
       "baseStats": {
           "hp": 55,
           "atk": 55,
           "def": 80,
           "spa": 70,
           "spd": 45,
           "spe": 15
       },
       "abilities": {
           "0": "꾸덕꾸덕굳기",
           "H": "모래숨기"
       },
       "heightm": 0.5,
       "weightkg": 70,
       "color": "Brown",
       "evos": ["Palossand"],
       "eggGroups": ["Amorphous"]
   },
   "모래성이당": {
       "num": 770,
       "name": "Palossand",
       "types": ["고스트", "땅"],
       "baseStats": {
           "hp": 85,
           "atk": 75,
           "def": 110,
           "spa": 100,
           "spd": 75,
           "spe": 35
       },
       "abilities": {
           "0": "꾸덕꾸덕굳기",
           "H": "모래숨기"
       },
       "heightm": 1.3,
       "weightkg": 250,
       "color": "Brown",
       "prevo": "Sandygast",
       "evoLevel": 42,
       "eggGroups": ["Amorphous"]
   },
   "해무기": {
       "num": 771,
       "name": "Pyukumuku",
       "types": ["물"],
       "baseStats": {
           "hp": 55,
           "atk": 60,
           "def": 130,
           "spa": 30,
           "spd": 130,
           "spe": 5
       },
       "abilities": {
           "0": "내용물분출",
           "H": "천진"
       },
       "heightm": 0.3,
       "weightkg": 1.2,
       "color": "Black",
       "eggGroups": ["Water 1"]
   },
   "타입:널": {
       "num": 772,
       "name": "Type: Null",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 59
       },
       "abilities": {
           "0": "전투 무장"
       },
       "heightm": 1.9,
       "weightkg": 120.5,
       "color": "Gray",
       "evos": ["Silvally"],
       "eggGroups": ["Undiscovered"]
   },
   "실버디": {
       "num": 773,
       "name": "Silvally",
       "types": ["노말"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "prevo": "Type: Null",
       "evoType": "levelFriendship",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Silvally-Bug", "Silvally-Dark", "Silvally-Dragon", "Silvally-Electric", "Silvally-Fairy", "Silvally-Fighting", "Silvally-Fire", "Silvally-Flying", "Silvally-Ghost", "Silvally-Grass", "Silvally-Ground", "Silvally-Ice", "Silvally-Poison", "Silvally-Psychic", "Silvally-Rock", "Silvally-Steel", "Silvally-Water"],
       "formeOrder": ["Silvally", "Silvally-Fighting", "Silvally-Flying", "Silvally-Poison", "Silvally-Ground", "Silvally-Rock", "Silvally-Bug", "Silvally-Ghost", "Silvally-Steel", "Silvally-Fire", "Silvally-Water", "Silvally-Grass", "Silvally-Electric", "Silvally-Psychic", "Silvally-Ice", "Silvally-Dragon", "Silvally-Dark", "Silvally-Fairy"]
   },
   "실버디-벌레": {
       "num": 773,
       "name": "Silvally-Bug",
       "baseSpecies": "Silvally",
       "forme": "Bug",
       "types": ["벌레"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Bug Memory",
       "changesFrom": "Silvally"
   },
   "실버디-악": {
       "num": 773,
       "name": "Silvally-Dark",
       "baseSpecies": "Silvally",
       "forme": "Dark",
       "types": ["악"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Dark Memory",
       "changesFrom": "Silvally"
   },
   "실버디-드래곤": {
       "num": 773,
       "name": "Silvally-Dragon",
       "baseSpecies": "Silvally",
       "forme": "Dragon",
       "types": ["드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Dragon Memory",
       "changesFrom": "Silvally"
   },
   "실버디-전기": {
       "num": 773,
       "name": "Silvally-Electric",
       "baseSpecies": "Silvally",
       "forme": "Electric",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Electric Memory",
       "changesFrom": "Silvally"
   },
   "실버디-페어리": {
       "num": 773,
       "name": "Silvally-Fairy",
       "baseSpecies": "Silvally",
       "forme": "Fairy",
       "types": ["페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Fairy Memory",
       "changesFrom": "Silvally"
   },
   "실버디-격투": {
       "num": 773,
       "name": "Silvally-Fighting",
       "baseSpecies": "Silvally",
       "forme": "Fighting",
       "types": ["격투"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Fighting Memory",
       "changesFrom": "Silvally"
   },
   "실버디-불꽃": {
       "num": 773,
       "name": "Silvally-Fire",
       "baseSpecies": "Silvally",
       "forme": "Fire",
       "types": ["불꽃"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Fire Memory",
       "changesFrom": "Silvally"
   },
   "실버디-비행": {
       "num": 773,
       "name": "Silvally-Flying",
       "baseSpecies": "Silvally",
       "forme": "Flying",
       "types": ["비행"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Flying Memory",
       "changesFrom": "Silvally"
   },
   "실버디-고스트": {
       "num": 773,
       "name": "Silvally-Ghost",
       "baseSpecies": "Silvally",
       "forme": "Ghost",
       "types": ["고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Ghost Memory",
       "changesFrom": "Silvally"
   },
   "실버디-풀": {
       "num": 773,
       "name": "Silvally-Grass",
       "baseSpecies": "Silvally",
       "forme": "Grass",
       "types": ["풀"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Grass Memory",
       "changesFrom": "Silvally"
   },
   "실버디-땅": {
       "num": 773,
       "name": "Silvally-Ground",
       "baseSpecies": "Silvally",
       "forme": "Ground",
       "types": ["땅"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Ground Memory",
       "changesFrom": "Silvally"
   },
   "실버디-얼음": {
       "num": 773,
       "name": "Silvally-Ice",
       "baseSpecies": "Silvally",
       "forme": "Ice",
       "types": ["얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Ice Memory",
       "changesFrom": "Silvally"
   },
   "실버디-독": {
       "num": 773,
       "name": "Silvally-Poison",
       "baseSpecies": "Silvally",
       "forme": "Poison",
       "types": ["독"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Poison Memory",
       "changesFrom": "Silvally"
   },
   "실버디-에스퍼": {
       "num": 773,
       "name": "Silvally-Psychic",
       "baseSpecies": "Silvally",
       "forme": "Psychic",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Psychic Memory",
       "changesFrom": "Silvally"
   },
   "실버디-바위": {
       "num": 773,
       "name": "Silvally-Rock",
       "baseSpecies": "Silvally",
       "forme": "Rock",
       "types": ["바위"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Rock Memory",
       "changesFrom": "Silvally"
   },
   "실버디-강철": {
       "num": 773,
       "name": "Silvally-Steel",
       "baseSpecies": "Silvally",
       "forme": "Steel",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Steel Memory",
       "changesFrom": "Silvally"
   },
   "실버디-물": {
       "num": 773,
       "name": "Silvally-Water",
       "baseSpecies": "Silvally",
       "forme": "Water",
       "types": ["물"],
       "gender": "N",
       "baseStats": {
           "hp": 95,
           "atk": 95,
           "def": 95,
           "spa": 95,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "AR시스템"
       },
       "heightm": 2.3,
       "weightkg": 100.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Water Memory",
       "changesFrom": "Silvally"
   },
   "메테노": {
       "num": 774,
       "name": "Minior",
       "baseForme": "Red",
       "types": ["바위", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 100,
           "def": 60,
           "spa": 100,
           "spd": 60,
           "spe": 120
       },
       "abilities": {
           "0": "리밋실드"
       },
       "heightm": 0.3,
       "weightkg": 0.3,
       "color": "Red",
       "eggGroups": ["Mineral"],
       "otherFormes": ["Minior-Meteor"],
       "cosmeticFormes": ["Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet"],
       "formeOrder": ["Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior", "Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet"]
   },
   "메테노-리밋실드": {
       "num": 774,
       "name": "Minior-Meteor",
       "baseSpecies": "Minior",
       "forme": "Meteor",
       "types": ["바위", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 60,
           "def": 100,
           "spa": 60,
           "spd": 100,
           "spe": 60
       },
       "abilities": {
           "0": "리밋실드"
       },
       "heightm": 0.3,
       "weightkg": 40,
       "color": "Brown",
       "eggGroups": ["Mineral"],
       "requiredAbility": "Shields Down",
       "battleOnly": "Minior"
   },
   "자말라": {
       "num": 775,
       "name": "Komala",
       "types": ["노말"],
       "baseStats": {
           "hp": 65,
           "atk": 115,
           "def": 65,
           "spa": 75,
           "spd": 95,
           "spe": 65
       },
       "abilities": {
           "0": "절대안깸"
       },
       "heightm": 0.4,
       "weightkg": 19.9,
       "color": "Blue",
       "eggGroups": ["Field"]
   },
   "폭거북스": {
       "num": 776,
       "name": "Turtonator",
       "types": ["불꽃", "드래곤"],
       "baseStats": {
           "hp": 60,
           "atk": 78,
           "def": 135,
           "spa": 91,
           "spd": 85,
           "spe": 36
       },
       "abilities": {
           "0": "조가비 갑옷"
       },
       "heightm": 2,
       "weightkg": 212,
       "color": "Red",
       "eggGroups": ["Monster", "Dragon"]
   },
   "토게데마루": {
       "num": 777,
       "name": "Togedemaru",
       "types": ["전기", "강철"],
       "baseStats": {
           "hp": 65,
           "atk": 98,
           "def": 63,
           "spa": 40,
           "spd": 73,
           "spe": 96
       },
       "abilities": {
           "0": "철가시",
           "1": "피뢰침",
           "H": "옹골참"
       },
       "heightm": 0.3,
       "weightkg": 3.3,
       "color": "Gray",
       "eggGroups": ["Field", "Fairy"],
       "otherFormes": ["Togedemaru-Totem"],
       "formeOrder": ["Togedemaru", "Togedemaru-Totem"]
   },
   "따라큐": {
       "num": 778,
       "name": "Mimikyu",
       "baseForme": "Disguised",
       "types": ["고스트", "페어리"],
       "baseStats": {
           "hp": 55,
           "atk": 90,
           "def": 80,
           "spa": 50,
           "spd": 105,
           "spe": 96
       },
       "abilities": {
           "0": "탈"
       },
       "heightm": 0.2,
       "weightkg": 0.7,
       "color": "Yellow",
       "eggGroups": ["Amorphous"],
       "otherFormes": ["Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"],
       "formeOrder": ["Mimikyu", "Mimikyu-Busted", "Mimikyu-Totem", "Mimikyu-Busted-Totem"]
   },
   "치갈기": {
       "num": 779,
       "name": "Bruxish",
       "types": ["물", "에스퍼"],
       "baseStats": {
           "hp": 68,
           "atk": 105,
           "def": 70,
           "spa": 70,
           "spd": 70,
           "spe": 92
       },
       "abilities": {
           "0": "비비드바디",
           "1": "옹골찬턱",
           "H": "미라클스킨"
       },
       "heightm": 0.9,
       "weightkg": 19,
       "color": "Pink",
       "eggGroups": ["Water 2"]
   },
   "할비롱": {
       "num": 780,
       "name": "Drampa",
       "types": ["노말", "드래곤"],
       "baseStats": {
           "hp": 78,
           "atk": 60,
           "def": 85,
           "spa": 135,
           "spd": 91,
           "spe": 36
       },
       "abilities": {
           "0": "발끈",
           "1": "초식",
           "H": "날씨 부정"
       },
       "heightm": 3,
       "weightkg": 185,
       "color": "White",
       "eggGroups": ["Monster", "Dragon"]
   },
   "타타륜": {
       "num": 781,
       "name": "Dhelmise",
       "types": ["고스트", "풀"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 131,
           "def": 100,
           "spa": 86,
           "spd": 90,
           "spe": 40
       },
       "abilities": {
           "0": "강철술사"
       },
       "heightm": 3.9,
       "weightkg": 210,
       "color": "Green",
       "eggGroups": ["Mineral"]
   },
   "짜랑꼬": {
       "num": 782,
       "name": "Jangmo-o",
       "types": ["드래곤"],
       "baseStats": {
           "hp": 45,
           "atk": 55,
           "def": 65,
           "spa": 45,
           "spd": 45,
           "spe": 45
       },
       "abilities": {
           "0": "방탄",
           "1": "방음",
           "H": "방진"
       },
       "heightm": 0.6,
       "weightkg": 29.7,
       "color": "Gray",
       "evos": ["Hakamo-o"],
       "eggGroups": ["Dragon"]
   },
   "짜랑고우": {
       "num": 783,
       "name": "Hakamo-o",
       "types": ["드래곤", "격투"],
       "baseStats": {
           "hp": 55,
           "atk": 75,
           "def": 90,
           "spa": 65,
           "spd": 70,
           "spe": 65
       },
       "abilities": {
           "0": "방탄",
           "1": "방음",
           "H": "방진"
       },
       "heightm": 1.2,
       "weightkg": 47,
       "color": "Gray",
       "prevo": "Jangmo-o",
       "evoLevel": 35,
       "evos": ["Kommo-o"],
       "eggGroups": ["Dragon"]
   },
   "짜랑고우거": {
       "num": 784,
       "name": "Kommo-o",
       "types": ["드래곤", "격투"],
       "baseStats": {
           "hp": 75,
           "atk": 110,
           "def": 125,
           "spa": 100,
           "spd": 105,
           "spe": 85
       },
       "abilities": {
           "0": "방탄",
           "1": "방음",
           "H": "방진"
       },
       "heightm": 1.6,
       "weightkg": 78.2,
       "color": "Gray",
       "prevo": "Hakamo-o",
       "evoLevel": 45,
       "eggGroups": ["Dragon"],
       "otherFormes": ["Kommo-o-Totem"],
       "formeOrder": ["Kommo-o", "Kommo-o-Totem"]
   },
   "카푸꼬꼬꼭": {
       "num": 785,
       "name": "Tapu Koko",
       "types": ["전기", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 115,
           "def": 85,
           "spa": 95,
           "spd": 75,
           "spe": 130
       },
       "abilities": {
           "0": "일렉트릭메이커",
           "H": "텔레파시"
       },
       "heightm": 1.8,
       "weightkg": 20.5,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "카푸나비나": {
       "num": 786,
       "name": "Tapu Lele",
       "types": ["에스퍼", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 75,
           "spa": 130,
           "spd": 115,
           "spe": 95
       },
       "abilities": {
           "0": "사이코메이커",
           "H": "텔레파시"
       },
       "heightm": 1.2,
       "weightkg": 18.6,
       "color": "Pink",
       "eggGroups": ["Undiscovered"]
   },
   "카푸브루루": {
       "num": 787,
       "name": "Tapu Bulu",
       "types": ["풀", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 130,
           "def": 115,
           "spa": 85,
           "spd": 95,
           "spe": 75
       },
       "abilities": {
           "0": "그래스메이커",
           "H": "텔레파시"
       },
       "heightm": 1.9,
       "weightkg": 45.5,
       "color": "Red",
       "eggGroups": ["Undiscovered"]
   },
   "카푸느지느": {
       "num": 788,
       "name": "Tapu Fini",
       "types": ["물", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 70,
           "atk": 75,
           "def": 115,
           "spa": 95,
           "spd": 130,
           "spe": 85
       },
       "abilities": {
           "0": "미스트메이커",
           "H": "텔레파시"
       },
       "heightm": 1.3,
       "weightkg": 21.2,
       "color": "Purple",
       "eggGroups": ["Undiscovered"]
   },
   "코스모그": {
       "num": 789,
       "name": "Cosmog",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 43,
           "atk": 29,
           "def": 31,
           "spa": 29,
           "spd": 31,
           "spe": 37
       },
       "abilities": {
           "0": "천진"
       },
       "heightm": 0.2,
       "weightkg": 0.1,
       "color": "Blue",
       "evos": ["Cosmoem"],
       "eggGroups": ["Undiscovered"]
   },
   "코스모움": {
       "num": 790,
       "name": "Cosmoem",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 43,
           "atk": 29,
           "def": 131,
           "spa": 29,
           "spd": 131,
           "spe": 37
       },
       "abilities": {
           "0": "옹골참"
       },
       "heightm": 0.1,
       "weightkg": 999.9,
       "color": "Blue",
       "prevo": "Cosmog",
       "evoLevel": 43,
       "evos": ["Solgaleo", "Lunala"],
       "eggGroups": ["Undiscovered"]
   },
   "솔가레오": {
       "num": 791,
       "name": "Solgaleo",
       "types": ["에스퍼", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 137,
           "atk": 137,
           "def": 107,
           "spa": 113,
           "spd": 89,
           "spe": 97
       },
       "abilities": {
           "0": "메탈프로텍트"
       },
       "heightm": 3.4,
       "weightkg": 230,
       "color": "White",
       "prevo": "Cosmoem",
       "evoLevel": 53,
       "eggGroups": ["Undiscovered"]
   },
   "루나아라": {
       "num": 792,
       "name": "Lunala",
       "types": ["에스퍼", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 137,
           "atk": 113,
           "def": 89,
           "spa": 137,
           "spd": 107,
           "spe": 97
       },
       "abilities": {
           "0": "스펙터가드"
       },
       "heightm": 4,
       "weightkg": 120,
       "color": "Purple",
       "prevo": "Cosmoem",
       "evoLevel": 53,
       "eggGroups": ["Undiscovered"]
   },
   "텅비드": {
       "num": 793,
       "name": "Nihilego",
       "types": ["바위", "독"],
       "gender": "N",
       "baseStats": {
           "hp": 109,
           "atk": 53,
           "def": 47,
           "spa": 127,
           "spd": 131,
           "spe": 103
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 1.2,
       "weightkg": 55.5,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "매시붕": {
       "num": 794,
       "name": "Buzzwole",
       "types": ["벌레", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 107,
           "atk": 139,
           "def": 139,
           "spa": 53,
           "spd": 53,
           "spe": 79
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 2.4,
       "weightkg": 333.6,
       "color": "Red",
       "eggGroups": ["Undiscovered"]
   },
   "페로코체": {
       "num": 795,
       "name": "Pheromosa",
       "types": ["벌레", "격투"],
       "gender": "N",
       "baseStats": {
           "hp": 71,
           "atk": 137,
           "def": 37,
           "spa": 137,
           "spd": 37,
           "spe": 151
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 1.8,
       "weightkg": 25,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "전수목": {
       "num": 796,
       "name": "Xurkitree",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 83,
           "atk": 89,
           "def": 71,
           "spa": 173,
           "spd": 71,
           "spe": 83
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 3.8,
       "weightkg": 100,
       "color": "Black",
       "eggGroups": ["Undiscovered"]
   },
   "철화구야": {
       "num": 797,
       "name": "Celesteela",
       "types": ["강철", "비행"],
       "gender": "N",
       "baseStats": {
           "hp": 97,
           "atk": 101,
           "def": 103,
           "spa": 107,
           "spd": 101,
           "spe": 61
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 9.2,
       "weightkg": 999.9,
       "color": "Green",
       "eggGroups": ["Undiscovered"]
   },
   "종이신도": {
       "num": 798,
       "name": "Kartana",
       "types": ["풀", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 59,
           "atk": 181,
           "def": 131,
           "spa": 59,
           "spd": 31,
           "spe": 109
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 0.3,
       "weightkg": 0.1,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "악식킹": {
       "num": 799,
       "name": "Guzzlord",
       "types": ["악", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 223,
           "atk": 101,
           "def": 53,
           "spa": 97,
           "spd": 53,
           "spe": 43
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 5.5,
       "weightkg": 888,
       "color": "Black",
       "eggGroups": ["Undiscovered"]
   },
   "네크로즈마": {
       "num": 800,
       "name": "Necrozma",
       "types": ["에스퍼"],
       "gender": "N",
       "baseStats": {
           "hp": 97,
           "atk": 107,
           "def": 101,
           "spa": 127,
           "spd": 89,
           "spe": 79
       },
       "abilities": {
           "0": "프리즘아머"
       },
       "heightm": 2.4,
       "weightkg": 230,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Necrozma-Ultra"],
       "formeOrder": ["Necrozma", "Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Necrozma-Ultra"]
   },
   "네크로즈마-황혼의 갈기": {
       "num": 800,
       "name": "Necrozma-Dusk-Mane",
       "baseSpecies": "Necrozma",
       "forme": "Dusk-Mane",
       "types": ["에스퍼", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 97,
           "atk": 157,
           "def": 127,
           "spa": 113,
           "spd": 109,
           "spe": 77
       },
       "abilities": {
           "0": "프리즘아머"
       },
       "heightm": 3.8,
       "weightkg": 460,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Necrozma"
   },
   "네크로즈마-새벽의 날개": {
       "num": 800,
       "name": "Necrozma-Dawn-Wings",
       "baseSpecies": "Necrozma",
       "forme": "Dawn-Wings",
       "types": ["에스퍼", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 97,
           "atk": 113,
           "def": 109,
           "spa": 157,
           "spd": 127,
           "spe": 77
       },
       "abilities": {
           "0": "프리즘아머"
       },
       "heightm": 4.2,
       "weightkg": 350,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Necrozma"
   },
   "네크로즈마-울트라": {
       "num": 800,
       "name": "Necrozma-Ultra",
       "baseSpecies": "Necrozma",
       "forme": "Ultra",
       "types": ["에스퍼", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 97,
           "atk": 167,
           "def": 97,
           "spa": 167,
           "spd": 97,
           "spe": 129
       },
       "abilities": {
           "0": "브레인포스"
       },
       "heightm": 7.5,
       "weightkg": 230,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Ultranecrozium Z",
       "battleOnly": ["Necrozma-Dawn-Wings", "Necrozma-Dusk-Mane"]
   },
   "마기아나": {
       "num": 801,
       "name": "Magearna",
       "types": ["강철", "페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 95,
           "def": 115,
           "spa": 130,
           "spd": 115,
           "spe": 65
       },
       "abilities": {
           "0": "소울하트"
       },
       "heightm": 1,
       "weightkg": 80.5,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Magearna-Original"],
       "formeOrder": ["Magearna", "Magearna-Original"]
   },
   "마샤도": {
       "num": 802,
       "name": "Marshadow",
       "types": ["격투", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 125,
           "def": 80,
           "spa": 90,
           "spd": 90,
           "spe": 125
       },
       "abilities": {
           "0": "테크니션"
       },
       "heightm": 0.7,
       "weightkg": 22.2,
       "color": "Gray",
       "eggGroups": ["Undiscovered"]
   },
   "베베놈": {
       "num": 803,
       "name": "Poipole",
       "types": ["독"],
       "gender": "N",
       "baseStats": {
           "hp": 67,
           "atk": 73,
           "def": 67,
           "spa": 73,
           "spd": 67,
           "spe": 73
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 0.6,
       "weightkg": 1.8,
       "color": "Purple",
       "evos": ["Naganadel"],
       "eggGroups": ["Undiscovered"]
   },
   "아고용": {
       "num": 804,
       "name": "Naganadel",
       "types": ["독", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 73,
           "atk": 73,
           "def": 73,
           "spa": 127,
           "spd": 73,
           "spe": 121
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 3.6,
       "weightkg": 150,
       "color": "Purple",
       "prevo": "Poipole",
       "evoType": "levelMove",
       "evoMove": "Dragon Pulse",
       "eggGroups": ["Undiscovered"]
   },
   "차곡차곡": {
       "num": 805,
       "name": "Stakataka",
       "types": ["바위", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 61,
           "atk": 131,
           "def": 211,
           "spa": 53,
           "spd": 101,
           "spe": 13
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 5.5,
       "weightkg": 820,
       "color": "Gray",
       "eggGroups": ["Undiscovered"]
   },
   "두파팡": {
       "num": 806,
       "name": "Blacephalon",
       "types": ["불꽃", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 53,
           "atk": 127,
           "def": 53,
           "spa": 151,
           "spd": 79,
           "spe": 107
       },
       "abilities": {
           "0": "비스트부스트"
       },
       "heightm": 1.8,
       "weightkg": 13,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "제라오라": {
       "num": 807,
       "name": "Zeraora",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 88,
           "atk": 112,
           "def": 75,
           "spa": 102,
           "spd": 80,
           "spe": 143
       },
       "abilities": {
           "0": "축전"
       },
       "heightm": 1.5,
       "weightkg": 44.5,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "멜탄": {
       "num": 808,
       "name": "Meltan",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 46,
           "atk": 65,
           "def": 65,
           "spa": 55,
           "spd": 35,
           "spe": 34
       },
       "abilities": {
           "0": "자력"
       },
       "heightm": 0.2,
       "weightkg": 8,
       "color": "Gray",
       "eggGroups": ["Undiscovered"]
   },
   "멜메탈": {
       "num": 809,
       "name": "Melmetal",
       "types": ["강철"],
       "gender": "N",
       "baseStats": {
           "hp": 135,
           "atk": 143,
           "def": 143,
           "spa": 80,
           "spd": 65,
           "spe": 34
       },
       "abilities": {
           "0": "철주먹"
       },
       "heightm": 2.5,
       "weightkg": 800,
       "color": "Gray",
       "eggGroups": ["Undiscovered"],
       "canGigantamax": "G-Max Meltdown"
   },
   "흥나숭": {
       "num": 810,
       "name": "Grookey",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 50,
           "spa": 40,
           "spd": 40,
           "spe": 65
       },
       "abilities": {
           "0": "심록",
           "H": "그래스메이커"
       },
       "heightm": 0.3,
       "weightkg": 5,
       "color": "Green",
       "evos": ["Thwackey"],
       "eggGroups": ["Field", "Grass"]
   },
   "채키몽": {
       "num": 811,
       "name": "Thwackey",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 70,
           "spa": 55,
           "spd": 60,
           "spe": 80
       },
       "abilities": {
           "0": "심록",
           "H": "그래스메이커"
       },
       "heightm": 0.7,
       "weightkg": 14,
       "color": "Green",
       "prevo": "Grookey",
       "evoLevel": 16,
       "evos": ["Rillaboom"],
       "eggGroups": ["Field", "Grass"]
   },
   "고릴타": {
       "num": 812,
       "name": "Rillaboom",
       "types": ["풀"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 100,
           "atk": 125,
           "def": 90,
           "spa": 60,
           "spd": 70,
           "spe": 85
       },
       "abilities": {
           "0": "심록",
           "H": "그래스메이커"
       },
       "heightm": 2.1,
       "weightkg": 90,
       "color": "Green",
       "prevo": "Thwackey",
       "evoLevel": 35,
       "eggGroups": ["Field", "Grass"],
       "canGigantamax": "G-Max Drum Solo"
   },
   "염버니": {
       "num": 813,
       "name": "Scorbunny",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 71,
           "def": 40,
           "spa": 40,
           "spd": 40,
           "spe": 69
       },
       "abilities": {
           "0": "맹화",
           "H": "리베로"
       },
       "heightm": 0.3,
       "weightkg": 4.5,
       "color": "White",
       "evos": ["Raboot"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "래비풋": {
       "num": 814,
       "name": "Raboot",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 86,
           "def": 60,
           "spa": 55,
           "spd": 60,
           "spe": 94
       },
       "abilities": {
           "0": "맹화",
           "H": "리베로"
       },
       "heightm": 0.6,
       "weightkg": 9,
       "color": "Gray",
       "prevo": "Scorbunny",
       "evoLevel": 16,
       "evos": ["Cinderace"],
       "eggGroups": ["Field", "Human-Like"]
   },
   "에이스번": {
       "num": 815,
       "name": "Cinderace",
       "types": ["불꽃"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 80,
           "atk": 116,
           "def": 75,
           "spa": 65,
           "spd": 75,
           "spe": 119
       },
       "abilities": {
           "0": "맹화",
           "H": "리베로"
       },
       "heightm": 1.4,
       "weightkg": 33,
       "color": "White",
       "prevo": "Raboot",
       "evoLevel": 35,
       "eggGroups": ["Field", "Human-Like"],
       "canGigantamax": "G-Max Fireball"
   },
   "울머기": {
       "num": 816,
       "name": "Sobble",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 50,
           "atk": 40,
           "def": 40,
           "spa": 70,
           "spd": 40,
           "spe": 70
       },
       "abilities": {
           "0": "급류",
           "H": "스나이퍼"
       },
       "heightm": 0.3,
       "weightkg": 4,
       "color": "Blue",
       "evos": ["Drizzile"],
       "eggGroups": ["Water 1", "Field"]
   },
   "누겔레온": {
       "num": 817,
       "name": "Drizzile",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 65,
           "atk": 60,
           "def": 55,
           "spa": 95,
           "spd": 55,
           "spe": 90
       },
       "abilities": {
           "0": "급류",
           "H": "스나이퍼"
       },
       "heightm": 0.7,
       "weightkg": 11.5,
       "color": "Blue",
       "prevo": "Sobble",
       "evoLevel": 16,
       "evos": ["Inteleon"],
       "eggGroups": ["Water 1", "Field"]
   },
   "인텔리레온": {
       "num": 818,
       "name": "Inteleon",
       "types": ["물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 65,
           "spa": 125,
           "spd": 65,
           "spe": 120
       },
       "abilities": {
           "0": "급류",
           "H": "스나이퍼"
       },
       "heightm": 1.9,
       "weightkg": 45.2,
       "color": "Blue",
       "prevo": "Drizzile",
       "evoLevel": 35,
       "eggGroups": ["Water 1", "Field"],
       "canGigantamax": "G-Max Hydrosnipe"
   },
   "탐리스": {
       "num": 819,
       "name": "Skwovet",
       "types": ["노말"],
       "baseStats": {
           "hp": 70,
           "atk": 55,
           "def": 55,
           "spa": 35,
           "spd": 35,
           "spe": 25
       },
       "abilities": {
           "0": "볼주머니",
           "H": "먹보"
       },
       "heightm": 0.3,
       "weightkg": 2.5,
       "color": "Brown",
       "evos": ["Greedent"],
       "eggGroups": ["Field"]
   },
   "요씽리스": {
       "num": 820,
       "name": "Greedent",
       "types": ["노말"],
       "baseStats": {
           "hp": 120,
           "atk": 95,
           "def": 95,
           "spa": 55,
           "spd": 75,
           "spe": 20
       },
       "abilities": {
           "0": "볼주머니",
           "H": "먹보"
       },
       "heightm": 0.6,
       "weightkg": 6,
       "color": "Brown",
       "prevo": "Skwovet",
       "evoLevel": 24,
       "eggGroups": ["Field"]
   },
   "파라꼬": {
       "num": 821,
       "name": "Rookidee",
       "types": ["비행"],
       "baseStats": {
           "hp": 38,
           "atk": 47,
           "def": 35,
           "spa": 33,
           "spd": 35,
           "spe": 57
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "긴장감",
           "H": "부풀린가슴"
       },
       "heightm": 0.2,
       "weightkg": 1.8,
       "color": "Blue",
       "evos": ["Corvisquire"],
       "eggGroups": ["Flying"]
   },
   "파크로우": {
       "num": 822,
       "name": "Corvisquire",
       "types": ["비행"],
       "baseStats": {
           "hp": 68,
           "atk": 67,
           "def": 55,
           "spa": 43,
           "spd": 55,
           "spe": 77
       },
       "abilities": {
           "0": "날카로운 눈",
           "1": "긴장감",
           "H": "부풀린가슴"
       },
       "heightm": 0.8,
       "weightkg": 16,
       "color": "Blue",
       "prevo": "Rookidee",
       "evoLevel": 18,
       "evos": ["Corviknight"],
       "eggGroups": ["Flying"]
   },
   "아머까오": {
       "num": 823,
       "name": "Corviknight",
       "types": ["비행", "강철"],
       "baseStats": {
           "hp": 98,
           "atk": 87,
           "def": 105,
           "spa": 53,
           "spd": 85,
           "spe": 67
       },
       "abilities": {
           "0": "프레셔",
           "1": "긴장감",
           "H": "미러아머"
       },
       "heightm": 2.2,
       "weightkg": 75,
       "color": "Purple",
       "prevo": "Corvisquire",
       "evoLevel": 38,
       "eggGroups": ["Flying"],
       "canGigantamax": "G-Max Wind Rage"
   },
   "두루지벌레": {
       "num": 824,
       "name": "Blipbug",
       "types": ["벌레"],
       "baseStats": {
           "hp": 25,
           "atk": 20,
           "def": 20,
           "spa": 25,
           "spd": 45,
           "spe": 45
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "복안",
           "H": "텔레파시"
       },
       "heightm": 0.4,
       "weightkg": 8,
       "color": "Blue",
       "evos": ["Dottler"],
       "eggGroups": ["Bug"]
   },
   "레돔벌레": {
       "num": 825,
       "name": "Dottler",
       "types": ["벌레", "에스퍼"],
       "baseStats": {
           "hp": 50,
           "atk": 35,
           "def": 80,
           "spa": 50,
           "spd": 90,
           "spe": 30
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "복안",
           "H": "텔레파시"
       },
       "heightm": 0.4,
       "weightkg": 19.5,
       "color": "Yellow",
       "prevo": "Blipbug",
       "evoLevel": 10,
       "evos": ["Orbeetle"],
       "eggGroups": ["Bug"]
   },
   "이올브": {
       "num": 826,
       "name": "Orbeetle",
       "types": ["벌레", "에스퍼"],
       "baseStats": {
           "hp": 60,
           "atk": 45,
           "def": 110,
           "spa": 80,
           "spd": 120,
           "spe": 90
       },
       "abilities": {
           "0": "벌레의 알림",
           "1": "통찰",
           "H": "텔레파시"
       },
       "heightm": 0.4,
       "weightkg": 40.8,
       "color": "Red",
       "prevo": "Dottler",
       "evoLevel": 30,
       "eggGroups": ["Bug"],
       "canGigantamax": "G-Max Gravitas"
   },
   "훔처우": {
       "num": 827,
       "name": "Nickit",
       "types": ["악"],
       "baseStats": {
           "hp": 40,
           "atk": 28,
           "def": 28,
           "spa": 47,
           "spd": 52,
           "spe": 50
       },
       "abilities": {
           "0": "도주",
           "1": "곡예",
           "H": "잠복"
       },
       "heightm": 0.6,
       "weightkg": 8.9,
       "color": "Brown",
       "evos": ["Thievul"],
       "eggGroups": ["Field"]
   },
   "폭슬라이": {
       "num": 828,
       "name": "Thievul",
       "types": ["악"],
       "baseStats": {
           "hp": 70,
           "atk": 58,
           "def": 58,
           "spa": 87,
           "spd": 92,
           "spe": 90
       },
       "abilities": {
           "0": "도주",
           "1": "곡예",
           "H": "잠복"
       },
       "heightm": 1.2,
       "weightkg": 19.9,
       "color": "Brown",
       "prevo": "Nickit",
       "evoLevel": 18,
       "eggGroups": ["Field"]
   },
   "꼬모카": {
       "num": 829,
       "name": "Gossifleur",
       "types": ["풀"],
       "baseStats": {
           "hp": 40,
           "atk": 40,
           "def": 60,
           "spa": 40,
           "spd": 60,
           "spe": 10
       },
       "abilities": {
           "0": "솜털",
           "1": "재생력",
           "H": "포자"
       },
       "heightm": 0.4,
       "weightkg": 2.2,
       "color": "Green",
       "evos": ["Eldegoss"],
       "eggGroups": ["Grass"]
   },
   "백솜모카": {
       "num": 830,
       "name": "Eldegoss",
       "types": ["풀"],
       "baseStats": {
           "hp": 60,
           "atk": 50,
           "def": 90,
           "spa": 80,
           "spd": 120,
           "spe": 60
       },
       "abilities": {
           "0": "솜털",
           "1": "재생력",
           "H": "포자"
       },
       "heightm": 0.5,
       "weightkg": 2.5,
       "color": "Green",
       "prevo": "Gossifleur",
       "evoLevel": 20,
       "eggGroups": ["Grass"]
   },
   "우르": {
       "num": 831,
       "name": "Wooloo",
       "types": ["노말"],
       "baseStats": {
           "hp": 42,
           "atk": 40,
           "def": 55,
           "spa": 40,
           "spd": 45,
           "spe": 48
       },
       "abilities": {
           "0": "복슬복슬",
           "1": "도주",
           "H": "방탄"
       },
       "heightm": 0.6,
       "weightkg": 6,
       "color": "White",
       "evos": ["Dubwool"],
       "eggGroups": ["Field"]
   },
   "배우르": {
       "num": 832,
       "name": "Dubwool",
       "types": ["노말"],
       "baseStats": {
           "hp": 72,
           "atk": 80,
           "def": 100,
           "spa": 60,
           "spd": 90,
           "spe": 88
       },
       "abilities": {
           "0": "복슬복슬",
           "1": "불굴의 마음",
           "H": "방탄"
       },
       "heightm": 1.3,
       "weightkg": 43,
       "color": "White",
       "prevo": "Wooloo",
       "evoLevel": 24,
       "eggGroups": ["Field"]
   },
   "깨물부기": {
       "num": 833,
       "name": "Chewtle",
       "types": ["물"],
       "baseStats": {
           "hp": 50,
           "atk": 64,
           "def": 50,
           "spa": 38,
           "spd": 38,
           "spe": 44
       },
       "abilities": {
           "0": "옹골찬턱",
           "1": "조가비 갑옷",
           "H": "쓱쓱"
       },
       "heightm": 0.3,
       "weightkg": 8.5,
       "color": "Green",
       "evos": ["Drednaw"],
       "eggGroups": ["Monster", "Water 1"]
   },
   "갈가부기": {
       "num": 834,
       "name": "Drednaw",
       "types": ["물", "바위"],
       "baseStats": {
           "hp": 90,
           "atk": 115,
           "def": 90,
           "spa": 48,
           "spd": 68,
           "spe": 74
       },
       "abilities": {
           "0": "옹골찬턱",
           "1": "조가비 갑옷",
           "H": "쓱쓱"
       },
       "heightm": 1,
       "weightkg": 115.5,
       "color": "Green",
       "prevo": "Chewtle",
       "evoLevel": 22,
       "eggGroups": ["Monster", "Water 1"],
       "canGigantamax": "G-Max Stonesurge"
   },
   "멍파치": {
       "num": 835,
       "name": "Yamper",
       "types": ["전기"],
       "baseStats": {
           "hp": 59,
           "atk": 45,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 26
       },
       "abilities": {
           "0": "볼줍기",
           "H": "주눅"
       },
       "heightm": 0.3,
       "weightkg": 13.5,
       "color": "Yellow",
       "evos": ["Boltund"],
       "eggGroups": ["Field"]
   },
   "펄스멍": {
       "num": 836,
       "name": "Boltund",
       "types": ["전기"],
       "baseStats": {
           "hp": 69,
           "atk": 90,
           "def": 60,
           "spa": 90,
           "spd": 60,
           "spe": 121
       },
       "abilities": {
           "0": "옹골찬턱",
           "H": "승기"
       },
       "heightm": 1,
       "weightkg": 34,
       "color": "Yellow",
       "prevo": "Yamper",
       "evoLevel": 25,
       "eggGroups": ["Field"]
   },
   "탄동": {
       "num": 837,
       "name": "Rolycoly",
       "types": ["바위"],
       "baseStats": {
           "hp": 30,
           "atk": 40,
           "def": 50,
           "spa": 40,
           "spd": 50,
           "spe": 30
       },
       "abilities": {
           "0": "증기기관",
           "1": "내열",
           "H": "타오르는 불꽃"
       },
       "heightm": 0.3,
       "weightkg": 12,
       "color": "Black",
       "evos": ["Carkol"],
       "eggGroups": ["Mineral"]
   },
   "탄차곤": {
       "num": 838,
       "name": "Carkol",
       "types": ["바위", "불꽃"],
       "baseStats": {
           "hp": 80,
           "atk": 60,
           "def": 90,
           "spa": 60,
           "spd": 70,
           "spe": 50
       },
       "abilities": {
           "0": "증기기관",
           "1": "불꽃몸",
           "H": "타오르는 불꽃"
       },
       "heightm": 1.1,
       "weightkg": 78,
       "color": "Black",
       "prevo": "Rolycoly",
       "evoLevel": 18,
       "evos": ["Coalossal"],
       "eggGroups": ["Mineral"]
   },
   "석탄산": {
       "num": 839,
       "name": "Coalossal",
       "types": ["바위", "불꽃"],
       "baseStats": {
           "hp": 110,
           "atk": 80,
           "def": 120,
           "spa": 80,
           "spd": 90,
           "spe": 30
       },
       "abilities": {
           "0": "증기기관",
           "1": "불꽃몸",
           "H": "타오르는 불꽃"
       },
       "heightm": 2.8,
       "weightkg": 310.5,
       "color": "Black",
       "prevo": "Carkol",
       "evoLevel": 34,
       "eggGroups": ["Mineral"],
       "canGigantamax": "G-Max Volcalith"
   },
   "과사삭벌레": {
       "num": 840,
       "name": "Applin",
       "types": ["풀", "드래곤"],
       "baseStats": {
           "hp": 40,
           "atk": 40,
           "def": 80,
           "spa": 40,
           "spd": 40,
           "spe": 20
       },
       "abilities": {
           "0": "숙성",
           "1": "먹보",
           "H": "방탄"
       },
       "heightm": 0.2,
       "weightkg": 0.5,
       "color": "Green",
       "evos": ["Flapple", "Appletun"],
       "eggGroups": ["Grass", "Dragon"]
   },
   "애프룡": {
       "num": 841,
       "name": "Flapple",
       "types": ["풀", "드래곤"],
       "baseStats": {
           "hp": 70,
           "atk": 110,
           "def": 80,
           "spa": 95,
           "spd": 60,
           "spe": 70
       },
       "abilities": {
           "0": "숙성",
           "1": "먹보",
           "H": "의욕"
       },
       "heightm": 0.3,
       "weightkg": 1,
       "color": "Green",
       "prevo": "Applin",
       "evoType": "useItem",
       "evoItem": "Tart Apple",
       "eggGroups": ["Grass", "Dragon"],
       "canGigantamax": "G-Max Tartness"
   },
   "단지래플": {
       "num": 842,
       "name": "Appletun",
       "types": ["풀", "드래곤"],
       "baseStats": {
           "hp": 110,
           "atk": 85,
           "def": 80,
           "spa": 100,
           "spd": 80,
           "spe": 30
       },
       "abilities": {
           "0": "숙성",
           "1": "먹보",
           "H": "두꺼운 지방"
       },
       "heightm": 0.4,
       "weightkg": 13,
       "color": "Green",
       "prevo": "Applin",
       "evoType": "useItem",
       "evoItem": "Sweet Apple",
       "eggGroups": ["Grass", "Dragon"],
       "canGigantamax": "G-Max Sweetness"
   },
   "모래뱀": {
       "num": 843,
       "name": "Silicobra",
       "types": ["땅"],
       "baseStats": {
           "hp": 52,
           "atk": 57,
           "def": 75,
           "spa": 35,
           "spd": 50,
           "spe": 46
       },
       "abilities": {
           "0": "모래뿜기",
           "1": "탈피",
           "H": "모래숨기"
       },
       "heightm": 2.2,
       "weightkg": 7.6,
       "color": "Green",
       "evos": ["Sandaconda"],
       "eggGroups": ["Field", "Dragon"]
   },
   "사다이사": {
       "num": 844,
       "name": "Sandaconda",
       "types": ["땅"],
       "baseStats": {
           "hp": 72,
           "atk": 107,
           "def": 125,
           "spa": 65,
           "spd": 70,
           "spe": 71
       },
       "abilities": {
           "0": "모래뿜기",
           "1": "탈피",
           "H": "모래숨기"
       },
       "heightm": 3.8,
       "weightkg": 65.5,
       "color": "Green",
       "prevo": "Silicobra",
       "evoLevel": 36,
       "eggGroups": ["Field", "Dragon"],
       "canGigantamax": "G-Max Sandblast"
   },
   "윽우지": {
       "num": 845,
       "name": "Cramorant",
       "types": ["비행", "물"],
       "baseStats": {
           "hp": 70,
           "atk": 85,
           "def": 55,
           "spa": 85,
           "spd": 95,
           "spe": 85
       },
       "abilities": {
           "0": "그대로꿀꺽미사일"
       },
       "heightm": 0.8,
       "weightkg": 18,
       "color": "Blue",
       "eggGroups": ["Water 1", "Flying"],
       "otherFormes": ["Cramorant-Gulping", "Cramorant-Gorging"],
       "formeOrder": ["Cramorant", "Cramorant-Gulping", "Cramorant-Gorging"]
   },
   "찌로꼬치": {
       "num": 846,
       "name": "Arrokuda",
       "types": ["물"],
       "baseStats": {
           "hp": 41,
           "atk": 63,
           "def": 40,
           "spa": 40,
           "spd": 30,
           "spe": 66
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "스크루지느러미"
       },
       "heightm": 0.5,
       "weightkg": 1,
       "color": "Brown",
       "evos": ["Barraskewda"],
       "eggGroups": ["Water 2"]
   },
   "꼬치조": {
       "num": 847,
       "name": "Barraskewda",
       "types": ["물"],
       "baseStats": {
           "hp": 61,
           "atk": 123,
           "def": 60,
           "spa": 60,
           "spd": 50,
           "spe": 136
       },
       "abilities": {
           "0": "쓱쓱",
           "H": "스크루지느러미"
       },
       "heightm": 1.3,
       "weightkg": 30,
       "color": "Brown",
       "prevo": "Arrokuda",
       "evoLevel": 26,
       "eggGroups": ["Water 2"]
   },
   "일레즌": {
       "num": 848,
       "name": "Toxel",
       "types": ["전기", "독"],
       "baseStats": {
           "hp": 40,
           "atk": 38,
           "def": 35,
           "spa": 54,
           "spd": 35,
           "spe": 40
       },
       "abilities": {
           "0": "주눅",
           "1": "정전기",
           "H": "서투름"
       },
       "heightm": 0.4,
       "weightkg": 11,
       "color": "Purple",
       "evos": ["Toxtricity", "Toxtricity-Low-Key"],
       "eggGroups": ["Undiscovered"],
       "canHatch": true
   },
   "스트린더": {
       "num": 849,
       "name": "Toxtricity",
       "baseForme": "Amped",
       "types": ["전기", "독"],
       "baseStats": {
           "hp": 75,
           "atk": 98,
           "def": 70,
           "spa": 114,
           "spd": 70,
           "spe": 75
       },
       "abilities": {
           "0": "펑크록",
           "1": "플러스",
           "H": "테크니션"
       },
       "heightm": 1.6,
       "weightkg": 40,
       "color": "Purple",
       "prevo": "Toxel",
       "evoLevel": 30,
       "eggGroups": ["Human-Like"],
       "otherFormes": ["Toxtricity-Low-Key"],
       "formeOrder": ["Toxtricity", "Toxtricity-Low-Key"],
       "canGigantamax": "G-Max Stun Shock"
   },
   "태우지네": {
       "num": 850,
       "name": "Sizzlipede",
       "types": ["불꽃", "벌레"],
       "baseStats": {
           "hp": 50,
           "atk": 65,
           "def": 45,
           "spa": 50,
           "spd": 50,
           "spe": 45
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "1": "하얀연기",
           "H": "불꽃몸"
       },
       "heightm": 0.7,
       "weightkg": 1,
       "color": "Red",
       "evos": ["Centiskorch"],
       "eggGroups": ["Bug"]
   },
   "다태우지네": {
       "num": 851,
       "name": "Centiskorch",
       "types": ["불꽃", "벌레"],
       "baseStats": {
           "hp": 100,
           "atk": 115,
           "def": 65,
           "spa": 90,
           "spd": 90,
           "spe": 65
       },
       "abilities": {
           "0": "타오르는 불꽃",
           "1": "하얀연기",
           "H": "불꽃몸"
       },
       "heightm": 3,
       "weightkg": 120,
       "color": "Red",
       "prevo": "Sizzlipede",
       "evoLevel": 28,
       "eggGroups": ["Bug"],
       "canGigantamax": "G-Max Centiferno"
   },
   "때때무노": {
       "num": 852,
       "name": "Clobbopus",
       "types": ["격투"],
       "baseStats": {
           "hp": 50,
           "atk": 68,
           "def": 60,
           "spa": 50,
           "spd": 50,
           "spe": 32
       },
       "abilities": {
           "0": "유연",
           "H": "테크니션"
       },
       "heightm": 0.6,
       "weightkg": 4,
       "color": "Brown",
       "evos": ["Grapploct"],
       "eggGroups": ["Water 1", "Human-Like"]
   },
   "케오퍼스": {
       "num": 853,
       "name": "Grapploct",
       "types": ["격투"],
       "baseStats": {
           "hp": 80,
           "atk": 118,
           "def": 90,
           "spa": 70,
           "spd": 80,
           "spe": 42
       },
       "abilities": {
           "0": "유연",
           "H": "테크니션"
       },
       "heightm": 1.6,
       "weightkg": 39,
       "color": "Blue",
       "prevo": "Clobbopus",
       "evoType": "levelMove",
       "evoMove": "Taunt",
       "eggGroups": ["Water 1", "Human-Like"]
   },
   "데인차": {
       "num": 854,
       "name": "Sinistea",
       "baseForme": "Phony",
       "types": ["고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 40,
           "atk": 45,
           "def": 45,
           "spa": 74,
           "spd": 54,
           "spe": 50
       },
       "abilities": {
           "0": "깨어진갑옷",
           "H": "저주받은바디"
       },
       "heightm": 0.1,
       "weightkg": 0.2,
       "color": "Purple",
       "evos": ["Polteageist"],
       "eggGroups": ["Mineral", "Amorphous"],
       "otherFormes": ["Sinistea-Antique"],
       "formeOrder": ["Sinistea", "Sinistea-Antique"]
   },
   "포트데스": {
       "num": 855,
       "name": "Polteageist",
       "baseForme": "Phony",
       "types": ["고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 60,
           "atk": 65,
           "def": 65,
           "spa": 134,
           "spd": 114,
           "spe": 70
       },
       "abilities": {
           "0": "깨어진갑옷",
           "H": "저주받은바디"
       },
       "heightm": 0.2,
       "weightkg": 0.4,
       "color": "Purple",
       "prevo": "Sinistea",
       "evoType": "useItem",
       "evoItem": "Cracked Pot",
       "eggGroups": ["Mineral", "Amorphous"],
       "otherFormes": ["Polteageist-Antique"],
       "formeOrder": ["Polteageist", "Polteageist-Antique"]
   },
   "몸지브림": {
       "num": 856,
       "name": "Hatenna",
       "types": ["에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 42,
           "atk": 30,
           "def": 45,
           "spa": 56,
           "spd": 53,
           "spe": 39
       },
       "abilities": {
           "0": "치유의마음",
           "1": "위험예지",
           "H": "매직미러"
       },
       "heightm": 0.4,
       "weightkg": 3.4,
       "color": "Pink",
       "evos": ["Hattrem"],
       "eggGroups": ["Fairy"]
   },
   "손지브림": {
       "num": 857,
       "name": "Hattrem",
       "types": ["에스퍼"],
       "gender": "F",
       "baseStats": {
           "hp": 57,
           "atk": 40,
           "def": 65,
           "spa": 86,
           "spd": 73,
           "spe": 49
       },
       "abilities": {
           "0": "치유의마음",
           "1": "위험예지",
           "H": "매직미러"
       },
       "heightm": 0.6,
       "weightkg": 4.8,
       "color": "Pink",
       "prevo": "Hatenna",
       "evoLevel": 32,
       "evos": ["Hatterene"],
       "eggGroups": ["Fairy"]
   },
   "브리무음": {
       "num": 858,
       "name": "Hatterene",
       "types": ["에스퍼", "페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 57,
           "atk": 90,
           "def": 95,
           "spa": 136,
           "spd": 103,
           "spe": 29
       },
       "abilities": {
           "0": "치유의마음",
           "1": "위험예지",
           "H": "매직미러"
       },
       "heightm": 2.1,
       "weightkg": 5.1,
       "color": "Pink",
       "prevo": "Hattrem",
       "evoLevel": 42,
       "eggGroups": ["Fairy"],
       "canGigantamax": "G-Max Smite"
   },
   "메롱꿍": {
       "num": 859,
       "name": "Impidimp",
       "types": ["악", "페어리"],
       "gender": "M",
       "baseStats": {
           "hp": 45,
           "atk": 45,
           "def": 30,
           "spa": 55,
           "spd": 40,
           "spe": 50
       },
       "abilities": {
           "0": "짓궂은마음",
           "1": "통찰",
           "H": "나쁜손버릇"
       },
       "heightm": 0.4,
       "weightkg": 5.5,
       "color": "Pink",
       "evos": ["Morgrem"],
       "eggGroups": ["Fairy", "Human-Like"]
   },
   "쏘겨모": {
       "num": 860,
       "name": "Morgrem",
       "types": ["악", "페어리"],
       "gender": "M",
       "baseStats": {
           "hp": 65,
           "atk": 60,
           "def": 45,
           "spa": 75,
           "spd": 55,
           "spe": 70
       },
       "abilities": {
           "0": "짓궂은마음",
           "1": "통찰",
           "H": "나쁜손버릇"
       },
       "heightm": 0.8,
       "weightkg": 12.5,
       "color": "Pink",
       "prevo": "Impidimp",
       "evoLevel": 32,
       "evos": ["Grimmsnarl"],
       "eggGroups": ["Fairy", "Human-Like"]
   },
   "오롱털": {
       "num": 861,
       "name": "Grimmsnarl",
       "types": ["악", "페어리"],
       "gender": "M",
       "baseStats": {
           "hp": 95,
           "atk": 120,
           "def": 65,
           "spa": 95,
           "spd": 75,
           "spe": 60
       },
       "abilities": {
           "0": "짓궂은마음",
           "1": "통찰",
           "H": "나쁜손버릇"
       },
       "heightm": 1.5,
       "weightkg": 61,
       "color": "Purple",
       "prevo": "Morgrem",
       "evoLevel": 42,
       "eggGroups": ["Fairy", "Human-Like"],
       "canGigantamax": "G-Max Snooze"
   },
   "가로막구리": {
       "num": 862,
       "name": "Obstagoon",
       "types": ["악", "노말"],
       "baseStats": {
           "hp": 93,
           "atk": 90,
           "def": 101,
           "spa": 60,
           "spd": 81,
           "spe": 95
       },
       "abilities": {
           "0": "이판사판",
           "1": "근성",
           "H": "오기"
       },
       "heightm": 1.6,
       "weightkg": 46,
       "color": "Gray",
       "prevo": "Linoone-Galar",
       "evoLevel": 35,
       "evoCondition": "at night",
       "eggGroups": ["Field"]
   },
   "나이킹": {
       "num": 863,
       "name": "Perrserker",
       "types": ["강철"],
       "baseStats": {
           "hp": 70,
           "atk": 110,
           "def": 100,
           "spa": 50,
           "spd": 60,
           "spe": 50
       },
       "abilities": {
           "0": "전투 무장",
           "1": "단단한 발톱",
           "H": "강철정신"
       },
       "heightm": 0.8,
       "weightkg": 28,
       "color": "Brown",
       "prevo": "Meowth-Galar",
       "evoLevel": 28,
       "eggGroups": ["Field"]
   },
   "산호르곤": {
       "num": 864,
       "name": "Cursola",
       "types": ["고스트"],
       "genderRatio": {
           "M": 0.25,
           "F": 0.75
       },
       "baseStats": {
           "hp": 60,
           "atk": 95,
           "def": 50,
           "spa": 145,
           "spd": 130,
           "spe": 30
       },
       "abilities": {
           "0": "깨어진갑옷",
           "H": "멸망의바디"
       },
       "heightm": 1,
       "weightkg": 0.4,
       "color": "White",
       "prevo": "Corsola-Galar",
       "evoLevel": 38,
       "eggGroups": ["Water 1", "Water 3"]
   },
   "창파나이트": {
       "num": 865,
       "name": "Sirfetch’d",
       "types": ["격투"],
       "baseStats": {
           "hp": 62,
           "atk": 135,
           "def": 95,
           "spa": 68,
           "spd": 82,
           "spe": 65
       },
       "abilities": {
           "0": "불굴의 마음",
           "H": "배짱"
       },
       "heightm": 0.8,
       "weightkg": 117,
       "color": "White",
       "prevo": "Farfetch’d-Galar",
       "evoType": "other",
       "evoCondition": "Land 3 critical hits in 1 battle",
       "eggGroups": ["Flying", "Field"]
   },
   "마임꽁꽁": {
       "num": 866,
       "name": "Mr. Rime",
       "types": ["얼음", "에스퍼"],
       "baseStats": {
           "hp": 80,
           "atk": 85,
           "def": 75,
           "spa": 110,
           "spd": 100,
           "spe": 70
       },
       "abilities": {
           "0": "갈지자걸음",
           "1": "배리어프리",
           "H": "아이스바디"
       },
       "heightm": 1.5,
       "weightkg": 58.2,
       "color": "Purple",
       "prevo": "Mr. Mime-Galar",
       "evoLevel": 42,
       "eggGroups": ["Human-Like"]
   },
   "데스판": {
       "num": 867,
       "name": "Runerigus",
       "types": ["땅", "고스트"],
       "baseStats": {
           "hp": 58,
           "atk": 95,
           "def": 145,
           "spa": 50,
           "spd": 105,
           "spe": 30
       },
       "abilities": {
           "0": "떠도는영혼"
       },
       "heightm": 1.6,
       "weightkg": 66.6,
       "color": "Gray",
       "prevo": "Yamask-Galar",
       "evoType": "other",
       "evoCondition": "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
       "eggGroups": ["Mineral", "Amorphous"]
   },
   "마빌크": {
       "num": 868,
       "name": "Milcery",
       "types": ["페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 45,
           "atk": 40,
           "def": 40,
           "spa": 50,
           "spd": 61,
           "spe": 34
       },
       "abilities": {
           "0": "스위트베일",
           "H": "아로마베일"
       },
       "heightm": 0.2,
       "weightkg": 0.3,
       "color": "White",
       "evos": ["Alcremie"],
       "eggGroups": ["Fairy", "Amorphous"]
   },
   "마휘핑": {
       "num": 869,
       "name": "Alcremie",
       "baseForme": "Vanilla Cream",
       "types": ["페어리"],
       "gender": "F",
       "baseStats": {
           "hp": 65,
           "atk": 60,
           "def": 75,
           "spa": 110,
           "spd": 121,
           "spe": 64
       },
       "abilities": {
           "0": "스위트베일",
           "H": "아로마베일"
       },
       "heightm": 0.3,
       "weightkg": 0.5,
       "color": "White",
       "prevo": "Milcery",
       "evoType": "other",
       "evoCondition": "spin while holding a Sweet",
       "eggGroups": ["Fairy", "Amorphous"],
       "cosmeticFormes": ["Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
       "formeOrder": ["Alcremie", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
       "canGigantamax": "G-Max Finale"
   },
   "대여르": {
       "num": 870,
       "name": "Falinks",
       "types": ["격투"],
       "gender": "N",
       "baseStats": {
           "hp": 65,
           "atk": 100,
           "def": 100,
           "spa": 70,
           "spd": 60,
           "spe": 75
       },
       "abilities": {
           "0": "전투 무장",
           "H": "오기"
       },
       "heightm": 3,
       "weightkg": 62,
       "color": "Yellow",
       "eggGroups": ["Fairy", "Mineral"]
   },
   "찌르성게": {
       "num": 871,
       "name": "Pincurchin",
       "types": ["전기"],
       "baseStats": {
           "hp": 48,
           "atk": 101,
           "def": 95,
           "spa": 91,
           "spd": 85,
           "spe": 15
       },
       "abilities": {
           "0": "피뢰침",
           "H": "일렉트릭메이커"
       },
       "heightm": 0.3,
       "weightkg": 1,
       "color": "Purple",
       "eggGroups": ["Water 1", "Amorphous"]
   },
   "누니머기": {
       "num": 872,
       "name": "Snom",
       "types": ["얼음", "벌레"],
       "baseStats": {
           "hp": 30,
           "atk": 25,
           "def": 35,
           "spa": 45,
           "spd": 30,
           "spe": 20
       },
       "abilities": {
           "0": "인분",
           "H": "얼음인분"
       },
       "heightm": 0.3,
       "weightkg": 3.8,
       "color": "White",
       "evos": ["Frosmoth"],
       "eggGroups": ["Bug"]
   },
   "모스노우": {
       "num": 873,
       "name": "Frosmoth",
       "types": ["얼음", "벌레"],
       "baseStats": {
           "hp": 70,
           "atk": 65,
           "def": 60,
           "spa": 125,
           "spd": 90,
           "spe": 65
       },
       "abilities": {
           "0": "인분",
           "H": "얼음인분"
       },
       "heightm": 1.3,
       "weightkg": 42,
       "color": "White",
       "prevo": "Snom",
       "evoType": "levelFriendship",
       "evoCondition": "at night",
       "eggGroups": ["Bug"]
   },
   "돌헨진": {
       "num": 874,
       "name": "Stonjourner",
       "types": ["바위"],
       "baseStats": {
           "hp": 100,
           "atk": 125,
           "def": 135,
           "spa": 20,
           "spd": 20,
           "spe": 70
       },
       "abilities": {
           "0": "파워스폿"
       },
       "heightm": 2.5,
       "weightkg": 520,
       "color": "Gray",
       "eggGroups": ["Mineral"]
   },
   "빙큐보-아이스페이스": {
       "num": 875,
       "name": "Eiscue",
       "types": ["얼음"],
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 110,
           "spa": 65,
           "spd": 90,
           "spe": 50
       },
       "abilities": {
           "0": "아이스페이스"
       },
       "heightm": 1.4,
       "weightkg": 89,
       "color": "Blue",
       "eggGroups": ["Water 1", "Field"],
       "otherFormes": ["Eiscue-Noice"],
       "formeOrder": ["Eiscue", "Eiscue-Noice"]
   },
   "빙큐보-나이스페이스": {
       "num": 875,
       "name": "Eiscue-Noice",
       "baseSpecies": "Eiscue",
       "forme": "Noice",
       "types": ["얼음"],
       "baseStats": {
           "hp": 75,
           "atk": 80,
           "def": 70,
           "spa": 65,
           "spd": 50,
           "spe": 130
       },
       "abilities": {
           "0": "아이스페이스"
       },
       "heightm": 1.4,
       "weightkg": 89,
       "color": "Blue",
       "eggGroups": ["Water 1", "Field"],
       "requiredAbility": "Ice Face",
       "battleOnly": "Eiscue"
   },
   "에써르-수컷": {
       "num": 876,
       "name": "Indeedee",
       "baseForme": "M",
       "types": ["에스퍼", "노말"],
       "gender": "M",
       "baseStats": {
           "hp": 60,
           "atk": 65,
           "def": 55,
           "spa": 105,
           "spd": 95,
           "spe": 95
       },
       "abilities": {
           "0": "정신력",
           "1": "싱크로",
           "H": "사이코메이커"
       },
       "heightm": 0.9,
       "weightkg": 28,
       "color": "Purple",
       "eggGroups": ["Fairy"],
       "otherFormes": ["Indeedee-F"],
       "formeOrder": ["Indeedee", "Indeedee-F"]
   },
   "에써르-암컷": {
       "num": 876,
       "name": "Indeedee-F",
       "baseSpecies": "Indeedee",
       "forme": "F",
       "types": ["에스퍼", "노말"],
       "gender": "F",
       "baseStats": {
           "hp": 70,
           "atk": 55,
           "def": 65,
           "spa": 95,
           "spd": 105,
           "spe": 85
       },
       "abilities": {
           "0": "마이페이스",
           "1": "싱크로",
           "H": "사이코메이커"
       },
       "heightm": 0.9,
       "weightkg": 28,
       "color": "Purple",
       "eggGroups": ["Fairy"]
   },
   "모르페코": {
       "num": 877,
       "name": "Morpeko",
       "types": ["전기", "악"],
       "baseStats": {
           "hp": 58,
           "atk": 95,
           "def": 58,
           "spa": 70,
           "spd": 58,
           "spe": 97
       },
       "abilities": {
           "0": "꼬르륵스위치"
       },
       "heightm": 0.3,
       "weightkg": 3,
       "color": "Yellow",
       "eggGroups": ["Field", "Fairy"],
       "otherFormes": ["Morpeko-Hangry"],
       "formeOrder": ["Morpeko", "Morpeko-Hangry"]
   },
   "모르페코-배고픈 모양": {
       "num": 877,
       "name": "Morpeko-Hangry",
       "baseSpecies": "Morpeko",
       "forme": "Hangry",
       "types": ["전기", "악"],
       "baseStats": {
           "hp": 58,
           "atk": 95,
           "def": 58,
           "spa": 70,
           "spd": 58,
           "spe": 97
       },
       "abilities": {
           "0": "꼬르륵스위치"
       },
       "heightm": 0.3,
       "weightkg": 3,
       "color": "Yellow",
       "eggGroups": ["Field", "Fairy"],
       "requiredAbility": "Hunger Switch",
       "battleOnly": "Morpeko"
   },
   "끼리동": {
       "num": 878,
       "name": "Cufant",
       "types": ["강철"],
       "baseStats": {
           "hp": 72,
           "atk": 80,
           "def": 49,
           "spa": 40,
           "spd": 49,
           "spe": 40
       },
       "abilities": {
           "0": "우격다짐",
           "H": "헤비메탈"
       },
       "heightm": 1.2,
       "weightkg": 100,
       "color": "Yellow",
       "evos": ["Copperajah"],
       "eggGroups": ["Field", "Mineral"]
   },
   "대왕끼리동": {
       "num": 879,
       "name": "Copperajah",
       "types": ["강철"],
       "baseStats": {
           "hp": 122,
           "atk": 130,
           "def": 69,
           "spa": 80,
           "spd": 69,
           "spe": 30
       },
       "abilities": {
           "0": "우격다짐",
           "H": "헤비메탈"
       },
       "heightm": 3,
       "weightkg": 650,
       "color": "Green",
       "prevo": "Cufant",
       "evoLevel": 34,
       "eggGroups": ["Field", "Mineral"],
       "canGigantamax": "G-Max Steelsurge"
   },
   "파치래곤": {
       "num": 880,
       "name": "Dracozolt",
       "types": ["전기", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 100,
           "def": 90,
           "spa": 80,
           "spd": 70,
           "spe": 75
       },
       "abilities": {
           "0": "축전",
           "1": "의욕",
           "H": "모래헤치기"
       },
       "heightm": 1.8,
       "weightkg": 190,
       "color": "Green",
       "eggGroups": ["Undiscovered"]
   },
   "파치르돈": {
       "num": 881,
       "name": "Arctozolt",
       "types": ["전기", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 100,
           "def": 90,
           "spa": 90,
           "spd": 80,
           "spe": 55
       },
       "abilities": {
           "0": "축전",
           "1": "정전기",
           "H": "눈치우기"
       },
       "heightm": 2.3,
       "weightkg": 150,
       "color": "Blue",
       "eggGroups": ["Undiscovered"]
   },
   "어래곤": {
       "num": 882,
       "name": "Dracovish",
       "types": ["물", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 90,
           "def": 100,
           "spa": 70,
           "spd": 80,
           "spe": 75
       },
       "abilities": {
           "0": "저수",
           "1": "옹골찬턱",
           "H": "모래헤치기"
       },
       "heightm": 2.3,
       "weightkg": 215,
       "color": "Green",
       "eggGroups": ["Undiscovered"]
   },
   "어치르돈": {
       "num": 883,
       "name": "Arctovish",
       "types": ["물", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 90,
           "atk": 90,
           "def": 100,
           "spa": 80,
           "spd": 90,
           "spe": 55
       },
       "abilities": {
           "0": "저수",
           "1": "아이스바디",
           "H": "눈치우기"
       },
       "heightm": 2,
       "weightkg": 175,
       "color": "Blue",
       "eggGroups": ["Undiscovered"]
   },
   "두랄루돈": {
       "num": 884,
       "name": "Duraludon",
       "types": ["강철", "드래곤"],
       "baseStats": {
           "hp": 70,
           "atk": 95,
           "def": 115,
           "spa": 120,
           "spd": 50,
           "spe": 85
       },
       "abilities": {
           "0": "라이트메탈",
           "1": "헤비메탈",
           "H": "굳건한신념"
       },
       "heightm": 1.8,
       "weightkg": 40,
       "color": "White",
       "eggGroups": ["Mineral", "Dragon"],
       "canGigantamax": "G-Max Depletion"
   },
   "드라꼰": {
       "num": 885,
       "name": "Dreepy",
       "types": ["드래곤", "고스트"],
       "baseStats": {
           "hp": 28,
           "atk": 60,
           "def": 30,
           "spa": 40,
           "spd": 30,
           "spe": 82
       },
       "abilities": {
           "0": "클리어 바디",
           "1": "틈새포착",
           "H": "저주받은바디"
       },
       "heightm": 0.5,
       "weightkg": 2,
       "color": "Green",
       "evos": ["Drakloak"],
       "eggGroups": ["Amorphous", "Dragon"]
   },
   "드래런치": {
       "num": 886,
       "name": "Drakloak",
       "types": ["드래곤", "고스트"],
       "baseStats": {
           "hp": 68,
           "atk": 80,
           "def": 50,
           "spa": 60,
           "spd": 50,
           "spe": 102
       },
       "abilities": {
           "0": "클리어 바디",
           "1": "틈새포착",
           "H": "저주받은바디"
       },
       "heightm": 1.4,
       "weightkg": 11,
       "color": "Green",
       "prevo": "Dreepy",
       "evoLevel": 50,
       "evos": ["Dragapult"],
       "eggGroups": ["Amorphous", "Dragon"]
   },
   "드래펄트": {
       "num": 887,
       "name": "Dragapult",
       "types": ["드래곤", "고스트"],
       "baseStats": {
           "hp": 88,
           "atk": 120,
           "def": 75,
           "spa": 100,
           "spd": 75,
           "spe": 142
       },
       "abilities": {
           "0": "클리어 바디",
           "1": "틈새포착",
           "H": "저주받은바디"
       },
       "heightm": 3,
       "weightkg": 50,
       "color": "Green",
       "prevo": "Drakloak",
       "evoLevel": 60,
       "eggGroups": ["Amorphous", "Dragon"]
   },
   "자시안": {
       "num": 888,
       "name": "Zacian",
       "baseForme": "Hero",
       "types": ["페어리"],
       "gender": "N",
       "baseStats": {
           "hp": 92,
           "atk": 130,
           "def": 115,
           "spa": 80,
           "spd": 115,
           "spe": 138
       },
       "abilities": {
           "0": "불요의검"
       },
       "heightm": 2.8,
       "weightkg": 110,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Zacian-Crowned"],
       "formeOrder": ["Zacian", "Zacian-Crowned"],
       "cannotDynamax": true
   },
   "자시안-검왕": {
       "num": 888,
       "name": "Zacian-Crowned",
       "baseSpecies": "Zacian",
       "forme": "Crowned",
       "types": ["페어리", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 92,
           "atk": 170,
           "def": 115,
           "spa": 80,
           "spd": 115,
           "spe": 148
       },
       "abilities": {
           "0": "불요의검"
       },
       "heightm": 2.8,
       "weightkg": 355,
       "color": "Blue",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Rusted Sword",
       "changesFrom": "Zacian",
       "cannotDynamax": true
   },
   "자마젠타": {
       "num": 889,
       "name": "Zamazenta",
       "baseForme": "Hero",
       "types": ["격투"],
       "gender": "N",
       "baseStats": {
           "hp": 92,
           "atk": 130,
           "def": 115,
           "spa": 80,
           "spd": 115,
           "spe": 138
       },
       "abilities": {
           "0": "불굴의방패"
       },
       "heightm": 2.9,
       "weightkg": 210,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Zamazenta-Crowned"],
       "formeOrder": ["Zamazenta", "Zamazenta-Crowned"],
       "cannotDynamax": true
   },
   "자마젠타-방패왕": {
       "num": 889,
       "name": "Zamazenta-Crowned",
       "baseSpecies": "Zamazenta",
       "forme": "Crowned",
       "types": ["격투", "강철"],
       "gender": "N",
       "baseStats": {
           "hp": 92,
           "atk": 130,
           "def": 145,
           "spa": 80,
           "spd": 145,
           "spe": 128
       },
       "abilities": {
           "0": "불굴의방패"
       },
       "heightm": 2.9,
       "weightkg": 785,
       "color": "Red",
       "eggGroups": ["Undiscovered"],
       "requiredItem": "Rusted Shield",
       "changesFrom": "Zamazenta",
       "cannotDynamax": true
   },
   "무한다이노": {
       "num": 890,
       "name": "Eternatus",
       "types": ["독", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 140,
           "atk": 85,
           "def": 95,
           "spa": 145,
           "spd": 95,
           "spe": 130
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 20,
       "weightkg": 950,
       "color": "Purple",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Eternatus-Eternamax"],
       "formeOrder": ["Eternatus", "Eternatus-Eternamax"],
       "cannotDynamax": true
   },
   "무한다이노-무한다이맥스": {
       "num": 890,
       "name": "Eternatus-Eternamax",
       "baseSpecies": "Eternatus",
       "forme": "Eternamax",
       "types": ["독", "드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 255,
           "atk": 115,
           "def": 250,
           "spa": 125,
           "spd": 250,
           "spe": 130
       },
       "abilities": {
           "0": "프레셔"
       },
       "heightm": 100,
       "weightkg": 0,
       "color": "Purple",
       "eggGroups": ["Undiscovered"],
       "cannotDynamax": true
   },
   "치고마": {
       "num": 891,
       "name": "Kubfu",
       "types": ["격투"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 60,
           "atk": 90,
           "def": 60,
           "spa": 53,
           "spd": 50,
           "spe": 72
       },
       "abilities": {
           "0": "정신력"
       },
       "heightm": 0.6,
       "weightkg": 12,
       "color": "Gray",
       "evos": ["Urshifu", "Urshifu-Rapid-Strike"],
       "eggGroups": ["Undiscovered"]
   },
   "우라오스-일격": {
       "num": 892,
       "name": "Urshifu",
       "baseForme": "Single-Strike",
       "types": ["격투", "악"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 100,
           "atk": 130,
           "def": 100,
           "spa": 63,
           "spd": 60,
           "spe": 97
       },
       "abilities": {
           "0": "보이지않는주먹"
       },
       "heightm": 1.9,
       "weightkg": 105,
       "color": "Gray",
       "prevo": "Kubfu",
       "evoType": "other",
       "evoCondition": "Defeat the Single Strike Tower",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Urshifu-Rapid-Strike"],
       "formeOrder": ["Urshifu", "Urshifu-Rapid-Strike"],
       "canGigantamax": "G-Max One Blow"
   },
   "우라오스-연격": {
       "num": 892,
       "name": "Urshifu-Rapid-Strike",
       "baseSpecies": "Urshifu",
       "forme": "Rapid-Strike",
       "types": ["격투", "물"],
       "genderRatio": {
           "M": 0.875,
           "F": 0.125
       },
       "baseStats": {
           "hp": 100,
           "atk": 130,
           "def": 100,
           "spa": 63,
           "spd": 60,
           "spe": 97
       },
       "abilities": {
           "0": "보이지않는주먹"
       },
       "heightm": 1.9,
       "weightkg": 105,
       "color": "Gray",
       "prevo": "Kubfu",
       "evoType": "other",
       "evoCondition": "Defeat the Rapid Strike Tower",
       "eggGroups": ["Undiscovered"],
       "canGigantamax": "G-Max Rapid Flow"
   },
   "자루도": {
       "num": 893,
       "name": "Zarude",
       "types": ["악", "풀"],
       "gender": "N",
       "baseStats": {
           "hp": 105,
           "atk": 120,
           "def": 105,
           "spa": 70,
           "spd": 95,
           "spe": 105
       },
       "abilities": {
           "0": "리프가드"
       },
       "heightm": 1.8,
       "weightkg": 70,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Zarude-Dada"],
       "formeOrder": ["Zarude", "Zarude-Dada"]
   },
   "자루도-아빠": {
       "num": 893,
       "name": "Zarude-Dada",
       "baseSpecies": "Zarude",
       "forme": "Dada",
       "types": ["악", "풀"],
       "gender": "N",
       "baseStats": {
           "hp": 105,
           "atk": 120,
           "def": 105,
           "spa": 70,
           "spd": 95,
           "spe": 105
       },
       "abilities": {
           "0": "리프가드"
       },
       "heightm": 1.8,
       "weightkg": 70,
       "color": "Black",
       "eggGroups": ["Undiscovered"]
   },
   "레지에레키": {
       "num": 894,
       "name": "Regieleki",
       "types": ["전기"],
       "gender": "N",
       "baseStats": {
           "hp": 80,
           "atk": 100,
           "def": 50,
           "spa": 100,
           "spd": 50,
           "spe": 200
       },
       "abilities": {
           "0": "트랜지스터"
       },
       "heightm": 1.2,
       "weightkg": 145,
       "color": "Yellow",
       "eggGroups": ["Undiscovered"]
   },
   "레지드래고": {
       "num": 895,
       "name": "Regidrago",
       "types": ["드래곤"],
       "gender": "N",
       "baseStats": {
           "hp": 200,
           "atk": 100,
           "def": 50,
           "spa": 100,
           "spd": 50,
           "spe": 80
       },
       "abilities": {
           "0": "용의턱"
       },
       "heightm": 2.1,
       "weightkg": 200,
       "color": "Green",
       "eggGroups": ["Undiscovered"]
   },
   "블리자포스": {
       "num": 896,
       "name": "Glastrier",
       "types": ["얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 145,
           "def": 130,
           "spa": 65,
           "spd": 110,
           "spe": 30
       },
       "abilities": {
           "0": "백의울음"
       },
       "heightm": 2.2,
       "weightkg": 800,
       "color": "White",
       "eggGroups": ["Undiscovered"]
   },
   "레이스포스": {
       "num": 897,
       "name": "Spectrier",
       "types": ["고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 65,
           "def": 60,
           "spa": 145,
           "spd": 80,
           "spe": 130
       },
       "abilities": {
           "0": "흑의울음"
       },
       "heightm": 2,
       "weightkg": 44.5,
       "color": "Black",
       "eggGroups": ["Undiscovered"]
   },
   "버드렉스": {
       "num": 898,
       "name": "Calyrex",
       "types": ["에스퍼", "풀"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 80,
           "def": 80,
           "spa": 80,
           "spd": 80,
           "spe": 80
       },
       "abilities": {
           "0": "긴장감"
       },
       "heightm": 1.1,
       "weightkg": 7.7,
       "color": "Green",
       "eggGroups": ["Undiscovered"],
       "otherFormes": ["Calyrex-Ice", "Calyrex-Shadow"],
       "formeOrder": ["Calyrex", "Calyrex-Ice", "Calyrex-Shadow"]
   },
   "버드렉스-백마": {
       "num": 898,
       "name": "Calyrex-Ice",
       "baseSpecies": "Calyrex",
       "forme": "Ice",
       "types": ["에스퍼", "얼음"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 165,
           "def": 150,
           "spa": 85,
           "spd": 130,
           "spe": 50
       },
       "abilities": {
           "0": "혼연일체(긴장감 + 백의울음)"
       },
       "heightm": 2.4,
       "weightkg": 809.1,
       "color": "White",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Calyrex"
   },
   "버드렉스-흑마": {
       "num": 898,
       "name": "Calyrex-Shadow",
       "baseSpecies": "Calyrex",
       "forme": "Shadow",
       "types": ["에스퍼", "고스트"],
       "gender": "N",
       "baseStats": {
           "hp": 100,
           "atk": 85,
           "def": 80,
           "spa": 165,
           "spd": 100,
           "spe": 150
       },
       "abilities": {
           "0": "혼연일체(긴장감 + 흑의울음)"
       },
       "heightm": 2.4,
       "weightkg": 53.6,
       "color": "Black",
       "eggGroups": ["Undiscovered"],
       "changesFrom": "Calyrex"
   }
}
 export default pokedex;