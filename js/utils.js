// Exporting utility functions
export {
    getPrimes,
    generateMultiples,
    isComposite,
    getCompositeNonFactors
}

// Memoization for isPrime
const primeCache = new Map();

/**
 * Checks if a number is prime using a more efficient algorithm.
 * Utilizes 6k ± 1 optimization to reduce the number of checks.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(num) {
    if (primeCache.has(num)) return primeCache.get(num);
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5, sqrt = Math.sqrt(num); i <= sqrt; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            primeCache.set(num, false);
            return false;
        }
    }
    primeCache.set(num, true);
    return true;
}

// Memoization for factorial
const factorialCache = new Map();

/**
 * Calculates the factorial of a number using an iterative approach.
 * This avoids potential stack overflow issues with large numbers.
 * @param {number} num - The number to calculate the factorial for.
 * @returns {number} - The factorial of the number.
 */
function factorial(num) {
    if (factorialCache.has(num)) return factorialCache.get(num);
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    factorialCache.set(num, result);
    return result;
}

/**
 * Gets prime numbers up to and including x using the Sieve of Eratosthenes,
 * and then finds n more primes greater than x.
 * @param {number} x - The upper limit for the initial prime numbers.
 * @param {number} n - The number of additional primes to find.
 * @returns {number[]} - An array of prime numbers.
 */
function getPrimes(x, n) {
    let primes = [];
    let sieve = new Array(x + 1).fill(true);
    sieve[0] = sieve[1] = false;

    // Generate all primes up to x using the Sieve of Eratosthenes
    for (let i = 2; i <= x; i++) {
        if (sieve[i]) {
            primes.push(i);
            for (let j = i * i; j <= x; j += i) {
                sieve[j] = false;
            }
        }
    }

    // Find n additional primes greater than x
    let current = x + 1;
    let additionalPrimes = 0;
    while (additionalPrimes < n) {
        if (isPrime(current)) {
            primes.push(current);
            additionalPrimes++;
        }
        current++;
    }
    return primes;
}

/**
 * Generates multiples of given primes up to p times.
 * @param {number[]} primes - An array of prime numbers.
 * @param {number} p - The number of multiples to generate for each prime.
 * @returns {number[]} - An array of multiples.
 */
function generateMultiples(primes, p) {
    let multiples = [];
    for (let prime of primes) {
        for (let i = 2; i <= p + 1; i++) {
            multiples.push(i * prime);
        }
    }
    return multiples.sort((a, b) => a - b);
}

/**
 * Checks if a number is composite.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is composite, false otherwise.
 */
function isComposite(num) {
    if (num < 4) return false; // 0, 1, 2, 3 are not composite
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return true;
    }
    return false;
}

/**
 * Checks if a number is a factor of the factorial of x.
 * @param {number} num - The number to check.
 * @param {number} x - The base number for the factorial.
 * @returns {boolean} - True if the number is a factor of x!, false otherwise.
 */
function isFactorOfFactorial(num, x) {
    return factorial(x) % num === 0;
}

/**
 * Gets the smallest k composite non-factors of x!.
 * @param {number} x - The base number for the factorial.
 * @param {number} k - The number of composite non-factors to find.
 * @returns {number[]} - An array of composite non-factors.
 */
function getCompositeNonFactors(x, k) {
    const compositeNonFactors = [];
    let num = x + 1;
    while (compositeNonFactors.length < k) {
        if (isComposite(num) && !isFactorOfFactorial(num, x)) {
            compositeNonFactors.push(num);
        }
        num++;
    }
    return compositeNonFactors;
}