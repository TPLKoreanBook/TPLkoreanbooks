import json

TBS = [] #Title Before Search
CN = 2902 #Count Number (2175 -> 2902 ->  -> 4748)

fileObject = open("client/public/tpl_json.json", "r")
jsonContent = fileObject.read()
aList = json.loads(jsonContent)

for i in range(CN, 4748):
    adding_data = [aList['books'][0][i]['title'], aList['books'][0][i]['link']]
    TBS.append(adding_data)