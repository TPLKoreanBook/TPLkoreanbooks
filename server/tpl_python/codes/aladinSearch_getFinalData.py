import requests
from bs4 import BeautifulSoup
import json

titlesBeforeSearch = []
linksOfBooks = []
unsearched_titles = []
results = []
count = 0

#Fetching titles from json file
with open ("server/tpl_python/data_webcrawling/aladinLinksOfBooks.json", 'r') as f:
    aList = json.loads(f.read())["links"]

for link in aList:
    link = link['link']
    try:
        # Searching title on Google and get html text into soup
        url = link
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")

        title = soup.body.find('a', attrs={'class': 'Ere_bo_title'}).get_text().replace('[세트]', '').replace('[eBook]', '').strip()
        author = soup.body.find('a', attrs={'class': 'Ere_sub2_title'}).get_text()
        category = soup.body.find('ul', attrs={'id': 'ulCategory'}).find_all('a')[1].get_text()
        cover =  soup.body.find('img', attrs={'id': 'CoverMainImage'}).get("src")
        adding_data = {"count":count, "title":title, "author":author, "category":category, "cover":cover}
        
        results.append(adding_data)
        print("%dth search is done" %count)
        count = count + 1

    except Exception as e:
        print(e)
        print("error on %d" %count)
        unsearched_titles.append(link)
        count = count + 1

        continue


#update final book data
#....error handling required!!!.... -> when final_book_data doesn't exist
with open("server/tpl_python/data_webcrawling/final_book_data.json", "r") as j:
    data = json.loads(j.read())

data = data["books"]
for result in results:
    data.append(result)
data = {"books": data}

with open("server/tpl_python/data_webcrawling/final_book_data.json", "w") as j:
    json.dump(data, j, indent=3, ensure_ascii=False)

#save unsearched data 
with open("server/tpl_python/data_webcrawling/final_book_data.json", "r") as j:
    data2 = json.loads(j.read())

data2 = data2["final_unsearched_link"]
for item in unsearched_titles:
    data2.append(item)
data2 = {"final_unsearched_link": data}

with open("server/tpl_python/data_webcrawling/final_book_data.json", "w") as j:
    json.dump(data2, j, indent=3, ensure_ascii=False)