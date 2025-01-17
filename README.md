
# ORGANIZATION TREE

This project is an interactive organization tree built with React.js, MongoDB, and Node.js. It allows users to visualize the hierarchical structure of an organization, with the CEO as the root node. Users can create new nodes (representing roles or employees) through a user-friendly form, and the tree is dynamically updated in real-time. The project also supports node deletion and updating of existing nodes using a separate update form. The backend, powered by Node.js, handles API requests, while MongoDB stores the organization data, enabling efficient management and updates to the structure.


## Features

- Dynamic Tree Visualization: Displays the organization structure as a tree with collapsible nodes.
- Add New Node: Users can create a new role (or employee) within the tree via a user-friendly form.
- Update Node: Allows users to edit an existing node (role or employee), including the "reporting to"   field. 
- Delete Node: Users can remove any role or employee from the tree.
- Real-time Updates: The tree automatically updates after a user action (add, update, delete).
- Interactive UI: Roles are displayed with a customizable UI, including color-coded nodes for different roles.

## Images:

![Image](https://github.com/user-attachments/assets/7dabc900-ae07-4fa9-9ef7-53b9e0d3b88a)


![Image](https://github.com/user-attachments/assets/92059f1a-0dfb-4ef1-8170-f7937231d7e9) 


![Image](https://github.com/user-attachments/assets/264d5556-f7af-447a-ac2c-2d3f90107a26)


![Image](https://github.com/user-attachments/assets/2323d85c-f231-4f26-9c38-059a2da11b83)


## Tech Stack

- Frontend: React.js

- Backend: Node.js
- Database: MongoDB
- Libraries/Tools:
  - react-d3-tree for dynamic tree visualization
  - fetch API for interacting with the backend


## Installation

### Frontend
Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
```bash
 cd Frontend
 npm run dev

```
### Backend    

```bash
  cd Backend
  npm start
```
## Usage

- Access the application through the frontend (React) to view and interact with the organizational tree.
#### Users can :
 - Add new roles/employees using a form.
 - Edit roles or change the "reporting to" field.
 - Delete roles or employees from the hierarchy.

## API Endpoints

- GET /api/users: Fetch all users in the organization.
- POST /api/users: Create a new user (node).
- PUT /api/users/:id: Update an existing user (node)
- DELETE /api/users/:id: Delete a user (node).


## Acknowledgements

- react-d3-tree: For the dynamic tree visualization.
- MongoDB: For the NoSQL database.
- Node.js: For backend API handling.

