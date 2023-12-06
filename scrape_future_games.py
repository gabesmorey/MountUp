"""
-Hello Alex.

-This should work for all games on the MSJ website, as long
as you make sure to use the correct file for past games and future games.

-The code will add the data into a CSV file. I decided on this because you can import
data from CSV files into pretty much any database manager, including MySQL and MongoDB. You can
also pull data from CSV files directly pretty easily.

-BEFORE YOU PUT THE HTML IN, On line 44 and 45 is what you want to name your
CSV files. For example, if you do past mens basketball names, name this file something
along the lines of previousMensBB.csv. Something you will remember the data by.

-Make sure to keep the CSV file name the same for all sports. For example, if you are
scraping past mens basketball games, keep the name of the CSV file the SAME until you do something else.
It will add the data to whatever the filename is, so make sure you are looking out for that.

Text me if you have any questions.

- Jake
"""


from bs4 import BeautifulSoup
import csv

# Paste the HTML content here between triple-quoted comments
html_content = """
HTML CONTENT HERE"""

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Extract information
opponent_name = soup.find(class_='sidearm-schedule-game-opponent-name').text.strip()
at_away = soup.find(class_='sidearm-schedule-game-away').text.strip()
location = soup.find(class_='sidearm-schedule-game-location').text.strip()
date = soup.find(class_='sidearm-schedule-game-opponent-date').text.strip()
time_element = soup.find(class_='sidearm-schedule-game-time')
time = time_element.text.strip() if time_element else "TBD"

# Create or open the CSV file for appending
csv_file_path = 'filename.csv'
headers = ['Opponent', 'Location', 'Date', 'Time']

with open(csv_file_path, mode='a', newline='', encoding='utf-8') as csv_file:
    writer = csv.DictWriter(csv_file, fieldnames=headers)

    # Check if the CSV file is empty and write headers if needed
    if csv_file.tell() == 0:
        writer.writeheader()

    # Append the extracted information to the CSV file
    writer.writerow({'Opponent': opponent_name, 'Location': location, 'Date': date, 'Time': time})

print("Data appended to CSV file.")
