curl.exe -X POST http://localhost:5000/api/v1/auth/login -H "Content-Type: application/json" -d '{"username":"assignmentuser","password":"secret123"}'

{"message":"User logged in successfully!","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFzc2lnbm1lbnR1c2VyIiwiaWF0IjoxNzk1MjQxMjA4fQ.fEh1U9btZpX_vdDxpkbj8dV_56Q8Ax_XXqVgyO5WK_I"}
