from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cake(db.Model):
    id = db.Column(db.DB.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(200))

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    cake_id = db.Column(db.Integer, db.ForeignKey('cake.id'))
    status = db.Column(db.String(20), default="Pending")