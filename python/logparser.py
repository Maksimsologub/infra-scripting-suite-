#!/usr/bin/env python3
import argparse

def parse_log(filepath):
    try:
        with open(filepath, 'r') as f:
            for line in f:
                if 'ERROR' in line:
                    print(f"[ERROR] {line.strip()}")
    except Exception as e:
        print(f"Failed to read file: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Extract ERROR lines from a log file")
    parser.add_argument("logfile", help="Path to the log file")
    args = parser.parse_args()

    parse_log(args.logfile)
