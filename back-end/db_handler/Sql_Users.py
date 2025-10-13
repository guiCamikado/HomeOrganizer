import sqlite3 as sql
from flask import Blueprint, request, jsonify, Flask, make_response
from datetime import date
from flask_cors import CORS

# Por padrão todo comando que faz CRUD deverá se conter dentro da classe do nome que altera a tabela do mesmo.
# Todo o CRUD da tabela users deverá ser feito aqui

app = Flask(__name__)
sqlUsers = Blueprint("sqlUsers", __name__)


def createTable():   
    conn = sql.connect('bancoDeDadosTeste')
    cur = conn.cursor()
    cur.execute(
    """
<<<<<<< HEAD
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            name TEXT,
            last_name TEXT,
            age INTEGER,
            role TEXT DEFAULT 'user',
            is_active INTEGER DEFAULT 1,
            first_login TEXT,
            last_login TEXT,
            failed_login_attempts INTEGER DEFAULT 0,
            created_at TEXT DEFAULT (DATETIME('now')),
            updated_at TEXT
            );"""
    )
    cur = conn.cursor()

@sqlUsers.route('/DBAction/newRegisterRequest', methods=['POST'])
def newRegisterRequest():
    conn = sql.connect('bancoDeDadosTeste')
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO users (username, email, password_hash, first_login)
        VALUES (?, ?, ?, ?)
    """, (
        request.json['user'],
        request.json['email'],
        request.json['password'],
        date.today().strftime('%Y-%m-%d')
    ))

    cur = conn.cursor()
    conn.commit()
    cur.close()
    return jsonify({"status": "ok"}), 200


createTable()