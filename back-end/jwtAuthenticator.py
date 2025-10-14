import jwt

privateKey = "ColocarUmaSenhaBemGrandeAqui!!!"
def jwtEncode(key, value):
    encodedKey = jwt.encode({key : value}, privateKey, algorithm="HS256")
    return encodedKey

def jwtDecode(data):
    decodedKey = jwt.decode(data, privateKey, algorithms="HS256")
    return decodedKey