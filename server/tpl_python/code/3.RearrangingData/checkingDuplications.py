import json
import collections

with open("server/tpl_python/data_webcrawling/final_book_data(without_duplications).json", "r" ) as f:
    books = json.load(f)["books"]

links = []
for book in books:
    link = book["link"]
    links.append(link)

titles = []
for book in books:
    title = book["title"]
    titles.append(title)

overlappedlinks = [item for item, count in collections.Counter(links).items() if count > 1]
overlappedtitles = [item for item, count in collections.Counter(titles).items() if count > 1]


for overlappedtitle in overlappedtitles:
    print(overlappedtitle.replace('https://www.torontopubliclibrary.ca/search.jsp?Ntt=', ''))

print(len(overlappedtitles))

# for book in books['books']:
#     book['link'] = 

# with open("server/tpl_python/data_webcrawling/final_book_data(without_duplications).json", "w") as f:
#     json.dump(books, f,indent=3, ensure_ascii=False)
