#!python

import os
import sys
import subprocess
from urllib.parse import unquote
from pprint import pprint

print("Youtube Downloader\n")

print("Received argv:")
pprint(sys.argv)

arg_decoded = unquote(sys.argv[1])

print("Decoded URL:")
pprint(arg_decoded)

args = arg_decoded.split(":", 1)[1].split(" ", 2)
call = ["yt-dlp.exe"] + args
print("Call to yt-dlp:")
pprint(call)
print("")

print("Calling yt-dlp")
subprocess.call(call)
