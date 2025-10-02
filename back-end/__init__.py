import subprocess
import sys

import sqlite3 as sqlite
import Flask
from sqlite.crud import Sql_Users as sql

def installPackages():
    packageName = [
        "flask",
        "mysql-connector-python"
    ]
    for i in packageName:
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", i])
        except subprocess.CalledProcessError as e:
            print("Erro instalando o pacote " + packageName + ": " + e)
installPackages()


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
