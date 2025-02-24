#!/bin/bash

# Configuration (REPLACE WITH YOUR ACTUAL VALUES)
FILE="src/messages/en.json"

if [[ -f .env ]]; then
  export $(grep -v '^#' .env | xargs)
fi


upload() {
  echo "Uploading $FILE to Lokalise..."

  lokalise2 file upload \
    --token "$API_TOKEN" \
    --project-id "$PROJECT_ID" \
    --file "$FILE" \
    --lang-iso "en" \
    --detect-icu-plurals \
    --distinguish-by-file \
    --replace-modified
}


download() {
  echo "Downloading translations..."
  mkdir -p "src/messages"

  lokalise2 file download \
    --token "$API_TOKEN" \
    --project-id "$PROJECT_ID" \
    --format "json" \
    --original-filenames \
    --directory-prefix "src/messages"

    if [[ $(lokalise2 file list --token "$API_TOKEN" --project-id "$PROJECT_ID" | jq -r '.[]') == "en" ]]; then
        mv "src/messages/en.json" "src/messages/en.json" 2>/dev/null
    fi
}

COMMAND="$1"
shift

if [[ "$COMMAND" == "upload" ]]; then
  upload
elif [[ "$COMMAND" == "download" ]]; then
  download
else
  echo "Usage: $0 upload <file> | download"
  exit 1
fi

exit 0
