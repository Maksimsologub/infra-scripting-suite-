#!/usr/bin/env python3
import socket
import argparse


def resolve_domain(domain):
    try:
        ip = socket.gethostbyname(domain)
        print(f"✅ {domain} → {ip}")
    except socket.gaierror:
        print(f"❌ Could not resolve {domain}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("domains", nargs="+", help="One or more domain names")
    args = parser.parse_args()

    for domain in args.domains:
        resolve_domain(domain)
