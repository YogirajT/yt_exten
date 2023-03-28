# yt_exten

An extension for Firefox to make youtube ads bearable. Other ad-block extensions in the store are either too intrusive and need a lot of configuration for them to not nuke all the ads everywhere. I am also paranoid of running 3rd party extensions in incognito and thus came up with this solution where I have full control of the source code.

## Installation
In Firefox: Open the about:debugging page, click the This Firefox option, click the Load Temporary Add-on button, then select any file in this extension's directory.

Allow the extension to run in incognito by going into extensions -> manage extension -> allow in incognito, if needed.

The extension now installs, and remains installed until you restart Firefox.

Alternatively, you can run the extension from the command line using the web-ext tool.

## What does it do?

* Skips the ads when the skip button is available.
* Mutes and makes the ad container hidden.
* Automatically unmutes and un-hides the video once ad ends.

### Disclaimer
This extension is for experimentation and demo purpose only and not meant to harm Youtube's/Youtuber's revenue model.
