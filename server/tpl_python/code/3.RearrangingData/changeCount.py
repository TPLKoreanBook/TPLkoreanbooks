from itertools import count
import json

with open ("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/aladinlinks530.json", 'r') as f:
    links = json.load(f)["links"]

count = 1616
for link in links:
    link['count'] = count
    count += 1

with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/aladinlinks530.json", "w") as f:
    json.dump(links, f,indent=3, ensure_ascii=False)
