from crypt import methods
import os
from flask_cors import CORS
from flask import Flask, send_from_directory, request


app = Flask(__name__)
CORS(app)

@app.route('/leaveProject/<projectid>',methods = ['GET','POST'])
def leaveProject(projectid):
        print("body runs")
        if request.method == 'GET':
                response_body = {
                "ID": projectid,
                }
                print('hello',response_body)
                return response_body
        else:
                print("not get")

#use library called Requests
# request.json['projectid']

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


# @app.route('/')
# def index():
#     return send_from_directory('ui/build/', 'index.html')




# This function queries the projectId and quantity from the URL and returns the
# project id and quantity to the front end. The front end displays a pop-up message
# which says “<qty> hardware checked in”
@app.route('/checkIn')
def checkIn_hardware(projectId, qty):
        response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
         }

        return response_body

# This function queries the projectId and quantity from the URL and returns the
# project id and quantity to the front end. The front end displays a pop-up message
# which says “<qty> hardware checked out”
@app.route('/checkOut')
def checkOut_hardware(projectid, qty):
        response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
         }

        return response_body
# This function queries the projectId from the URL and returns the project id to the
# front end. The front end displays a pop-up message which says “Joined <projectId>”
@app.route('/joinProject')
def joinProject(projectid):
        response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
         }

        return response_body
# This function queries the projectId from the URL and returns the project id to the
# front end. The front end displays a pop-up message which says “Left <projectId>”
