# Initiation

## Overview

- **Objective**: Fork the provided repository and execute the project requirements through a pull request.
- **Development Framework**: Employ function components for application development.
  - Utilize **Vite** (https://vitejs.dev/) integrated with **React** and **TypeScript** for efficient project setup and development.
  - Incorporate **Mantine** (https://mantine.dev/) for implementing UI components.
  - Leverage **react-query** (https://tanstack.com/query/v4) alongside **axios** for effective data fetching and API communication.

## Project Details

### Pages to be Developed

- **Sign-in Page**:
  - Implement a login form interface.
  - Ensure the display of both success and error notifications with the use of loaders to indicate progress.
  - Authenticate via API and securely store the auth token.
  - Redirect to the dashboard page upon successful authentication.

- **Dashboard Page**:
  - Fetch and display projects using react-query and axios upon page load.
  - Indicate loading status with a loader.
  - Present projects within cards, highlighting essential details.
  - Apply Mantine components for aesthetic page styling and layout.

- **Sign-out Page**:
  - Facilitate user logout through API interaction.
  - Securely remove the stored auth token and redirect to the login page.
  - Confirm successful logout with a notification.

## Guidelines

- **API Interaction**: Follow the provided API schema for constructing HTTP requests.
- **Code Quality**: Employ eslint for code quality assurance, identifying and rectifying potential issues.
- **Codebase Maintenance**: Ensure the removal of redundant code and comments for code clarity and efficiency.

## Acceptance Criteria

- **Functionality**: The application must fulfill the outlined requirements, demonstrating functional sign-in, dashboard, and sign-out pages.
- **Quality Assurance**: Adherence to best coding practices, with a clean, maintainable code structure.
- **Performance**: Efficient data handling and UI responsiveness, ensuring a smooth user experience.

## Support

- Should you encounter any challenges or require clarification, please do not hesitate to reach out for assistance.
