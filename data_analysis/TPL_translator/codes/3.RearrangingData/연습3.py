import json

with open('/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles5.json') as j:
    data = json.loads(j.read())
    books = data["books"]

count = 0
for book in books:
    if 'img_no.jpg' in book['cover']:
        books[count]['cover'] = ''
    count += 1


books = {"books": books}
with open("/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles5.json", "w") as j:
    json.dump(books, j, indent=3, ensure_ascii=False)