import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')


@app.route('/')

# This function queries the projectId and quantity from the URL and returns the
# project id and quantity to the front end. The front end displays a pop-up message
# which says “<qty> hardware checked in”
def checkIn_hardware(projectId, qty):
    pass

# This function queries the projectId and quantity from the URL and returns the
# project id and quantity to the front end. The front end displays a pop-up message
# which says “<qty> hardware checked out”
def checkOut_hardware(projectid, qty):
    pass
# This function queries the projectId from the URL and returns the project id to the
# front end. The front end displays a pop-up message which says “Joined <projectId>”
def joinProject(projectid):
   pass
# This function queries the projectId from the URL and returns the project id to the
# front end. The front end displays a pop-up message which says “Left <projectId>”
def leaveProject(projectid):
    pass




if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))