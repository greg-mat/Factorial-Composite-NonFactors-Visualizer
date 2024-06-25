### Composite Non-Factors Visualizer

The Composite Non-Factors Visualizer is a web-based tool designed to help users understand the relationship between composite non-factors of a factorial and their multiples. The tool allows users to visualize the smallest composite non-factors of a given factorial and see how they relate to the multiples of prime numbers greater than the base number.

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

The tool will then find the smallest k composite non-factors of 20! and visualize them within the table of multiples.

## Usage

1. Adjust the sliders to set the values for x, k, n, and p.
2. Click the "Visualize" button to generate the visualization.
3. Observe the table and the highlighted composite non-factors.

## Technical Details

The project is implemented using HTML, CSS, and JavaScript. The visualization logic is handled by JavaScript functions that calculate primes, multiples, and composite non-factors, and dynamically update the DOM to display the results.

## Future Enhancements

- Add more interactive features such as tooltips and detailed explanations for each step.
- Optimize the algorithm for larger values of x, k, n, and p.
- Provide options to export the visualization as an image or PDF.

## License

This project is licensed under the MIT License.
