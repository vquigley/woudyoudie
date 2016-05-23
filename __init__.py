from flask import Flask, render_template, jsonify, request
import pickle as pkl
import os

app = Flask(__name__)


clr = pkl.load(open('data/data.pkl','r'))
fare_scaler = pkl.load(open('data/fare_scaler.pkl','r'))
class_scaler = pkl.load(open('data/class_scaler.pkl','r'))


@app.route('/')
def index():
    """
    Uses Flask's Jinja2 template renderer to generate the html
    """
    return render_template('index.html')


@app.route('/predict/')
def predict():
    pClass = request.args.get('Pclass')
    name = request.args.get('Name')
    age = request.args.get('Age')
    sex = request.args.get('Sex')
    sibSp = request.args.get('SibSp')
    parch = request.args.get('Parch')
    fare = request.args.get('Fare')
    embarked = request.args.get('Embarked')
    scaled_fare = fare_scaler.transform([[fare]])
    scaled_class = class_scaler.transform([[pClass]])
    print scaled_fare
    prediction = clr.predict([sex, age, sibSp, parch, embarked, scaled_class + scaled_fare])
    return jsonify(result=prediction[0])

if __name__ == '__main__':
    print "__main__"
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
