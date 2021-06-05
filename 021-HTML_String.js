/*
Day-by-Day-Challenge
Exercice 021 - "HTML String"

Task
------------

Write a function that will convert a single AST object to an HTML String.

Example: convertAstToHtmlString({ 
“nodeType”: “element”, “tagName”: “div”,
“attributes”: [ { “name”: “class”, “value”: “test” }],
“children”: [ “nodeType”: “text”, “value”: “Hello world!”]
}) => "<div class="test">Hello world!</div>"
* 
* 
*/

const element = {
  nodeType: "element",
  tagName: "div",
  attributes: [{ name: "class", value: "test" }],
  children: [
    { nodeType: "text", value: "Hello world!" },
    {
      nodeType: "element",
      value: {
        tagName: "div",
        attributes: [{ name: "class", value: "test" }],
        children: [
          { nodeType: "text", value: "Hello world!" },
          {
            nodeType: "element",
            value: {
              tagName: "div",
              attributes: [{ name: "class", value: "test" }],
              children: [{ nodeType: "text", value: "Hello world!" }],
            },
          },
          {
            nodeType: "element",
            value: {
              tagName: "img",
              attributes: [{ name: "class", value: "test" }],
              children: [{ nodeType: "text", value: "Hello world!" }],
            },
          },
          {
            nodeType: "element",
            value: {
              tagName: "div",
              attributes: [{ name: "class", value: "test" }],
              children: [
                { nodeType: "text", value: "Hello world!" },
                {
                  nodeType: "element",
                  value: {
                    tagName: "div",
                    attributes: [{ name: "class", value: "test" }],
                    children: [{ nodeType: "text", value: "Hello world!" }],
                  },
                },
                {
                  nodeType: "element",
                  value: {
                    tagName: "div",
                    attributes: [{ name: "class", value: "test" }],
                    children: [{ nodeType: "text", value: "Hello world!" }],
                  },
                },
                {
                  nodeType: "element",
                  value: {
                    tagName: "p",
                    attributes: [{ name: "class", value: "text" }],
                    children: [{ nodeType: "text", value: "Hello world!" }],
                  },
                },
              ],
            },
          },
          {
            nodeType: "element",
            value: {
              tagName: "span",
              attributes: [{ name: "class", value: "test" }],
              children: [{ nodeType: "text", value: "Hello world!" }],
            },
          },
        ],
      },
    },
  ],
};

function convertAstToHtmlString(astObject) {
  const { tagName, attributes, children } = astObject;

  let childrenFull = "";
  children.forEach(({ nodeType, value }) => {
    if (nodeType === "text") {
      childrenFull += `${value}`;
    }
    if (nodeType === "element") {
      childrenFull += `\n   ${convertAstToHtmlString(value)}`;
    }
    childrenFull = childrenFull.replace(
      `</${tagName}></${tagName}>`,
      `</${tagName}>\n</${tagName}>`
    );
  });

  let attributesFull = "";
  attributes.forEach(({ name, value }) => {
    attributesFull += ` ${name}="${value}"`;
  });

  return `<${tagName}${attributesFull}>${childrenFull}</${tagName}>`.replace(
    `></${tagName}>`,
    `>\n</${tagName}>`
  );
}

/* Verification */
function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

console.log(convertAstToHtmlString(element));

verify(
  convertAstToHtmlString({
    nodeType: "element",
    tagName: "div",
    attributes: [{ name: "class", value: "test" }],
    children: [{ nodeType: "text", value: "Hello world!" }],
  }),
  '<div class="test">Hello world!</div>'
);
