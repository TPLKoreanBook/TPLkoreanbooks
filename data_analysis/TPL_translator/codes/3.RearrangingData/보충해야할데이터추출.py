import json

with open('/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles5.json') as j:
    books = json.loads(j.read())
    books = books["books"]

unsearchedbooks = []
count = 3568

while count <= 4009:
    unsearchedbooks.append([books[count]['translated_title'], books[count]['translated_author'], books[count]['link']])
    count += 1


with open("/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/검색안된제목들.txt", "w") as j:
    for books in unsearchedbooks:
        j.write(books[0])
        j.write('§')
        j.write(books[1])
        j.write('§')
        j.write(books[2])
        j.write('\n')