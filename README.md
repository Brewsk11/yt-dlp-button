# Download button powered by [yt-dlp](https://github.com/yt-dlp/yt-dlp)

Windows utility adding a download button on YouTube sites using userscripts.
Allows for rapid and hassle-free downloading music from YouTube.
The button delegates the download job to local yt-dlp instance, cutting dependence on web services to extract data form YouTube.

Settings are in Polish, since this was written for a family member. Feel free to open a PR with localization settings.

Roughtly "Folder nadrzędny" - "Main directory", "Folder kategorii" - "Category folder". Music is saved to `{main}/{category}/{YouTube video title}`.

# Installation

* Put the contents of this repo in `%UserProfile%\yt-dlp`
* Download ffmpeg, ffprobe and yt-dlp executables and put in the folder as well
* Install registry entry
* Install Tampermonkey and add the userscript
* Install Python and add to `PATH`

