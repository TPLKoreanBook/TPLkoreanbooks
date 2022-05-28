import json

TBS = [] #Title Before Search
CN = 2175 #Count Number

fileObject = open("client/public/tpl_json.json", "r")
jsonContent = fileObject.read()
aList = json.loads(jsonContent)

for i in range(CN, 4748):
    TBS.append(aList['books'][0][i]['title'])