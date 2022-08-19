import requests
from bs4 import BeautifulSoup
import json

#range 0~89 -> 4358 results; 50 results in one page; 88 pages(4400results) in totall
book_list = []
for i in range(0,89):
    try:
#get HTML files from TPL website... 'NO={50*i}' means pages number
        url = "https://www.torontopubliclibrary.ca/search.jsp?Erp=50&N=37906+38221&No={}&Ntk=Keyword_Anywhere&advancedSearch=true".format(50*i)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")

#1. description small-9 medium-10 columns -> data of each book
        books = soup.find_all("div", attrs={"class": "description small-9 medium-10 columns"}) 
        for book in books: #a book contains a single book info
            insideList = []
#2. notranslate -> title info
            book_title = book.find("span", attrs={"class": "notranslate"}) #notranslate title
            if book_title:
                book_title = book_title.get_text().replace("/", '').replace(',', '.').strip()
                insideList.append(book_title)
#3. author -> author info
                book_author = book.find("span", attrs={"class": "author"})
                if book_author:
                    book_author = book_author.get_text().replace('author', '').replace("/", '').replace('\n', '').replace(' ', '').replace(',', ' ').replace('.', ' ').replace('Ch\'op\'an.', '').strip()
                    book_author = ''.join([i for i in book_author if not i.isdigit()]).replace('-', '').strip()
                    insideList.append(book_author)
                    book_list.append(insideList)
        print("page %d is done" %i)
    except:
        print("error on %d th" %i)      
        continue  


result = []
count = -1
for book in book_list:
    count += 1
    title = book[0]
    if len(book) == 2:
        author = book[1]
    else:
        author = ''
    adding_data = {
        "id": count,
        "tpl_title": title,
        "tpl_author": author,
        "link": "https://www.torontopubliclibrary.ca/search.jsp?Ntt=" + title,
        "aladin_title": '',
        "kyobo_title": '',
        }
    result.append(adding_data)

#.....if there is already file, then add below codes.... It will append new data to the original one

# with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/tpl_data.json", "r") as j:
#     data = json.loads(j.read())

# data = data["books"]
# for r in result:
#     data.append(r)
# data = {"books": data}  .... -> substitue below code with this code!

data = {"books": result}

with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/tpl_data.json", "w") as j:
    json.dump(data, j, indent=3, ensure_ascii=False)