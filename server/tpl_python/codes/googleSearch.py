import requests
from bs4 import BeautifulSoup
import json
import re

titlesBeforeSearch = []
unsearched_titles = []
results = []
count = 0

#Fetching titles from json file
fileObject = open("tpl_python/data/tpl_json.json", "r")
jsonContent = fileObject.read()
aList = json.loads(jsonContent)

for i in range(0, 4748):
    titlesBeforeSearch.append(aList['books'][0][i]['title'])

for title in titlesBeforeSearch:
    try:
        # Searching title on Google and getting html text into soup
        # Num=40 ... meaning that showing 40 results
        url = "https://www.google.com/search?q={}&num=40".format(title)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")

        #Find all h3 tags and filter with the keyword '알라딘'
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
                    booktitle_kyobo = booktitle2.replace("교보문고", '').replace("전자책", '').replace("중고", '').replace("양장본", '').strip()
                    pass
        #If the title is not founded, add the title to the unsearched list
        if booktitle_aladin == '' and booktitle_kyobo == '':
            unsearched_titles.append(title)
        #Append titles into results
        results.append([title, booktitle_aladin, booktitle_kyobo])
        booktitle_aladin = ''
        booktitle_kyobo = ''
        print("%d th search" %count)
        count = count + 1
    #Error handling... If google blocks me, then break the for loop and save data into files
    except:
        print("error on %d" %count)
        break

with open("tpl_python/data/googleSearchedTitles.json", "w") as j:
    json.dump(results, j, indent=3, ensure_ascii=False)

with open("tpl_python/data/SecondUnsearchedTitles.json", "w") as j:
    json.dump(unsearched_titles, j, indent=3, ensure_ascii=False)


