import requests
from bs4 import BeautifulSoup
import json
with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json", "r") as j:
    books = json.loads(j.read())
    books = books["books"]

# statingNumber 0 -> 100
statingNumber = 0
lenOfBooks = len(books)
count = statingNumber
for i in range(20, lenOfBooks):
# Choose the best title among three options
    if books[i]['aladin_title']:
        searchingTitle = books[i]['aladin_title']
    elif books[i]['kyobo_title']:
        searchingTitle = books[i]['kyobo_title']
    else:
        searchingTitle = books[i]['translated_title']
    try:
# Searching title on Google and get html text into soup
        url = "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord={}".format(searchingTitle)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")

        search_result = soup.body.find('div', attrs={"class": "ss_book_box"})
        try: 
            aladin_link = search_result.find('a', attrs={'class': "bo3"}).get("href")
            books[i]['aladin_link'] = aladin_link
            try:
                url = aladin_link
                res = requests.get(url)
                res.raise_for_status()
                soup = BeautifulSoup(res.text, "lxml")
                title = soup.body.find('a', attrs={'class': 'Ere_bo_title'}).get_text().replace('[세트]', '').replace('[eBook]', '').strip()
                author = soup.body.find('a', attrs={'class': 'Ere_sub2_title'}).get_text()
                cover =  soup.body.find('img', attrs={'id': 'CoverMainImage'}).get("src")
                category = soup.body.find('ul', attrs={'id': 'ulCategory'}).find_all('a')[1].get_text().replace('/', '+')
                books[i]['title'] = title
                books[i]['author'] = author
                books[i]['cover'] = cover
                books[i]['category'] = category
            except:
                pass
        except:
            books[i]['aladin_link'] = ''
            books[i]['title'] = ''
            books[i]['author'] = ''
            books[i]['cover'] = ''
            books[i]['category'] = ''
        print("%dth search is done" %count)
        count += 1
    except Exception as e:
        print(e)
        print("error on %d" %count)
        break

books = {"books": books}
with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json", "w") as j:
    json.dump(books, j, indent=3, ensure_ascii=False)