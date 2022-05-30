import requests
from bs4 import BeautifulSoup
import json

titlesBeforeSearch = []
linksOfBooks = []
unsearched_titles = []
results = []
count = 0
unsearched_count = 0
searched_count = 0

#Fetching titles from json file
with open ("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/googleSearchedTitles.json", 'r') as f:
    aList = json.loads(f.read())["books"]
length_of_aList = len(aList)

#Select the best title among three choice; original title, title from aladin, title from kyobo
for i in range(0, length_of_aList):
    if aList[i][2]:
        titlesBeforeSearch.append(aList[i][2])
    elif aList[i][3]:
        titlesBeforeSearch.append(aList[i][3])
    else:
        titlesBeforeSearch.append(aList[i][1])


for title in titlesBeforeSearch:
    try:
        # Searching title on Google and get html text into soup
        url = "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord={}".format(title)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")

        search_result = soup.body.find('div', attrs={"class": "ss_book_box"})
        try: 
            search_result.find('a', attrs={'class': 'bo3'})
            link = search_result.find('a', attrs={'class': "bo3"})
            link = link.get("href")
            link_data = {"count": searched_count, "link":link}
            linksOfBooks.append(link_data)
            searched_count += 1
            link_data = {}
        except:
            link_data2 = {"count": unsearched_count, "title":title}
            unsearched_titles.append(link_data2)
            unsearched_count += 1
            link_data2 = {}
        print("%dth search is done" %count)
        count += 1
    except Exception as e:
        print(e)
        print("error on %d" %count)
        break

#update links of books

with open("server/tpl_python/data_webcrawling/aladinLinksOfBooks.json", "r") as j:
    data = json.loads(j.read())

data = data["links"]
for link in linksOfBooks:
    data.append(link)
data = {"links": data}

with open("server/tpl_python/data_webcrawling/aladinLinksOfBooks.json", "w") as j:
    json.dump(data, j, indent=3, ensure_ascii=False)


#update unsearched data
with open("server/tpl_python/data_webcrawling/aladinUnsearchedData.json", "r") as j:
    data = json.loads(j.read())

data = data["unsearched_title"]
for title in unsearched_titles:
    data.append(title)
data = {"unsearched_title": data}

with open("server/tpl_python/data_webcrawling/aladinUnsearchedData.json", "w") as j:
    json.dump(data, j, indent=3, ensure_ascii=False)
