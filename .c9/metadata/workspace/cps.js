{"changed":true,"filter":false,"title":"cps.js","tooltip":"/cps.js","value":"var a = \"hello\";\n\n\n\nfunction str1 (str, callBack){\n    callBack(str[0]);\n}\n\nstr1(a, function(a){\n    console.log(a);\n});\n\n\n\nfunction str2 (str, callback){\n    callback(str[str.length-1]);\n}\nstr2(a, function(a){\n    console.log(a);\n});\n\n\n\nfunction str3 (str, cb){\n    cb(str[0], str[str.length - 1]);\n}\nstr3(a, function(b,c){\n    console.log(b+c);\n});\n\n","undoManager":{"mark":91,"position":100,"stack":[[{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["s"],"id":403}],[{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["t"],"id":404}],[{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":["r"],"id":405}],[{"start":{"row":23,"column":18},"end":{"row":23,"column":20},"action":"insert","lines":["[]"],"id":406}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["s"],"id":407}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["y"],"id":408}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["t"],"id":409}],[{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["r"],"id":410}],[{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"remove","lines":["r"],"id":411}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"remove","lines":["t"],"id":412}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"remove","lines":["y"],"id":413}],[{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["t"],"id":414}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["r"],"id":415}],[{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["."],"id":416}],[{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["l"],"id":417}],[{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["e"],"id":418}],[{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["n"],"id":419}],[{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["g"],"id":420}],[{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"insert","lines":["t"],"id":421}],[{"start":{"row":23,"column":28},"end":{"row":23,"column":29},"action":"insert","lines":["h"],"id":422}],[{"start":{"row":23,"column":29},"end":{"row":23,"column":30},"action":"insert","lines":[" "],"id":423}],[{"start":{"row":23,"column":30},"end":{"row":23,"column":31},"action":"insert","lines":["-"],"id":424}],[{"start":{"row":23,"column":31},"end":{"row":23,"column":32},"action":"insert","lines":[" "],"id":425}],[{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"insert","lines":["1"],"id":426}],[{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":[";"],"id":427}],[{"start":{"row":24,"column":1},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":428}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["s"],"id":429}],[{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["t"],"id":430}],[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["r"],"id":431}],[{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["3"],"id":432}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":6},"action":"insert","lines":["()"],"id":433}],[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["a"],"id":434}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":[","],"id":435}],[{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":[" "],"id":436}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["c"],"id":437}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["b"],"id":438}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":12},"action":"insert","lines":["()"],"id":439}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["a"],"id":440}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":[","],"id":441}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["a"],"id":442}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"remove","lines":[")"],"id":443}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"remove","lines":["a"],"id":444}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"remove","lines":[","],"id":445}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"remove","lines":["a"],"id":446}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":12},"action":"remove","lines":["()"],"id":447}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"remove","lines":["b"],"id":448}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"remove","lines":["c"],"id":449}],[{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"remove","lines":[" "],"id":450}],[{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":[" "],"id":451}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["f"],"id":452}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["u"],"id":453}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["n"],"id":454}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["c"],"id":455}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["t"],"id":456}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["i"],"id":457}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["o"],"id":458}],[{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["n"],"id":459}],[{"start":{"row":25,"column":16},"end":{"row":25,"column":18},"action":"insert","lines":["()"],"id":460}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["a"],"id":461}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":[","],"id":462}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["a"],"id":463}],[{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["{"],"id":464}],[{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["}"],"id":465}],[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":[")"],"id":466}],[{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":[";"],"id":467}],[{"start":{"row":25,"column":22},"end":{"row":27,"column":0},"action":"insert","lines":["","    ",""],"id":468}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["c"],"id":469}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["o"],"id":470}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["n"],"id":471}],[{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["s"],"id":472}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["o"],"id":473}],[{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["l"],"id":474}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["e"],"id":475}],[{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["."],"id":476}],[{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["l"],"id":477}],[{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["o"],"id":478}],[{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["g"],"id":479}],[{"start":{"row":26,"column":15},"end":{"row":26,"column":17},"action":"insert","lines":["()"],"id":480}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"remove","lines":["a"],"id":481}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["b"],"id":482}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"remove","lines":["b"],"id":483}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"remove","lines":[","],"id":484}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"remove","lines":["a"],"id":485}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["b"],"id":486}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":[","],"id":487}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["c"],"id":488}],[{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["b"],"id":489}],[{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":[","],"id":490}],[{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"remove","lines":[","],"id":491}],[{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["+"],"id":492}],[{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["c"],"id":493}],[{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":[";"],"id":494}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":495}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":496}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":497}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":498}],[{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":499}],[{"start":{"row":20,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":500}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":501}],[{"start":{"row":28,"column":3},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":502}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":503}]]},"ace":{"folds":[],"scrolltop":356,"scrollleft":0,"selection":{"start":{"row":30,"column":0},"end":{"row":30,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":21,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1447873116698}