import json

with open ("server/tpl_python/data_webcrawling/final_unsearched_links.json", 'r') as f:
    aList = json.loads(f.read())['final_unsearched_link']

with open ("server/tpl_python/data_webcrawling/aladinLinksOfBooks.json", 'r') as f:
    linksofBooks = json.loads(f.read())["links"]

result = []

for item in aList:
    for links in linksofBooks:
        if links['link'] == item:
            result.append(links['original_title'])

result = list(dict.fromkeys(result))
print(result)