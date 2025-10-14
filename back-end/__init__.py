import subprocess
import sys

def installPackages():
    packageName = [
        "flask",
        "flask-cors",
        "requests",
        "pyjwt"
    ]
    for i in packageName:
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", i])
        except subprocess.CalledProcessError as e:
            print("Erro instalando o pacote " + packageName + ": " + e)
installPackages()

import sqlite3 as sqlite
from flask import Flask
from db_handler.sql_UsersRegister import sqlUsersRegis
from flask_cors import CORS


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

app.register_blueprint(sqlUsersRegis)
CORS(app)

# Inicia Flask
if __name__ == "__main__":
    app.run(debug=True)