const createBlog = {
    tags: ["Blogs"],
    description: "Create Blog",
    requestBody: {
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              blogTitle: {
                type: "string",
                description: "Blog Title",
                example: "Voyage",
              },
              blogAuthor: {
                type: "string",
                description: "Blog Author",
                example: "Miompolly",
              },
              blogImage: {
                type: "array",
                items: {
                  type: "string",
                  format: "binary",
                },
              },
              blogText: {
                type: "string",
                description: "Blog Text",
                example: "Miompolly went to Kigali",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
            },
          },
        },
      },
    },
  };
  
  const blogRouterDoc = {
    "/api/blog/createBlog": {
      post: createBlog,
    },
  };
  
  export default blogRouterDoc;
  