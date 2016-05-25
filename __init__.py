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
    return render_template('index2.html')

@app.route('/predict/')
def predict():
    pClass = float(request.args.get('Pclass'))
    name = request.args.get('Name')
    age = float(request.args.get('Age'))
    sex = float(request.args.get('Sex'))
    sibSp = float(request.args.get('SibSp'))
    parch = float(request.args.get('Parch'))
    fare = float(request.args.get('Fare'))
    embarked = float(request.args.get('Embarked'))
    scaled_fare = fare_scaler.transform([fare])
    scaled_class = class_scaler.transform([pClass])

    values = [sex, age, sibSp, parch, embarked, (scaled_class + scaled_fare)[0]]
    prediction = clr.predict(values)
    return jsonify(result=prediction[0])

if __name__ == '__main__':
    print "__main__"
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
