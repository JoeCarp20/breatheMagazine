import os
import json
from flask import Flask, request, jsonify, redirect, url_for, render_template, send_file, send_from_directory, Blueprint

app = Flask(__name__, template_folder='./public')

# host dist at ""
public_folder = Blueprint('public', __name__, static_url_path='', static_folder='./public')
app.register_blueprint(public_folder)


# --------------------------------------------------------------------------------
# CONSTANTS
# --------------------------------------------------------------------------------

# Heroku sets "NODE_ENV" to "production"
IS_PRODUCTION = os.environ.get('NODE_ENV') == 'production'
DEBUG = True if not IS_PRODUCTION else False
PORT = 5000 if not IS_PRODUCTION else os.environ.get('PORT')


# --------------------------------------------------------------------------------
# ROUTES
# --------------------------------------------------------------------------------


class Response():
  def __init__(self, success=False, data=None, error=None, message=None):
    self.success = success 
    self.data = data 
    self.error = error 
    self.message = message 

  def to_json(self):
    return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)


@app.errorhandler(404)
def page_not_found(e):
  ''' GET
    - if the route doesn't exist, return index.html
    - useful if using React Router
  '''

  IS_PRODUCTION = True
  if (IS_PRODUCTION):
    return render_template('index.html')
  else:
    return render_template('index.html')

# --------------------------------------------------------------------------------
# START THE APP
# --------------------------------------------------------------------------------

if __name__ == '__main__':
  print('::: {}'.format(PORT))
  app.run(debug=DEBUG, host='0.0.0.0', port=PORT)