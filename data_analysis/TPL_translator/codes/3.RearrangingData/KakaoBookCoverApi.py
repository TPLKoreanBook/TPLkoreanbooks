import requests
import json

with open('/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles3.json') as j:
    books = json.loads(j.read())
    books = books["books"]

url = "https://dapi.kakao.com/v3/search/book?target=title"
header = {"Authorization" : "KakaoAK f69ed42385a2996b46ad2ae02b3faf40"}
count = -1

for book in books:
    count += 1
    print(count)
    try:
        title = book['title']
        queryString = {"query": title}
        r = requests.get(url, headers=header, params=queryString)
        results = json.loads(r.text)['documents']
        for result in results:
            if book['author'] in result['authors'][0]:
                books[count]['cover_kakao'] = result['thumbnail']
                break
    except:
        pass
        
books = {"books": books}
with open("/Users/minkijung/Documents/Coding/Datascrapping/tpl_python/data/new_data/googleSearchedTitles4.json", "w") as j:
    json.dump(books, j, indent=3, ensure_ascii=False)