# String Calculator TDD

This project implements the **String Calculator TDD Kata**, following Test-Driven Development (TDD) principles. It demonstrates clean code practices, incremental development, and unit testing with Jest.

---

## Features

The `add` method of the String Calculator supports:

1. **Empty strings**: Returns `0`.
    - Input: `""`, Output: `0`
2. **Single numbers**: Returns the number itself.
    - Input: `"5"`, Output: `5`
3. **Multiple numbers separated by commas**: Returns their sum.
    - Input: `"1,2,3"`, Output: `6`
4. **Numbers separated by newlines**: Handles newlines as delimiters.
    - Input: `"1\n2,3"`, Output: `6`
5. **Custom delimiters**: Supports custom single-character delimiters.
    - Input: `"//;\n1;2"`, Output: `3`
6. **Negative numbers**: Throws an exception listing all negative numbers.
    - Input: `"1,-2,3,-4"`, Error: `negative numbers not allowed: -2, -4`

---

## Technologies Used

- **Programming Language**: JavaScript (Node.js)
- **Testing Framework**: Jest
- **Version Control**: Git

---

## How to Run the Project

### Prerequisites

1. Install **Node.js** and **npm** on your machine.
2. Clone the repository to your local machine.

### Steps to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vishal421997vishal/string-calculator.git
   cd string-calculator
   npm install
   npm test
