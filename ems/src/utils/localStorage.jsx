const employee = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Submit Project Report",
          "description": "Prepare and submit the Q3 project report.",
          "date": "2025-10-10",
          "category": "Reporting"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Attend Client Meeting",
          "description": "Join the Zoom meeting with client ABC Corp.",
          "date": "2025-09-30",
          "category": "Meetings"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "title": "Fix Login Bug",
          "description": "Resolve the login redirect issue reported by QA.",
          "date": "2025-09-28",
          "category": "Development"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Design New UI Mockups",
          "description": "Create design mockups for the new dashboard.",
          "date": "2025-10-12",
          "category": "Design"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Update Brand Guidelines",
          "description": "Review and update internal branding documentation.",
          "date": "2025-10-08",
          "category": "Documentation"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Team Presentation",
          "description": "Prepare slides and present monthly achievements.",
          "date": "2025-09-25",
          "category": "Presentation"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "title": "Deploy to Staging",
          "description": "Push latest build to staging environment.",
          "date": "2025-10-01",
          "category": "Deployment"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Security Audit",
          "description": "Perform security checks on latest release.",
          "date": "2025-10-09",
          "category": "Security"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Fix API Timeout",
          "description": "Investigate and fix API timeout issue.",
          "date": "2025-10-03",
          "category": "Development"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "title": "Client Feedback Review",
          "description": "Analyze the feedback from last product demo.",
          "date": "2025-09-29",
          "category": "Review"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Draft Release Notes",
          "description": "Create release notes for version 2.1.0.",
          "date": "2025-10-08",
          "category": "Documentation"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Optimize Database",
          "description": "Review and improve DB query performance.",
          "date": "2025-10-11",
          "category": "Database"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Implement User Roles",
          "description": "Add role-based access control to system.",
          "date": "2025-10-08",
          "category": "Development"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Code Review",
          "description": "Review pull requests from the frontend team.",
          "date": "2025-10-06",
          "category": "Code Review"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Team Standup",
          "description": "Daily standup with the backend team.",
          "date": "2025-10-07",
          "category": "Meetings"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Prepare Test Cases",
          "description": "Write and organize test cases for new features.",
          "date": "2025-10-09",
          "category": "QA"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Bug Bash",
          "description": "Participate in cross-team bug fixing session.",
          "date": "2025-09-30",
          "category": "Testing"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "title": "Automate Report Generation",
          "description": "Create a script to auto-generate weekly reports.",
          "date": "2025-10-01",
          "category": "Automation"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Performance Testing",
          "description": "Run performance tests on the new module.",
          "date": "2025-10-10",
          "category": "QA"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Update Test Plan",
          "description": "Revise test plan based on new feature scope.",
          "date": "2025-10-08",
          "category": "QA"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Regression Testing",
          "description": "Verify existing features after code changes.",
          "date": "2025-10-04",
          "category": "Testing"
        }
      ]
    }
  ]

  const admin = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
  ];

  export const setLocalStorage = ()=>{
    localStorage.setItem('employee',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employee'))
    // console.log(employees)

    const admins = JSON.parse(localStorage.getItem('admin'))
    return {employee, admin}
  }


