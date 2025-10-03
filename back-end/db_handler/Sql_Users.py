import sqlite3 as sql
from flask import Blueprint, request, jsonify, Flask
from datetime import date
# Por padrão todo comando que faz CRUD deverá se conter dentro da classe do nome que altera a tabela do mesmo.
# Todo o CRUD da tabela users deverá ser feito aqui

app = Flask(__name__)
sqlUsers = Blueprint("sqlUsers", __name__)

conn = sql.connect('bancoDeDadosTeste')
def createTable():   
    cur = conn.cursor()
    cur.execute(
    """
        CREATE TABLE IF NOT EXISTS
            users(
                username Text,
                email Text,
                password Text,
                name Text,
                lastName Text,
                age Int,
                firstLogin Text,
                lastLogin Text
        )"""
    )
    cur.fetchall()
    cur.close()
    conn.commit()


@app.route('/DBAction/newRegisterRequest', methods=['POST'])
def newRegisterRequest():
    cur = conn.cursor()

    cur.execute("""INSERT INTO users(username, email, password, name, lastName, age, firstLogin, lastLogin) VALUES (?,?,?,?,?,?,?,?)""",
        (
            "Test",
            "Test@gmail.com",
            "TestPass",
            "TestName",
            "TestLastName",
            20,
            "nothing",
            "nothing"
        ,)
    )

    cur.fetchone()
    cur.close()
    conn.commit()


createTable()
newRegisterRequest()