function jsEngine(code) {
  return code.split(/\s+/);
}
console.log(jsEngine("var a = 5"));

// How JavaScript work?
// Code -> JS-Engine -> Browser/Machine
/*
JS-Engine
{
  Parser => Lexical-Analysis(tokens)
  AST => Abstract-Syntax-Tree
  Call-Stack[] => place to keep track of where we are in the code
  // each entry on the call-stack is called Frame
  // operates on the LIFO principal
  // Stack-Trace => snapshot of call-stack
  // Stack-Overflow => when call-stack size exceeded
  // Recursion is the common way to do stack-overflow
  Memory-Heap[] => place to store and write information
  // arrays, functions, objects and complex data-structures are stored
  // Garbage-Collection => Mark-Sweep 
  // Memory-Leak => when memory-heap size exceeded
  // global variables, event listeners, setInterval(), closure are the common ways to do memory-leak
  Interpreter/Ignition => read the code, run the code(no compilation)
  Bytecode => interpreter produces bytecode (low-level code but not as low-level as machine-code)
  Profiler/Monitor => tells how we can optimize the code
  Compiler/Turbo-Fan => read the code, understands it, convert the code into another language (machine-code), produces optimized code
  Optimized-Code => mixture of bytecode and machine-code
  JIT-Compiler(Just InTime Compiler) => combination of interpreter and compiler
}
// Single-Threaded => only 1 set of instruction is executed at a time (1 call-stack means single-threaded, Synchronous)
// Javascript Runtime => for Asynchronous behaviour [Call-Stack, Memory-Heap, Web-API[DOM, fetch(), setTimeout()], Event-Loop, Job-Queue, Callback-Queue, Worker-Threads]
// Node.js => Javascript Runtime
// Babel => Javascript compiler that takes your modern JS code and returns browser compatible JS.
// ECMAScript => is the standardized specification that defines how the JavaScript programming language should work. It ensures that JavaScript behaves the same way across all browsers and environments.
// WebAssembly => standard binary executable format
*/
