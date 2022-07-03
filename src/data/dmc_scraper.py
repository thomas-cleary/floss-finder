import json

import requests
from bs4 import BeautifulSoup
from rich import print


def main() -> None:
    FLOSS_INFO_URL = "https://floss.maxxmint.com/dmc_to_rgb.php?color=&ob=dmc"

    floss_info_html = requests.get(FLOSS_INFO_URL).text

    floss_info_soup = BeautifulSoup(floss_info_html, "html.parser")
    floss_info_table_rows = floss_info_soup.find("table").findAll("tr")[1:]

    floss_info = {}

    for row in floss_info_table_rows:
        row_data = row("td")

        if len(row_data) < 7:
            # Not an info row
            continue

        new_floss = {}

        new_floss["dmcCode"] = row_data[1].find("a").string
        new_floss["flossName"] = row_data[2].string
        new_floss["hexCode"] = row_data[3].string
        new_floss["red"] = row_data[4].string
        new_floss["green"] = row_data[5].string
        new_floss["blue"] = row_data[6].string

        floss_info[new_floss["dmcCode"]] = new_floss

    print(floss_info)

    with open("dmcData.json", "w") as jsonDataFile:
        json.dump(floss_info, jsonDataFile, indent=4)


if __name__ == "__main__":
    main()
