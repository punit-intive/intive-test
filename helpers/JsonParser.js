function JsonParser(json) {
    // Check if the JSON object contains the necessary structure
    if (json && json.json && json.json.nodeType === "document" && json.json.content && json.json.content.length > 0) {
        // Iterate through the content to find the text node
        for (const content of json.json.content) {
            if (content.nodeType === "paragraph" && content.content && content.content.length > 0 && content.content[0].nodeType === "text") {
                // Return the text value
                return content.content[0].value;
            }
        }
    }
    // Return null if the text value cannot be found
    return null;
}
export default JsonParser;