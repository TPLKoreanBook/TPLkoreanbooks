import json

with open('/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json') as j:
    books = json.loads(j.read())
    books = books["books"]

searchedBooks = []
unsearchedBooks = []

for book in books:
    try:
        if book["title"] != '':
            searchedBooks.append(book)
        else:
            unsearchedBooks.append(book)
    except:
        unsearchedBooks.append(book)

print(len(searchedBooks))
print(len(unsearchedBooks))

번역
구글
알라딘

# for book in books:
#     if book['title'] == '':
#         unsearchedBooks.append(book['id'] + ' / ' + book['translated_title'] + ' / ' + book['translated_author'])

# for book in books:
#     if len(book) == 9:
#         book['aladin_link'] = ''
#         book['title'] = ''
#         book['author'] = ''
#         book['cover'] = ''
#         book['category'] = ''

# books = {"books": books}
# with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json", "w") as j:
#     json.dump(books, j, indent=3, ensure_ascii=False)