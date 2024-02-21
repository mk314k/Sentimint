"""
Flask Checkpoints
"""
from flask import Flask, request, jsonify
from flask_cors import CORS
from sentimint import absa

app = Flask(__name__)

CORS(app)

@app.route('/test', methods=['POST'])
def test():
    """
    adds two numbers

    Returns:
        _type_: _description_
    """
    return jsonify({'result': "Working Test Passed"}), 200

@app.route('/absa', methods=['POST'])
def absa_one():
    """
    Adds two numbers provided in the JSON payload.

    Returns:
        JSON: A JSON response containing the sum of the two numbers.
    """
    data = request.json
    review = data['text']
    return jsonify({'result': absa(review)})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
