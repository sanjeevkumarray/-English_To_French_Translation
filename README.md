

# English to French Translation API

This project implements a RESTful API endpoint to translate English text to French.

## API Endpoint

- **Endpoint**: `/translate`
- **Method**: POST

## Translation Functionality

The API utilizes the Google Translate API to translate the English text received in the request body to French.

## Request Format

The API accepts JSON data in the request body with a key-value pair where the key is `"text"` and the value is the English text to translate.

### Example Request Body:

```json
{
  "text": "Hello, how are you?"
}
```

## Response Format

The API responds with a JSON object containing the translated text in French in the format:

```json
{
  "translation": "Translated text in French"
}
```

### Example Response Body:

```json
{
  "translation": "Bonjour, comment ça va?"
}
```

## Error Handling

The API handles missing or invalid request bodies and errors during translation with appropriate error messages and status codes.

## Testing

You can test the API using tools like Postman or cURL to ensure correct translation and response format.

## Deployment

The API is deployed to `INSERT_URL_HERE`.

## Technologies Used

- Node.js
- Express.js
- Google Translate API

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. Send POST requests to `http://localhost:3000/translate` with JSON data containing the English text to translate.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


 ##  Output

![image](https://github.com/sanjeevkumarray/-English_To_French_Translation/assets/53333326/9fb325b2-419d-498e-a3cf-4b07b5361522)
