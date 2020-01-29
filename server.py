from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/game', methods=['GET', 'POST'])
def game():
    if request.method == 'POST':
        cards_x = request.form['selection']
        cards = []
        for i in range(0, int(cards_x)*2):
            cards.append(i)
        return render_template('game.html',
                               cards=cards)
    return render_template('game.html')


if __name__ == "__main__":
    app.run(debug=True)
