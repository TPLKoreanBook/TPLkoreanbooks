import requests
from bs4 import BeautifulSoup
import json

titlesBeforeSearch = []
unsearched_titles = []
results = []
count = 0

#Fetching titles from json file
fileObject = open("server/tpl_python/data_webcrawling/googleSearchedTitles.json", "r")
jsonContent = fileObject.read()
aList = json.loads(jsonContent)

for i in range(0, 1):
    titlesBeforeSearch.append(aList[0][i])

for title in titlesBeforeSearch:
    try:
        # Searching title on Google and get html text into soup
        url = "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord={}".format(title)
        headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15"}
        res = requests.get(url)
        res.raise_for_status()
        soup = BeautifulSoup(res.text, "lxml")

        #Find all h3 tags and filter with the keyword '알라딘'
        search_result = soup.body.find('div', attrs={"class": "ss_book_box"})
        link = search_result.find('a', attrs={'class': "bo3"})
        print(link)
        link = link.find(href=True)
        print(link['href'])
        link = link


#If the title is not founded, add the title to the unsearched list
        if link == '':
            unsearched_titles.append(title)
            break

        res2 = requests.get(link)
        res2.raise_for_status()
        soup2 = BeautifulSoup(res2.text, "lxml")

        title = soup2.body.find('div', attrs={"class": "ss_book_box"})
        author = soup2.body.find()
        genre = soup2.body.find()
        cover = soup2.body.find()


        #Append titles into results
        results.append([title, author, genre, cover])
        title = ''
        author = ''
        genre = ''
        cover = ''
        print("%d th search" %count)
        count = count + 1
    #Error handling... If google blocks me, then break the for loop and save data into files
    except:
        print("error on %d" %count)
        break

with open("aladinSearchedTitle.json", "w") as j:
    json.dump(results, j, indent=3)

with open("unsearchedTitlesAladin.json", "w") as j:
    json.dump(unsearched_titles, j, indent=3)


