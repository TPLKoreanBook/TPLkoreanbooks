import requests
from bs4 import BeautifulSoup
import json
import re
with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json", "r") as j:
    books = json.loads(j.read())
    books = books["books"]
# Get the starting index from constant.py
with open('/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/code/2.AladinandGoogle/constant.text', 'r') as f:
    startingIndex = int(f.readline())

count = startingIndex
for i in range(startingIndex, len(books)):
    searchingTitle = books[i]['translated_title']
    searchingData = books[i]['translated_title'] + ' ' + books[i]['translated_author']
    booktitle_aladin = ''
    booktitle_kyobo = ''
    try:
# Searching "title + author" on Google and getting html text into soup
        url = "https://www.google.com/search?q={}".format(searchingData)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")
# Find all h3 tags and filter with the keyword '알라딘' and '교보문고'
        search_result = soup.body.find_all('h3')
        for bookInfo in search_result:
            if bookInfo.findAll(text=re.compile('알라딘')):
                booktitle = bookInfo
                if booktitle:
                    booktitle = booktitle.get_text()
                    booktitle_aladin = booktitle.replace(" - 알라딘", '').replace("[전자책]", '').replace("[중고]", '').replace('[eBook]', '').replace("(양장)", '').strip()
                    if booktitle_aladin.count('미리보기') != 0:
                        booktitle_aladin = ''
                    pass
            elif bookInfo.findAll(text=re.compile('교보문고')):
                booktitle2 = bookInfo
                if booktitle2:
                    booktitle2 = booktitle2.get_text()
                    booktitle_kyobo = booktitle2.replace("교보문고", '').replace("전자책", '').replace("중고", '').replace("양장본", '').replace('/', '').replace('-', '').replace('(원서번역서', '').replace('( HardCover)', '').split('|')[0].strip()
                    if booktitle_kyobo.count('검색 ') != 0:
                        booktitle_kyobo = ''
                    pass

# If there is no result, search again with only title(no author)
        if (booktitle_aladin and booktitle_kyobo) == '':
            url = "https://www.google.com/search?q={}".format(searchingTitle)
            headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
            res = requests.get(url)
            res.raise_for_status()
            soup = BeautifulSoup(res.text, "lxml")
            search_result = soup.body.find_all('h3')
        for bookInfo in search_result:
            if bookInfo.findAll(text=re.compile('알라딘')):
                booktitle = bookInfo
                if booktitle:
                    booktitle = booktitle.get_text()
                    booktitle_aladin = booktitle.replace(" - 알라딘", '').replace("[전자책]", '').replace("[중고]", '').replace("(양장)", '').strip()
                    pass
            elif bookInfo.findAll(text=re.compile('교보문고')):
                booktitle2 = bookInfo
                if booktitle2:
                    booktitle2 = booktitle2.get_text()
                    booktitle_kyobo = booktitle2.replace("교보문고", '').replace("전자책", '').replace("중고", '').replace("양장본", '').replace('/', '').strip()
                    pass

        print("%d th search" %count)
        count = count + 1
        books[i]["aladin_title"] = booktitle_aladin
        books[i]["kyobo_title"] = booktitle_kyobo
# Error handling... 
# If google blocks me, then break the for loop and save data
    except Exception as e:
        print(e)
        print("error on %d" %count)
        break

# Updating googleSearchedTitles
books = {"books": books}
with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json", "w") as j:
    json.dump(books, j, indent=3, ensure_ascii=False)

# Updating the startingIndex
with open('/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/code/2.AladinandGoogle/constant.text', 'w') as f:
    f.write(str(count))