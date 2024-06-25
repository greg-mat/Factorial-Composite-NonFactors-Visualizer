### Factorial Composite Non-Factors Visualizer
https://pbanuru.github.io/Factorial-Composite-NonFactors-Visualizer/

The Factorial Composite Non-Factors Visualizer is a web-based tool designed to help users understand the relationship between composite non-factors of a factorial and their multiples. The tool allows users to visualize the smallest composite non-factors of a given factorial and see how they relate to the multiples of prime numbers greater than the base number.

## How It Works

1. **Input Parameters**:
    - **x**: The base number for the factorial (x!).
    - **k**: The number of smallest composite non-factors to find.
    - **n**: The number of prime numbers greater than x to consider.
    - **p**: The number of multiples for each prime number.

2. **Prime Number Generation**:
    - The tool first identifies all prime numbers up to and including x.
    - It then finds the next n prime numbers greater than x.

3. **Multiples Calculation**:
    - For each of the identified prime numbers, the tool calculates the first p multiples.

4. **Composite Non-Factors Identification**:
    - The tool calculates the smallest k composite non-factors of x! that are not factors of x!.

5. **Visualization**:
    - The tool displays a table of the prime numbers and their multiples.
    - It highlights the composite non-factors within the table.
    - If all k composite non-factors are present in the table, a bounding box is drawn around them.

## Example

For `x = 20`, `n = 5`, and `p = 4`:
- Prime numbers greater than 20: 23, 29, 31, 37, 41.
- Multiples:
  - 23: 46, 69, 92, 115
  - 29: 58, 87, 116, 145
  - 31: 62, 93, 124, 155
  - 37: 74, 111, 148, 185
  - 41: 82, 123, 164, 205

The tool will then find the smallest k composite non-factors of 20! and visualize them within the table of multiples, depending on k.

![image](https://github.com/pbanuru/Factorial-Composite-NonFactors-Visualizer/assets/55062649/b01486df-74b9-455c-a184-7f8ca6c62ad0)

## Usage

1. Set up a local web server (see below) or access [link](https://pbanuru.github.io/Factorial-Composite-NonFactors-Visualizer/)
2. Use the sliders on x, k, n, and p to set your desired parameters
3. Click the "Visualize" button or adjust sliders to see results (will automatically visualize).
   Clicking the Visualize button can also fix the bounding box borders after resizing the webpage.
5. Observe the table for highlighted non-factors and patterns

### Setting Up a Local Web Server

This project requires a web server to run properly due to module imports. Here's how to set one up using Python:

1. Open a terminal or command prompt
2. Navigate to the project directory
3. Run one of the following commands based on your Python version:

   Python 3.x:
   ```
   python -m http.server 8000
   ```

   Python 2.x:
   ```
   python -m SimpleHTTPServer 8000
   ```

4. Open your web browser and go to `http://localhost:8000`

You should now see the Composite Non-Factors Visualizer running locally.

## Technical Details

The project is implemented using HTML, CSS, and JavaScript. The visualization logic is handled by JavaScript functions that calculate primes, multiples, and composite non-factors, and dynamically update the DOM to display the results.

## Future Enhancements

- Add more interactive features such as tooltips and detailed explanations for each step on the site.
- Optimize the algorithm for larger values of x, k, n, and p.

## License

This project is licensed under the MIT License.


