import json

def testLoadJSON():
    response = ""
   
    with open('../blog.json') as f:
        data = json.load(f)
    message ="What should I do before a tornado?"
    for disaster in data:
        if disaster.casefold() in message.casefold():
            response += disaster + " Info: \n"
            info = data.get(disaster)
            for section in info:
                if section.casefold() in message.casefold():
                    response = response + section.upper() + ":\n"
                    for tip in info.get(section):
                        response = response + "- " + tip + "\n"
    print(response)


if __name__ == "__main__":
    testLoadJSON()