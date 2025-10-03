import subprocess
import sys

def installPackages():
    packageName = [
        "flask",
    ]
    for i in packageName:
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", i])
        except subprocess.CalledProcessError as e:
            print("Erro instalando o pacote " + packageName + ": " + e)
installPackages()

import sqlite3 as sqlite
from flask import Flask
from db_handler.Sql_Users import sqlUsers

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

app.register_blueprint(sqlUsers)

# Inicia Flask
if __name__ == "__main__":
    app.run(debug=True)