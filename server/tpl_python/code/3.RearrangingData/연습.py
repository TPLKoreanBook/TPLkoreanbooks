import json

with open('/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json') as j:
    books = json.loads(j.read())
    books = books["books"]

for book in books:
    kbt = book['kyobo_title']
    if kbt != '':
        book['kyobo_title'] = kbt.split('|')[0].replace('(원서번역서', '').replace('( HardCover)', '').strip()
    abt = book['aladin_title']
    if kbt.count('검색 ') != 0:
        book['kyobo_title'] = ''
    if abt != '':
        book['aladin_title'] = abt.replace(" - 알라딘", '').replace("[전자책]", '').replace("[중고]", '').replace('[eBook]', '').replace("(양장)", '').strip()
        if abt.count('미리보기') != 0:
            book['aladin_title'] = ''

books = {"books": books}
with open("/Users/minkijung/Desktop/tplkoreanbook/server/tpl_python/data_webcrawling/new_data/googleSearchedTitles.json", "w") as j:
    json.dump(books, j, indent=3, ensure_ascii=False)