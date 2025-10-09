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
                last_name Text,
                age Int,
                first_login_date Text,
                last_login_date Text,
                failed_login_attempts INTEGER DEFAULT 0
        )"""
    )
    cur.fetchall()
    cur.close()
    conn.commit()

@sqlUsers.route('/test')
def test():
    return "<p>Hello, World2!</p>"

@sqlUsers.route('/DBAction/newRegisterRequest', methods=['POST'])
def newRegisterRequest():
    print("TESTEEEEE")
    data = request.get_json()

    cur = conn.cursor()
    cur.execute("""
        INSERT INTO 
        users(
            username,
            email,
            password,
            name,
            last_name,
            age,
            first_login_date,
            last_login_date
            failed_login_attempts
        )
        VALUES (?,?,?,?,?,?,?,?)""",(
            data.get('username'),
            data.get('email'),
            data.get('password'),
            data.get('name'),
            data.get('last_name'),
            data.get('age'),
            data.get('first_login_date'), # register date
            data.get('last_login_date'), # last time saw
            0 #failed_login_attempts
            )
    )

    cur.fetchone()
    cur.close()
    conn.commit()


createTable()
# newRegisterRequest()