#!/bin/bash

SERVICE=$1
RESTART=$2
LOG="logs/watchdog.log"

TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

if pgrep -x "$SERVICE" > /dev/null; then
  echo "✅ [$TIMESTAMP] $SERVICE is running." | tee -a "$LOG"
else
  echo "⚠️ [$TIMESTAMP] $SERVICE not running. Restarting..." | tee -a "$LOG"
  echo "[$TIMESTAMP] $SERVICE was restarted." >> "$LOG"
  eval "$RESTART"
fi
