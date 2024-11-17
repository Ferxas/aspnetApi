# Rest API client ASP.net with Angular

This project is a Todo list application developed with ASP.NET Core for the backend and Angular for the frontend.

## Project Structure

The project is divided into two main parts:

1. **Backend**: RESTful API developed with ASP.NET Core
2. **Frontend**: User application developed with Angular (included in this repository)

## Backend (ASP.NET Core)

### Technologies Used

- ASP.NET Core
- Entity Framework Core
- SQL Server (assumed, may vary based on configuration)

### File Structure

- `Controllers/TodoController.cs`: Contains the logic to handle CRUD operations for tasks.
- `Models/Todo.cs`: Defines the data model for a task.
- `Models/TodoContext.cs`: Configures the database context for Entity Framework.

### API Endpoints

- GET `/api/Todo`: Retrieves all tasks
- GET `/api/Todo/{id}`: Retrieves a specific task by ID
- POST `/api/Todo`: Creates a new task
- PUT `/api/Todo/{id}`: Updates an existing task
- DELETE `/api/Todo/{id}`: Deletes a task

### Setup and Running

1. Ensure you have .NET Core SDK installed.
2. Configure the database connection string in `appsettings.json`.
3. Run the database migrations:
   ```
   dotnet ef database update
   ```
4. Start the server:
   ```
   dotnet run
   ```

## Frontend (Angular)

## How to Use

1. Clone the repository
2. Follow the setup and running instructions for the backend
3. Access the application through the browser

## Contributing

If you wish to contribute to the project, please:

1. Fork the repository
2. Create a new branch for your feature
3. Commit your changes
4. Create a pull request

###
