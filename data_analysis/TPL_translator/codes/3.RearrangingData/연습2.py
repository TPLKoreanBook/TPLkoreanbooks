import json


with open('/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles4.json') as j:
    data = json.loads(j.read())
    books = data["books"]

nocoverbooks = []
noKakaobooks = []
deletedIndex = []
count = 0
count2 = 0

for book in books:
    if book['cover']:
        if not 'cover_kakao' in book.keys():
            noKakaobooks.append(count2)
        elif (book["cover_kakao"] == ""):
            noKakaobooks.append(count2)

    count2 += 1

num = 0
for book in noKakaobooks:
    books.append(books.pop(book - num))
    num += 1

for book in books:
    if not book['cover']:
        if not 'cover_kakao' in book.keys():
            nocoverbooks.append(book)
            deletedIndex.append(count)
    count += 1

num2 = 0
for index in deletedIndex:
    books.append(books.pop(index - num2))
    num2 += 1

id = 0
for book in books:
    book['id'] = id
    id += 1

books = {"books": books}
with open("/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles5.json", "w") as j:
    json.dump(books, j, indent=3, ensure_ascii=False)

nocoverbooks = {"books": nocoverbooks}
with open("/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/noCoverBooks.json", "w") as j:
    json.dump(nocoverbooks, j, indent=3, ensure_ascii=False)