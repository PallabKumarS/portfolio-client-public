/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

// get all projects
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.BASE_API}/projects`, {
      next: {
        tags: ["projects"],
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};

// get project details
export const getProjectDetails = async (projectId: string) => {
  try {
    const res = await fetch(`${process.env.BASE_API}/projects/${projectId}`, {
      next: {
        tags: ["project"],
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};

// send message messages
export const sendMessage = async (data: any) => {
  try {
    const res = await fetch(`${process.env.BASE_API}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};

// get all blogs
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.BASE_API}/blogs`, {
      next: {
        tags: ["blogs"],
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};

// get blog details
export const getBlogDetails = async (blogId: string) => {
  try {
    const res = await fetch(`${process.env.BASE_API}/blogs/${blogId}`, {
      next: {
        tags: ["blog"],
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};

// get all skills
export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.BASE_API}/skills`, {
      next: {
        tags: ["skills"],
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};

// get about me
export const getAboutMe = async () => {
  try {
    const res = await fetch(`${process.env.BASE_API}/about`, {
      next: {
        tags: ["about"],
        revalidate: 60,
      },
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};
