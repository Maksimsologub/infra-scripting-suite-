#!/usr/bin/env python3
import os
import argparse

def delete_logs(directory):
    deleted = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".log"):
                full_path = os.path.join(root, file)
                try:
                    os.remove(full_path)
                    deleted.append(full_path)
                except Exception as e:
                    print(f"⚠️ Failed to delete {full_path}: {e}")

    if deleted:
        print(f"\n✅ Deleted {len(deleted)} .log file(s):")
        for path in deleted:
            print(f" - {path}")
    else:
        print("No .log files found to delete.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Delete .log files in directory")
    parser.add_argument("directory", help="Path to directory to clean up")
    args = parser.parse_args()
    delete_logs(args.directory)

