#!/bin/bash

echo "🔍 Running DNS checks..."
python3 dns_checker.py google.com github.com openai.com

echo ""
echo "🌐 Running URL status checks..."
./url_status.sh https://google.com https://httpstat.us/503 https://fake.openai.com

echo ""
echo "📊 Kicking off JS monitor for one cycle..."
node sitewatch.mjs & sleep 5 && pkill -f sitewatch.mjs

echo ""
echo "✅ Infra check complete!"
