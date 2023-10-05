from bs4 import BeautifulSoup
import csv

html = """
        copy table body element from inspect into multi line string
        """

headers = """
        copy table header element from inspect into multi line string
        """

# Parse the HTML content
soup = BeautifulSoup(html, 'html.parser')

# Find all rows in the table body
table_rows = soup.find('tbody').find_all('tr')

# Function to extract data from a row
def extract_data(row):
    columns = row.find_all('td')  # Extract data from td elements
    school_name = row.find('th').find('a').text  # Extract the school name from the 'a' tag in th element
    data = [school_name] + [column.text.strip() for column in columns]  # Add school name to the data
    return data

# Function to extract headers from the header row
def extract_headers(row):
    headers = [header.text.strip() for header in row.find_all('th')]
    return headers

header_row = BeautifulSoup(headers, 'html.parser').find('tr', role='row')

data_rows = soup.find_all('tr', role='row')  # Find all rows with role='row'

# Create a CSV file and write the data
with open('data/tables/{team}/{sport}/{table}.csv', 'w', newline='') as csvfile:
    csv_writer = csv.writer(csvfile)

    # Extract and write the header row to the CSV file
    header_row_data = extract_headers(header_row)
    csv_writer.writerow(header_row_data)

    # Iterate through the data rows and write the data to the CSV file
    for row in data_rows:
        row_data = extract_data(row)
        csv_writer.writerow(row_data)
        print(row_data)