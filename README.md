# JWS-POC using Node.js


### This is a POC of JWS generation using node-jws, then verifying them using methods provided in jws and then decoding it.
##### Signature is created using a HEADER and PAYLOAD which is signed using JSON WEB ALGORITHMS to generate the signature.
  - Header must be an object with **alg** property.
  - Payload should be a buffer or string. [ELSE Use JSON.stringify() method to convert Js object into String.]

##### Note 

  - We will create the signature using the sender's ( In other words, the signiner's) **PRIVATE KEY**.
  - TO verify the authenticity of the signature, the receiver may use the sender's **PUBLIC KEY** to validate it.
