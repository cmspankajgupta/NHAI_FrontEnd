//debounce use technique

import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms delay

  // Effect to handle debounced value
  React.useEffect(() => {
    if (debouncedSearchQuery) {
      console.log("API call or action for:", debouncedSearchQuery);
      // Add your API call or action here
    }
  }, [debouncedSearchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <p>Debounced value: {debouncedSearchQuery}</p>
    </div>
  );
};

export default SearchComponent;

//use fetch use technique

import React from "react";
import useFetch from "../hooks/useFetch";

const Posts = () => {
  const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Reload Posts</button>
    </div>
  );
};

export default Posts;

<!-- 1. Sanitizing a String: -->
import { sanitizeString } from "../utils/sanitize";

const input = "<script>alert('XSS')</script>";
const sanitized = sanitizeString(input);

console.log(sanitized); 
// Output: &lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;


<!-- 2. Sanitizing an Object: -->
import { sanitizeObject } from "../utils/sanitize";

const userInput = {
  name: "<b>John</b>",
  bio: "<script>alert('XSS')</script>",
};

const sanitizedInput = sanitizeObject(userInput);

console.log(sanitizedInput);
// Output: { name: "&lt;b&gt;John&lt;/b&gt;", bio: "&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;" }

<!-- 3. Stripping HTML Tags: -->
import { stripHtmlTags } from "../utils/sanitize";

const dirtyString = "<h1>Welcome!</h1><p>This is a test.</p>";
const cleanString = stripHtmlTags(dirtyString);

console.log(cleanString);
// Output: Welcome! This is a test.


<!-- 4. Sanitizing an Array: -->
import { sanitizeArray } from "../utils/sanitize";

const inputArray = ["<b>Hello</b>", "<script>alert('XSS')</script>", 123];
const sanitizedArray = sanitizeArray(inputArray);

console.log(sanitizedArray);
// Output: ["&lt;b&gt;Hello&lt;/b&gt;", "&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;", 123]

<!-- 5. General Sanitization: -->

import { sanitize } from "../utils/sanitize";

const mixedInput = {
  text: "<script>alert('XSS')</script>",
  nested: ["<b>Safe</b>", { key: "<img src='x'>Test</img>" }],
};

const sanitizedData = sanitize(mixedInput);

console.log(sanitizedData);
// Output: { text: "&lt;script&gt;alert(&#39;XSS&#39;)&lt;/script&gt;", nested: ["&lt;b&gt;Safe&lt;/b&gt;", { key: "&lt;img src=&#39;x&#39;&gt;Test&lt;/img&gt;" }] }



// how to use memoize

// Component1.js
import React, { useState } from 'react';
import useMemoize from './hooks/useMemoize';

const Component1 = () => {
  const [a, setA] = useState(1);
  const expensiveFn1 = () => a * 2;  // Example of an expensive function

  const memoizedResult1 = useMemoize(expensiveFn1, [a]);

  return (
    <div>
      <h2>Component 1</h2>
      <p>Memoized Result 1: {memoizedResult1}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
    </div>
  );
};

export default Component1;
