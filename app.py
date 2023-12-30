from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('scientific_calculator.html')

@app.route('/', methods=['POST'])
def result():
    var_1 = request.form.get("var_1", type=float, default=0)
    var_2 = request.form.get("var_2", type=float, default=0)
    operation = request.form.get("operation")

    if operation in ['Sine', 'Cosine', 'Tangent', 'SquareRoot']:
        # For operations that require only one number, set var_2 to 0
        var_2 = 0

    result = calculate_result(var_1, var_2, operation)

    entry = result
    return render_template('scientific_calculator.html', entry=entry)

def calculate_result(var_1, var_2, operation):
    if operation == 'Addition':
        return var_1 + var_2
    elif operation == 'Subtraction':
        return var_1 - var_2
    elif operation == 'Multiplication':
        return var_1 * var_2
    elif operation == 'Division':
        if var_2 != 0:
            return var_1 / var_2
        else:
            return 'Error: Division by zero'
    elif operation == 'Sine':
        return math.sin(math.radians(var_1))
    elif operation == 'Cosine':
        return math.cos(math.radians(var_1))
    elif operation == 'Tangent':
        return math.tan(math.radians(var_1))
    elif operation == 'SquareRoot':
        return math.sqrt(var_1)
    elif operation == 'Power':
        return var_1 ** var_2
    else:
        return 0

if __name__ == '__main__':
    app.run(debug=True)
