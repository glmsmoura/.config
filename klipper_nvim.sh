#!/bin/bash
qdbus org.kde.klipper /klipper setClipboardContents "$1" > /dev/null
