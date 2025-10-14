import sqlite3 as sql
from flask import Blueprint, request, jsonify, Flask, make_response

app = Flask(__name__)
sqlUserLogin = Blueprint("sqlUsersLogin", __name__)

# Verifica se login é verdadeiro e devolve cookie JWT
def checkLogin(usernameOrEmail, password_hash):
    conn = sql.connect('bancoDeDadosTeste')
    cur = conn.cursor()
    cur.execute(
        """
        SELECT username FROM users 
        WHERE (username = ? OR email = ?) AND password_hash = ?
        """,(
        usernameOrEmail,
        usernameOrEmail,
        password_hash
        )
    )
    response = cur.fetchone()
    cur.close()
    return response