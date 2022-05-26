from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app)

@app.route('/my-first-api/size=', methods = ['GET'])

def hello():

    name = request.args.get('name')

    if name is None:
        text = 'Hello!'

    else:
        text = 'Hello ' + name + '!'

    return jsonify({"message": text})

if __name__ == '__main__':
    app.run(debug=True, port=8000)