import os
from PIL import Image

def thumbnail(f_name):
  with Image.open("src/static/flags/{}".format(f_name)) as org_image:
    height = org_image.height
    width = org_image.width

    if (height <= 50):
      #This image is a thumbnail and therefore it's safe to skip
      return

    ratio = 50 / height
    width = int(width * ratio)

    org_image.thumbnail((width, 50))
    #Original images are saved elsewhere, it's safe to overwrite
    org_image.save("src/static/flags/{}".format(f_name), "png")

file_content = "export const flags = [\n"

for f_name in os.listdir("src/static/flags"):
  org_file_name = f_name
  f_name = f_name.replace(".jpg", "").replace(".png", "")
  thumbnail(org_file_name)
  file_content += "\t{" + " name: \"{}\", flag: require(\"./flags/{}\")".format(f_name, org_file_name) + "},\n"

file_content += "];"

with open("src/static/flags.js", "w", encoding="utf-8") as f:
  f.write(file_content)