# User Management Application

This project is a React-based web application that showcases a user management system with advanced features such as infinite scrolling, user sorting, search functionality, and detailed user profiles.

## Features

1. **User Listing**

   - Fetches and displays a list of users from an API.
   - Infinite scrolling to dynamically load more users as you scroll.

2. **Search Bar**

   - Allows filtering of users by name.

3. **Sort Users**

   - Users can be sorted alphabetically by name or email.

4. **User Profile Details**

   - Clicking on a user shows detailed information, including name, email, address, and company.
   - Displays a placeholder profile picture for each user.

5. **Responsive Design**

   - Fully responsive for various screen sizes.

6. **Loading Indicators**

   - Displays a spinner while fetching data.

## Technology Stack

- **Frontend**: React, React Router
- **HTTP Client**: Axios
- **Styling**: CSS

## How to Run

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd user-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Additional Features

### Search Bar

- Type a name in the search bar to filter the user list dynamically.

### Infinite Scrolling

- Automatically loads more users as you scroll to the bottom of the page.

### Sorting Options

- Sort users by name or email using the dropdown menu.

### User Profile Pictures

- Displays placeholder images from [Picsum Photos](https://picsum.photos) for each user.

### APK Submission

- If you wish to test the app on Android, build and submit an APK using tools like [Expo](https://expo.dev/).

## File Structure

```
src/
├── components/
│   ├── LoadingSpinner.jsx
│   ├── UserDetails.jsx
│   ├── UserList.jsx
├── style/
│   ├── UserDetails.css
│   ├── UserList.css
├── App.jsx
└── index.js
```

## APIs Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com) for user data.

## Future Enhancements

1. Add user creation and editing functionality.
2. Implement user authentication for secure access.
3. Integrate additional sorting and filtering options.

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For inquiries or issues, please contact Rohit Bharit

