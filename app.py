from flask import Flask, render_template, request, jsonify
from models import db, Cake, Order

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_DATABASE_URI'] = 'sqlite:///cakeshop.db'
db.init_app(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/cakes', methods=['GET'])
def get_cakes():
    cakes = Cake.query.all()
    return jsonify([{"id": c.id, "name": c.name, "price": c.price} for c in cakes])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)